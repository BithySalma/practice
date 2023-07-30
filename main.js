


//Asssaignment=2

let originalArray= [12, 34, 45, 23, 6, 78, 54, 90];
let filteredEvenNumbers = originalArray.filter(n=>n%2==0);


console.log("OriginalArray:" + originalArray);
console.log(filteredEvenNumbers);


//Assaginment=3

function table(number){
    for(var i=1;i<=10;i++){
        var result = i*number;
        console.log(`${number}x ${i} = ${result}`);
    }
}
table(14);


