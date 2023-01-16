const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "828f11075cmsh673f44971af4ac0p15da10jsn7af9d8953784",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=pink floyd", options)
  .then((response) => response.json())
  .then((data) => {
    album1(data);
  })
  .catch((err) => console.error(err));

fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=daft punk", options)
  .then((response) => response.json())
  .then((data) => {
    album2(data);
  })
  .catch((err) => console.error(err));

fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica", options)
  .then((response) => response.json())
  .then((data) => {
    album3(data);
  })
  .catch((err) => console.error(err));

const album1 = (data) => {
  let albumRow = document.querySelector("#albumRow1");
  let dataArray = data.data;
  for (let i = 0; i < dataArray.length; i++) {
    albumRow.innerHTML += `
    <div class="col">
    <div class="card" style="width: 18rem;">
            <div class="card-img">
            <img src="${dataArray[i].album.cover_medium}" class="card-img-top" alt="...">
            </div>
            <div class="card-body">
                <h5 class="card-title">${dataArray[i].title}</h5>
            </div>
        </div>
        </div>`;
  }
};
const album2 = (data) => {
  let albumRow = document.querySelector("#albumRow2");
  let dataArray = data.data;
  for (let i = 0; i < dataArray.length; i++) {
    albumRow.innerHTML += `
    <div class="col">
    <div class="card" style="width: 18rem;">
            <div class="card-img">
            <img src="${dataArray[i].album.cover_medium}" class="card-img-top" alt="...">
            </div>
            <div class="card-body">
                <h5 class="card-title">${dataArray[i].title}</h5>
            </div>
        </div>
        </div>`;
  }
};
const album3 = (data) => {
  let albumRow = document.querySelector("#albumRow3");
  let dataArray = data.data;
  for (let i = 0; i < dataArray.length; i++) {
    albumRow.innerHTML += `
    <div class="col">
    <div class="card" style="width: 18rem;">
            <div class="card-img">
            <img src="${dataArray[i].album.cover_medium}" class="card-img-top" alt="...">
            </div>
             
            <div class="card-body">
                <h5 class="card-title">${dataArray[i].title}</h5>
            </div>
        </div>
        </div>`;
  }
};

function countUnique() {
  let images = document.getElementsByClassName("card-img");
  let newArray = [];
  for (let i = 0; i < images.length; i++) {
    newArray.push(images[i].innerHTML);
  }

  let count = _.uniq(newArray).length;
  let counter = document.getElementsByClassName("counter")[0];
  let span = document.createElement("span");
  span.innerHTML = count;
  counter.appendChild(span);
}

function displayList() {
  let titles = document.getElementsByClassName("card-title");
  let list = document.getElementById("list");
  for (let i = 0; i < titles.length; i++) {
    list.innerHTML += `<li>${titles[i].innerHTML}</li>`;
  }
}
