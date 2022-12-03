/* START modal code: copied/modified from: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal_img */
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img_mod1 = document.getElementsByClassName("img_mod");
// var img_mod2 = document.getElementById("img_mod2");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var img_caption = document.getElementsByTagName("figcaption")[0].innerHTML;
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = img_caption;
//   console.log(img_caption);
// }

// img_mod1.addEventListener("click", displayMod);
// img_mod2.addEventListener("click", displayMod);

// const images = document.getElementsByClassName("img_mod");

// Array.from(images).forEach(function(image) {
// });

var elements = document.getElementsByTagName("figure");


for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction);
}
function myFunction() {
    img_src = this.getElementsByClassName("img_mod")[0].src;
    img_caption = this.getElementsByTagName("figcaption")[0].innerHTML;
    modal.style.display = "block";
    modalImg.src = img_src;
    captionText.innerHTML = img_caption;
    console.log(img_src)
};

    // Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

/* END modal code: copied/modified from: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal_img */