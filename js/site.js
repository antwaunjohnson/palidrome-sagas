function getValue() {
  document.getElementById("alert").classList.add("invisible");
  let userString = document.getElementById("userString").value;
  let returnObj = palindromeCheck(userString);
  displayMessage(returnObj);
}

function palindromeCheck(userString) {
  userString = userString.toLowerCase();

  let regex = /[^a-z0-9]/gi;
  userString = userString.replace(regex, "");

  let revString = [];
  let returnObj = {};

  for (let index = userString.length - 1; index >= 0; index--) {
    revString += userString[index];
  }

  if (revString === userString) {
    returnObj.msg =
      "You have completed your journey through the Palindrome Sagas!";
  } else {
    returnObj.msg = " Your journey through the Palindrome Sagas must continue!";
  }

  returnObj.reversed = revString;

  return returnObj;
}

function displayMessage(returnObj) {
  document.getElementById("alertHeader").innerHTML = returnObj.msg;
  document.getElementById(
    "message"
  ).innerHTML = `You phrased reversed is: ${returnObj.reversed}`;
  document.getElementById("alert").classList.remove("invisible");
}

function resetForm() {
  document.getElementById("btnReset").reset();
}
