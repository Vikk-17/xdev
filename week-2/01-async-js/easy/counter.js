let now = new Date();
let a = now.getSeconds();
let time = "00:" 

//setInterval(() => {
//    console.log(time+a);
//    a --;
//}, 1000);


function timer(){
    console.log(time+a);
    a--;

    if(a>=0){
        setTimeout(timer, 1000);
    }
    else{
        console.log("Time up");
    }
}
timer()
