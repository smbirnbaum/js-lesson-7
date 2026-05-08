const account = {
    accountName: "Shawna",
    balance: 1000,

    getBalance: function () {
        alert("Your balance is: " + this.balance + " kr");
    },

    deposit: function (amount) {
        if (isNaN(amount) || amount <= 0) {
            this.accountError();
        } else {
            this.balance = this.balance + amount;
            alert("You deposited: " + amount + " kr");
            this.getBalance();
        }
    },

    withdrawal: function (amount) {
        if (isNaN(amount) || amount <= 0 || amount > this.balance) {
            this.accountError();
        } else {
            this.balance = this.balance - amount;
            alert("You withdrew: " + amount + " kr");
            this.getBalance();
        }
    },

    getAccountName: function () {
        alert("Account holder: " + this.accountName);
    },

    accountError: function () {
        alert("Something went wrong. Please enter a valid amount.");
    }
};

function atm() {
    let choice = prompt(
        "Choose an option:\n1. See balance\n2. Deposit money\n3. Withdraw money\n4. See account name\n5. Exit"
    );

    if (choice === "1") {
        account.getBalance();
        atm();
    } else if (choice === "2") {
        let amount = Number(prompt("How much do you want to deposit?"));
        account.deposit(amount);
        atm();
    } else if (choice === "3") {
        let amount = Number(prompt("How much do you want to withdraw?"));
        account.withdrawal(amount);
        atm();
    } else if (choice === "4") {
        account.getAccountName();
        atm();
    } else if (choice === "5") {
        alert("Goodbye!");
    } else {
        account.accountError();
        atm();
    }
}

atm();