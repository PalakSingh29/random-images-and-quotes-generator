const imageBtn = document.getElementById("image-btn");
const quoteBtn = document.getElementById("quote-btn");
const quoteContainer = document.getElementById("quote");
const imageContainer = document.getElementById("image");
const mainBody = document.getElementById("mainBody");

imageBtn.addEventListener("click", () => {
  imageContainer.classList.add("block");
  imageContainer.classList.remove("hidden");

  quoteContainer.classList.add("hidden");
  quoteContainer.classList.remove("block");

  mainBody.classList.add("bg-purple-200");
  mainBody.classList.remove("bg-blue-200");
});

quoteBtn.addEventListener("click", () => {
  quoteContainer.classList.add("block");

  quoteContainer.classList.remove("hidden");

  imageContainer.classList.add("hidden");
  imageContainer.classList.remove("block");

  mainBody.classList.add("bg-blue-200");
  mainBody.classList.remove("bg-purple-200");
});
