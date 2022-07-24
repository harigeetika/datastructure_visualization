function TreeNode(e) {
    this.element = e;
    this.left = null;
    this.right = null;
}

function BST() {
    this.root = null;
    this.size = 0;
}

BST.prototype.createNewNode = function(e) {
    return new TreeNode(e);
}

BST.prototype.search = function(e) {
    var current = this.root; 

    while (current != null) {
        if (e < current.element) {
            current = current.left;
        }
        else if (e > current.element) {
            current = current.right;
        }
        else 
            return true; 
    }

    return false;
}
BST.prototype.insert = function(e) {
    if (this.root == null)
        this.root = this.createNewNode(e); 
    else {
        var parent = null;
        var current = this.root;
        while (current != null)
            if (e < current.element) {
                parent = current;
                current = current.left;
            }
            else if (e > current.element) {
                parent = current;
                current = current.right;
            }
            else
                return false; 
        if (e < parent.element) {
            parent.left = this.createNewNode(e);
        }
        else {
            parent.right = this.createNewNode(e);
        }
    }

    this.size++;
    return true; 
}
BST.prototype.remove = function(e) {
    var parent = null;
    var current = this.root;
    while (current != null) {
        if (e < current.element) {
            parent = current;
            current = current.left;
        }
        else if (e > current.element) {
            parent = current;
            current = current.right;
        }
        else
            break; 
    }

    if (current == null)
        return false; 

    if (current.left == null) {
        if (parent == null) {
            root = current.right;
        }
        else {
            if (e < parent.element)
                parent.left = current.right;
            else
                parent.right = current.right;
        }
    }
    else {
        var parentOfRightMost = current;
        var rightMost = current.left;

        while (rightMost.right != null) {
            parentOfRightMost = rightMost;
            rightMost = rightMost.right; 
        }

        current.element = rightMost.element;
        if (parentOfRightMost.right == rightMost)
            parentOfRightMost.right = rightMost.left;
        else
            parentOfRightMost.left = rightMost.left;
    }

    this.size--;
    return true; 
} 
BST.prototype.isEmpty = function() {
    return this.root == null;
}
BST.prototype.getSize = function() {
    return this.size;
}
BST.prototype.clear = function(){
  this.root = null;
  this.size = 0;
}
BST.prototype.path = function(e) {
    list = [];
    var current = this.root; 

    while (current != null) {
        list.push(current);
        if (e < current.element) {
            current = current.left;
        }
        else if (e > current.element) {
            current = current.right;
        }
        else
            break;
    }

    return list; 
}

BST.prototype.getRoot = function() {
    return this.root;
}

BST.prototype.getInorder = function(root) {
    if (root != null)
        return this.getInorder(root.left) + " " + root.element + " " +
                this.getInorder(root.right);
    else
        return "";
}

BST.prototype.getPreorder = function(root) {
    if (root != null) {       
        return root.element + " " + this.getPreorder(root.left) 
                + " " + this.getPreorder(root.right);
    }
    else
        return "";
}

