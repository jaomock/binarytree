import mergeSort from "/mergesort.js";

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

class node{
    constructor(data = null, left = null, right = null){
        this.data = data
        this.left = left
        this.right = right
    }
}

let testArray = [1,2,3,4,5,6,7,8,9]
// let inOrderArr = []
// let testArray = [1,7,4,23,8,9,4,3,5,7,9,67,5345,324]

class tree{
    constructor(arr){
        this.root = this.buildTree(arr, 0, arr.length - 1)
        prettyPrint(this.root)
    }

    buildTree(arr,start,end){
    if(start > end){
        return null
    }

    let mid = parseInt((start + end) / 2);
    let root = new node(arr[mid])

    root.left = this.buildTree(arr, start, mid - 1)
    root.right = this.buildTree(arr, mid + 1, end);
    return root
}
//make it so duplicate values cannot be added
insert(value, root = this.root){
    if(root === null){
        testArray.push(value)
        return (root = new node(value))
    }

    if(root.data < value){
        root.right = this.insert(value, root.right)
    } else {
        root.left = this.insert(value, root.left)
    }
    prettyPrint(this.root)
    return root
}

delete(){

}

find(value){
    let current = this.root
    while(current != null){
        if(value === current.data){
            console.log(current)
            break
        } else if(value > current.data){
            current = current.right
        } else {
            current = current.left 
        }
    }
    if(current === null){
        console.log('Data not available')
    } 
}

levelOrder(finalArr = []){
    let current = this.root
    // let finalArr = []
    let queue = []

    queue.push(current)

    while(queue.length > 0){
        if(current.left != null && current.right != null){
            queue.push(current.left)
            queue.push(current.right)
            finalArr.push(queue[0].data)
            queue.shift()
            current = queue[0]
        }
        else if(current.left != null && current.right === null){
            queue.push(current.left)
            finalArr.push(queue[0].data)
            queue.shift()
            current = queue[0]
        } else if(current.right != null && current.left === null){
            queue.push(current.right)
            finalArr.push(queue[0].data)
            queue.shift()
            current = queue[0]
        } else if(current.left === null && current.right === null){
            finalArr.push(queue[0].data)
            queue.shift()
            current = queue[0]
        }
    }
    if(queue.length === 0){
        console.log(finalArr)
    }
}
//D,L,R
preOrder(callback = (e) => values.push(e), current = this.root, values = []){
    if(current === null) return
    if(current != null){
        callback(current.data)
        if(current.left) this.preOrder(callback, current.left, values);
        if(current.right) this.preOrder(callback, current.right, values)
    }

    console.log(values)
}
//L,D,R
inOrder(callback = (e) => values.push(e), current = this.root, values = []){
    if(current === null) return
    if(current != null){
        if(current.left) this.inOrder(callback, current.left, values);
        callback(current.data)
        if(current.right) this.inOrder(callback, current.right, values)
    }
    console.log(values)
}
//L,R,D
postOrder(callback = (e) => values.push(e), current = this.root, values = []){
    if(current === null) return
    if(current != null){
        if(current.left) this.postOrder(callback, current.left, values);
        if(current.right) this.postOrder(callback, current.right, values)
        callback(current.data)
    }

    console.log(values)
}

depth(value){
    let current = this.root
    let totalDepth = 0
    while(current != null){
        if(value === current.data){
            console.log('The depth of' + ' ' + value + ' ' + 'is' + ' ' + totalDepth)
            break
        } else if(value > current.data){
            current = current.right
            totalDepth++
        } else {
            current = current.left 
            totalDepth++
        }
    }
    if(current === null){
        console.log('Data not available')
    } 
}

height(current = this.root){
    if(current === null) return 0;
    return Math.max(this.height(current.left), this.height(current.right)) + 1;
    
}

isBalanced(){
    let leftHeight = this.height(this.root.left);
    let rightHeight = this.height(this.root.right);

    if(leftHeight === rightHeight || leftHeight + 1 === rightHeight || leftHeight - 1 === rightHeight){
        console.log('true')
    } else {
        console.log('false')
    }

}

reBalance(){
    if(this.isBalanced === true){
        return
    }

    let newArr = mergeSort(testArray)

    let balancedTree = new tree(newArr)
    prettyPrint(balancedTree.root)
}



//create findParent() function?
    
}

const stuff = new tree(testArray)

stuff.insert(15)
stuff.insert(25)
stuff.insert(23)
stuff.insert(16)
stuff.insert(14)

// stuff.find(9)
// stuff.levelOrder()
// stuff.depth(10)
// stuff.isBalanced()
// stuff.preOrder()
stuff.inOrder()
// stuff.postOrder()

// stuff.reBalance()

stuff.reBalance()
// console.log(stuff)
