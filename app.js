let input=document.querySelector('.categories');

async function getApis(){
    let category=input.value;

     fetch(`https://api.publicapis.org/entries?category=${category}&https=true`)
    
    .then(apis=>{
        data=apis.json();
        return data;})
        .then(data=>{console.log(data)})
     
    
    
}

document.querySelector('.btn').addEventListener('click',getApis );
