

class Calculator {
    constructor(){
        this.left=0;
        this.right=null;
        this.operator =null;
    }
    //X+Y
    display() {
        if (this.operator === null || this.right === null)
            return this.left.toString();
        else
            return this.right.toString();
    }

    setNumberInput(numberInput) {
        if (this.operator === null)
            this.left = parseInt(`${this.left.toString()}${numberInput}`)
        else if (this.right === null)
            this.right = parseInt(numberInput);
        else
            this.right = parseInt(`${this.right.toString()}${numberInput}`)
    }

//1+2=
    //
    setOperationInput(operationInput){
        if (OPERATION[operationInput] === OPERATION.CLEAR){
            this.clear();
            return;
        }
        if(this.operator !== null){
            this.operation()
        }


        this.operator = operationInput;
    }

    operation(){
        const operator = OPERATION[this.operator];
        if(operator === null) return;

        if (operator === OPERATION.ADD) this.add();
        if (operator === OPERATION.MINUS) this.minus();
        if (operator === OPERATION.MULTIPLY) this.multiply();
        if (operator === OPERATION.SUB) this.sub();
        if (operator === OPERATION.EQUAL) this.equal();


    }
    clear(){
        this.left = 0;
        this.right = null;
        this.operator = null;
    }
    add() {
        this.left = this.left + this.right;
        this.right = null;

    }
    equal(){
        if(this.right !== null) {
            this.left = this.right;
            this.right = null;
        }
    }
    minus(){
        this.left = this.left - this.right;
        this.right = null;
    }
    multiply(){
        this.left = this.left * this.right;
        this.right = null;

    }
    sub() {
        if(this.left ===0) {
            alert("Error: initial number is zero");
            this.left = 0;
            this.right = null;
            this.operator = null;

        } else if(this.right === 0){
            alert("Error: division by zero");
            this.left = 0;
            this.right = null;
            this.operator = null;

        } else {
            this.left = this.left / this.right;
            this.right = null;
        }


    }}




