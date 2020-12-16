window.onload = init;

// onload function
function init() {
  var showcase = document.getElementById("showcase_picture");

  var nextSlide = document.getElementById("next_button");
  var previousSlide = document.getElementById("previous_button");

  var windowSize = window.innerWidth;

    //putting the mobile images in an array for the showcase
  var mobileImages = ["images/mobile_showcase_1.png",
    "images/mobile_showcase_2.png",
    "images/mobile_showcase_3.png",
    "images/mobile_showcase_4.png"];

    //putting the desktop images in an array for the showcase
  var desktopImages = ["images/showcase_1.PNG",
    "images/showcase_2.png",
    "images/showcase_3.PNG",
    "images/showcase_4.PNG"];
    //for the
  var showcasePosition = 0;

  window.addEventListener("resize", resizeImage);
  resizeImage();


  //change the slideshow to the next slide
  nextSlide.onclick = function(){
    var windowSize = window.innerWidth;

    if(windowSize < 768){ // if mobile

      //check if the showcase position is at the end of the array
      if(showcasePosition >= mobileImages.length - 1)
      {
        showcasePosition = 0;
      }else{
        ++showcasePosition;
      }
      showcase.src = mobileImages[showcasePosition]; //set image

    } else if(windowSize < 1024) { // if tablet
      //check if the showcase position is at the end of the array
      if(showcasePosition >= mobileImages.length - 1)
      {
        showcasePosition = 0;
      }else{
        ++showcasePosition;
      }
      showcase.src = mobileImages[showcasePosition]; //set image

    } else { // else desktop

      //check if the showcase position is at the end of the array
      if(showcasePosition >= desktopImages.length - 1)
      {
        showcasePosition = 0;
      }else{
        ++showcasePosition;
      }
      showcase.src = desktopImages[showcasePosition];//set image
    }
  }

  //change the slideshow to the previous slide
  previousSlide.onclick = function(){
    var windowSize = window.innerWidth;
    if(windowSize < 768){ // if mobile

      //check if the showcase position is at the start of the array
      if(showcasePosition == 0)
      {
        showcasePosition = mobileImages.length - 1;
      }else{
        --showcasePosition;
      }
      showcase.src = mobileImages[showcasePosition];//set image

    } else if(windowSize < 1024) { // if tablet

      //check if the showcase position is at the start of the array
      if(showcasePosition == 0)
      {
        showcasePosition = mobileImages.length - 1;
      }else{
        --showcasePosition;
      }
      showcase.src = mobileImages[showcasePosition];//set image

    } else { // else desktop

      //check if the showcase position is at the start of the array
      if(showcasePosition == 0)
      {
        showcasePosition = desktopImages.length - 1;
      }else{
        --showcasePosition;
      }
      showcase.src = desktopImages[showcasePosition];//set image
    }
  }

  //reize the showcase image when the screen is resized
  function resizeImage(){
    var windowSize = window.innerWidth; //get width
    if(windowSize < 768){// if mobile

      //check if the showcase position is past the end of the array
      if(showcasePosition > mobileImages.length - 1){
        showcasePosition = 0;
      }
      showcase.src = mobileImages[showcasePosition];//set image

    } else if(windowSize < 1024) {// if tablet

      //check if the showcase position is past the end of the array
      if(showcasePosition > mobileImages.length - 1){
        showcasePosition = 0;
      }
      showcase.src = mobileImages[showcasePosition];//set image

    } else { // else desktop

      //check if the showcase position is past the end of the array
      if(showcasePosition > desktopImages.length - 1){
        showcasePosition = 0;
      }
      showcase.src = desktopImages[showcasePosition];//set image
    }
  }
}
