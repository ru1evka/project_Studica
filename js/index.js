const scrollMenu = document.querySelector(".scroll_menu");
const saideBar1 = document.querySelector(".n1");
const saideBar2 = document.querySelector(".n2");
const saideBar3 = document.querySelector(".n3");
const saideBarP1 = document.querySelector(".p1");
const saideBarP2 = document.querySelector(".p2");
const saideBarP3 = document.querySelector(".p3");

const blockText = document.querySelector(".text_block");
const btnExpand = document.querySelector(".expand");

console.log(blockText);

window.addEventListener("scroll", function () {
  function scrollMenuHeader() {
    if (this.window.pageYOffset >= 762) {
      scrollMenu.classList.add("active");
    } else {
      scrollMenu.classList.remove("active");
    }
  }

  function saideBarScroll() {
    if (this.window.pageYOffset >= 765 ) {
      saideBar1.classList.add("cl_blue");
      saideBarP1.classList.add("cl_blue_price");
    } else {
      saideBar1.classList.remove("cl_blue");
      saideBarP1.classList.remove("cl_blue_price");
    } 
    if (window.pageYOffset >= 1458){
      saideBar1.classList.remove("cl_blue");
      saideBarP1.classList.remove("cl_blue_price");
    }

    if (window.pageYOffset >= 1458){
      saideBar2.classList.add("cl_blue");
      saideBarP2.classList.add("cl_blue_price");
    } else {
      saideBar2.classList.remove("cl_blue");
      saideBarP2.classList.remove("cl_blue_price");
    } 
    if (window.pageYOffset >= 2921){
      saideBar2.classList.remove("cl_blue");
      saideBarP2.classList.remove("cl_blue_price");
    }

    if (window.pageYOffset >= 2921){
      saideBar3.classList.add("cl_blue");
      saideBarP3.classList.add("cl_blue_price");
    } else {
      saideBar3.classList.remove("cl_blue");
      saideBarP3.classList.remove("cl_blue_price");
    } 
    console.log(this.window.pageYOffset);
  }


  scrollMenuHeader();
  saideBarScroll();
});


function initCkickBtn(){
  btnExpand.addEventListener("click", function(){
    blockText.classList.toggle("text_block_on");
  })

}

document.addEventListener("DOMContentLoaded", function() {
  initCkickBtn(); 
});