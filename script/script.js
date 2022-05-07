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
    fetch("https://source.unsplash.com/1600x900/?nature").then((response) => {
      let image = response.url;
      console.log(image);
      document.getElementById("image").setAttribute("src", `${image}`);
    });
    // const image = images[Math.floor(Math.random() * images.length)];

    var todayTarget = document.getElementById("todayTarget");
    var toDoList = document.getElementById("to-do-List");

    var quote = document.getElementById("quote");
    var author = document.getElementById("author");
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data[Math.floor(Math.random() * data.length)]);
        let randomQuote = data[Math.floor(Math.random() * data.length)].text;
        let authorName = data[Math.floor(Math.random() * data.length)].author;

        quote.innerHTML = `" ${randomQuote} "`;
        author.innerHTML = authorName;
      });

    var focusInput = document.getElementById("focus");
    chrome.storage.sync.get(["focus"], function (result) {
      if (result.focus) {
        todayTarget.innerHTML = result.focus;
        toDoList.style.visibility = "visible";
      }
    });

    focusInput.addEventListener("keypress", function (e) {
      chrome.storage.sync.set({ focus: e.target.value });
      let result = e.target.value;
      if (e.key === "Enter") {
        todayTarget.innerHTML = result;
        toDoList.style.visibility = "visible";
        // // console.log("pressed Enter Key");
        // console.log(result);
      }
    });
  },
  false
);
