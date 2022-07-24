(() => {


    class DeQueue {

        items ={};
        itemToRemoveFrontKey =0;
        itemToAddRearKey =0;
        
        addToRear(item){
            this.items[this.itemToAddRearKey] = item;
            this.itemToAddRearKey++;

        }
        removeFromRear(){
            const itemToRemove = this.items[this.itemToAddRearKey - 1];
            delete this.items[this.itemToAddRearKey - 1];
            this.itemToAddRearKey--;
            return itemToRemove;
        }
        peekRear(){
            return this.items[this.itemToAddRearKey - 1];
        }

      
        addToFront(item){
          if(this.isEmpty()){
            this.addToRear(item);
          }
          else if (this.itemToRemoveFrontKey > 0){
            this.itemToRemoveFrontKey--;
            this.item[this.itemToRemoveFrontKey] = item;
          }
          else {
            for (let i = this.itemToAddRearKey; i >= 1; i--) {
              this.items[i] = this.items[i - 1];
            }
            this.items[0] = item;
            this.itemToAddRearKey++;
          }
        }
        removeFromFront() {
          const itemToRemove = this.items[this.itemToRemoveFrontKey];
          delete this.items[this.itemToRemoveFrontKey];
          this.itemToRemoveFrontKey++;
          return itemToRemove;
        }
        peekFront() {
          return this.items[this.itemToRemoveFrontKey - 1];
        }

        size() {
          return this.itemToAddRearKey - this.itemToRemoveFrontKey;
        }

        isEmpty() {
          return this.size() === 0;
        }

        clear() {
          this.items = {};
          this.itemToRemoveFrontKey = 0;
          this.itemToAddRearKey = 0;
        }
    }


    const myDequeue = new DeQueue();

    const renderDeQueue = (items = Object.values(myDequeue.items)) => {
        const boxElement = document.querySelector('.box');
        boxElement.querySelectorAll('.box_item').forEach((item) => item.remove());
        items.forEach((item) => {
          const itemElement = document.createElement('DIV');
          itemElement.classList.add('box_item');
          itemElement.textContent = item;
          boxElement.append(itemElement);
        });
      };
      
      const PEEK_SIDES = {
        FRONT: "front",
        REAR: "rear",
      };
      
      const peekDequeue = (side) => {
        const target =
          side === PEEK_SIDES.FRONT
            ? '.box_item:first-child'
            : '.box_item:last-child';
        const peekedElement = document.querySelector(target);
        if (!peekedElement) {
          return;
        }
        peekedElement.scrollIntoView();
        peekedElement.classList.add('peeking');
        setTimeout(() => {
          peekedElement.classList.remove('peeking');
        }, 500);
      };
      
      
      const initiateHandlers = () => {
        const addToRearBtn = document.querySelector('#addToRearBtn');
        const peekRearBtn = document.querySelector('#peekRearBtn');
        const removeFromRearBtn = document.querySelector('#removeFromRearBtn');
        const addToFrontBtn = document.querySelector('#addToFrontBtn');
        const peekFrontBtn = document.querySelector('#peekFrontBtn');
        const removeFromFrontBtn = document.querySelector('#removeFromFrontBtn');
        const insertFrontBtn = document.querySelector('#insertFrontBtn');
        const insertRearBtn = document.querySelector('#insertRearBtn');
        const clearBtn = document.querySelector('#clearBtn');
        
        clearBtn.addEventListener('click', () => {
          myDequeue.clear();
          renderDeQueue();
        });

       
        insertFrontBtn.addEventListener('click', () => {
          const inputVal = document.getElementById("myInput").value;

            if (inputVal == "" ){
                alert("Enter a value to Insert");
            }
            else{
            myDequeue.addToFront(inputVal);
            renderDeQueue();
            }
        });

        insertRearBtn.addEventListener('click', () => {
          const inputVal = document.getElementById("myInput").value;

            if (inputVal == "" ){
                alert("Enter a value to Insert");
            }
            else{
            myDequeue.addToRear(inputVal);
            renderDeQueue();
            }
        });
        
       
        addToFrontBtn.addEventListener('click', () => {
          const randomNumber = Math.round(Math.random() * 50 + 1);
          myDequeue.addToFront(randomNumber);
          renderDeQueue();
        });
       
        removeFromFrontBtn.addEventListener('click', () => {
          myDequeue.removeFromFront();
          renderDeQueue();
          peekDequeue(PEEK_SIDES.FRONT);
        });
        peekFrontBtn.addEventListener('click', () => {
          peekDequeue(PEEK_SIDES.FRONT);
        });

        
        addToRearBtn.addEventListener('click', () => {
          const randomNumber = Math.round(Math.random() * 50 + 1);
          myDequeue.addToRear(randomNumber);
          renderDeQueue();
        });
       
        removeFromRearBtn.addEventListener('click', () => {
          myDequeue.removeFromRear();
          renderDeQueue();
          peekDequeue(PEEK_SIDES.REAR);
        });
        peekRearBtn.addEventListener('click', () => {
          peekDequeue(PEEK_SIDES.REAR);
        });
        
      };
      
      const main = () => {
        initiateHandlers();
      };
      
      main();
})();