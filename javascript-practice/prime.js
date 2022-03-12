'use strict';

let num = +prompt("Enter the limit number, we will find the prime numbers", '');

outer: for (let i=2; i<=num; i++) {
    for (let j=2; j<i; j++){
        if ((i%j)==0)   continue outer;
    }
    alert(i);
}

