// Register service worker to control making site work offline

if ("serviceWorker" in navigator) {
	navigator.serviceWorker.register("sw.js").then(function () {
		console.log("Service Worker Registered");
	});
}

// Code to handle install prompt on desktop

let deferredPrompt;
const addBtn = document.querySelector(".add-button");
addBtn.style.display = "none";
document.querySelector("#add-cache-button").addEventListener("click", () => {
	caches.open("video-store").then(function (cache) {
		return cache.addAll([
			"http://150.158.43.87/phigros-html5-main/tapToStart/TouchToStart0.mp3",
			"http://150.158.43.87/phigros-html5-main/chapterSelect/ChapterSelect0.mp3",
			"http://150.158.43.87/phigros-html5-main/assets/images/chapterImages/Single.png",
			"http://150.158.43.87/phigros-html5-main/assets/audio/LevelOver0.wav",
			"http://150.158.43.87/phigros-html5-main/assets/audio/LevelOver1.wav",
			"http://150.158.43.87/phigros-html5-main/assets/audio/LevelOver2.wav",
			"http://150.158.43.87/phigros-html5-main/assets/audio/LevelOver3.wav",
			"http://150.158.43.87/phigros-html5-main/assets/audio/Tap1.wav",
			"http://150.158.43.87/phigros-html5-main/assets/audio/Tap2.wav",
			"http://150.158.43.87/phigros-html5-main/assets/audio/Tap3.wav",
			"http://150.158.43.87/phigros-html5-main/assets/audio/Tap4.wav",
			"http://150.158.43.87/phigros-html5-main/assets/audio/Tap5.wav",
			"http://150.158.43.87/phigros-html5-main/assets/audio/Tap6.wav",
			"http://150.158.43.87/phigros-html5-main/assets/audio/Tap7.wav",
			"http://150.158.43.87/phigros-html5-main/charts/ouroVoros/meta.json",
			"http://150.158.43.87/phigros-html5-main/charts/ouroVoros/ouroVoros.jpg",
			"http://150.158.43.87/phigros-html5-main/charts/ouroVoros/ouroVoros.ogg",
			"http://150.158.43.87/phigros-html5-main/charts/ouroVoros/ouroVoros.pec",
			"http://150.158.43.87/phigros-html5-main/charts/sample/meta.json",
			"http://150.158.43.87/phigros-html5-main/charts/sample/0.png",
			"http://150.158.43.87/phigros-html5-main/charts/sample/1.png",
			"http://150.158.43.87/phigros-html5-main/charts/sample/2.png",
			"http://150.158.43.87/phigros-html5-main/charts/sample/3.png",
			"http://150.158.43.87/phigros-html5-main/charts/sample/line.json",
			"http://150.158.43.87/phigros-html5-main/charts/sample/SpasmodicSP.json",
			"http://150.158.43.87/phigros-html5-main/charts/sample/SpasmodicSP.ogg",
			"http://150.158.43.87/phigros-html5-main/charts/sample/SpasmodicSP.png",
			"http://150.158.43.87/phigros-html5-main/charts/samplePec/meta.json",
			"http://150.158.43.87/phigros-html5-main/charts/samplePec/temp.jpg",
			"http://150.158.43.87/phigros-html5-main/charts/samplePec/temp.mp3",
			"http://150.158.43.87/phigros-html5-main/charts/samplePec/Tempestissimo.pec",
			// "http://150.158.43.87/phigros-html5-main/charts/terrasphere/meta.json",
			// "http://150.158.43.87/phigros-html5-main/charts/terrasphere/Terrasphere.jpg",
			// "http://150.158.43.87/phigros-html5-main/charts/terrasphere/Terrasphere.mp3",
			// "http://150.158.43.87/phigros-html5-main/charts/terrasphere/Terrasphere.pec",
		]);
	});
});
window.addEventListener("beforeinstallprompt", (e) => {
	// Prevent Chrome 67 and earlier from automatically showing the prompt
	e.preventDefault();
	// Stash the event so it can be triggered later.
	deferredPrompt = e;
	// Update UI to notify the user they can add to home screen
	addBtn.style.display = "block";

	addBtn.addEventListener("click", (e) => {
		// hide our user interface that shows our A2HS button
		addBtn.style.display = "none";
		// Show the prompt
		deferredPrompt.prompt();
		// Wait for the user to respond to the prompt
		deferredPrompt.userChoice.then((choiceResult) => {
			if (choiceResult.outcome === "accepted") {
				console.log("User accepted the A2HS prompt");
			} else {
				console.log("User dismissed the A2HS prompt");
			}
			deferredPrompt = null;
		});
	});
});