BST.prototype.getPostorder = function(root) {
    if (root != null)
        return this.getPostorder(root.left) + " " +
                this.getPostorder(root.right) + " " + root.element;
    else
        return "";
}

    tree = new BST();
    vGap = 40;
    radius = 20;
    draw();
    function clearr() {
      tree.clear()
      var info = document.querySelector('.info');
      info.innerHTML="Tree Cleared";
        draw();
    }
    function draw() {
        var canvas = document.getElementById('canvas');
        var context = canvas.getContext("2d");
        canvas.width = window.innerWidth - 20;
        canvas.height = 230; 
        context.clearRect(0, 0, canvas.width, canvas.height); 

        context.font = "14px sans-serif";
        context.strokeStyle = "#100"; 

        if (tree.isEmpty()) {
          context.fillText("Tree is Empty", canvas.width / 2 - 50, 15);
        }
        else {
          x = canvas.width / 2;
          y = 30;

          drawTree(context, x, y, radius, tree.root, canvas.width / 4);
        }

        context.stroke();
      }

    function drawTree(context, x, y, radius, root, hGap) {
        context.fillText(root.element + "", x - 5, y + 5);
        context.arc(x, y, radius, 0, Math.PI * 2, false);

        if (root.left != null) {
          connectTwoCircles(context, x, y, x - hGap, y + vGap);
          context.moveTo(x - hGap + radius, y + vGap);
          drawTree(context, x - hGap, y + vGap, radius, root.left, hGap / 2);
        }

        if (root.right != null) {
          connectTwoCircles(context, x, y, x + hGap, y + vGap);
          context.moveTo(x + hGap + radius, y + vGap);
          drawTree(context, x + hGap, y + vGap, radius, root.right, hGap / 2);
        }
      }
    function connectTwoCircles(context, x1, y1, x2, y2) {
        var d = Math.sqrt(vGap * vGap + (x2 - x1) * (x2 - x1));
        var x11 = x1 - radius * (x1 - x2) / d;
        var y11 = y1 - radius * (y1 - y2) / d;
        var x21 = x2 + radius * (x1 - x2) / d;
        var y21 = y2 + radius * (y1 - y2) / d;
        context.moveTo(x11, y11);
        context.lineTo(x21, y21);
      }

    function drawArrowLine(context, x1, y1, x2, y2) {
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        var slope = (y1 - y2) / (x1 - x2);

        var arctan = Math.atan(slope);
        var set45 = 1.57 / 2;
        if (x1 < x2) {
          set45 = -1.57 * 1.5;
        }
        var arrlen = 5;
        context.moveTo(x2, y2);
        context.lineTo(x2 + Math.cos(arctan + set45) * arrlen,
                y2 + Math.sin(arctan + set45) * arrlen);

        context.moveTo(x2, y2);
        context.lineTo(x2 + Math.cos(arctan - set45) * arrlen,
                y2 + Math.sin(arctan - set45) * arrlen);
      }

    function remove1() {
      var info = document.querySelector('.info');
        if (tree.isEmpty()) {
          alert("The tree is empty");
        }
        else {
          var value = document.getElementById('removeInput').value.trim();
          if (value == "") {
            alert("no key entered");
          }
          else if (tree.search(parseInt(value))) {
            tree.remove(parseInt(value));
            info.innerHTML =`Element ${value} Deleted`;
            draw();
          }
          else {
            info.innerHTML =`Element ${value} Not Found in the Tree!`;
          }
        }
      }

    function insert() {
        var value = document.getElementById('myInput').value.trim();
        var info = document.querySelector('.info');
        if (value == "") {
          alert("no key entered");
        }
        else if (tree.search(parseInt(value))) {
          info.innerHTML =  `Element ${value} already Exists`;
        }
        else {
          tree.insert(parseInt(value));
          info.innerHTML =  `Element ${value} Inserted`;
          draw();
        }
      }

    

    function search() {
        var value = document.getElementById('searchInput').value.trim();
        var info = document.querySelector('.info');
        if (value == "") {
          alert("no key entered");
        }
        else {
          if (tree.search(parseInt(value))) {
            info.innerHTML =  `Element ${value} is present in the Tree`;
          }
          else {
            info.innerHTML =  `Element ${value} dosent Exist`;
          }
        }
      }
    
    function inorder() {
      var info = document.querySelector('.info');
      var str = tree.getInorder(tree.getRoot());
        if (tree.getSize() == 0)
          alert("The tree is empty");
        else
          info.innerHTML =  `The Inorder traversal(LCR) is ${str}`;
      }

      function preorder() {
        var info = document.querySelector('.info');
        var str = tree.getPreorder(tree.getRoot());
          if (tree.getSize() == 0)
            alert("The tree is empty");
          else
            info.innerHTML =  `The PreOrder traversal(CLR) is ${str}`;
        }

        function postorder() {
          var info = document.querySelector('.info');
          var str = tree.getPostorder(tree.getRoot());
            if (tree.getSize() == 0)
              alert("The tree is empty");
            else
              info.innerHTML =  `The PostOrder traversal(LRC) is ${str}`;
          }
