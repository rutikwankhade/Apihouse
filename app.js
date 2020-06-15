let input=document.querySelector('.categories');

async function getApis(){
    let category=input.value;

     fetch(`https://api.publicapis.org/entries?category=${category}&https=true`)
    
    .then(apis=>{
        data=apis.json();
        return data;})
        .then(data=>{
            console.log(data);
            let count=data.count;

            let entries=data.entries;
            console.log(entries);
            entries.forEach(el => {
            displayApi(el);

        
            });
            
        })
     
    
    
}

document.querySelector('.showBtn').addEventListener('click',getApis );
let apiList=document.querySelector('.apis');

const displayApi =(el)=>{

    let markup=` 
    <div class="apibox card">
       <div class="color"></div>
       <h4>${el.API}</h4>
       <p>Description</p>
       <p class="float-left">auth</p><button class="btn link float-right">View</button>
    </div>
 `;

apiList.insertAdjacentHTML('beforeend',markup)
}