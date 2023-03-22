var cheatingGPT = true;
var cheaterGPT__container = document.getElementById("cheaterGPT__container");

var apiKey = "";
const endpoint = "https://api.openai.com/v1/chat/completions";

var gptquestion = document.getElementById("gptquestion");
var gptHolder = document.getElementById("gptHolder");
var gptAnswer = document.getElementById("gptAnswer");
var chatGptApiKey = document.getElementById("chatGptApiKey");
var beforeAPIkey = document.getElementById("beforeAPIkey");
var afterAPIkey = document.getElementById("afterAPIkey");

function go() {
  if (gptquestion.value.length > 0 && apiKey.length > 0) {
    var requestData = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: gptquestion.value }],
      temperature: 0.7,
    };

    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => {
        data.choices.forEach((ans) => {
          var p = document.createElement("p");
          p.innerText = ans.message.content;
          gptAnswer.insertAdjacentElement("beforeend", p);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

function setAPIkey() {
  apiKey = chatGptApiKey.value.trim();
  if (apiKey.length > 0) {
    beforeAPIkey.style.display = "none";
    afterAPIkey.style.display = "block";
  }
}

var pos1 = 0,
  pos2 = 0,
  pos3 = 0,
  pos4 = 0;
gptHolder.onmousedown = dragMouseDown;

function dragMouseDown(e) {
  e = e || window.event;
  e.preventDefault();
  pos3 = e.clientX;
  pos4 = e.clientY;
  document.onmouseup = closeDragElement;
  document.onmousemove = elementDrag;
}

function elementDrag(e) {
  e = e || window.event;
  e.preventDefault();
  pos1 = pos3 - e.clientX;
  pos2 = pos4 - e.clientY;
  pos3 = e.clientX;
  pos4 = e.clientY;
  cheaterGPT__container.style.top =
    cheaterGPT__container.offsetTop - pos2 + "px";
  cheaterGPT__container.style.left =
    cheaterGPT__container.offsetLeft - pos1 + "px";
}

function closeDragElement() {
  document.onmouseup = null;
  document.onmousemove = null;
}

document.addEventListener("keypress", (e) => {
  if (e.key == "`") {
    cheaterGPT__container.classList.toggle("hide");
  }
});



document.querySelectorAll("script[src]").forEach(e=>{
  if(e.src.match(/.*cheating.*/) != null){
    e.remove()
  }
})
