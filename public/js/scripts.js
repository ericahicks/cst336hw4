$(document).ready(function() {
    //Check which page is open and make that nav link highlighted using "current-page" class
    let currentPage = $("#title").text(); //hidden div with page name corresponding to link name
    $("nav").children().each(function() {
        let linkName = this.text;
        if (currentPage == linkName) {
            $(this).addClass("current-page");
        }
    });
});//ready