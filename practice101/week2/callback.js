function square(n){
    return n * n;
}

function cube(n){
    return n * n * n;
}
function quad(n){
    return n * n * n * n;
}

function genericSum(a, b, fn){
    return fn(a) + fn(b);
}

console.log(genericSum(1, 2, quad))
