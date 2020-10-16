// var prevScrollpos = window.pageYOffset;
window.onscroll = function() {  
var currentScrollPos = window.pageYOffset;
var d = document.getElementById('carouselControlsIndex');
// console.log(d.offsetTop + d.clientHeight);
// console.log(currentScrollPos);
var prevScrollpos = d.offsetTop + (d.clientHeight/2);
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("side-bar").style.right = "-150px";
  } else {
    document.getElementById("side-bar").style.right = "0px";
  }
  prevScrollpos = currentScrollPos;
}


