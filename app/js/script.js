var x = 2;
{

    var x = 1;
    
}

console.log(x); // будет 1 var перезаписала себя!

let y = 2;
{

    let y = 1;
    console.log(y); // будет 1
    
}

console.log(y); // будет 2