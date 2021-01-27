const loginButton = document.getElementById('login-btn')
loginButton.addEventListener('click', function () {
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    if (email.value == 'abcd@email.com' && password.value == '1234') {
        const loginArea = document.getElementById('login-area')
        loginArea.style.display = 'none';

        const transactionArea = document.getElementById('transaction-area')
        transactionArea.style.display = 'block'
    }
    else {
        const invalidShow = document.getElementById('invalid-show')
        invalidShow.style.color = 'red'
        invalidShow.innerText = 'Invalid Email or Password\n Use Email:abcd@email.com & Pass:1234 to Login\n\n'
        email.style.color = 'red'
        password.style.color = 'red'

        email.addEventListener('click', function () {
            email.value = ''
            password.value = ''
            email.style.color = 'black'
            password.style.color = 'black'
            invalidShow.innerText = ''
        })
    }
})

const logoutButton = document.getElementById('logout')
logoutButton.addEventListener('click', function () {
        const logoutArea = document.getElementById('login-area')
        logoutArea.style.display = 'block';

        const transactionAreaAfterLogout = document.getElementById('transaction-area')
        transactionAreaAfterLogout.style.display = 'none'

})


document.getElementById('deposit-amount').addEventListener('click', function () {
    document.getElementById('invalid-deposit-amount').innerText = ''
    document.getElementById('deposit-amount').value = ''
    document.getElementById('invalid-withdraw-amount').innerText = ''
    document.getElementById('withdraw-amount').value = ''
})

document.getElementById('withdraw-amount').addEventListener('click', function () {

    document.getElementById('invalid-withdraw-amount').innerText = ''
    document.getElementById('withdraw-amount').value = ''

    document.getElementById('invalid-deposit-amount').innerText = ''
    document.getElementById('deposit-amount').value = ''
})


const depositButton = document.getElementById('deposit-btn')
depositButton.addEventListener('click', function () {
    if (isNaN(document.getElementById('deposit-amount').value) || document.getElementById('deposit-amount').value == '') {
        const invalidDepositAmount = document.getElementById('invalid-deposit-amount')
        invalidDepositAmount.style.color = 'red'
        invalidDepositAmount.innerText = 'Please Enter a valid amount.\n\n'
    }
    else {
        const depositAmount = document.getElementById('deposit-amount').value

        const currentDeposit = document.getElementById('current-deposit').innerText

        const totalDeposit = parseFloat(depositAmount) + parseFloat(currentDeposit)

        document.getElementById('current-deposit').innerText = totalDeposit

        const balanceInDeposit = document.getElementById('current-balance').innerText
        totalBalanceInDeposit = parseFloat(balanceInDeposit) + parseFloat(depositAmount)
        document.getElementById('current-balance').innerText = totalBalanceInDeposit




        document.getElementById('deposit-amount').value = ''

        console.log(totalDeposit);
    }



})

const withdrawButton = document.getElementById('withdraw-btn')
withdrawButton.addEventListener('click', function () {



    if (isNaN(document.getElementById('withdraw-amount').value) || document.getElementById('withdraw-amount').value == '') {
        const invalidWithdrawAmount = document.getElementById('invalid-withdraw-amount')
        invalidWithdrawAmount.style.color = 'red'
        invalidWithdrawAmount.innerText = 'Please Enter a valid amount.\n\n'

    }
    else {
        if (parseFloat(document.getElementById('withdraw-amount').value) <= parseFloat(document.getElementById('current-balance').innerText)) {
            const withdrawAmount = document.getElementById('withdraw-amount').value

        const currentWithdraw = document.getElementById('current-withdraw').innerText

        const totalWithdraw = parseFloat(withdrawAmount) + parseFloat(currentWithdraw)

        document.getElementById('current-withdraw').innerText = totalWithdraw

        const balanceInWithdraw = document.getElementById('current-balance').innerText
        totalBalanceInWithdraw = parseFloat(balanceInWithdraw) - parseFloat(withdrawAmount)
        document.getElementById('current-balance').innerText = totalBalanceInWithdraw

        document.getElementById('withdraw-amount').value = ''

        }
        else{
            const invalidWithdrawAmount = document.getElementById('invalid-withdraw-amount')
        invalidWithdrawAmount.style.color = 'red'
        invalidWithdrawAmount.innerText = 'You current balance is smaller than withdrawal amount.\n\n'
        }
        
    }
})