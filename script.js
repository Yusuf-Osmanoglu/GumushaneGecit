const popupButton = document.getElementById('popupButton');
const popup = document.getElementById('popup');
const closeButton = document.querySelector('.close');

popupButton.addEventListener('click', function() {
    popup.style.display = 'block';
    centerPopup();
});

closeButton.addEventListener('click', function() {
    popup.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});

function centerPopup() {
    const popupContent = document.querySelector('.popup-content');
    const windowHeight = window.innerHeight;
    const popupHeight = popupContent.offsetHeight;
    const topMargin = (windowHeight - popupHeight) / 2;

    popupContent.style.marginTop = topMargin + 'px';
}

window.addEventListener('resize', function() {
    centerPopup();
});
