// using callback function
function myOwnSetTimeOut(fn, duration){
    setTimeout(fn, duration);
}

myOwnSetTimeOut(()=>{
    console.log("Callback hell");
}, 1000);


// using promises

function ownTime(duration){
    let p = new Promise(function(resolve){
        setTimeout(resolve, 1000);
    });
    return p;
}

const b = ownTime(1000);
console.log(b)

b.then(function(){
    console.log("Checking the promise request");
})
