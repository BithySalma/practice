//Asssaignment=2

let originalArray = [12, 34, 45, 23, 6, 78, 54, 90];
let filteredEvenNumbers = originalArray.filter((n) => n % 2 == 0);

console.log("OriginalArray:" + originalArray);
console.log(filteredEvenNumbers);

//Assaginment=3

function table(number) {
  for (var i = 1; i <= 10; i++) {
    var result = i * number;
    console.log(`${number}x ${i} = ${result}`);
  }
}
table(5);

//Assignment=4

function calculateGrade(score) {
  switch (true) {
    case score >= 90:
      return "A";
      break;
    case score >= 80:
      return "B";
      break;
    case score >= 70:
      return "C";
      break;

    case score >= 60:
      return "D";
      break;

    default:
      return "F";
  }
}

const score = 68;
const grade = calculateGrade(score);

console.log(`Score:${score},Grade:${grade}`);









