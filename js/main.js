let listLi = document.querySelectorAll('.li-main2');
let mainImg = document.querySelector('.category-main2');
let popUpBotPar = document.querySelector('.shirts-and-tees');
let shopLi = document.querySelectorAll('.shop-li');
let imgSrcMain2 = ['./img/tops-category.png', './img/bottoms-category.png', './img/roompers-category.png', './img/hats-category.png', './img/shop-all-category.png'];
let popUpBotParContrnt = ['Shirts and tees', 'Pants and shorts', 'Roompers', 'Hats', 'Shop all'];

// listLi.forEach((element) =>{
//     element.addEventListener('click', function() {
//         element.classListclassList.add('li-active-main2')
// });
// });
for (let i = 0; i < listLi.length; i++) {
    listLi[i].addEventListener('click', function() {
        for (let j = 0; j < listLi.length; j++) {
            if( listLi[j].classList.contains('li-active-main2')){
                listLi[j].classList.remove('li-active-main2');
            }
        }
        listLi[i].classList.add('li-active-main2')
        mainImg.src = `${imgSrcMain2[i]}`
    });
};

for (let i = 0; i < shopLi.length; i++) {
    shopLi[i].addEventListener('click', function() {
        popUpBotPar.textContent = popUpBotParContrnt[i];
    })
}


let topLiShop = document.querySelector('.top-li-shop');

function topsShop(){
    if (topLiShop.style.overflow == 'visible'){
        topLiShop.style.overflow = 'hidden';
    }else{
        topLiShop.style.overflow = 'visible';
    };
};

let bottomLiShop = document.querySelector('.bottom-li-shop');

function bottomsShop(){
    if (bottomLiShop.style.overflow == 'visible'){
        bottomLiShop.style.overflow = 'hidden';
    }else{
        bottomLiShop.style.overflow = 'visible';
    }
}


let liShopVal = document.querySelectorAll('.li-shop-val');
let imgShop = document.querySelector('.img-shop');
let imgSrcShop = ['./img/tops-shop.png', './img/shirt-shop.png', './img/t-shirts-shop.png', './img/bottoms-shop.png', './img/pants-shop.png', './img/shorts-shop.png', './img/roompers-shop.png', './img/hats-shop.png', './img/shop-all-shop.png'];

for (let i = 0; i < liShopVal.length; i++) {
    liShopVal[i].addEventListener('click', function() {
        imgShop.src = `${imgSrcShop[i]}`;
    });
}




const prev = document.getElementById('prev-btn');
const next = document.getElementById('next-btn');
const list = document.getElementById('item-list');

const itemWidth = 150;
const padding = 20;

prev.addEventListener('click',()=>{
  list.scrollLeft -= itemWidth + padding;
});

next.addEventListener('click',()=>{
  list.scrollLeft += itemWidth + padding;
});

let lookHhover1 = document.querySelector('.look-hover-1');
let lookHhover2 = document.querySelector('.look-hover-2');
let lookHhover3 = document.querySelector('.look-hover-3');
let id1 = 0;
let id2 = 0;
let id3 = 0;


function hoverStyle1() {
    if (id1 === 0) {
        lookHhover1.style.visibility = 'visible';
        id1 +=1;
    }else{
        lookHhover1.style.visibility = 'hidden';
        id1 -=1
    }
}

function hoverStyle1() {
    if (id1 === 0) {
        lookHhover1.style.visibility = 'visible';
        id1 +=1;
    }else{
        lookHhover1.style.visibility = 'hidden';
        id1 -=1
    }
}

function hoverStyle1() {
    if (id1 === 0) {
        lookHhover1.style.visibility = 'visible';
        id1 +=1;
    }else{
        lookHhover1.style.visibility = 'hidden';
        id1 -=1
    }
}

function hoverStyle2() {
    if (id2 === 0) {
        lookHhover2.style.visibility = 'visible';
        id2 +=1;
    }else{
        lookHhover2.style.visibility = 'hidden';
        id2 -=1
    }
}

function hoverStyle3() {
    if (id3 === 0) {
        lookHhover3.style.visibility = 'visible';
        id3 +=1;
    }else{
        lookHhover3.style.visibility = 'hidden';
        id3 -=1
    }
}

// function hoverStyle1(){
//     // if (id1 == 0) {
//         lookHhover1.style.visibility = 'visible';
//     //     id1 = 1
//     //     console.log(id1)
//     //     return
//     // }
        
// }
// function hoverStyle2(){
//     // if (id2 == 0) {
//         lookHhover2.style.visibility = 'visible';
//     //     id2 = 1
//     //     console.log(id2)
//     //     return
//     // }
//         // lookHhover2.style.visibility = 'hidden';
//         // id2 = 0
//         // console.log(id2)
//         // return
// }
// function hoverStyle3(){
//     // if (id3 == 0) {
//         lookHhover3.style.visibility = 'visible';
//         // id3 = 1
//         // console.log(id3)
//         // return
//     // }
//         // lookHhover3.style.visibility = 'hidden';
//         // id3 = 0
//         // console.log(id3)
//         // return
// }


function hoverStyleNone1(){
    lookHhover1.style.visibility = 'hidden';
}
function hoverStyleNone2(){
    lookHhover2.style.visibility = 'hidden';
}
function hoverStyleNone3(){
    lookHhover3.style.visibility = 'hidden';
}

let embroidery = document.querySelector('.embroidery')
let hovDot1 = document.querySelector('.hover-dot1')
hovDot1.addEventListener('mouseenter', function () {
    embroidery.style.visibility = 'visible';
});
hovDot1.addEventListener('mouseleave', function () {
    embroidery.style.visibility = 'hidden';
});

let color = document.querySelector('.color')
let hovDot2 = document.querySelector('.hover-dot2')
hovDot2.addEventListener('mouseenter', function () {
    color.style.visibility = 'visible';
});
hovDot2.addEventListener('mouseleave', function () {
    color.style.visibility = 'hidden';
});

let pocket = document.querySelector('.pocket')
let hovDot3 = document.querySelector('.hover-dot3')
hovDot3.addEventListener('mouseenter', function () {
    pocket.style.visibility = 'visible';
});
hovDot3.addEventListener('mouseleave', function () {
    pocket.style.visibility = 'hidden';
});

let buttons = document.querySelector('.buttons')
let hovDot4 = document.querySelector('.hover-dot4')
hovDot4.addEventListener('mouseenter', function () {
    buttons.style.visibility = 'visible';
});
hovDot4.addEventListener('mouseleave', function () {
    buttons.style.visibility = 'hidden';
});

let fabrics = document.querySelector('.fabrics')
let hovDot5 = document.querySelector('.hover-dot5')
hovDot5.addEventListener('mouseenter', function () {
    fabrics.style.visibility = 'visible';
});
hovDot5.addEventListener('mouseleave', function () {
    fabrics.style.visibility = 'hidden';
});

let certificates = document.querySelector('.certificates')
let hovDot6 = document.querySelector('.hover-dot6')
hovDot6.addEventListener('mouseenter', function () {
    certificates.style.visibility = 'visible';
});
hovDot6.addEventListener('mouseleave', function () {
    certificates.style.visibility = 'hidden';
});