var thirdBox = document.getElementById("tb");


thirdBox.addEventListener('dblclick',function(e){
   alert(e.detail.currFunc())
});
var cusEvt = new CustomEvent("dblclick",{
   detail : {
      message:"Prakhar",
      currFunc:function() {
         var prevTime = -1;
         var currentTime = -1;
         if(prevTime==-1) {
            prevTime=(new Date().getSeconds());
            return "Prev Time"+ prevTime;
         }else{
            currentTime=(new Date().getSeconds());
            return "Current Time"+ currentTime;
         }
      }
   }
});
thirdBox.dispatchEvent(cusEvt);






