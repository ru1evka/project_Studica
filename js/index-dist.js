const scrollMenu=document.querySelector(".scroll_menu"),saideBar1=document.querySelector(".n1"),saideBar2=document.querySelector(".n2"),saideBar3=document.querySelector(".n3"),saideBarP1=document.querySelector(".p1"),saideBarP2=document.querySelector(".p2"),saideBarP3=document.querySelector(".p3"),blockText=document.querySelector(".text_block"),btnExpand=document.querySelector(".expand");function initCkickBtn(){btnExpand.addEventListener("click",(function(){blockText.classList.toggle("text_block_on")}))}console.log(blockText),window.addEventListener("scroll",(function(){!function(){this.window.pageYOffset>=762?scrollMenu.classList.add("active"):scrollMenu.classList.remove("active")}(),function(){this.window.pageYOffset>=765?(saideBar1.classList.add("cl_blue"),saideBarP1.classList.add("cl_blue_price")):(saideBar1.classList.remove("cl_blue"),saideBarP1.classList.remove("cl_blue_price")),window.pageYOffset>=1458&&(saideBar1.classList.remove("cl_blue"),saideBarP1.classList.remove("cl_blue_price")),window.pageYOffset>=1458?(saideBar2.classList.add("cl_blue"),saideBarP2.classList.add("cl_blue_price")):(saideBar2.classList.remove("cl_blue"),saideBarP2.classList.remove("cl_blue_price")),window.pageYOffset>=2921&&(saideBar2.classList.remove("cl_blue"),saideBarP2.classList.remove("cl_blue_price")),window.pageYOffset>=2921?(saideBar3.classList.add("cl_blue"),saideBarP3.classList.add("cl_blue_price")):(saideBar3.classList.remove("cl_blue"),saideBarP3.classList.remove("cl_blue_price")),console.log(this.window.pageYOffset)}()})),document.addEventListener("DOMContentLoaded",(function(){initCkickBtn()}));