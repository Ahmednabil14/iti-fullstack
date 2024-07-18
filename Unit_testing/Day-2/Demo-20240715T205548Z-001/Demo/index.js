function sum(x,y){
    return x+y
}


function convertToArray(x,y,z,c){
    return [x,y,z,c]
}


function math(){
    if(arguments.length == 0){
        return 0;
    }else{
        var result = 0;
        for(var i=0; i<arguments.length; i++){
            // $("div").hide()

            if(isFinite(arguments[i])){
                result+=arguments[i]
            }else{
                var err = new TypeError("Math Function required numbers only");
                throw err
            }
        }
        return result;
    }
}




module.exports = {sum, convertToArray, math}