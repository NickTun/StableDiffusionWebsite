const [red, green, blue] = [0, 0, 0]
const body = document.querySelector('body')

const section__input = document.querySelector(".section__input");
const section__title = document.querySelector(".section__title");
const formgroup__input = document.querySelector(".form-group__input");
const image = document.querySelector('.section__image');
const image__desc = document.querySelector('.section__image__desc');

animations();

window.addEventListener('scroll', () => {
    animations();
})

function makeJSON(str) {
   var obj = new Object;
   obj.text = str;
   return JSON.stringify(obj);
}

function handleForm(event) { event.preventDefault(); } 
function submitImage(){
    section__title.style.display = 'none';
    body.style.overflow = 'hidden';
    formgroup__input.style.width = 0 + '%';
    formgroup__input.style.opacity = 0;
    setTimeout(() => {        formgroup__input.style.display = 'none';}, 300);
    section__input.style.width = 100 + 'px';
    section__input.style.height = 100 + 'px';
    section__input.style.border='20px solid #7fb597';
    setTimeout(() => {    section__input.style.animation = 'load 3s infinite';}, 500);
    
    inpValue = formgroup__input.value;
    fetch('/test', {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: makeJSON(inpValue)
    })
    .then(async function (response) {
        return await response.json();
    }).then(function (text) {
        section__input.style.animation = 'ready 0.4s';
        setTimeout(() => {
            section__input.style.width = 40 + '%';
            section__input.style.height = 70 + '%';
            section__input.style.border='0px solid #7fb59700';
        }, 400);

        image.src = text.image;
        image.style.animation = 'imageShow 0.3s';
        setTimeout(() => {
            image.style.display = 'block';
            image.style.opacity = 1;
            image.style.width = 80 + '%';
            image.style.height = 80 + '%';
            image.style.border = "20px solid #7fb597";
        }, 300);

        // image__desc.style.display = "table";
        // image__desc.innerHTML = '"' + inpValue + '"';
    });
}

function getVerticalScrollPercentage( elm ){
    var p = elm.parentNode
    return (elm.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight ) * 100
}

function animations(){
    let y = getVerticalScrollPercentage(body) * 2.55
    const [r, g, b] = [red + y * 0.88, green + y, blue + y * 0.93].map(Math.round)
    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    section__title.style.opacity = (y / 100) * -1 + 1
    if(y > 254) {
        section__input.style.padding = 1 + "%";
        section__input.style.width = 60 + "%";
        section__input.style.zIndex = 10;
        section__input.style.opacity = 1;
    }
    else {
        section__input.style.padding = 0 + "%";
        section__input.style.width = 0 + "%";
        section__input.style.zIndex = -1;
        section__input.style.opacity = 0;
    }
}
