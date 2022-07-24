class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
      this.previous = null;
  }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
        this.tail = this.head;
        
    }

    clear() {
      this.head = null;
      this.tail=null
            this.lenght = 0;
           
    }

    search(element) {
      let current = this.head;
      for (let i = 0;i <this.size() && current != null ;i++)
      {
        if( element == current.value ){
          task(i);
            return i;
          }
          else
          {
            task(i);
            current = current.next;
          }
            
            function task(i)
            {
                  var index = Number(i)+1 ;
              
                  const peekedElement = document.querySelector(`.box-item:nth-child(${index})`);
                  if(!peekedElement){
                      return;
                  }
                  
                  setTimeout(function() {
                          peekedElement.classList.add("peeking");
                          peekedElement.classList.add("current");
                          setTimeout(function(){
                            peekedElement.classList.remove("peeking");
                            peekedElement.classList.remove("current");
                          },500);
                  } , 1000*i);
                }
        }
      return -1;
    } 

    
    append(value) {
        let newNode = new Node(value);
        if( this.head == null && this.tail== null){
          this.head = newNode;
          this.tail = newNode;
        }
        else{
        this.tail.next = newNode;
        newNode.previous = this.tail;
        this.tail = newNode;
        }
        this.length++;
    }

    
    prepend(value) {
        let newNode = new Node(value);
        if( this.head == null && this.tail== null){
          this.head = newNode;
          this.tail = newNode;
        }
        else{
        newNode.next = this.head;
        this.head.previous = newNode;
        this.head = newNode;
        }
        this.length++;
        
    }

   
    insert (index, value) {
        if (!Number.isInteger(index) || index < 0 || index > this.length + 1) {
            alert(`Invalid index. Current length is ${this.length}.`);
            return this;
        }

        if (index === 0) {
            this.prepend(value);
            return this;
        }

       
        if (index === this.length) {
            this.append(value);
            return this;
        }

        // Reach the node at that index
        let newNode = new Node(value);
        let previousNode = this.head;
        for (let k = 0; k < index - 1; k++) {
            previousNode = previousNode.next;
            }

        let nextNode = previousNode.next;
        
        newNode.next = nextNode;
        previousNode.next = newNode;
        newNode.previous = previousNode;
        nextNode.previous = newNode;

        this.length++;
    }

    // Remove a node
    remove(index) {
        
      if (!Number.isInteger(index) || index < 0 || index > this.length) {
          alert(`Invalid index. Current length is ${this.length}.`);
          return; 
      }
      
      // Remove head
      if (index === 0) {
          const val = this.head.value;
          this.head = this.head.next;
          this.head.previous = null;

          this.length--;
          return val;
      }

      // Remove tail
      if (index === this.length - 1) {
          const val = this.tail.value;
          this.tail = this.tail.previous;
          this.tail.next = null;

          this.length--;
          return val;
      }

      // Remove node at an index
      let previousNode = this.head;

      for (let k = 0; k < index - 1; k++) {
          previousNode = previousNode.next;
      }
      let deleteNode = previousNode.next;
      const val = deleteNode.value;
      let nextNode = deleteNode.next;

      previousNode.next = nextNode;
      nextNode.previous = previousNode;

      this.length--;
      return val;
  }

    size() {
        return this.length;
    }
}

const myDoublyList = new DoublyLinkedList();


const peekElement = (val) => {
    if (Number(val) == 0) {
      var index = Number(val)+1;
    }
    else{
      
        var index = Number(val)+1 ;
    }
      const peekedElement = document.querySelector(`.box-item:nth-child(${index})`);
      if(!peekedElement){
          return;
      }
      peekedElement.classList.add("peeking");
      setTimeout(() => {
              peekedElement.classList.remove("peeking");
      } , 500);
};

const initiateHandlers = () => {
    const pushBtn = document.querySelector('#pushBtn');
    const prependBtn = document.querySelector('#prependBtn');
    const insertAtBtn = document.querySelector('#insertAtBtn');
    const searchBtn = document.querySelector("#searchBtn");
    const removeBtn = document.querySelector('#removeBtn');
    const clearBtn = document.querySelector("#clearBtn");
    const info = document.querySelector('.info');


    pushBtn.addEventListener('click', () => {
        const inputVal = document.getElementById("pushInput").value;
        
          if (inputVal == "" ){
              alert("Enter a value to Insert");
          }
          else{
            myDoublyList.append(inputVal);
            info.innerHTML =  `Element ${inputVal} Inserted`;
            renderDoubleLinkedList(myDoublyList);
          }
      });

      prependBtn.addEventListener('click', () => {
        const inputVal = document.getElementById("prependInput").value;
        
          if (inputVal == "" ){
              alert("Enter a value to Insert");
          }
          else{
            myDoublyList.prepend(inputVal);
            info.innerHTML =  `Element ${inputVal} Inserted`;
            renderDoubleLinkedList(myDoublyList);
          }
      });

      insertAtBtn.addEventListener('click', () => {
        const insertAtInput = document.getElementById("insertAtInput").value;
            const posInput = document.getElementById("posInput").value;
       
            if (insertAtInput == "" ){
                alert("Enter a value to Insert");
            }
            if(posInput == "" ){
              alert("Enter a value to Insert");
            }
            if(Number(posInput) > myDoublyList.size()){
              alert("index position is greater than size of the list");
            }
            else{
              myDoublyList.insert(Number(posInput),insertAtInput);
              info.innerHTML =  `Element ${insertAtInput} Inserted at Index ${posInput} `;
              renderDoubleLinkedList(myDoublyList);
              peekElement(posInput);
            }
      });

      searchBtn.addEventListener('click' , () => {
        const searchVal = document.getElementById("searchInput").value;
            if (searchVal == "" ){
              alert("Enter a value to Insert");
          }
          else{
            const index = myDoublyList.search(searchVal);
            console.log(index);
            if (index >= 0) {
              info.innerHTML =  `Element ${searchVal} found at Index ${index}`;
              
            } else {
              info.innerHTML =  `Element ${searchVal} not Found!`;
            }
       }
      });
      
      removeBtn.addEventListener('click', () => {
        const removeVal = document.getElementById("removeInput").value;
        
        if (removeVal == "" )
        {
            alert("Enter an value");
        }
        else 
        {
          const removeele = myDoublyList.remove(Number(removeVal));
          if (removeele) 
          {
            info.innerHTML =  `Element ${removeele} Removed at index ${removeVal}`;
            renderDoubleLinkedList(myDoublyList);
          } else {
            info.innerHTML =  "Invalid Index! ";
          }
        }
      });

      clearBtn.addEventListener('click', () => {
        myDoublyList.clear();
        info.innerHTML =  `List is Empty`;
        renderDoubleLinkedList(myDoublyList);
      });
};

const renderDoubleLinkedList = (myDoublyList) => {
      const boxElement = document.querySelector('.box');
      boxElement.querySelectorAll('.box-item').forEach((item) => item.remove());
    
      let current = myDoublyList.head;
    
      if (myDoublyList.head === null) {
        return;
      }
      for (let i = 0; i < myDoublyList.size() && current !== null; i++) {
        const itemElement = document.createElement('DIV');
        itemElement.classList.add('box-item');
        itemElement.innerHTML = `
          <div class="fa fa-arrow-left"></div>
          <div class="box-item-text">${current.value}</div>
          <div class="fa fa-arrow-right"></div>
          `;
          boxElement.append(itemElement);
          current = current.next;
      }
  };


    const main = () => {
                
        initiateHandlers(myDoublyList, renderDoubleLinkedList);
        renderDoubleLinkedList(myDoublyList);
      };
      
      main();



   