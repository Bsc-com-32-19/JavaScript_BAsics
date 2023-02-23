//useful string properties and methods
let userName = " Mimi Yambeni ";
let phoneNumber = "099-4149-258";

console.log(userName.length);
console.log(userName.charAt(0));
console.log(userName.indexOf("0"));
console.log(userName.lastIndexOf("0"));
userName = userName.trim();
userName = userName.toLocaleUpperCase();
userName = userName.toLowerCase();

phoneNumber = phoneNumber.replaceAll("", "");
console.log(phoneNumber);