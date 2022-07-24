(() => {

    class Queue {
        items = {};
        itemToAddKey = 0;
        itemToRemoveKey = 0;
        add (item) {
            this.items[this.itemToAddKey] = item;
            this.itemToAddKey++;
        }

        isEmpty() {
            return this.size() === 0 ;
        }
        remove() {
            if (this.isEmpty()) {
               return undefined;
            }
            else
            {
                const item = this.items[this.itemToRemoveKey];
                delete this.items[this.itemToRemoveKey];
                this.itemToRemoveKey++;
                return item;
            }

        }
        clear() {
            this.items = {};
            this.itemToAddKey = 0;
            this.itemToRemoveKey = 0;
        }
        peek(){
            return this.items[this.itemToRemoveKey];
        }
        size() {
            return this.itemToAddKey-this.itemToRemoveKey;
        }
    }

    
    const myQueue = new Queue();
    
    const peekQueueElement = () => {
        const peekedElement = document.querySelector(".stack_item:first-child");
        if(!peekedElement){
            return;
        }
        peekedElement.classList.add("peeking");
        setTimeout(() => {
                peekedElement.classList.remove("peeking");
        } , 500);
    };
    


    const checkEmpty = () => {
        alert("Queue is Empty");
    }

    const initiateHandlers = () => {
        const addItemBtn = document.getElementById("add-item-btn");
        const remItemBtn = document.getElementById("remove-item-btn");
        const randItemBtn = document.getElementById("rand-item-btn");
        const clearItemBtn = document.getElementById("clear-item-btn");

        clearItemBtn.addEventListener('click', () => {
            myQueue.clear();
            renderQueue();
        });
        addItemBtn.addEventListener('click', () => {
            const inputVal = document.getElementById("myInput").value;

            if (inputVal == "" ){
                alert("Enter a value to Insert");
            }
            else{
            myQueue.add(inputVal);
            renderQueue();
            }
            
        });

        randItemBtn.addEventListener('click', () => {
            const randNum = Math.round(Math.random() * 50 + 1);
            myQueue.add(randNum);
            renderQueue();
            
        });
        
        remItemBtn.addEventListener('click', () => {
           const varCheck = myQueue.remove();
           if (varCheck == undefined) {
               checkEmpty();
           }
           else{
            renderQueue();
            peekQueueElement();
            }
            
        });
    };


    const renderQueue = () => {
        const queueEle =document.querySelector(".stack");
        queueEle.querySelectorAll(".stack_item").forEach((item) => item.remove());
        for ( const key in myQueue.items){
            const item =myQueue.items[key];
            const queueItemElement = document.createElement("DIV");
            queueItemElement.classList.add("stack_item");
            queueItemElement.textContent = item;
            queueEle.append(queueItemElement);
        }
    };

    const main = () => {
        
        initiateHandlers();
        peekQueueElement();
    }
    
    main();
})();