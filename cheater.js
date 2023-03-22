var cheatingGPT;
if (cheatingGPT == true) {
  document.querySelectorAll(".cGPT").forEach((e) => {
    e.remove();
  });
  document.querySelectorAll('script[src]').forEach(e=>{
    if(e.src.match(/.*cheater.*/)[0] != null){
      e.remove()
    }
  })
} else {
  var DATA_URL = "https://shivamsuyal.github.io/cheaterGPT/"

  var link = document.createElement("link");
  link.href = `${DATA_URL}style.css`;
  link.type = "text/css";
  link.rel = "stylesheet";
  link.classList.add("cGPT");
  document.head.appendChild(link);

  fetch(`${DATA_URL}index.html`)
    .then((response) => response.text())
    .then((data) => {
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(data, "text/html");
      const cheaterHTML = htmlDoc.querySelector("body").innerHTML;
      document.body.insertAdjacentHTML("beforeend", cheaterHTML);
    })
    .catch((error) => console.error(error));

  setTimeout(() => {
    var JS = document.createElement("script");
    JS.src = `${DATA_URL}index.js`;
    JS.classList.add("cGPT");
    document.body.appendChild(JS);
  }, 1000);
}
