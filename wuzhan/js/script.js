let menu=document.querySelector("#menu-bar"); // querySelector 查詢頁面中第一個符合規則的元素
let navbar=document.querySelector(".navbar");

// 按下按鈕之後產生的變化

menu.onclick =() =>{ // 按下按鈕圖示後會產生以下的函數
    menu.classList.toggle('fa-times'); // 按下後會變成這個('fa-times')圖示
    navbar.classList.toggle('active'); // 同時加入('active')進去，就會去套用到CSS
}

// 回到上層按鈕
window.onscroll=() => { // 移動滑鼠時跑以下的函數
    if(window.scrollY>60){ // 視窗滑動超過60就把這按鈕叫出來
        document.querySelector('#scroll-up').classList.add('active');
    } else {
        document.querySelector('#scroll-up').classList.remove('active');
    }
        

}