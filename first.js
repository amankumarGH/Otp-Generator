const btn = document.querySelector(".btn");
const value1 = document.querySelector("#underline1");
const value2 = document.querySelector("#underline2");
const value3 = document.querySelector("#underline3");
const value4 = document.querySelector("#underline4");

let noOfDigits = 4;
btn.addEventListener("click", () => {
  let otp = Math.floor(Math.random() * 10 ** noOfDigits);

  if (otp >= 10 ** (noOfDigits - 1)) {
    let otps = otp.toString();

    value1.innerText = otps[0];
    value2.innerText = otps[1];
    value3.innerText = otps[2];
    value4.innerText = otps[3];
  } else {
    let otps = (otp + 10 ** (noOfDigits - 1)).toString();

    value1.innerText = otps[0];
    value2.innerText = otps[1];
    value3.innerText = otps[2];
    value4.innerText = otps[3];
  }
});
