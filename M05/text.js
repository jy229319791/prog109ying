var table = 3;             // Unit of table
var operator = 'addition'; // Type of calculation
var i = 1;                 // Set counter to 1
var msg = '<h2>Multiplication Table</h2>';      // Message

function myFunction(){
  var num = prompt("Please enter a number", "1");
  if (operator === 'multiplication') {
    // Do multiplication
    while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
} else {
    alert('Invalid input!');
}
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
