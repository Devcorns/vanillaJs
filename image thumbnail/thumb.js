var thumbInput =  document.getElementById("thumb-input");
var createEl = document.createElement("IMG");  
var thumbImg = document.getElementById("thumbimage");
thumbInput.addEventListener("change",function(e) {
    thumbImg.innerText = "";
    console.log(e.target.files[0].type);
    if(e.target.files[0].type == "image/jpeg" || e.target.files[0].type == "image/png" || e.target.files[0].type == "image/jpg" ) {
        console.log(createEl);
        
        thumbImg.appendChild(createEl);
        var imgReader = new FileReader();
        console.log(imgReader);
        imgReader.addEventListener("load", function () {
            createEl.src = imgReader.result;
          }, false);
        
          if (e.target.files[0]) {
            imgReader.readAsDataURL(e.target.files[0]);
          }
    }
    else {
        thumbImg.innerText="File is not good";
    }
   
})