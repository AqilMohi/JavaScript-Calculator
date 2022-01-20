class Calculator {
    constructor(previousOperationTextElement, currentOperationTextElement){
        this.previousOperationTextElement = previousOperationTextElement
        this.currentOperationTextElement = currentOperationTextElement
        this.clear()
    }

    clear(){
        this.previousOperation = ' '
        this.currentOperation = ' '
        this.operation = undefined

    }

    delete(){
        this.currentOperation = this.currentOperation.toString().slice(0, -1)

    }

    appendNumberOnScreen(number){
        if(number === '.' && this.currentOperation.includes('.')) return
        this.currentOperation = this.currentOperation.toString() + number.toString()

    }

    chooseOperation(operation){
        if (this.currentOperation === '') return
        if (this.previousOperation !== ''){
            this.computation()
        }
        this.operation = operation
        this.previousOperation = this.currentOperation
        this.currentOperation = ''

    }

    computation(){
        let calculation
        const previous = parseFloat(this.previousOperation)
        const current = parseFloat(this.currentOperation)
        if (isNaN(previous) || isNaN(current)) return
        switch(this.operation){
            case '+' :
                calculation = previous + current
                break
            case '-' :
                calculation = previous - current
                break
            case '*' :
                calculation = previous * current
                break
            case '÷' :
                calculation = previous / current
                break
            default:
                    return
        }
        this.currentOperation = calculation
        this.operation = undefined
        this.previousOperation = ''

    }

    updateNumberOnScreen(){
        this.currentOperationTextElement.innerText = this.currentOperation
        this.previousOperationTextElement.innerText = this.previousOperation
        this.KeyboardEvent.innerText = this.KeyboardEvent
        }
        
    }

const numberButtons = document.querySelectorAll('[data-number]')
 const operationButtons = document.querySelectorAll('[data-operation]')
 const equalstoButton = document.querySelector('[data-equals-to]')
 const allclearButton = document.querySelector('[data-all-clear]')
 const deleteButton = document.querySelector('[data-delete]')
 const previousOperationTextElement = document.querySelector ('[data-previous-operation]')
 const currentOperationTextElement = document.querySelector ('[data-current-operation]')
 const keyboardPress = document.querySelectorAll ('[calculatot-grid]')
 
 const calculator = new Calculator (previousOperationTextElement, currentOperationTextElement)

 numberButtons.forEach(button => {
     button.addEventListener('click', () => {
         calculator.appendNumberOnScreen(button.innerText)
         calculator.updateNumberOnScreen()
     })
 })
 operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateNumberOnScreen()
    })
})

equalstoButton.addEventListener('click' , button => {
    calculator.computation()
    calculator.updateNumberOnScreen()
})

allclearButton.addEventListener('click' , button => {
    calculator.clear()
    calculator.updateNumberOnScreen()
})

deleteButton.addEventListener('click' , button => {
    calculator.delete()
    calculator.updateNumberOnScreen()
})