const buttondiv = document.querySelectorAll(".fas");
const photos = document.querySelector(".photosin");
const photoeach = photos.children;

const numberOfImages = document.querySelectorAll('.photosin img').length;

let imageIndex = 1;
let translateX = 0;

buttondiv.forEach(button => {
  button.addEventListener('click', (event) => {
    if (event.target.id === 'previous') {
      if (imageIndex !== 1) {
        imageIndex--;
        translateX += 25;
      }

    } 
    else {
      if (imageIndex !== numberOfImages) {
        imageIndex++;
        translateX -= 25;
      }
    }
    photos.style.transform = `translateX(${translateX}%)`;
  });
});