var position = 0;
var speed = 100;
var command = document.getElementById('command').innerText;
var cli_output = document.getElementById('cli_output').innerHTML;

document.getElementById('command').innerHTML = '';
document.getElementById('cli_output').innerHTML = '';

setTimeout(typeCommand, speed);

function typeCommand() {
  if (position < command.length) {
    document.getElementById("command").innerHTML += command.charAt(position);
    position++;
    setTimeout(typeCommand, speed);
  } else if (position == command.length) {
    document.getElementById('command').innerText = '';
    position=0;
    setTimeout(insertOutput, 500);
    }
  }

  function insertOutput() {
    document.getElementById('cli_output').innerHTML = cli_output;
  }
