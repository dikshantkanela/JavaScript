const hen={
    name:'Helen',
    eggCount:0,
    layAnEgg(){
        this.eggCount=this.eggCount+1;
        return "EGG"
    }
} 
console.log(hen.layAnEgg());
console.log(hen.eggCount)