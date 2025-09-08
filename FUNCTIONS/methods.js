const myMath={
    PI: 3.14,
    add: function(x,y){
        console.log( x+y);
    },
    subtract: function(x,y){
        return x-y;

    } ,
    multiply: function(x,y){
       return( x*y);
    },
    divide: function(x,y){
        return x/y;
    }
}
console.log(myMath.add(10,20))//30 undefined
myMath.add(10,20) //30