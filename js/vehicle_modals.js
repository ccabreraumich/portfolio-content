/* START modal code: copied/modified from: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal_img */
// Get the modal
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var img_caption = document.getElementsByTagName("figcaption")[0].innerHTML;


var elements = document.getElementsByTagName("figure"); //christine modified from reference


for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction);
}
function myFunction() {
    img_src = this.getElementsByClassName("img_mod")[0].src;  //christine modified from reference
    img_caption = this.getElementsByTagName("figcaption")[0].innerHTML; //christine modified from reference
    modal.style.display = "block";
    modalImg.src = img_src; //christine modified from reference
    captionText.innerHTML = img_caption; //christine modified from reference
    console.log(img_caption)
};

    // Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

/* END modal code: copied/modified from: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal_img */