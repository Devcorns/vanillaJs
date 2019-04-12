var palVal = document.getElementById("palindromeNo");
// console.log(palVal.value)
function checkPalindorme() {
    
    if(palVal.value && palVal.value!=" ") {
        
        var counter = 0;
        var palLength = palVal.value.length-1;
        var strConcat = "";

        do {
            
            strConcat = strConcat+palVal.value[palLength];
            palLength = palLength-1;
            counter++;

        } while (counter < palVal.value.length);

        if(palVal.value == strConcat) {

           palVal.style.background = "#7CFC00";

        } else {
           
            palVal.style.background = "#f00";
        
        }

    } else {

        alert("Enter atleast one 3");
        
    }

}
function reset() {

    palVal.style.background = "none";
    palVal.value = null;

}

