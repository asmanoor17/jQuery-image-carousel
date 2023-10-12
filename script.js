$(document).ready(function(){
    //console.log("ready");

//Define an array of image URLs.
    var imageUrls = ["carouselImage1","carouselImage2", "carouselImage3","carouselImage4", "carouselImage5"];
//Set up an index to keep track of the currently displayed image.
    var currentIndex = 0;
//Use jQuery animations (e.g., fadeIn and fadeOut) to transition between images.
    function showCurrentImage() {
    
        $("#imageContainer").fadeOut(500, function(){
            $(this).attr("src", imageUrls[currentIndex]).fadeIn(500);
        });
    }  
        
//Attach click event handlers to the next and previous buttons.
    $("#nextButton").on("click", function() {
            currentIndex++;
    });
    
    $("#prevButton").on("click", function() {
            currentIndex--; 
   
    });
    
//calls the function 
     showCurrentImage();
        

        
        
      
        
        });
        
         























