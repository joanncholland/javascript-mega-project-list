console.log("connected");

function check() {
  const ccnums = document.getElementById("ccnum").value.split("");
  const nums = ccnums.map((num) => parseInt(num));
  if (nums.length === 16) {
    console.log(nums.length);
    console.log(checksum(nums));
  } else {
    alert("Invalid card number - needs to be sixteen digits");
  }
}

function checksum(nums) {
  const checknums = nums.slice(0, 15);
  for (let i = 0; i < 14; i++) {}
}
