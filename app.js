let input = document.querySelector('.categories');
let count = document.querySelector('.count');
let apiList = document.querySelector('.apis');
let loaderHTML = document.querySelector('.loader');
let scrollToTopBtn = document.querySelector('#top');
document.querySelector('.show-btn').addEventListener('click', getApis);

const renderLoader = () => {
  let loader = `<div class="spinner-border spinner" role="status"></div>`;
  loaderHTML.insertAdjacentHTML('beforeend', loader);
}

const clearLoader = () => {
  let spinner = document.querySelector('.spinner');
  if (spinner) {
    spinner.parentElement.removeChild(spinner);
  }

}
async function getApis() {
  apiList.innerHTML = "";
  count.textContent = "";
  let category = input.value;

  renderLoader();
  fetch(`https://api.publicapis.org/entries?category=${category}&https=true`)

    .then(apis => {
      data = apis.json();
      return data;
    }
    )
    .then(data => {

      // console.log(data);
      count.textContent = `${data.count} Apis found`;

      let entries = data.entries;
      // console.log(entries);
      clearLoader();


      entries.forEach(el => {
        if (el.Auth == "")
          el.Auth = 'No Auth';

        displayApi(el);
      });
      window.scrollBy(0,300);


    })

    .catch(error => {
      if (error) {
        alert("Sorry, Something went wrong !");
      }
    })
}


const displayApi = (el) => {

  let markup = ` 
        <div class="apibox card " data-aos="fade-up">
            <h4 class="mt-4">${el.API}</h4>
            <p class="blue">${el.Description}</p>
            <p class="float-left">Auth Type : ${el.Auth}</p>
            <a href=${el.Link} class="btn link float-right" target="_blank" >View</a>
        </div>
        `;

  apiList.insertAdjacentHTML('beforeend', markup)
}

//Scroll to top button

let displayScrollBtn = () => {
  let y = window.scrollY;
  if (y > 200) { scrollToTopBtn.classList.replace("hide", "show") }
  else { scrollToTopBtn.classList.replace("show", "hide"); }
}
window.addEventListener('scroll', displayScrollBtn);

scrollToTopBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
});

