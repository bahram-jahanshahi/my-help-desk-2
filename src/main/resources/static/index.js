$(document).ready(function () {
    $(".menu").click(function () {
        const submenu = $(this).next();
        submenu.slideToggle(500);
        submenu.siblings("ul").hide(500);
    });
})

function loadPage(page) {
    if (page == 'incident-list') {

        $(".app-box").load('features/incident/incident-list/incident-list.html');
    }
}
