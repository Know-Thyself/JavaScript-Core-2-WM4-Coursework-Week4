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

const next = (arr) => {
  let nextIndex;
  if (arr.indexOf(image.src) === arr.length - 1) {
    nextIndex = 0;
  } else {
    nextIndex = arr.indexOf(image.src) + 1;
  }
  return nextIndex;
};

const previous = (arr) => {
  let previousIndex;
  if (arr.indexOf(image.src) === 0) {
    previousIndex = arr.length - 1;
  } else {
    previousIndex = arr.indexOf(image.src) - 1;
  }
  return previousIndex;
};

const nextBtn = document.querySelector(".next");
nextBtn.addEventListener("click", () => {
  image.src = images[next(images)];
});

const previousBtn = document.querySelector(".previous");
previousBtn.addEventListener("click", () => {
  image.src = images[previous(images)];
});

const autoNext = document.querySelector(".auto-next");
let nextInterval;
autoNext.addEventListener("click", () => {
  image.src = images[next(images)];
  nextInterval = setInterval(() => {
    image.src = images[next(images)];
  }, 3000);
});

const autoPrevious = document.querySelector(".auto-previous");
let previousInterval;
autoPrevious.addEventListener("click", () => {
  image.src = images[previous(images)];
  previousInterval = setInterval(() => {
    image.src = images[previous(images)];
  }, 3000);
});

const stopBtn = document.querySelector(".stop");
stopBtn.addEventListener("click", () => {
  clearInterval(previousInterval);
  clearInterval(nextInterval);
});
