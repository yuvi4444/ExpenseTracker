// Expense array to store logged expenses
let expenses = [];

// Function to add an expense
function addExpense(amount, category, date) {
  const expense = {
    amount: parseFloat(amount),
    category,
    date
  };

  expenses.push(expense);
}

// Function to display expense summary
function displaySummary() {
  const summaryTable = document.querySelector("#expense-summary table");
  const totalSpending = document.querySelector("#total-spending");

  // Clear existing summary
  summaryTable.innerHTML = "<tr><th>Category</th><th>Amount</th></tr>";

  // Calculate total spending
  let total = 0;

  // Loop through expenses array and update the summary table
  expenses.forEach((expense) => {
    const { amount, category } = expense;

    // Add the current expense amount to the total
    total += amount;

    // Create a new row in the summary table
    const newRow = document.createElement("tr");
    newRow.innerHTML = `<td>${category}</td><td>${amount.toFixed(2)}</td>`;

    // Append the new row to the table
    summaryTable.appendChild(newRow);
  });

  // Update the total spending
  totalSpending.textContent = total.toFixed(2);
}

// Function to handle the form submission
function handleFormSubmit(event) {
  event.preventDefault();

  // Get the form input values
  const amountInput = document.querySelector("#amount-input");
  const categoryInput = document.querySelector("#category-input");
  const dateInput = document.querySelector("#date-input");

  const amount = amountInput.value;
  const category = categoryInput.value;
  const date = dateInput.value;

  // Add the expense and display the summary
  addExpense(amount, category, date);
  displaySummary();

  // Clear the form inputs
  amountInput.value = "";
  categoryInput.value = "";
  dateInput.value = "";
}

// Add event listener to the form submit button
const addButton = document.querySelector("#add-expense-button");
addButton.addEventListener("click", handleFormSubmit);
