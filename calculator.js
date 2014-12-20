(function() {


	  var input1 = document.querySelector('#input1');
	  var input2 = document.querySelector('#input2');
	  var equals = document.querySelector('#equals');
	  var operators = document.querySelectorAll('.operators .button');
	  var answer = document.querySelector('#answer');
	  var operand1;
	  var operand2;
	  var selectedOperator;
	  var result = 0;


	  function add(operand1, operand2) {
	  	return operand1 + operand2;
	  }

	  function subtract(operand1, operand2) {
	  	return operand1 - operand2;
	  }

	  function multiply(operand1, operand2) {
	  	return operand1 * operand2;
	  }

	  function divide(numerator, denominator) {
	  	return numerator / denominator;
	  }

	  function sqrt(operand1) {
	  	return Math.sqrt(operand1);
	  }


	  equals.addEventListener('click', function(evt) {
	  	evt.preventDefault();

	  	if (isNaN(input1.value) || input1.value === '') {
	  		console.log('Please enter a number');
	  	}
	  	else if (isNaN(input2.value) || input2.value === '' && selectedOperator !== 'sqrt') {
	  		console.log('Please enter a number');
	  	}
	  	else {
	  		operand1 = Number(input1.value);
	  		operand2 = Number(input2.value);
	  	}


	  	switch (selectedOperator) {
	  		case 'add':
	  			result = add(operand1, operand2);
	  			answer.innerHTML = result;
	  			break;
	  		case 'subtract':
	  			result = subtract(operand1, operand2);
	  			answer.innerHTML = result;
	  			break;
	  		case 'multiply':
	  			result = multiply(operand1, operand2);
	  			answer.innerHTML = result;
	  			break;
	  		case 'divide':
	  			result = divide(operand1, operand2);
	  			answer.innerHTML = result;
	  			break;
	  		case 'sqrt':
	  			result = sqrt(operand1, operand2);
	  			answer.innerHTML = result;
	  			break;
	  		default:
	  			console.log('Didn\'t match');
	  	}
	  });


	  for (var i = 0; i < operators.length; i++) {
	  	var operator = operators[i];

	  	operator.addEventListener('click', function(evt) {
	  		evt.preventDefault();

	  		for (var j = 0; j < operators.length; j++) {
	  			operators[j].classList.remove('selected');
	  		}

	  		this.classList.add('selected');
	  		selectedOperator = this.id;

	  		if (selectedOperator === 'sqrt') {
	  			input2.setAttribute('disabled', true);
	  		} else {
	  			input2.setAttribute('disabled', false);
	  		}
	  	});
	  }
})();


































