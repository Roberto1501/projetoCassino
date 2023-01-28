function animateDivs() {
    console.log('clicou')
    let divs = document.querySelectorAll('.Divs');
    let randomIndex = Math.floor(Math.random() * divs.length);
    let randomDiv = divs[randomIndex];
    randomDiv.classList.add('animation1');
    setTimeout(function(){
        randomDiv.classList.remove('animation1');
    }, 6000);
}
