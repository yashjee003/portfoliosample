// ********************Scroll Button*****************************
var my_button = document.getElementById("scroll-button");

window.onscroll = function() {
    if(document.documentElement.scrollTop > 20 || document.body.scrollTop > 20){
        my_button.style.display = "block";
    }
    else{
        my_button.style.display = "none";
    }
} 

// user click top button function

function topButton(){
    document.documentElement.scrollTop = 0; // for crome
    document.body.scrollTop = 0; //for safari
}

// ********************Scroll Button*****************************
const counters = document.querySelectorAll('.count');
const speed = 200;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = parseInt(counter.getAttribute('data-target'));
    const count = parseInt(counter.innerText);
    const increment = Math.trunc(target / speed);

    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});