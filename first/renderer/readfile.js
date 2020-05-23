var fs = require("fs")

window.onload = function () {
    var btn = this.document.querySelector("#btnRead");
    var txt = this.document.querySelector("#txtContent");

    btn.onclick = function(){
        // alert("clicked");
                
        fs.readFile("package.json", (err, data) => {
            txt.innerHTML = data;
        });
    }
}