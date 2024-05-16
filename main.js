async function fetchImages() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    if (!response.ok) {
      throw new Error("Ops! Something went wrong with the fetch");
    }
    const data = await response.json();
    const dogPic = document.querySelector(".default-img");
    dogPic.src = data.message;
  } catch (error) {
    console.log(error);
  }
}
