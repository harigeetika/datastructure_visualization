(() => {

    class Stack {
        items = [];
        
        add (item) {
            return this.items.push(item);
        }

        isEmpty() {
            return this.items.lenght === 0 ;
        }
        takeOut() {
            if (this.isEmpty()) {
               return undefined;
            }
            else
            {
            return this.items.pop();
            }

        }
        clear(){
            this.items = [];
            this.items.length = 0;
        }
        size() {
            return this.items.length;
        }
        peek(){
            return this.items[this.item.lenght-1];
        }
    }

    
    const myStack = new Stack();

    const peekStackItem = () => {
        const peekVal = document.querySelector(".stack_item:first-child");
        if (peekVal == undefined) {
            checkEmpty();
        }
        else
        {
        peekVal.classList.add("peeking");
        setTimeout( () => {
            peekVal.classList.remove("peeking");},  500);
        }
    }
    
    const checkEmpty = () => {
        alert("Stack is Empty");
    }
    
    const initiateHandlers = () => {
        const addItemBtn = document.getElementById("add-item-btn");
        const delItemBtn = document.getElementById("del-item-btn");
        const peekItemBtn = document.getElementById("peek-btn");
        const randItemBtn = document.getElementById("rand-item-btn");
        const clearItemBtn = document.getElementById("clear-btn");

        addItemBtn.addEventListener('click', () => {
            const inputVal = document.getElementById("myInput").value;

            if (inputVal == "" ){
                alert("Enter a value to Insert");
            }
            else{
            myStack.add(inputVal);
            renderStack();
            }
            
        });
        
        clearItemBtn.addEventListener('click', () => {
            myStack.clear();
            renderStack();
            
        });
        
        randItemBtn.addEventListener('click', () => {
            const randNum = Math.round(Math.random() * 50 + 1);
            myStack.add(randNum);
            renderStack();
            
        });
        
        delItemBtn.addEventListener('click', () => {
           const varCheck = myStack.takeOut();
           if (varCheck == undefined) {
               checkEmpty();
           }
           else{
            renderStack();
            peekStackItem();
            }
            
        });

        peekItemBtn.addEventListener('click', () => {
     
           peekStackItem();
        });
    };

    const renderStack = () => {
        const stackElement = document.querySelector(".stack");
        stackElement.querySelectorAll(".stack_item").forEach((item) => item.remove());
        myStack.items.forEach((item) => {
            const stackItemElement = document.createElement("DIV");
            stackItemElement.classList.add("stack_item");
            stackItemElement.textContent = item;
            stackElement.prepend(stackItemElement);
        });
    };
    
    initiateHandlers();
})();