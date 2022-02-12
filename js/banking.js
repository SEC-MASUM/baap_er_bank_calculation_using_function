const previousDeposit = document.getElementById("deposit");
const previousWithdraw = document.getElementById("withdraw");
const previousBalance = document.getElementById("balance");

const depositInputField = document.getElementById("deposit-input");
const depositButton = document.getElementById("deposit-button");

const withdrawInputField = document.getElementById("withdraw-input");
const withdrawButton = document.getElementById("withdraw-button");

function addMoney(previousAmount, currentAmount) {
  return Number.parseFloat(previousAmount) + Number.parseFloat(currentAmount);
}
function getMoney(previousAmount, currentAmount) {
  return Number.parseFloat(previousAmount) - Number.parseFloat(currentAmount);
}

//Deposit
depositButton.addEventListener("click", function () {
  {
    //Deposit Input
    const depositInputText = depositInputField.value;

    //Previous Deposit
    const previousDepositText = previousDeposit.innerText;

    if (Number.parseFloat(depositInputText) > 0) {
      //Total Deposit
      const totalDeposit = addMoney(previousDepositText, depositInputText);
      previousDeposit.innerText = totalDeposit;

      //Balance Calculation After Deposit
      const previousBalanceText = previousBalance.innerText;
      //Current Balance
      const currentBalance = addMoney(previousBalanceText, depositInputText);
      previousBalance.innerText = currentBalance;
    } else {
      alert("Please enter positive number");
    }

    //Clear Deposit Input Field
    depositInputField.value = "";
  }
});

//Withdraw
withdrawButton.addEventListener("click", function () {
  {
    //Withdraw Input
    const withdrawnputText = withdrawInputField.value;

    //Previous Withdraw
    const previousWithdrawText = previousWithdraw.innerText;

    //Balance Calculation After Withdraw
    const previousBalanceText = previousBalance.innerText;

    if (Number.parseFloat(withdrawnputText) > 0) {
      //Current Balance
      const currentBalance = getMoney(previousBalanceText, withdrawnputText);
      if (currentBalance >= 0) {
        previousBalance.innerText = currentBalance;
        //Total Withdraw
        const totalWithdraw = addMoney(previousWithdrawText, withdrawnputText);
        previousWithdraw.innerText = totalWithdraw;
      } else {
        alert("You have not sufficient balance");
      }
    } else {
      alert("Please enter positive number");
    }

    //Clear Withdraw Input Field
    withdrawInputField.value = "";
  }
});
