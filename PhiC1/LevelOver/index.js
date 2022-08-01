import { gameLevels } from '../constants.js';

window.addEventListener('DOMContentLoaded', () => {
	document.querySelector('div#avatarBar').addEventListener('click', (e) => {
		var _element = e.target;
		if (_element.classList.toString().match('avatarBar') == null) {
			_element = e.target.parentElement;
		}
		if (_element.classList.toString().match('expand')) {
			_element.classList.remove('expand');
		} else {
			_element.classList.add('expand');
		}
	});
	if (window.localStorage.getItem('playerName') != null) {
		console.log(
			'Setting player name: ',
			window.localStorage.getItem('playerName')
		);
		document
			.querySelector('div#avatarBar')
			.setAttribute(
				'data-name',
				window.localStorage.getItem('playerName')
			);
	}
	// resize('div.mainContent');
	// resize('body > div.extraInfo', 'skew(-15deg)');
	const urlParams = new URL(location.href).search;
	const parsedURLParams = new URLSearchParams(urlParams);
	//	获取各种数据
	const play = parsedURLParams.get('play');
	const playLevel = gameLevels[parsedURLParams.get('l')];
	const playLevelString = parsedURLParams.get('l');
	const score = parseInt(parsedURLParams.get('score'));
	// const score=
	const maxCombo = parsedURLParams.get('mc');
	const perFect = parsedURLParams.get('p');
	const good = parsedURLParams.get('g');
	const bad = parsedURLParams.get('b');
	const miss = parsedURLParams.get('m');
	const early = parsedURLParams.get('e');
	const mode = parsedURLParams.get('mode');
	switch (mode) {
	case 'normal':
		// document.querySelector('#scrollFrame').classList.add('normal');
		break;

	case 'auto':
		document.querySelector('#scrollFrame').classList.add('auto');
		break;

	case 'hyper':
		document.querySelector('#scrollFrame').classList.add('hyper');
		break;

	default:
		break;
	}
	const accuracy =
		Math.round(
			((parseInt(perFect) + parseInt(good) * 0.65) /
				(parseInt(perFect) +
					parseInt(good) +
					parseInt(bad) +
					parseInt(miss) +
					0)) *
				10000
		) / 100;
	const late = good - early;
	var grade;
	document.getElementById('retryBtn').addEventListener('click', () => {
		location.href =
			'../whilePlaying/index.html?play=' +
			play +
			'&l=' +
			playLevelString +
			'&c=' +
			parsedURLParams.get('c');
	});
	document.getElementById('backInResultBtn').addEventListener('click', () => {
		location.href =
			'../songSelect/index.html?c=' + parsedURLParams.get('c');
	});
	//	判断等级（范围来自萌娘百科）
	if (score == 0) {
		console.log('No grade');
		grade = '';
	}
	if (score < 699999 && score != 0) {
		console.log('Grade: False');
		grade = 'F15F';
	}
	if (700000 <= score && score <= 819999) {
		console.log('Grade:C');
		grade = 'C15C';
	}
	if (820000 <= score && score <= 879999) {
		console.log('Grade:B');
		grade = 'B15B';
	}
	if (880000 <= score && score <= 919999) {
		console.log('Grade:A');
		grade = 'A15A';
	}
	if (920000 <= score && score <= 959999) {
		console.log('Grade:S');
		grade = 'S15S';
	}
	if (960000 <= score && score <= 999999) {
		console.log('Grade:V');
		grade = 'V15V';
	}
	if (bad == 0 && miss == 0) {
		console.log('Grade: V wih Full Combo');
		grade = 'V15FC';
	}
	if (1000000 <= score) {
		console.log('Grade:Phi');
		grade = 'phi15phi';
	}
	// switch (score) {
	// 	default:
	// 		console.log('Error, Fallback to False');
	// 		grade='F15F';
	// 		break;
	// }
	// gradeImage
	//	获取歌曲信息
	var songInfoXHR = new XMLHttpRequest();
	songInfoXHR.open(
		'GET',
		'https://charts.phi.han-han.xyz/' + play + '/meta.json',
		true
	);
	songInfoXHR.addEventListener('load', () => {
		window.window.playResult = {
			score: score,
			grade: grade,
			play: play,
			playLevel: playLevel,
			songInfo: JSON.parse(songInfoXHR.responseText),
			maxCombo: maxCombo,
			accuracy: accuracy,
			perFect: perFect,
			good: good,
			bad: bad,
			miss: miss,
			early: early,
			late: late,
			playLevelString: playLevelString,
			mode: mode,
		};
		console.log(window.playResult);
		//	操作DOM修改可见部分数据
		var xhr = new XMLHttpRequest();
		xhr.open('GET', './LevelOver.mp3', true);
		xhr.responseType = 'arraybuffer';
		xhr.onload = function () {
			const actx = new (window.AudioContext ||
				window.webkitAudioContext ||
				window.mozAudioContext ||
				window.msAudioContext)();
			actx.decodeAudioData(this.response, function (buffer) {
				var source = actx.createBufferSource();
				source.buffer = buffer;
				source.loop = true;
				source.connect(actx.destination);
				source.start(0);
			});
		};
		xhr.send();
		document.body.setAttribute(
			'style',
			`--background:url(https://charts.phi.han-han.xyz/${window.playResult.play}/${window.playResult.songInfo.illustration});`
		);
		document
			.querySelector('#songImg')
			.setAttribute(
				'src',
				encodeURI(
					'https://charts.phi.han-han.xyz/' +
						play +
						'/' +
						window.playResult.songInfo.illustration
				)
			);
		document.querySelector('#score').innerText = score
			.toString()
			.padStart(7, '0');
		document.querySelector('#gradeImage').src =
			'../assets/images/' + grade + '.svg';
		document.querySelector('#maxCombo').innerText = maxCombo;
		document.querySelector('#accuracy').innerText = accuracy + '%';
		document.querySelector('#perfect').innerText = perFect;
		document.querySelector('#good').innerText = good;
		document.querySelector('#bad').innerText = bad;
		document.querySelector('#miss').innerText = miss;
		document.querySelector('#early').innerText = early;
		document.querySelector('#late').innerText = late;
		document.querySelector('div.songName#songName').innerText =
			window.playResult.songInfo.name;
		document.querySelector('div.levelString#levelString').innerText =
			window.playResult.playLevelString.toUpperCase() +
			' Lv.' +
			Math.floor(
				window.playResult.songInfo[
					window.playResult.playLevelString.toLowerCase() + 'Ranking'
				] || 0
			);
		// 加载歌曲元信息（计算RKS等）
		var deltaRKS, deltaData;
		if (window.playResult.accuracy >= 70) {
			deltaRKS = (
				Math.pow((window.playResult.accuracy - 55) / 45, 2) *
				(window.playResult.songInfo[
					window.playResult.playLevelString.toLowerCase() + 'Ranking'
				] || 0)
			).toFixed(2);
		} else {
			deltaRKS = 0;
		}
		if (window.playResult.score < 880000) {
			deltaData = 0;
		}
		document.querySelector('#rks').innerText = deltaRKS;
		console.log('ΔRKS:', deltaRKS);
		console.log('ΔData(KB):', deltaData);
	});
	songInfoXHR.addEventListener('error', () => {
		alert('歌曲信息获取失败！');
	});
	songInfoXHR.send();
});
// window.onresize = function () {
// 	//	自动缩放
// 	resize('div.mainContent');
// 	resize('body > div.extraInfo', 'skew(-15deg)');
// };
// function resize() {
// 	// document.body.querySelector(selector).style.transform="scale("+window.outerHeight/600+transformDefaultString+")";
// 	// console.log('Resize:',document.body.querySelector(selector).style.transform);
// }
