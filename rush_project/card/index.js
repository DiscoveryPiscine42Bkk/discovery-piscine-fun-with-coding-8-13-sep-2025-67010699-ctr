const images = ["./img/Screenshot 2025-09-12 152813.png",
    "./img/Screenshot 2025-09-12 152954.png",
    "https://fa.rmutt.ac.th/wp-content/uploads/2018/10/1-1.jpg",
  "https://riangthongtrophy.com/wp-content/uploads/2020/05/trophye.png",
"https://i.pinimg.com/736x/2e/25/41/2e2541f19cfd22fd0d301cb829be5655.jpg"]
let currentIndex = 0;
function showImageprev(index) {
    const imgElement = document.getElementById("PrevImg");
    if (index < 0){
        imgElement.src = images[images.length-1]
    }
    else{imgElement.src = images[index];}
    
  }

  function showImagenext(index) {
    const imgElement = document.getElementById("NextImg");
    if (index == images.length){
        imgElement.src = images[0];
    }
    else{imgElement.src = images[index];}
  }
  
function showImage(index) {
  const imgElement = document.getElementById("currentImg");
  imgElement.src = images[index];
  
}

function nextImage() {
  currentIndex = (currentIndex + 1);
  if (currentIndex < 0){
        currentIndex = images.length-1
    }
  else if (currentIndex == images.length ){
        currentIndex =0
  }
  showImage(currentIndex);
  showImageprev(currentIndex - 1);
  showImagenext(currentIndex + 1);
}

function prevImage() {
  currentIndex = (currentIndex - 1 );
  
  if (currentIndex == images.length ){
        currentIndex =0
  }
  else if(currentIndex <0){
        currentIndex = images.length-1
  }
//   console.log("curr"+currentIndex)
//   console.log("prev"+currentIndex-1)
//   console.log("next"+currentIndex+1)
  showImage(currentIndex);
  showImageprev(currentIndex - 1);
  showImagenext(currentIndex + 1);
}
document.addEventListener("DOMContentLoaded", showImage(currentIndex));
document.addEventListener("DOMContentLoaded", showImagenext(currentIndex+1));
document.addEventListener("DOMContentLoaded", showImageprev(currentIndex-1));