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







//Assignment1

function calculateDiscount() {
  // Initialize a variable to store the total purchase amount
  const totalPurchaseAmount = 300;


  // Initialize a variable to store the discounted amount
  let discountedAmount = totalPurchaseAmount;


  // Apply discounts based on the total purchase amount
  if (totalPurchaseAmount >= 50 && totalPurchaseAmount <= 100) {
    discountedAmount = (discountedAmount * 5) / 100;
  } else if (totalPurchaseAmount > 100 && totalPurchaseAmount <= 200) {
    discountedAmount = (discountedAmount * 10) / 100;
  } else if (totalPurchaseAmount > 200) {
    discountedAmount = (discountedAmount * 15) / 100;
  }


  // Display the result on the webpage
  console.log(discountedAmount);
  console.log(discountedAmount + totalPurchaseAmount);
}


calculateDiscount();
