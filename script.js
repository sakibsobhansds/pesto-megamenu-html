
function addHoverEffect() {
    let dropdownItems = document.querySelectorAll('.dropdown-item');

    dropdownItems.forEach(function (item) {
        item.addEventListener('mouseenter', function () {
            this.classList.add('active');
        });
        item.addEventListener('mouseleave', function () {
            this.classList.remove('active');
        });
    });
}

// function addClickEffect() {
//     let dropdownLinks = document.querySelectorAll('.dropdown-item > a');
//     dropdownLinks.forEach(function (link) {
//         link.addEventListener('click', function (event) {
//             let parentItem = this.parentElement;
//             parentItem.classList.toggle('active');
//         });
//     });
// }
function addClickEffect() {
    let dropdownLinks = document.querySelectorAll('.dropdown-item > a');
    dropdownLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            let parentItem = this.parentElement;
    
            parentItem.classList.toggle('active');

           
            
            event.preventDefault(); // Prevent default link behavior
        });
    });
}


if (window.innerWidth >= 1200) {
    addHoverEffect();
} else {
    addClickEffect();
}

let mobileMenuTrigger = document.getElementById('mobile-menu-btn');
let mainMenuOverlay = document.getElementById('main-menu-overlay');
let mobileMenuClose = document.getElementById('mobile-menu-close');

mobileMenuTrigger.addEventListener('click', () => {
    mainMenuOverlay.classList.add('active')
})
mobileMenuClose.addEventListener('click', () => {
    mainMenuOverlay.classList.remove('active')
})
// mainMenuOverlay.addEventListener('click', () => {
//     mainMenuOverlay.classList.remove('active')
// })
