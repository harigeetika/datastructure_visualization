
  const defaultEqFn = (a, b) => a === b;
  class Node {
      constructor(element){
          this.element = element;
          this.next = null;
          
      }
  }

  class LinkedList {
      constructor(equalsFn = defaultEqFn) {
          this.head = null;
          this.count = 0;
          this.equalsFn = equalsFn;
      }

      push(element) {
          let cur;
          const node = new Node(element);
          if(this.head==null){
              this.head = node;
          }
          else{
              cur = this.head;
              while(cur.next != null){
                  cur = cur.next
              }
              cur.next = node;
          }
          this.count++;
      }
      removeAt(index)
      {
        if ( index <0 || index >= this.size()){
          return undefined;
        }
        let current = this.head;
        if (index === 0){
          this.head = current.next;
        }
        else
        {
          const prev = this.getElementAt(index-1);
          current= prev.next;
          prev.next=current.next;
        }
        this.count--;
        return current.element;
      } 

      getElementAt(index){
        if ( index <0 || index >= this.size()){
          return undefined;
        }
         let current = this.head;
         for(let i = 0; i <index && current != null ; i++){
           current= current.next;
         }
         return current;

      }

      insertAt(element, index) {
        if (index < 0 || index > this.size()) {
          return undefined;
        }
    
        const node = new Node(element);
        if (index === 0) {
          const current = this.head;
          node.next = current;
          this.head = node;
        } else {
          const previous = this.getElementAt(index - 1);
          const current = previous.next;
          node.next = current;
          previous.next = node;
        }
        this.count++;
        return node;
      }
      search(element) {
        let current = this.head;
        for (let i = 0;i <this.size() && current != null ;i++)
        {
          if(this.equalsFn(element,current.element)){
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
                  if (Number(i) == 0) {
                    var index = Number(i)+1;
                    console.log(index);
                  }
                  else{
                    
                      var index = (Number(i)*2) + 1 ;
                  }
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

      remove(element){
        const index = this.search(element);
        return this.removeAt(index);
      }
      clear() {
        this.head = null;
        this.count = 0;
      }
      size() {
          return this.count;
      }
      isEmpty() {
         return this.size() == 0;
      }
      getHead(){

      }
  }




  const linkedList = new LinkedList();
  var ll = 0;

  const peekElement = (val) => {
  if (Number(val) == 0) {
    var index = Number(val)+1;
  }
  else{
    
      var index = (Number(val)*2) + 1 ;
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
              linkedList.push(inputVal);
              info.innerHTML =  `Element ${inputVal} Inserted`;
              renderLinkedList(linkedList);
              
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
          if(Number(posInput) > linkedList.size()){
            alert("index position is greater than size of the list");
          }
          else{
          linkedList.insertAt(insertAtInput, Number(posInput));
          info.innerHTML =  `Element ${insertAtInput} Inserted at Index ${posInput} `;
          renderLinkedList(linkedList);
          peekElement(posInput);
          }
          
        });

        searchBtn.addEventListener('click' , () => {
          const searchInput = document.getElementById("searchInput").value;
          if (searchInput == "" ){
            alert("Enter a value to Insert");
        }
        else{
          const index = linkedList.search(searchInput);
          if (index >= 0) {
            info.innerHTML =  `Element ${searchInput} found at Index ${index}`;
            
          } else {
            info.innerHTML =  `Element ${searchInput} not Found!`;
            
          }
        }
        });

        removeBtn.addEventListener('click', () => {
          const removeVal = document.getElementById("removeInput").value;
          
          if (removeVal == "" ){
              alert("Enter an value");
          }
          else {
            const removeele = linkedList.remove(removeVal);
            if (removeele) {
              info.innerHTML =  `Element ${removeVal} Removed`;
              renderLinkedList(linkedList);
            } else {
              info.innerHTML =  `Element ${removeVal} not Found!`;
            }
          }
        });

        clearBtn.addEventListener('click', () => {
          linkedList.clear();
          info.innerHTML = "List is Empty";
          renderLinkedList(linkedList);
        });

  };

  const renderLinkedList = (linkedList) => {
      const boxElement = document.querySelector('.box');
      boxElement.querySelectorAll('.box-item').forEach((item) => item.remove());
      boxElement.querySelectorAll('.img1').forEach((item) => item.remove());
      let current = linkedList.head;
      if (linkedList.head === null) {
        return;
      }
      for (let i = 0; i < linkedList.size() && current !== null; i++) {
        const itemElement = document.createElement('DIV');
        itemElement.classList.add('box-item');
        itemElement.textContent = current.element;
        boxElement.append(itemElement);
        const arrowElement = document.createElement('IMG');
        arrowElement.classList.add('img1');
        arrowElement.src='pointer.png';
        boxElement.append(arrowElement);
        current = current.next;
      }
    };


  const main = () => {
    
      initiateHandlers(linkedList, renderLinkedList);
      renderLinkedList(linkedList);
    };
    
    main();


 

