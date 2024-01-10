$(document).ready()
{
  $(".btn1").hover(function () {
    $(".t2").fadeIn("slow");
    $(".btn1").css("borderLeft", "5px solid");
    $(".btn1").css("borderRight", "5px solid");
  });

  $(".btn1").click(function () { 
    $(".section1").css("visibility", "visible");
  });

}

//carousel on click, no timeout

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
}

///////////////////////////////////////////////////////////////////////////////////////////////////////

const targets = document.querySelectorAll('.test');

        // Intersection Observer options
        const options = {
            root: null, // Use the viewport as the root
            rootMargin: '-5px', // No margin around the root
            threshold: 0.8 // Trigger when 100% of the target is in view
        };

        // Intersection Observer callback function
        const callback = (entries) => {
          entries.forEach(entry => {
      
              if (entry.isIntersecting) {
                // Add the 'in-view' class when the target is in view
                entry.target.classList.add('in-view');
            } else {
                // Remove the 'in-view' class when the target is out of view
                entry.target.classList.remove('in-view');
            }

              });
};

// Create separate Intersection Observers for targets and boxes
const observerTargets = new IntersectionObserver(callback, options);

// Start observing the target elements
targets.forEach((target) => {
    observerTargets.observe(target);
});

