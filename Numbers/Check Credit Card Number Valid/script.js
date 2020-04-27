function check() {
  const ccnums = document.getElementById("ccnum").value.split("");
  const resultSpan = document.getElementById("result");
  const nums = ccnums.map((num) => parseInt(num));
  if (nums.length === 16) {
    let result = checksum(nums);
    if (result % 10 !== 0) {
      resultSpan.innerHTML = "This is not a valid credit card number";
    } else {
      resultSpan.innerHTML = "This is a valid credit card number";
    }
  } else {
    alert("Invalid card number - needs to be sixteen digits");
  }
}

function checksum(nums) {
  let checknums = nums.slice(0, 15);
  for (let i = 2; i <= 14; i += 2) {
    checknums[i] *= 2;
  }
  for (let i = 2; i <= 14; i += 2) {
    if (checknums[i] >= 10) {
      checknums[i] =
        parseInt(checknums[i].toString()[0]) +
        parseInt(checknums[i].toString()[1]);
    }
  }
  checknums = checknums.reduce((a, b) => a + b, 0);
  return checknums;
}

// take first 15 numbers
// starting with first digit, multiply every second digit by 2
// every time you have two-digit number, add digits together for one digit result
// add all numbers together.
