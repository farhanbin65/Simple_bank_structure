document.getElementById('btn-diposit').addEventListener('click', function(){
// get the deposit input field--2

    const depositField = document.getElementById('deposit-input');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

       // clear the deposit field--7
       depositField.value = '';
    if(isNaN(newDepositAmount)){
        alert('please provide a valid number');
        return;
    }

    // get the current deposit total--3
    // non-input(inpur, text-area) use innrText
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // add number to get total deposit --4
    const CurrentDepositTotal = previousDepositTotal+ newDepositAmount;
    // set the deposit total
    depositTotalElement.innerText = CurrentDepositTotal;

    // get balance current total--5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const curentBalanceTotal =newDepositAmount+previousBalanceTotal;
    // set the balance total
    balanceTotalElement.innerText = curentBalanceTotal;

 
 
})

