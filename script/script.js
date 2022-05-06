window.addEventListener(
  "DOMContentLoaded",
  (event) => {
    console.log("ran");
    const images = [
      "picture (1).jpg",
      "picture (2).jpg",
      "picture (3).jpg",
      "picture (4).jpg",
      "picture (5).jpg",
    ];

    const image = images[Math.floor(Math.random() * images.length)];
    console.log(image);

    document.getElementById("image").setAttribute("src", `./images/${image}`);
  },
  false
);
