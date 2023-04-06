$(document).ready(function(){
    //toggle sub-menus
    $(".sub-btn").click(function(){
      $(this).next(".sub-menu").slideToggle();
    });

    //toggle more-menus
    $(".more-btn").click(function(){
      $(this).next(".more-menu").slideToggle();
    });
  });

  //javascript for the responsive navigation menu
  var menu = document.querySelector(".menu");
  var menuBtn = document.querySelector(".menu-btn");
  var closeBtn = document.querySelector(".close-btn");

  menuBtn.addEventListener("click", () => {
    menu.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
  });

  //javascript for the navigation bar effects on scroll
  window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  document.getElementById("product1").addEventListener("click", function() {
    // Redirect to another page
    window.location.href = "product1.html";
  });
  document.getElementById("product2").addEventListener("click", function() {
    // Redirect to another page
    window.location.href = "product2.html";
  });
  document.getElementById("product3").addEventListener("click", function() {
    // Redirect to another page
    window.location.href = "product3.html";
  });
  document.getElementById("product4").addEventListener("click", function() {
    // Redirect to another page
    window.location.href = "product4.html";
  });
