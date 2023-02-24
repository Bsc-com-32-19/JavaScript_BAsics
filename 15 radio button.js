document.getElementById("myButton").onclick = function(){
  //this easy to read
  const myCheckBox = document.getElementById("myCheckBox");
  const visaBtn = document.getElementById("visaBtn");
  const mastercardBtn = document.getElementById("mastercardBtn");
  const paypalBtn = document.getElementById("paypalBtn");


  if (myCheckBox.checked) {
    console.log("You are subscribed!");
  }

  else {
    console.log("You are not subscribed!");
  }
  if(visaBtn.checked){
    console.log("You are paying with a visa!");
  }
  else if(mastercardBtn.checked){
    console.log("You are paying with a Mastercard!");

  }
  else if(paypalBtn.checked){
    console.log("You are paying with a paypal!!");

  }
  else{
    console.log("You must select a payment type!");
  }

}
