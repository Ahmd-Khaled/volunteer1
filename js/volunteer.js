// Main Links Menu
let mainLinksLisHasChild = document.querySelectorAll(".bimage header ul.main-links > li");
let menusLisHasChild = document.querySelectorAll(".bimage header ul.main-links .menus > li");

mainLinksLisHasChild.forEach(function(ele){
    ele.onclick = function (event) {
        event.stopPropagation();
        if (ele.classList.contains("has-children")) {
            console.log(ele.children[1]);
            if (ele.children[1].style.display == "none") {
                ele.children[1].style.display = "block";
            } else {
                ele.children[1].style.display = "none";
            }
        }
    }
})
menusLisHasChild.forEach(function(ele){
    ele.onclick = function (event) {
        event.stopPropagation();
        if (ele.classList.contains("has-children")) {
            console.log(ele.children[1]);
            if (ele.children[1].style.display == "block") {
                ele.children[1].style.display = "none";
            } else {
                ele.children[1].style.display = "block";
            }
        }
    }
})
// --------------------Menu bars-----------------------------------------
let menubar = document.querySelector(".bimage header .menu-bar");
let bimage = document.querySelector(".bimage");

menubar.addEventListener("click", function () {
    this.classList.toggle("transformed");
    mobileMenu.style.display = "block";
    bimage.classList.toggle("toplayer");

});
// -------------------Mobile Menu Links----------------------------------
let dDown1 = document.querySelector(".bimage header .mobile-menu .menu-body .mainlist .has-children .dropdownul1");
let dDown2 = document.querySelector(".bimage header .mobile-menu .menu-body .mainlist .has-children .dropdownul2");
let menu1 = document.querySelector(".bimage header .mobile-menu .menu-body .mainlist .has-children.menu1");
let menu2 = document.querySelector(".bimage header .mobile-menu .menu-body .mainlist .has-children.menu2");
let angleDown1 = document.querySelector(".bimage header .mobile-menu .menu-body .mainlist .has-children.menu1 .angle-down1");
let angleDown2 = document.querySelector(".bimage header .mobile-menu .menu-body .mainlist .has-children.menu2 .angle-down2");
let mobileMenu = document.querySelector(".bimage header .mobile-menu");
let closex = document.querySelector(".bimage header .mobile-menu .menu-head .closex");

menu1.onclick = function (event) {
    event.stopPropagation()
    if (angleDown1.classList.contains("fa-angle-down")) {
        dDown1.style.display = "block";
        angleDown1.classList.remove("fa-angle-down");
        angleDown1.classList.add("fa-angle-up");
    } else {
        dDown1.style.display = "none";
        angleDown1.classList.remove("fa-angle-up");
        angleDown1.classList.add("fa-angle-down");
    }
}
menu2.onclick = function (event) {
    event.stopPropagation()
    if (angleDown2.classList.contains("fa-angle-down")) {
        dDown2.style.display = "block";
        angleDown2.classList.remove("fa-angle-down");
        angleDown2.classList.add("fa-angle-up");
    } else {
        dDown2.style.display = "none";
        angleDown2.classList.remove("fa-angle-up");
        angleDown2.classList.add("fa-angle-down");
    }
}
closex.onclick = function () {
    mobileMenu.style.display = "none";
    menubar.classList.remove("transformed");
    bimage.classList.toggle("toplayer");
}

// ----------------Donation--------------------
let donateValues = document.querySelectorAll(".donate .donate-form .choose span");
let showDonateValue = document.querySelector(".donate .donate-form form .value input#donate-value");

donateValues.forEach(function (ele) {
    ele.onclick = function () {
        showDonateValue.value = ele.dataset.value;
        removeClass ("active", donateValues);
        ele.classList.add("active");
    }
})
// ------------About us section -------------------
let ourInfo = document.querySelectorAll(".about-us .row2 .col1 .head span");
let ourInfoSec = document.querySelectorAll(".about-us .row2 .col1 .box");

ourInfo.forEach(function (ele) {
    ele.onclick = function () {
        removeClass ("active", ourInfo);
        ele.classList.add("active");
        ele.classList.add("transition-5ms");
        // console.log(ele.dataset.head);

        ourInfoSec.forEach(function (box) {
            // removeClass ("active", ourInfoSec);
            if (box.classList.contains(ele.dataset.head)){
                // box.classList.add("active");
                box.classList.add("transition-delay-5ms");
                box.style.display = "block";
            } else {
                box.classList.add("transition-delay-5ms");
                box.style.display = "none";
            }
        })
    }
})
// -----------Causes Section----------------------

// let causesCards = document.querySelectorAll(".causes .row2 .slider .card");
// let cardsLength = causesCards.length;

let sliderContainer = document.querySelector(".causes .row2 .slider .slider-container");
let prvBtn = document.querySelector(".causes .row2 .buttons .prev");
let nextBtn = document.querySelector(".causes .row2 .buttons .next");


let factorX = 100 / 6;

nextBtn.onclick = function () {
    if (factorX <= 50) {
        sliderContainer.style.transform = `translate3d(-${factorX}%, 0px, 0px)`;
        factorX = factorX + (100/6);
        // console.log(sliderContainer.style.transform);
        if (factorX > 50) {
            nextBtn.classList.add("disable");
            factorX = -factorX + (100/6);
        }
        if (factorX > (100/6)) {
            prvBtn.classList.remove("disable");
        }
    }
    console.log(factorX);
}

