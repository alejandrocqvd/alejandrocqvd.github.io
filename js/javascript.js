window.addEventListener('scroll', function() {
    var navbar = document.getElementsByClassName('navbar')[0];
    var home = document.getElementsByClassName('home')[0];

    var homeHeight = home.offsetHeight;
    var homeBottom = home.getBoundingClientRect().bottom; 

    if (window.scrollY >= homeBottom) { 
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
