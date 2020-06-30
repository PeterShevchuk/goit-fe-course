'use strict';

/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };
  
  /*
   * Кожна транзакція - це об'єкт з властивостями: id, type і amount
   */
  
  const account = {
    // Поточний баланс рахунку
    balance: 0,
  
    // Історія транзакцій
    transactions: [],
  
    /*
     * Метод створює і повертає об'єкт транзакції.
     * Приймає суму і тип транзакції.
     */
    createTransaction(amount, type) {
        let transPush = {
            transType: type,
            transAm: amount,
          }

        this.transactions.push(transPush);
        return transPush;
    },
  
    /*
     * Метод відповідає за додавання суми до балансу.
     * Приймає суму танзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його в історію транзакцій
     */
    deposit(amount) {
        this.createTransaction(amount, Transaction.DEPOSIT);
        this.balance += amount;
    },

    
  
    /*
     * Метод відповідає за зняття суми з балансу.
     * Приймає суму танзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його в історію транзакцій.
     *
     * Якщо amount більше, ніж поточний баланс, виводь повідомлення
     * про те, що зняття такої суми не можливо, недостатньо коштів.
     */
    withdraw(amount) {
        if (this.balance < amount) { 
            return alert("Зняття такої суми не можливо, недостатньо коштів")
        } else {
            this.createTransaction(amount, Transaction.WITHDRAW)
            this.balance = this.balance - amount;
        }
    },
  
    /*
     * Метод повертає поточний баланс
     */
    getBalance() {
        return `На вашому рахунку: ${this.balance} UAH.`;
    },
  
    /*
     * Метод шукає і повертає об'єкт транзакції по id
     */
    getTransactionDetails(id) {
        return this.transactions[id];

    },

  
    /*
     * Метод повертає кількість коштів
     * певного типу транзакції з усієї історії транзакцій
     */
    getTransactionTotal(type) {
        let message = '';
        for (let i = 0; i < this.transactions.length; i+=1) {
            let transID = this.transactions[i];
             if (transID.transType === type) { message = `${message}${transID.transType}: ${transID.transAm}, `}
        }
        return message;
    },
  };

//   account.deposit(50);
//   account.withdraw(10);
//   account.deposit(50000);
//   account.withdraw(1000);
//   account.deposit(123141420);
//   account.deposit(3000);
//   account.withdraw(1000);



//   console.log(account.transactions);
//   console.log(account.getBalance());
//   console.log(account.getTransactionDetails(3));
//   console.log(account.getTransactionTotal(Transaction.DEPOSIT));