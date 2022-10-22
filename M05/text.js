var i = 1;                 // Set counter to 1
var msg = '<h2>Multiplication Table</h2>';      // Message

function myFunction(){
  var num = prompt("Please enter a number between 0 and 10:");
  if (num>0 && num<10){
  while(i<11){
   msg += i+'x'+num+'='+(i*num)+'<br/>';
   i++;
  }
  }else{
    alert('Invalid input!');
  }
}
 myFunction();

// Write the message into the page
document.getElementById('blackboard').innerHTML =msg;
