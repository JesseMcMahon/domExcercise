const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener("DOMContentLoaded", () => {
  loadImages();
  loadBreedOptions();
});

const loadImages = () => {
  fetch(imgUrl)
    .then((res) => res.json())
    .then((results) => {
      results.message.forEach((image) => addImage(image));
    });
};

const addImage = (dogPicUrl) => {
  let container = document.querySelector("#dog-image-container");
  let newImageEl = document.createElement("img");
  newImageEl.src = dogPicUrl;
  container.appendChild(newImageEl);
};

const loadBreedOptions = () => {
  fetch(breedUrl)
    .then((res) => res.json())
    .then((results) => {
      breeds = Object.keys(results.message);
      updateBreedsList(breeds);
    });
};

const addBreed = (breed) => {
  let ul = document.querySelector("#dog-breeds");
  let li = document.createElement("li");
  li.innerText = breed;
  ul.appendChild(li);
  li.addEventListener("click", changeColor);
};

const updateBreedsList = (breeds) => {
  let ul = document.querySelector("#dog-breeds");
  breeds.forEach((breed) => addBreed(breed));
};

const changeColor = (event) => {
  event.target.style.color = "blue";
};

const addBreedSelectListener = () => {
  let dropdown = document.querySelector("#breed-dropdown");
  dropdown.addEventListener("change", (event) => {
    getBreedsStartingWith(event.target.value);
  });
};

const getBreedsStartingWith = (letter) => {
  updateBreedsList(breeds.filter((breed) => breed.startsWith(letter)));
};
