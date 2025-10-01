
const newUsername = document.getElementById("newUsername");
const initialBalance = document.getElementById("initialBalance");
const createUserBtn = document.getElementById("createUserBtn"); 
const cardNumber=document.getElementById("cardNumber");
const appState = {}; 
function validatedata(event) {
    event.preventDefault(); 
    console.log("Button clicked, validation initiated!"); 
    const newUser = {
        userName: newUsername.value,
        Balance: initialBalance.value,
        accountNo:generateAccountNumber(),
        pinNumber:generatePin()
    }
    let name = newUsername.value; 
    appState[name] = newUser;
    console.log(appState); 
    newUsername.value="";
    initialBalance.value="";
     uiUpdate();
}
function generateAccountNumber() {
 return Math.floor(100000000000 + Math.random() * 900000000000);
}
function generatePin() {
  return Math.floor(1000 + Math.random() * 9000);
}

function uiUpdate(){
    const usernames = Object.keys(appState); 
    for (let key of usernames) {
        const user = appState[key];
        console.log("Username:", user.userName);
        console.log("Balance:", user.Balance);   
        console.log("Account:", user.accountNo);
        console.log("PIN:", user.pinNumber);
    }
}


createUserBtn.addEventListener("click", validatedata);

