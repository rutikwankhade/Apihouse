let input=document.querySelector('.categories');
let count=document.querySelector('.count');
let apiList=document.querySelector('.apis');

document.querySelector('.showBtn').addEventListener('click',getApis );

async function getApis(){
      apiList.innerHTML="";
      let category=input.value;

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