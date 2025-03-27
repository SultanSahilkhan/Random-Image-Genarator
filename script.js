const imgcontainer=document.querySelector(".imgcontainer");

const btnele=document.querySelector(".btn");

btnele.addEventListener("click", ()=>{
    console.log("click me");
    imgnum=8;
    updateImg();

})

function updateImg(){

    for(let i=0;i<imgnum;i++){
        const newImg=document.createElement("img");
        newImg.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*1000)}`
        imgcontainer.appendChild(newImg);
    }
   
}