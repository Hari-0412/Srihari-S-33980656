let expenses = [2000, 1500, 3500, 4000];

function totalSpent(arr) {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    console.log("Total Money Spent: ₹" + total);
}

totalSpent(expenses);
