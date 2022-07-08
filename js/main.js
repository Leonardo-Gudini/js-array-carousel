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

forward.classList.add("show")

forward.addEventListener("click",
    function() {
        console.log(currentImg)
        imgItem[currentImg].classList.remove("show");
        currentImg++;
        imgItem[currentImg].classList.add("show");

        back.classList.remove("hide");

        if(currentImg == (imageList.length - 1)){
            forward.classList.remove("show");
        }
    }
)

back.addEventListener("click",
    function(){
        imgItem[currentImg].classList.remove("show");
        currentImg--;
        imgItem[currentImg].classList.add("show");

       forward.classList.add("show");

       if(currentImg == 0) {
        back.classList.add("hide");
       }
    }
)