
window.onbeforeunload = function (e) {
    var message = "Your confirmation message goes here.",
    e = e || window.event;
    // For IE and Firefox
    if (e) {
    e.returnValue = message;
    }
  
    // For Safari
    return message;
  }


class KeyVirus {
    
    constructor() {

    }

}

class User {

    constructor() {

        document.addEventListener("keydown",function(e) {
            e.preventDefault();
            console.log(e.key,e);
            
        }
        
        
        );

    }

}

new User();

