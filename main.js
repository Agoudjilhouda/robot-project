const checkbox=document.getElementById("checkbox");
const submitbtn=document.querySelector("button[type=submit]");
//disable check box unless the condition is coreect 
checkbox.disabled=true;
submitbtn.disabled=true;

const elements = document.querySelectorAll(".element");


const selectcolor=document.getElementById("selectcolor");
//assign  color to elements 
elements.forEach(function(element){

   const colorr= getrandom();
   element.style.backgroundColor=colorr;
   element.innerHTML=colorr;
   selectcolor.innerHTML=colorr;
});
//generate random color func
function getrandom(){
    const letter="0123456789ABCDEF";
    let color="#";
    for(let i=0;i<6;i++){
        color+=letter[Math.floor(Math.random()*16)];
    }
    return color;
}

//check if the right color
elements.forEach(function(element){
 element.addEventListener("click",function(){
    if(element.innerHTML===selectcolor.innerHTML){
       checkbox.checked=true;
       alert("you are human!");
       submitbtn.disabled=false;
    }
    else{
        checkbox.checked=false;
       alert("you are  not a human! try again");
       //refrsh the page
       location.reload(true);
    }
 })
})

