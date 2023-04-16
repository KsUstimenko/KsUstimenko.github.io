function openHomePage() {
    window.open('/layout_cat-weigth/page-1/index.html', "_self");
}

function openCatCard(event) {
    window.open('/layout_cat-weigth/page-2/index.html', "_self");
}

function openOverview() {
    window.open('/layout_cat-weigth/page-2/index.html', "_self");
}

function openCatCreate() {
    window.open('/layout_cat-weigth/page-3/index.html', "_self");
}

function openHistory() {
    window.open('/layout_cat-weigth/page-4/index.html', "_self");
}



//////////////////////////////////////// POPUP ////////////////////////////////////////

function openPopup(event) {
    event.stopPropagation();
    const popup = document.getElementById("popup");
    popup.classList.add("_visible")
}