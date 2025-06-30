var mainImg = document.querySelector(".mainImg");
let mainPrice = document.getElementById("mainPrice");
let mainProName = document.getElementById("mainProName")


let product1 = document.getElementById("pro1");
let product2 = document.getElementById("pro2");
let product3 = document.getElementById("pro3");
let product4 = document.getElementById("pro4");


let proImg1 = document.getElementById("pro-img1")
let proImg2 = document.getElementById("pro-img2")
let proImg3 = document.getElementById("pro-img3")
let proImg4 = document.getElementById("pro-img4")

let proPrice1 = document.getElementById("proPrice1")
let proPrice2 = document.getElementById("proPrice2")
let proPrice3 = document.getElementById("proPrice3")
let proPrice4 = document.getElementById("proPrice4")

let proName1 = document.getElementById("proName1")
let proName2 = document.getElementById("proName2")
let proName3 = document.getElementById("proName3")
let proName4 = document.getElementById("proName4")


product1.addEventListener("click",()=>{
    window.location.href = "#"
   mainImg.src = proImg1.src
   mainPrice.innerHTML = proPrice1.innerHTML
   mainProName.innerHTML = proName1.innerHTML
})

product2.addEventListener("click",()=>{
    window.location.href = "#"
   mainImg.src = proImg2.src
   mainPrice.innerHTML = proPrice2.innerHTML
   mainProName.innerHTML = proName2.innerHTML
})

product3.addEventListener("click",()=>{
    window.location.href = "#"
   mainImg.src = proImg3.src
   mainPrice.innerHTML = proPrice3.innerHTML
   mainProName.innerHTML = proName3.innerHTML
})

product4.addEventListener("click",()=>{
    window.location.href = "#"
   mainImg.src = proImg4.src
   mainPrice.innerHTML = proPrice4.innerHTML
   mainProName.innerHTML = proName4.innerHTML
})





