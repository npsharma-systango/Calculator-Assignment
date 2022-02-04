let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'x') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'Clear All') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else if(buttonText=='B')
        {
            screen.value = screen.value.slice(0, - 1);
            screenValue = "";
            
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}

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