let hamburger = document.querySelector('#clicknav');
let mobNav = document.querySelector('.navlist');

let openClose = 0;

hamburger.addEventListener('click', function () {
    if (openClose == 0) {
        mobNav.style.display = 'none';
        hamburger.innerHTML = '<i class="fa fa-bars"></i>'; // Use the hamburger icon
        openClose = 1;
    } else {
        mobNav.style.display = 'block';
       hamburger.innerHTML = '<i class="fa fa-times"></i>'; // Use the close/cancel icon
        openClose = 0;
    }
});
