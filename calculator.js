(function() {

		var calc = document.querySelector('#calculator');
	  var input1 = document.querySelector('#input1');
	  var input2 = document.querySelector('#input2');
	  var operators = document.querySelectorAll('.operators .button');
	  var equals = document.querySelector('#equals');
	  var answer = document.querySelector('#answer');
	  var clear = document.querySelector('#clear');
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

	  function clearAll() {
	  	input1.value = '';
	  	input2.value = '';

	  	for (var i = 0; i < operators.length; i++) {
	  		operators[i].classList.remove('selected');
	  	}

	  	answer.innerHTML = 0;
	  }

	  // clicking the equal sign performs the selected operation
	  equals.addEventListener('click', function(evt) {
	  	evt.preventDefault();

	  	// validate user input
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


	  	// perform selected operator and display answer on page
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
	  			answer.innerHTML = Math.round(result * 10000) / 10000;
	  			break;
	  		case 'sqrt':
	  			result = sqrt(operand1, operand2);
	  			answer.innerHTML = Math.round(result * 10000) / 10000	;
	  			break;
	  		default:
	  			console.log('Didn\'t match');
	  	}
	  });

		
	  for (var i = 0; i < operators.length; i++) {
	  	var operator = operators[i];

	  	operator.addEventListener('click', function(evt) {
	  		evt.preventDefault();

	  		// clear selected class from all operators
	  		// before adding to the currently selected one
	  		for (var j = 0; j < operators.length; j++) {
	  			operators[j].classList.remove('selected');
	  		}

	  		// style the selected operator and store which was selected
	  		// unless it's the clear button
  			this.classList.add('selected');
  			// input2.setAttribute('disabled', false);
  			selectedOperator = this.id;

	  		// disable the second input if square root is selected
	  		if (selectedOperator === 'sqrt') {
	  			input2.setAttribute('disabled', true);
	  		} else {
	  			input2.removeAttribute('disabled');
	  		}
	  	});
	  }

	  
	  clear.addEventListener('click', function() {
	  	clearAll();
	  });

})();





