const display = document.getElementById("display");

var content = "";
var perviousOperator = false;
var isSign = false;
var lastInteger = "";
var lastIntIndex = 0;
var index = 0;
var currentOperator = 0;   


function append(input) {

    if(isNumber(input) || isNotNum(input)) {

        // Check if input is operator
        if(isNotNum(input)) {

            // Keep from adding mulitple operators
            if(!perviousOperator){
                perviousOperator = true;                
                
                index++;  
                currentOperator = index - 1;   
                
                content += input;
                display.innerHTML = content

            } else {
                // Change operator 
                content = content.slice(0, currentOperator);
                
                content += input;
                display.innerHTML = content;
            }

        } else {
            perviousOperator = false;
            content += input;
            index++;

            display.innerHTML = content

        }

        
         
        // Used for handling sign change
        if(isNotNum(input) && input != '.'){
            lastInteger = "";
            lastIntIndex = 0;
            isSign = false;
        }
        
        if(!isNotNum(input) || input == '.'){
            if(lastInteger == ""){
                lastInteger = input;
                lastIntIndex = index;
            } else {
                lastInteger += input;
            }
        }
               
    } else {
        display.innerHTML = "BRUH";
    }

    display.scrollLeft = display.scrollWidth;
}  

function isNumber(str) {
    if (typeof str != "string") {
        return false;
    } else {
        return !isNaN(str) && !isNaN(parseFloat(str));
    }
}

function sign() {

    if(content != "" && isSign && !isNotNum(content[index - 1])) {

        // Special Case for first integer
        if(lastIntIndex == 2){
            lastInteger = lastInteger * -1;
            lastInteger = lastInteger.toString();

            content = lastInteger;
            
            console.log(content);
            display.innerHTML = content;
            isSign = false;
            lastIntIndex--;
            index--;
            
            return;
        } else {

            // For any other integer
            lastInteger = lastInteger * - 1;
            lastInteger = lastInteger.toString();

            content = content.slice(0, lastIntIndex - 1); 
            content += lastInteger;

            display.innerHTML = content;
            isSign = false;
            index--;

            return;
        }
    }


    if(content != "" && !isSign && !isNotNum(content[index - 1])){
        
        // Special Case for first integer
        if(lastIntIndex == 1){
            lastInteger = lastInteger * -1;
            lastInteger = lastInteger.toString();
            content = lastInteger;
  
            display.innerHTML = content;
            isSign = true;
            lastIntIndex++;
            index++;
            return;

        } else {
            
            // For any other integer
            lastInteger = lastInteger * -1;
            lastInteger = lastInteger.toString();


            content = content.slice(0, lastIntIndex - 1); 
            content += lastInteger;

            display.innerHTML = content;
            isSign = true;
            index++;
            
            return;
        }
    }    
}

function isNotNum(operator) {
    let operators = ['+', '-', '/', '*', '^', '.'];
    
    for(let i = 0; i < 6; i++){
        if(operator == operators[i]) {
            return true;
        }
    }

    return false;
}

function back() {
    if(index > 1){
       
        content = content.slice(0, index - 1);
        display.innerHTML = content;
        index--;
        
        if(!isNotNum(content[index - 1])){
            let tempInt = "";
            for(let i = index - 2; i > 0; i--){
                if(!isNotNum(content[i])){
                    tempInt += content[i];
                } else {
                    break;
                }
            }
            lastInteger = tempInt;
        }

            
    } else {
        clearDisplay();
    }

}


function clearDisplay() {
    perviousOperator = false;
    isSign = false;
    display.innerHTML = '0';
    content = "";
    lastInteger = "";
    lastIntIndex = 0;
    index = 0;
}

function equal() {
    if(content != "") {
        let temp = eval(content);
        console.log(content);

        perviousOperator = false;
        isSign = false;
        lastIntIndex = 1;
        index = 1;

        content = temp;
        lastInteger = temp;
        console.log(lastInteger);
        display.innerHTML = content;

        if(content[0] == '-') {
            lastIntIndex++;
        }
        console.log(lastIntIndex)
    }
}