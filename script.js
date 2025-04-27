$(document).ready(function(){
$(".aboutmain span,p").slideDown( 2000);

});

$(document).ready(function(){
    
    $(".featured").fadeIn(2000);
});
    

    function showSidebar(){
        const sidebar = document.querySelector(".sidebar")
        sidebar.style.display = "flex"
    }
    function hideSidebar(){
        const sidebar = document.querySelector(".sidebar")
        sidebar.style.display = "none"
    }


