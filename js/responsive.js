document.getElementById("hamburger-menu").addEventListener("click", function() {
    var menuIcon = document.getElementById("hamburger-menu");
    var listMenu = document.getElementById("list-menu");
    
    listMenu.classList.toggle("active");
    menuIcon.classList.toggle("open");
});