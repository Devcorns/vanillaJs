// var inputObject = document.getElementById("arrayInput") ;


var inputObject = [{},20,30,{val:40},52,{},{}];


checkArrayHavingObject = (e)=> {
    
    // console.log(inputObject.value.split(','));
    for(let i =0;i<inputObject.length;i++) {
        
        if( typeof(inputObject[i])=='object') {
            console.log('Yeah this is object !!!',inputObject[i],'  at ',i+1,' location');   
        }
        
    }

};


