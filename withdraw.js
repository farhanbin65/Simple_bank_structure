document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-2
    const withdrawField = document.getElementById('withdraw-input');
    const newWithdrawstring = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawstring);
    //cleat the input field
    withdrawField.value = '';
    if(isNaN(newWithdrawAmount)){
        alert('please provide a valid number');
        return;
    }
    // gwt prwvious withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawString);

    const CurrentWithdrawTotal = newWithdrawAmount+previousWithdrawTotal;
    withdrawTotalElement.innerText = CurrentWithdrawTotal;

    // spet-5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    
    // calculate new balance total-6
    const newBanlanceTottal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBanlanceTottal;

    
})