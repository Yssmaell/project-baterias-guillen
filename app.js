window.onscroll = function() {  
var currentScrollPos = window.pageYOffset;
var width = window.innerWidth;
var d = document.getElementById('carouselControlsIndex');
var prevScrollpos = d.offsetTop + (d.clientHeight/2);
  if (prevScrollpos > currentScrollPos && width > 768) {
    document.getElementById("side-bar").style.right = "-150px";
  } else {
    document.getElementById("side-bar").style.right = "0px";
  }
  prevScrollpos = currentScrollPos;
}


