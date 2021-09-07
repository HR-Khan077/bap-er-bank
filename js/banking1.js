document.getElementById('deposit-button').addEventListener('click', function(){
    // get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    
    const newDepositAmount = parseFloat(depositInput.value);
    // update deposite total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmount = depositTotal.innerText;
    const previousDepositTotal = parseFloat(previousDepositAmount);
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotal.innerText = newDepositTotal;
    // update balnce total
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previoustBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previoustBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    // clear deposit input field
    depositInput.value = '';
})
// Set withdraw
document.getElementById('withdraw-button').addEventListener('click', function(){
    // console.log('clicked');
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    // console.log(newWithdrawAmount)
    // set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;
    withdrawInput.value = '';
    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const previoustBalanceText = balanceTotal.innerText;
    const previoustBalanceTotal = parseFloat(previoustBalanceText);
    const newBalanceTotal = previoustBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
})
