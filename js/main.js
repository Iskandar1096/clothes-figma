let listLi = document.querySelectorAll('.li-main2')
let mainImg = document.querySelector('.category-main2')
let imgSrcMain2 = ['./img/tops-category.png', './img/bottoms-category.png', './img/roompers-category.png', './img/hats-category.png', './img/shop-all-category.png']

// listLi.forEach((element) =>{
//     element.addEventListener('click', function() {
//         element.classListclassList.add('li-active-main2')
// });
// });
for (let i = 0; i < listLi.length; i++) {
    listLi[i].addEventListener('click', function() {
        for (let j = 0; j < listLi.length; j++) {
            if( listLi[j].classList.contains('li-active-main2')){
                listLi[j].classList.remove('li-active-main2')
            }
        }
        listLi[i].classList.add('li-active-main2')
        mainImg.src = `${imgSrcMain2[i]}`
    });
}


let topLiShop = document.querySelector('.top-li-shop')

function topsShop(){
    if (topLiShop.style.overflow == 'visible'){
        topLiShop.style.overflow = 'hidden';
    }else{
        topLiShop.style.overflow = 'visible';
    }
}

let bottomLiShop = document.querySelector('.bottom-li-shop')

function bottomsShop(){
    if (bottomLiShop.style.overflow == 'visible'){
        bottomLiShop.style.overflow = 'hidden';
    }else{
        bottomLiShop.style.overflow = 'visible';
    }
}


let liShopVal = document.querySelectorAll('.li-shop-val')
let imgShop = document.querySelector('.img-shop')
let imgSrcShop = ['./img/tops-shop.png', './img/shirt-shop.png', './img/t-shirts-shop.png', './img/bottoms-shop.png', './img/pants-shop.png', './img/shorts-shop.png', './img/roompers-shop.png', './img/hats-shop.png', './img/shop-all-shop.png']

for (let i = 0; i < liShopVal.length; i++) {
    liShopVal[i].addEventListener('click', function() {
        imgShop.src = `${imgSrcShop[i]}`
    });
}




const prev = document.getElementById('prev-btn')
const next = document.getElementById('next-btn')
const list = document.getElementById('item-list')

const itemWidth = 150
const padding = 20

prev.addEventListener('click',()=>{
  list.scrollLeft -= itemWidth + padding
})

next.addEventListener('click',()=>{
  list.scrollLeft += itemWidth + padding
})

