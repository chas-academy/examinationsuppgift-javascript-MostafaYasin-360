const descInput = document.querySelector("#desc");
const amountInput = document.querySelector("#amount");

const incomeBtn = document.querySelector("#incomeBtn");
const expenseBtn = document.querySelector("#expenseBtn");

const incomeList = document.querySelector("#incomeList");
const expenseList = document.querySelector("#expenseList");

const balance = document.querySelector("#balance");

let totalBalance = 0;

// Event listeners
incomeBtn.addEventListener("click", addIncome);
// Om användaren trycker på knappen Inkomst → körs en funktion som heter addIncome

expenseBtn.addEventListener("click", addExpense);

// Functions
function addIncome() {
  const desc = descInput.value;
  const amount = Number(amountInput.value);

  // Validation
  if (desc === "" || amountInput.value === "" || isNaN(amount)) {
    return;
  }

  // Create list item
  const li = document.createElement("li");

  li.textContent = `${desc} - ${amount} kr (Inkomst)`;

  // Add to income list
  incomeList.appendChild(li);

  // Update balance
  totalBalance += amount;

  balance.textContent = totalBalance;

  // Clear input fields
  descInput.value = "";
  amountInput.value = "";

  console.log(desc);
  console.log(amount);
}

function addExpense() {
  const desc = descInput.value;
  const amount = Number(amountInput.value);

  // Validation
  if (desc === "" || amountInput.value === "" || isNaN(amount)) {
    return;
  }

  // Create list item
  const li = document.createElement("li");

  li.textContent = `${desc} - ${amount} kr (Utgift)`;

  // Add to expense list
  expenseList.appendChild(li);

  // Update balance
  totalBalance -= amount;

  balance.textContent = totalBalance;

  // Clear input fields
  descInput.value = "";
  amountInput.value = "";

  console.log(desc);
  console.log(amount);
}
