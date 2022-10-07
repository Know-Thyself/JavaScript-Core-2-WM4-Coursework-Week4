const images = [
  "https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
  "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1543722530-d2c3201371e7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
  "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1553970016-97408710e9c9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80",
  "https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1429892494097-cccc61109f58?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
];

const wrapper = document.querySelector(".image-wrapper");
const image = document.createElement("img");
image.src = images[0];
wrapper.appendChild(image);
let currentIndex;

const next = (arr, index) => {
  let nextIndex;
  if (index === arr.length - 1) {
    nextIndex = 0;
  } else {
    nextIndex = index + 1;
  }
  return nextIndex;
};

const previous = (arr, index) => {
  let previousIndex;
  if (index === 0) {
    previousIndex = arr.length - 1;
  } else {
    previousIndex = index - 1;
  }
  return previousIndex;
};

const nextBtn = document.querySelector(".next");
nextBtn.addEventListener("click", () => {
  currentIndex = images.indexOf(image.src);
  image.src = images[next(images, currentIndex)];
});

const previousBtn = document.querySelector(".previous");
previousBtn.addEventListener("click", () => {
  currentIndex = images.indexOf(image.src);
  image.src = images[previous(images, currentIndex)];
});

const autoForwardBtn = document.querySelector(".auto-forward");
const forwardDelay = document.querySelector(".auto-forward-delay");
let interval, fwSelectEvent;
let autoForwardEvent = () => {
  forwardDelay.classList.remove("d-none");
  forwardDelay.addEventListener("click", fwSelectEvent);
};
autoForwardBtn.addEventListener("click", autoForwardEvent);

fwSelectEvent = () => {
  autoForwardBtn.removeEventListener("click", autoForwardEvent);
  if (forwardDelay.value !== "delay") {
    interval = setInterval(() => {
      currentIndex = images.indexOf(image.src);
      image.src = images[next(images, currentIndex)];
    }, forwardDelay.value * 1000);
  }
};

const autoBackBtn = document.querySelector(".auto-back");
const backDelay = document.querySelector(".auto-back-delay");
let backSelectEvent;
let autoBackEvent = () => {
  backDelay.classList.remove("d-none");
  backDelay.addEventListener("click", backSelectEvent);
};
autoBackBtn.addEventListener("click", autoBackEvent);

backSelectEvent = () => {
  autoBackBtn.removeEventListener("click", autoBackEvent);
  if (backDelay.value !== "delay") {
    interval = setInterval(() => {
      currentIndex = images.indexOf(image.src);
      image.src = images[previous(images, currentIndex)];
    }, backDelay.value * 1000);
  }
};

document.querySelector(".stop").addEventListener("click", () => {
  clearInterval(interval);
  forwardDelay.removeEventListener("click", fwSelectEvent);
  forwardDelay.value = "delay";
  forwardDelay.className = "d-none";
  autoForwardBtn.addEventListener("click", autoForwardEvent);
  backDelay.removeEventListener("click", backSelectEvent);
  backDelay.value = "delay";
  backDelay.className = "d-none";
  autoBackBtn.addEventListener("click", autoBackEvent);
});
