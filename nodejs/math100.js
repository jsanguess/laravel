const Math={};
function add(x, y) {return x+y;  }
function substract(x, y) {return x-y;  }
function multiply(x, y) {return x*y;  }
function divide(x,y) {
    if(y == 0){
        console.log('no se puede dividir por 0');
    }else{
        return x/y;
    }
    return x/y;  
}

Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

function hello(name){
    console.log('hola ', name);
}

// module.exports=hello;
module.exports=Math;