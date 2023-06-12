/* CAMBIO TESTO H1 */
function changeH1text(){
    let h1 = document.querySelector('h1')
    h1.innerText = "Nuovo Shop!"
}

/* CAMBIO BG-COLOR */
function changeBgColor(){
    let body = document.getElementsByTagName("body")[0]
    body.classList.add('bg-light')
}

/* CAMBIO ADDRESS */
function changeAdress() {
    let address = document.getElementsByTagName("address")[0]
    address.innerHTML = "Via Milano 7<br> La Spezia - 19123<br> Italia"
}

/* ADD CSS CLASS TO LINK AMAZON */
function addClass() {
    let links = document.getElementsByClassName("link")    
    for (const link of links) {
        link.classList.add("bg-yellow")        
    }
}

/* ADD / REMOVE CSS CLASS TO IMAGE */
function visibilityImages() {
    let allImages = document.querySelectorAll('.img-product')
    for (let i = 0; i < allImages.length; i++) {
      let singleImage = allImages[i]
      singleImage.classList.toggle('d-none')
    }
}

/* COLOR RANDOM  */
function getRandomColor() {
    let characters = '0123456789ABCDEF';
    var color = "#"
    for (var i = 0; i < 6; i++) {
        color += characters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function setColor(){
    let randomColor = getRandomColor()
    let allPrices = document.getElementsByClassName('link')
    for (let i = 0; i < allPrices.length; i++) {
        let singlePrice = allPrices[i];
        singlePrice.style.color = randomColor        
    }
}

