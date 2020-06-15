let input=document.querySelector('.categories');

async function getApis(){
    apiList.innerHTML="";
    let category=input.value;

     fetch(`https://api.publicapis.org/entries?category=${category}&https=true`)
    
    .then(apis=>{
        data=apis.json();
        return data;})
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
     
    
    
}
let count=document.querySelector('.count');

document.querySelector('.showBtn').addEventListener('click',getApis );
let apiList=document.querySelector('.apis');

const displayApi =(el)=>{

    let markup=` 
    <div class="apibox card">
       <h4 class="mt-4">${el.API}</h4>
       <p class="blue">${el.Description}</p>
       <p class="float-left">Auth Type : ${el.Auth}</p><button class="btn link float-right">View</button>
    </div>
 `;
apiList.insertAdjacentHTML('beforeend',markup)
}