prvBtn.onclick = function () {
    nextBtn.classList.remove("disable");
    console.log(factorX);
    if (factorX <= 0) {
        factorX = factorX + (100/6);
        sliderContainer.style.transform = `translate3d(${factorX}%, 0px, 0px)`;
    }
    if (factorX > 0) {
        prvBtn.classList.add("disable");
    }
}




// let factorX = 100 / 6;
// let transformX;


// transformX = parseFloat(((sliderContainer.style.transform).replace("translateX(-", '')).replace("%)", ''));

// nextBtn.onclick = function() {
//     console.log(sliderContainer.style.transform);
//     if (factorX > 34) {
//         nextBtn.classList.add("disable");
//     }
//     if (factorX > 0) {
//         prvBtn.classList.remove("disable");
//     }
//     if (factorX <= 50) {
//         sliderContainer.style.transform = `translateX(-${factorX}%)`;
//         factorX = factorX + (100/6) ;

//         transformX = parseFloat(((sliderContainer.style.transform).replace("translateX(-", '')).replace("%)", ''));
//         console.log(transformX);
//     } else {
//         factorX = factorX - (100/6);
//     }
// }


// prvBtn.onclick = function() {
//     console.log(sliderContainer.style.transform);
//     if (transformX <= 50) {
//         nextBtn.classList.remove("disable");
//     }
//     if (transformX <= 16.7) {
//         prvBtn.classList.add("disable");
//     }
//     if (transformX >= 0) {
//         console.log("****************")
//         transformX = transformX - (100/6);
//         console.log(transformX);
//         sliderContainer.style.transform = `translateX(${-transformX}%)`;
//     }

// }


// ----------------------------Counter Section---------------------------
let nums = document.querySelectorAll(".impact .col2 .box .num");
let impactSection = document.querySelector(".impact");
let started = false // Function started ? No

window.onscroll = function () {
        if (window.scrollY >= impactSection.offsetTop) {
                if (!started) {
                        nums.forEach((num) => startCount(num));
                    }
                    started = true;
                }
            }
            
// nums.forEach((num) => startCount(num));

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;

        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 1000/goal);
};
// ----------------Istagram Slider-------------------
let instaImage = document.querySelectorAll(".instagram .row2 .slide-container .slider-imgs .image");
let instaImageLength = instaImage.length;
let sliderImgs = document.querySelector(".instagram .row2 .slide-container .slider-imgs");
let transformFactor = -4;
let n = 0;
let m = 1;

// console.log(instaImage.length);

// instaImage[0].style.opacity = '0';
// instaImage[1].style.transform = `translateX(-337.25px)`;

// for (let i = 0; i < instaImageLength; i++){
//     instaImage[i].style.opacity = '0';
//     instaImage[i].style.transform = `translateX(-337.25px)`
// }


let instaCount = setInterval(() => {
    // sliderImgs.style.opacity = '1';
    sliderImgs.style.transform = `translateX(${n*transformFactor}%)`;
    n++;

    let translateX = parseInt((sliderImgs.style.transform).replace("translateX(", "").replace("%)", ""));
    // console.log(translateX);
    console.log(`n:${n}`);


    if (n == 13) {
        let reverseCounter = setInterval(() => {
            sliderImgs.style.transform = `translateX(${translateX + 4*m}%)`;
            // console.log(sliderImgs.style.transform);
            m++;
            // console.log(`translateX: ${translateX}`);
            console.log(`m: ${m}`);
            if (m == 13){
                clearInterval(reverseCounter);
                n = 0;
            }
        },1000)
        m = 1;
    }



    // if (translateX > -48){
    //     n++;
    // } else {
    //     clearInterval(instaCount);
    //     let reverseCounter = setInterval(() => {
    //         sliderImgs.style.transform = `translateX(${translateX + 4*m}%)`;
    //         console.log(sliderImgs.style.transform);
    //         m++;
    //         console.log(`translateX: ${translateX}`);
    //         console.log(`m: ${m}`);
    //         if (m == 13){
    //             clearInterval(reverseCounter);
    //             n = 0;
    //         }
    //     },1000)
    // }



    // if (n == 14) {
    //     // clearInterval(instaCount);
    //     // sliderImgs.style.opacity = '0.7';
        

    //     // sliderImgs.style.transform = `translateX(${0}px)`;
    //     // n = 0;


    //     // transformFactor = 337.25;
    // }
}, 1000);







// let instaCount = setInterval(() => {
//     // sliderImgs.style.opacity = '1';
//     sliderImgs.style.transform = `translateX(${n*transformFactor}%)`;
//     n++;
//     if (n == 14) {
//         // clearInterval(instaCount);
//         sliderImgs.style.transform = `translateX(${0}px)`;
//         n = 0;
//         // transformFactor = 337.25;
//     }
// }, 1000);

















// -------------Functions--------------------------

function removeClass (className, listItems) {
    listItems.forEach(function (item) {
        item.classList.remove(className);
    });
};
function removeChildrenClass (className, listItems, childnum) {
    listItems.forEach(function (item) {
        item.children[childnum].classList.remove(className);
    });
};
function addChildrenClass (className, listItems, childnum) {
    listItems.forEach(function (item) {
        item.children[childnum].classList.add(className);
    });
};

// ---------------------------------------------------------------