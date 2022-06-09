

//all the operation and number buttons picked//
const numberButtons = document.querySelectorAll('[number]')
const operationButtons = document.querySelectorAll('[operation]')


// single element chosen//
const clearButton = document.querySelector('[clear]')
const delButton = document.querySelector ('[delete]')
const equalButton = document.querySelector('[total]')


// current and previous operand
const  currentOperandTextElement = document.querySelector('[data-current-operand]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')

// creating a class will take all inputs in it as well as functions bu taking our previous operand and our current operand 
//to store the information on the output//
//in order to know where to place the text on the calculator 


class myCalculator{
    constructor(previousOperandTextElement,currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }   

clear(){
    this.currentOperand = ''
    this.previousOperand=''
    this.operation = undefined 
}

delete(){

this.currentOperand = this.currentOperand.toString().slice(0,-1)


    }

    appendNumber(number){
        if(number=== '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()

    }
chooseOperation(operation){ 
    if(this.currentOperand === '') return
    if(this.previousOperand !== ''){
        this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''




}
compute(){
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if(isNaN(prev) || isNaN(current)) return
    switch(this.operation){
        case '+':
            computation= prev + current
            break 
        
        case '-':
            computation= prev - current
             break 

        case '*':
            computation= prev * current
            break 
        
        case '÷':
            computation= prev / current
            break 
        default:
            return
    }
    this.currentOperand =computation
    this.operation = undefined
    this.previousOperand = ''

}


updateDisplay(){
this.currentOperandTextElement.innerText = this.currentOperand
if (this.operation != null){
    
     this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`
    }

  }
}



const calculator = new myCalculator(previousOperandTextElement,currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click',() =>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})


operationButtons.forEach(button => {
    button.addEventListener('click',() =>{
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})


equalButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})


clearButton.addEventListener('click', button =>{
    calculator.clear()
    calculator.updateDisplay()
})

delButton.addEventListener('click', button =>{
    calculator.delete()
    calculator.updateDisplay()
})
