const startBtn = document.querySelector(".start");
const app = document.querySelector(".app");
const begin = document.querySelector(".begin");
const mainAudio = document.querySelector("#mainAudio");
const submitBtn = document.querySelector(".submit");
const name = document.querySelector(".your-name");
const content = document.querySelector(".des");
const modalError = document.querySelector(".modal-error");
const modalNameError = document.querySelector(".modal-errorName");
const modalThanks = document.querySelector(".modal-thanks");
const layout = document.querySelector(".layout");
const btn = document.querySelectorAll(".btn");
const title = document.querySelector(".title");

startBtn.onclick = () => {
  app.style.display = "flex";
  begin.style.display = "none";
  mainAudio.play();
};

submitBtn.onclick = () => {
  if (content.value === "") {
    modalError.style.display = "flex";
    layout.style.display = "block";
  }

  if (name.value === "") {
    modalNameError.style.display = "flex";
    layout.style.display = "block";
  }
  var data = {
    name: name.value,
    content: content.value,
  };
  createComment(data);
};

var commentAPI =
  "https://62707d3a6a36d4d62c19cca1.mockapi.io/api/comment/comments";

function createComment(data) {
  if (name.value != "" && content.value != "") {
    modalThanks.style.display = "flex";
    layout.style.display = "block";
    var options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(commentAPI, options).then(function (res) {
      return res.json();
    });
  }
}

btn.forEach((item) => {
  item.onclick = () => {
    modalThanks.style.display = "none";
    layout.style.display = "none";
    modalError.style.display = "none";
    modalNameError.style.display = "none";
  };
});

setInterval(function () {
  title.classList.toggle("make-color");
}, 1500);
