let imageList = [
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg"
];

const imgContainer = document.querySelector(".image-container");

for(i = 0; i < imageList.length; i++){
    imgContainer.innerHTML +=  '<div class="img-item"><img src="' + imageList[i] + '" alt=""></div>'
};

const imgItem = document.getElementsByClassName("img-item");

let currentImg = 0;

imgItem[currentImg].classList.add("show");

const forward = document.querySelector(".forward");
const back = document.querySelector(".back")

forward.addEventListener("click",
    function(){
        imgItem[currentImg].classList.remove("show");
        currentImg++;
        imgItem[currentImg].classList.add("show");
    }
)

back.addEventListener("click",
    function(){
        imgItem[currentImg].classList.remove("show");
        currentImg--;
        imgItem[currentImg].classList.add("show");
    }
)




