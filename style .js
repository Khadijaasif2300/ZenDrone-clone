document.querySelector('.flag-img').addEventListener('change', function () {
    const selectedOption = this.options[this.selectedIndex];
    const flag = selectedOption.getAttribute('data-image');
    this.style.backgroundImage = `url(${flag})`;
});

// Initialize with the first option's flag image
document.querySelector('.flag-img').style.backgroundImage = 'url(en_US.png)';

let navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.left = "40px"; // Show menu
}
function hideMenu() {
    navLinks.style.left = "700px"; // Hide menu
}