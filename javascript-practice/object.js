'use strict';

let schedule = {};

alert ( isEmpty(schedule) );

schedule["8:30"] = "get up";

alert (isEmpty(schedule) );

function isEmpty(planner) {
    for (let key in planner){
        return false;
    }
    return true;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for (let key in salaries ) {
    sum += salaries[key];
}
alert( sum );

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
multiplyNumeric(menu);
alert(menu.width);
alert(menu.height);
alert(menu.title);


function multiplyNumeric(menuInfo) {
    for (let key in menuInfo) {
        if (typeof menuInfo[key] === 'number'){
            menuInfo[key] *= 2;
        }
    }
}