
const totalCost = document.getElementById('total-cost'),
      costCredit = document.getElementById('an-time-credit'),
      totalPercentage = document.getElementById('total-percentage');
      
          /*Значення range імпутів*/
const totalCostRange = document.getElementById('total-cost-range'),
      costCreditRange = document.getElementById('an-time-credit-range'),
      totalPercentageRange = document.getElementById('total-percentage-range');       

            /* Кінцеві значення*/
const totalAmountOfCredid = document.getElementById('amount-of-credit'),
      totalMonthlyPayment = document.getElementById('monthly-payment'),
      totalRecomendIncome = document.getElementById('recommended-income');   


/* усі ренджі  */
const inputsRange = document.querySelectorAll('.calculation__slider-range');
   
/* усі кнопки банкІв  */
const banksBtns = document.querySelectorAll('.bank');

const assignValue = () => {
    totalCost.value = totalCostRange.value;
    costCredit.value = costCreditRange.value;
    totalPercentage.value = totalPercentageRange.value;
}

assignValue();

const bank = [
    {
        name: 'oshad',
        precents: 8.7  
    },
    {
        name: 'pruvatbank',
        precents: 8.4
    },
    {
        name: 'kredobank',
        precents: 7.9  
    },
    {
        name: 'otpbank',
        precents: 9.2 
    }
];

let currentPrecent = bank[0].precents;

for(let bank of banksBtns) { // активний клас
    bank.addEventListener('click', () => {
        for(let item of banksBtns) {
            item.classList.remove('active');
        }
        bank.classList.add('active');
        takeActiveBank(bank);
    });
   
}

const takeActiveBank = currentActive => { // получаю відсотки
    const dataAttrValue = currentActive.dataset.name;
    const currentBank = bank.find( bank => bank.name === dataAttrValue);
    currentPrecent = currentBank.precents;
    calculation(totalCost.value, costCredit.value, totalPercentage.value);
};


for(let input of inputsRange) {
    input.addEventListener('input', () => {
        assignValue();
        calculation(totalCost.value, costCredit.value, totalPercentage.value);
    })
};

const calculation = (totalCost = 0, costCredit = 10000, totalPercentage = 1,) => {
    // ЩП -Щомісячний платіж
    // РК - Розимір кредиту
    // ВС - Відсоток ставки
    // КМ - Кількість місяців 

    // ЩП = (РК + ((( РК/100 ) * ВС) / 12 ) * КМ) / КМ 

    let monthlyPayment; // ЩП
    let lounAmount = totalCost - costCredit; // РК
    let interestRate = currentPrecent; // ВС
    let numberOfMonths = totalPercentage; // Кількість років
    

    monthlyPayment = (lounAmount + (((lounAmount / 100) * interestRate) / 12) * numberOfMonths) / numberOfMonths;

    const monthlyPaymentArounded = Math.round(monthlyPayment);
    if(monthlyPaymentArounded < 0) {
        return false;
    } else {
        totalAmountOfCredid.innerHTML = `${lounAmount} $`;
        totalMonthlyPayment.innerHTML = `${monthlyPaymentArounded} $`;
        totalRecomendIncome.innerHTML = `${monthlyPaymentArounded + ((monthlyPaymentArounded / 100) * 35)} $`;
    }

}




// Значення текстових імпутів

// const totalCost = document.getElementById('total-cost'),
//       anInitialFee = document.getElementById('an-initial-fee'),
//       creditTerm = document.getElementById('credit-term');


// // Значення range Імпутів
// const totalCostRange = document.getElementById('total-cost-range'),
//       anInitialFeeRange = document.getElementById('an-initial-fee-range'),
//       creditTermRange = document.getElementById('credit-term-range');


// //Кінцеві значення
// const totalAmountOfCredid = document.getElementById('amount-of-credit'),
//       totalMonthlyPayment = document.getElementById('monthly-payment'),
//       totalRecomendIncome = document.getElementById('recommended-income');

      
// // Усі ренджі
// const inputsRange = document.querySelectorAll('input-range');


// // Усі кнопки з відсотковою ставкою
// const bankBtns = document.querySelectorAll('.bank');

