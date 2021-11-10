let toggleburger = document.getElementById('toggleburger');
let navbarLinks = document.getElementById('navbarLinks');

toggleburger.addEventListener('click', function(){
    navbarLinks.classList.toggle('active');
})