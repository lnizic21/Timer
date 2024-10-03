// Description: This file contains the JavaScript code for the time counter.

let timer = document.getElementById("timer");

let startTime;
let intervalId;
let figure;
let elapsedTimeElement = document.createElement("p");

// Set styles directly using the style property
elapsedTimeElement.style.color = "blue";
elapsedTimeElement.style.fontSize = "20px";
elapsedTimeElement.style.marginTop = "10px";

function displayElapsedTime() {
  let now = new Date();
  let elapsedTime = (now - startTime) / 1000; // elapsed time in seconds

  // Convert elapsed time to hours, minutes, and seconds
  let hours = Math.floor(elapsedTime / 3600);
  let minutes = Math.floor((elapsedTime % 3600) / 60);
  let seconds = Math.floor(elapsedTime % 60);

  // Format the result as a string
  let formattedTime = `${hours}h ${minutes}m ${seconds}s`;
  timer.innerHTML = formattedTime;
}

function startClock() {
  startTime = new Date();
  intervalId = setInterval(displayElapsedTime, 1000);
  if (document.contains(figure)) {
    figure.remove();
  }
}

function stopClock() {
  clearInterval(intervalId);
  let endTime = new Date();
  let elapsedTime = (endTime - startTime) / 1000; // elapsed time in seconds

  // Convert elapsed time to hours, minutes, and seconds
  let hours = Math.floor(elapsedTime / 3600);
  let minutes = Math.floor((elapsedTime % 3600) / 60);
  let seconds = Math.floor(elapsedTime % 60);

  // Format the result as a string
  let formattedTime = `${hours}h ${minutes}m ${seconds}s`;
  elapsedTimeElement.innerText = `Elapsed time: ${formattedTime}`;

  // Create a figure element to hold the video and caption
  let figure = document.createElement("figure");

  var video = document.createElement("video");
  // Create and configure the video element
  let video = document.createElement("video");
  video.width = 600;
  video.height = 400;
  video.controls = true;
  video.innerHTML =
    '<source src="WhatsApp Video 2024-10-02 at 19.26.24.mp4" type="video/mp4">Your browser does not support the video tag.';

  // Create and configure the figcaption element
  let figcaption = document.createElement("figcaption");
  figcaption.innerText = "To Amigooooo!!!";

  // Append the video and caption to the figure
  figure.appendChild(video);
  figure.appendChild(figcaption);

  // Append the figure to the DOM
  document.body.appendChild(figure);
  video.play();
}

// Add event listeners to start and stop buttons
document.getElementById("start").addEventListener("click", startClock);
document.getElementById("stop").addEventListener("click", stopClock);
