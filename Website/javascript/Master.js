/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/* Beginning of On Document ready */

$( document ).ready(function() {
  $('.multiItemSlider').slick({
      infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
});

$(document).on("click", "altImages", function() {
    console.log(this);
});
/* End of on document ready */