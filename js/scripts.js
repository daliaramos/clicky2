$(document).ready(function(){

  $("h1").click(function() {
    alert("This is a header.");
  });

  $(".paragraph-click").click(function() {
    alert("This is a paragraph.");
  });

  $("img").click(function() {
    alert("This is an image.");
  });

  $(".clickable").click(function() {
    $(".walrus-hidden").slideToggle();
    $(".walrus-showing ").slideToggle();
  });

});
