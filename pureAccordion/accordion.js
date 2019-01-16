var findAccMain = document.querySelectorAll(".accmain");

console.log(findAccMain.length);


if(findAccMain.length){

    for(var i=0;i<findAccMain.length;i++) {
        
        console.log(findAccMain[i].children.length)
        for(var j = 0;j<findAccMain[i].children.length;j++){
            let accstyle = findAccMain[i].children[j].querySelectorAll('.acc-body');
            console.log("i am j",accstyle[0].style.display="none")
            

        }
        
    }
    
   document.addEventListener("click",function(e) {
        // console.log(e.target.classList[0]);
        if(e.target.classList=="click-head") {
            
            var allclass = e.target.parentNode.parentNode.parentNode.querySelectorAll(".acc-parent.active");
            
            for(let i=0;i<allclass.length;i++) {

                if(allclass[i].classList.contains('active')) {
                    console.log(allclass[i].querySelectorAll(".acc-body")[0].style.display = "none");
                    console.log(allclass[i].classList.remove("active"));
                }

            }
setTimeout(()=>{
    if(e.target.parentNode.parentNode.classList.contains("active")) {
        
        e.target.parentNode.parentNode.classList.remove('active');
        console.log(e.target.parentNode.parentNode.querySelectorAll(".acc-body")[0].style.display="none");

    } else {

        e.target.parentNode.parentNode.classList += " active";
        console.log(e.target.parentNode.parentNode.querySelectorAll(".acc-body")[0].style.display="block");
    }
},200)
         

           
            

        }
    });

}

