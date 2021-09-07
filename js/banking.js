document.getElementById('deposit-button').addEventListener('click', function(){
    const newdepositInput = document.getElementById('deposit-holder');
    const depositAmountText = newdepositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    const newDepositTotal = depositTotal.innerText;
    const currentDepositTotal = parseFloat(depositTotal.innerText)+depositAmount;
    depositTotal.innerText = currentDepositTotal;
    const previoustBalance = document.getElementById('balanceTotal');
    previoustBalance = depositTotal.innerText;
    // clear deposit input field
    depositInput.value = '';
})