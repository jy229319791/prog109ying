var myImages =["https://uploads.visitseattle.org/2016/03/09043831/pic102.jpg", 
               "https://uploads.visitseattle.org/2016/03/09043844/pic132.jpg",
               "https://uploads.visitseattle.org/2016/03/09043914/pic201.jpg",
               "https://uploads.visitseattle.org/2016/03/09043918/pic212.jpg",
               "https://uploads.visitseattle.org/2016/03/09043923/pic221.jpg"];


var captionImages =["Seattle Waterfront","Pike Place Market","Seattle Japanese Garden","Space Needle in New Year's Eve","Setting Sail"];

var index=0; 

 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
 

function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;
 
 updateImage();
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 


function autoSlide(){
if (document.getElementById("auto").checked)
 next(); 
}


setInterval(autoSlide,2000); // Next
