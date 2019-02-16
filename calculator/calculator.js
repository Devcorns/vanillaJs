
var calArea = document.getElementById("cal-area");
// console.log(calArea);
var valueArr = [];

// function calculation(e,operator){
//     console.log(e.target,operator)
// }
class Calculator {

    constructor() {
        console.log("i am Calculator");
    }

}

class Calculation extends Calculator {
    
//    calArea = document.getElementById("cal-area");
   
   constructor() {
       super();
       console.log("i am Calculation");
   }

   data(e) {
       
        let val = !isNaN(e.path[0].innerText);
       
       if(val) {
            console.log(e.path[0].innerText);
            
            if(calArea.value!=""){
                calArea.value += e.path[0].innerText;
                return 0;
            }

            calArea.value = e.path[0].innerText
            console.log("after",calArea.value);

       }

   }

   calculateNow() {
        
   }

   operatorClick() {

   }
   
   emptyAll() {
    calArea.value = "";
   }

   operator(evt,operator) {
        console.log(operator)
        
        if(calArea.value!="") {
             
            // let prevValue = calArea.value;
            
            let prevOperator;
            switch(operator) {

                 /* calculate now is used to add */
                // case "pls":
                //     prevOperator = '+'; 
                //     operatorClick("+");
                // break;


                /* calculate now is used to calculate output */
                case "equal":
                    this.calculateNow();
                break;

                /* Empty All is used to clear all the values */
                case "delall":
                    this.emptyAll();
                break;

            }

        }

   }



}

calObj = new Calculation();





