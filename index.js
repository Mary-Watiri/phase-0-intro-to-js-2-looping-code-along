// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Akin"];
function writeCards(names) {
  let thankYouMessages = [];
  for (let m = 0; m < names.length; m++) {
  let message = `Thank you, ${names[m]}, for the wonderful surprise gift!`;

  thankYouMessages.push(message);
  }
 return thankYouMessages;
}
console.log(writeCards(names));
function countDown(number){
  let  z = 10;
  while(z>=0){
    console.log(z);
    z--;
  }
}
countDown(10);

    


    


