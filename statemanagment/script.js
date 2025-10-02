const newUsername = document.getElementById("newUsername");
const initialBalance = document.getElementById("initialBalance");
const createUserBtn = document.getElementById("createUserBtn"); 
const cardNumber=document.getElementById("cardNumber");
const cardHolderName=document.getElementById("cardHolderName");
const cardBalance=document.getElementById("cardBalance");
const userList=document.getElementById("userList");

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
        cardHolderName.innerText = user.userName;
        cardBalance.innerText=user.Balance;
        cardNumber.innerText=user.accountNo;
        let activeUser;
        activeUser.innerHTML=`
        <div class="user-list-item">
            <span class="user-info">${cardHolderName} $${cardBalance}</span>
            <div class="user-actions">
              <button class="btn btn-primary btn-select-user" data-username="${cardHolderName}">Select</button>
            </div>
          </div>
          `
          userList.appendChild(activeUser);
    }

}


createUserBtn.addEventListener("click", validatedata);