// const assignValue = () => {
//     totalCost.value = totalCostRange.value;
//     anInitialFee.value = anInitialFeeRange.value;
//     creditTerm.value = creditTermRange.value;
// }

// assignValue();

// const banks = [
//     {
//                 name: 'oshad',
//                 precents: 8.7 
//             },
//             {
//                 name: 'pruvatbank',
//                 precents: 8.4
//             },
//             {
//                 name: 'kredobank',
//                 precents: 7.9 
//             },
//             {
//                 name: 'otpbank',
//                 precents: 9.2 
//             }
// ];

// let currentPrecent = banks[0].precents;

// for(let bank of bankBtns) {
//     bank.addEventListener('click', () => {
//         for(let item of bankBtns) {
//             item.classList.remove('active');
//         }
//         bank.classList.add('active');
//         takeActiveBank(bank);
//     })
// }

// const takeActiveBank = currentActive => {
//     const dataAttrValue = currentActive.dataset.name;
//     const currentBank = banks.find( bank => bank.name === dataAttrValue);
//     currentPrecent = currentBank.precents;
//     calculation(totalCost.value, anInitialFee.value, creditTerm.value);
// }

// for(let input of inputsRange) {
//     input.addEventListener('input', () => {
//         assignValue();
//         calculation(totalCost.value, anInitialFee.value, creditTerm.value);
//     })
// }

// const calculation = (totalCost = 0, anInitialFee = 1000000, creditTerm = 1) => {
//     let monthlyPayment;
//     let lounAmount = totalCost - anInitialFee;
//     let interestRate = currentPrecent;
//     let numberOfYears = creditTerm;
//     let numberOfMonths = 12 * numberOfYears

//     monthlyPayment = (lounAmount + (((lounAmount / 100) * interestRate) / 12) * numberOfMonths) / numberOfMonths;

//     const monthlyPaymentArounded = Math.round(monthlyPayment);
//     if(monthlyPaymentArounded < 0) {
//         return false;
//     }else {
//         totalAmountOfCredid.innerHTML = `${lounAmount} $`;
//          totalMonthlyPayment.innerHTML = `${monthlyPaymentArounded} $`
//          totalRecomendIncome.innerHTML = `${monthlyPaymentArounded + (((monthlyPaymentArounded) / 100)* 35)} $`
//     }
// }


// UAH USD
const inputUah = document.querySelector('#uah'),
      inputUsd = document.querySelector('#usd');

inputUah.addEventListener('input', () => {
    const request = new XMLHttpRequest(); // конструктор який створює новий об'єкт

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json charset=utf-8');
    request.send();

    request.addEventListener('load', () => { 
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputUah.value / data.current.usd).toFixed(2); // розраховуємо
        } else {
            inputUsd.value = "Щось пішло не так :(";
        }
    });
})






// МОДАЛЬНЕ ВІКНО ЧОМУСЬ НЕ ПАРЦЮЄ!

    //Modal 
        // const modalTrigger = document.querySelectorAll('[data-modal]'),
        //       modal = document.querySelector('.modal')

        //   function openModal() {
        //     modal.classList.add('show');
        //     modal.classList.remove('hide');
        //     document.body.style.overflow = 'hidden'; // фіксуємо модальне вікно
        // } 
        
        // modalTrigger.forEach(btn => {
        //     btn.addEventListener('click', openModal);// відкриваємо модальне вікно
        // }); 

        // function closeModel() { // функція для зкаривання модального вікна !
        //     modal.classList.add('hide');
        //     modal.classList.remove('show'); 
        //     document.body.style.overflow = '';  
        // }

        // modal.addEventListener('click', (e) => {
        //     if (e.target === modal || e.target.getAtTribute('data-close') == "") { // закриваємо модальне вікно по кліку на сторіці
        //         closeModel();
        //     }
        // });

        // document.addEventListener('keydown', (e) => { // закриваємо модальне вікно за допомогой Escape !
        //     if (e.code === "Escape" && modal.classList.contains('show')) { // Escape діє лише тоді коли відкриете модальне вікно Show !
        //         closeModel();
        //     }
        // });
