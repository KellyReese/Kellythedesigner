$(document).ready(function(){
$(".aboutmain span,p").slideDown( 2000);

});

$(document).ready(function(){
  $(".servicesmain h3,p").slideDown( 2000);
  
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

    function toggle() {
        var x = document.getElementById("myDIV");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
      function toggle1() {
        var x = document.getElementById("myTYPO");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
      function toggle2() {
        var x = document.getElementById("myEM");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }

      function toggle3() {
        var x = document.getElementById("myART");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
      
     