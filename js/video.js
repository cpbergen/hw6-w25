var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video=document.querySelector("#player1")
	video.autoplay="false";
	video.loop="false";

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	if (document.querySelector("#volume") == null) {
	video.volume = 1;
	document.querySelector("#volume").textContent = video.volume * 100 +"%" }
	else {
		document.querySelector("#volume").textContent = video.volume * 100 + "%" 
	}

});
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	let currentRate = video.playbackRate
	video.playbackRate = currentRate * 0.9;
	console.log("Slow Down Video")
	let newRate = video.playbackRate
	console.log("Speed is " + newRate)
} )

document.querySelector("#faster").addEventListener("click", function() {
	let currentRate = video.playbackRate
	video.playbackRate = currentRate * 1.1;
	let newRate = video.playbackRate
	console.log("Speed Up Video")
	console.log("Speed is " + newRate);
} )

document.querySelector("#skip").addEventListener("click", function() {
	let videoTime = video.currentTime; 
	let newTime = videoTime + 10;
	if (newTime >= video.duration) {
		video.currentTime = 0;
		console.log("Reset time!")
		console.log("Video current time is " + video.currentTime)
	} else {
	video.currentTime = newTime; 
	console.log("Video current time is " + newTime) }

} );

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute"
	console.log("Video Muted")
} else {
	video.muted = false;
	document.querySelector("#mute").innerHTML = "Mute"
	console.log("Video Unmuted")
}

});

document.querySelector("#slider").addEventListener("input", function() {
	
	video.volume = this.value/100;
	document.querySelector("#volume").textContent = video.volume * 100 +"%"
	

});

document.querySelector("#vintage").addEventListener("click", function() {
	document.querySelector("#player1").classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	document.querySelector("#player1").classList.remove("oldSchool")
});

