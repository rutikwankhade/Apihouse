let input=document.querySelector('.categories');
let count=document.querySelector('.count');
let apiList=document.querySelector('.apis');
let loaderHTML=document.querySelector('.loader');
document.querySelector('.showBtn').addEventListener('click',getApis );

const renderLoader=()=>{
  let loader=`
      <div class="spinner-border spinner" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      `;
  loaderHTML.insertAdjacentHTML('beforeend',loader);
}

const clearLoader=()=>{
  let spinner=document.querySelector('.spinner');
  if(spinner){
    spinner.parentElement.removeChild(spinner);
  }

}
async function getApis(){
      apiList.innerHTML="";
      count.textContent="";
      let category=input.value;
      renderLoader();
      fetch(`https://api.publicapis.org/entries?category=${category}&https=true`)
    
      .then(apis=>{
             data=apis.json();
             return data;}
            )
       .then(data=>{

            console.log(data);
            count.textContent=`${data.count} Apis found`;

            let entries=data.entries;
            console.log(entries);
            clearLoader();
            entries.forEach(el => {
              if(el.Auth=="")
                el.Auth='No Auth';
                
              displayApi(el);
            });
            
            })

        .catch(error =>alert(error))    
          }
          
          
    const displayApi =(el)=>{

        let markup=` 
        <div class="apibox card">
            <h4 class="mt-4">${el.API}</h4>
            <p class="blue">${el.Description}</p>
            <p class="float-left">Auth Type : ${el.Auth}</p>
            <a href=${el.Link} class="btn link float-right" >View</a>
        </div>
        `;
        
        apiList.insertAdjacentHTML('beforeend',markup)
}





// push added loaderd animations
// add readme
// update portfolio with this project