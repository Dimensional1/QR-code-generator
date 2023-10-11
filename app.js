const text = document.getElementById("text");
const btn = document.getElementById("button");
const img = document.querySelector("#img");


btn.addEventListener('click',function(){
    let url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
    if(text.value.length > 0){
        const qr =`${url}+${text.value}`
        img.src= qr
        img.classList.add("showImg")
    }else{
        text.classList.add("noInput")
    setTimeout(()=>{
     text.classList.remove("noInput")
    },2000)
    }
})
