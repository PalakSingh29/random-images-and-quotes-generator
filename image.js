const accessKey = "ae7euL0hfGIe4mGNr_Nk6GlRNT3iDpyP8YG1iYeK25U";
const formEle = document.querySelector("form");
const searchEle = document.getElementById("search-input");
const resultEle = document.querySelector("#result");
const showMoreBtn = document.getElementById("show-more");

let inputData = "";
let page = 1;

const searchImages = async (e) => {
  e.preventDefault();
  if (searchEle.value === "") {
    alert("please provide some input!");
    return;
  }
  inputData = searchEle.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
  // console.log(url);
  const response = await fetch(url);
  const data = await response.json();

  if (page === 1) {
    resultEle.innerHTML = "";
  }
  const results = data.results;

  results.map((result) => {
    // console.log(result.links.html);
    resultEle.innerHTML += `
        <div
            class="image-box mb-14 shadow-lg rounded py-4 overflow-hidden w-full text-center sm:w-3/5 md:w-2/5 xl:w-1/4 2xl:w-1/4">
            <img class="w-full xl:h-56 md:h-56 object-cover rounded hover:scale-105 transition-all duration-100 delay-100 ease-in-out" src="${result.urls.small}" alt="${result.alt_description}">
            <p id="p-tag" class="py-2 text-xl"><span class="text-orange-600 font-bold">Description:</span> ${result.alt_description}</p>
            <a class="p-4 block text-gray-600 transition-all duration-100 delay-100 ease-in-out hover:bg-gray-200"
                href="${result.links.html}" target="_blank">More
                details</a>
                <a href = ${result.links.download} target="_blank" class="bg-blue-400 px-4 text-white cursor-pointer hover:bg-blue-600 rounded py-0.5 uppercase">download</a>
        </div>`;
    console.log(result);
  });
  page++;
  console.log(page);
  if (page > 1) {
    showMoreBtn.classList.remove("invisible");
    showMoreBtn.classList.add("visible");
  }
  // console.log(results);
  // searchEle.value = '';
};

formEle.addEventListener("submit", (e) => {
  page = 1;
  searchImages(e);
});
showMoreBtn.addEventListener("click", (e) => {
  searchImages(e);
});
