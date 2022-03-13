'use strict';

function calc(a,b){
    return (a<b) ? a : b;
}

function pow(x,n) {
    let val=x;
    for (i=1;i<n;i++){
        val = val * x;
    }
    return val;
}

let x = prompt("x?",'');
let n = prompt("n",'');
if (n<1) {
    alert(`$(n)은 양의 정수여야 합니다.`);
}else {
    alert(pow(x,n));
}