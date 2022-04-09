let input = document.querySelector(".categories");
let count = document.querySelector(".count");
let apiList = document.querySelector(".apis");
let loaderHTML = document.querySelector(".loader");
let scrollToTopBtn = document.querySelector("#top");
let footer = document.querySelector("footer");
document.querySelector(".show-btn").addEventListener("click", getApis);

const renderLoader = () => {
  let loader = `<div class="spinner-border spinner" role="status"></div>`;
  if (!document.getElementsByClassName("spinner").length > 0){
    loaderHTML.insertAdjacentHTML("beforeend", loader);
  }
};

const clearLoader = () => {
  let spinner = document.querySelector(".spinner");
  if (spinner) {
    spinner.parentElement.removeChild(spinner);
  }
};

async function getApis() {
  apiList.innerHTML = "";
  count.textContent = "";
  let category = input.value;

  renderLoader();
  fetch(`https://api.publicapis.org/entries?category=${category}&https=true`)
    .then((apis) => {
      data = apis.json();
      return data;
    })
    .then((data) => {
      // console.log(data);
      count.textContent = `${data.count} Apis found`;

      let entries = data.entries;
      // console.log(entries);
      clearLoader();

      entries.forEach((el) => {
        if (el.Auth == "") el.Auth = "No Auth";

        displayApi(el);
      });
      window.scrollBy(0, 300);
    })

    .catch((error) => {
      if (error) {
        alert("Sorry, Something went wrong !");
      }
    });
}

const displayApi = (el) => {
  let markup = ` 
        <div class=" col-xxl-4 col-md-6 col-12 card p-3" data-aos="fade-up">
        <div class="card-child text-center local-shadow-2 py-4">
          <h4 class="text-dark fw-bold m-0 py-3">${el.API}</h4>
          <p class="fw-light px-4 m-0">${el.Description}</p>
          <p class="auth fw-bold text-muted m-0 py-1">Auth Type : ${el.Auth}</p>
          <a href=${el.Link} class="apis-link btn link rounded-pill bg-p mt-4 my-3 local-shadow" target="_blank" >View</a>
        </div>
        </div>
        `;

  apiList.insertAdjacentHTML("beforeend", markup);
};

//Scroll to top button

let displayScrollBtn = () => {
  let y = window.scrollY;
  if (y > 200) {
    scrollToTopBtn.classList.replace("hide", "show");
    footer.style.background = "rgba(41, 41, 41, 1)";
    footer.style.color = "white";
  } else {
    scrollToTopBtn.classList.replace("show", "hide");
    footer.style.background = "white";
    footer.style.color = "rgba(41, 41, 41, 1)";
  }
};
window.addEventListener("scroll", displayScrollBtn);

scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
