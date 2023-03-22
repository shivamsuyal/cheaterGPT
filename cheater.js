const DATA_URL = "./"


var link = document.createElement( "link" );
link.href = `${DATA_URL}style.css`
link.type = "text/css";
link.rel = "stylesheet";
document.head.appendChild(link)

fetch(`${DATA_URL}index.html`)
  .then(response => response.text())
  .then(data => {
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(data, 'text/html');
    const cheaterHTML = htmlDoc.querySelector('body').innerHTML;
    document.body.insertAdjacentHTML("beforeend",cheaterHTML)
  })
  .catch(error => console.error(error));


setTimeout(()=>{
    var JS = document.createElement("script")
    JS.src = `${DATA_URL}index.js`
    document.body.appendChild(JS)
},1000)



