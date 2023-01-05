import { prettyPrint } from "./print.js";
import { tree } from "./tree.js";

// write a function that generates an array of random numbers
const arrBuilder = function() {
    const length = Math.floor((Math.random() + 1) * 20);
    const arr = []
    for(let i = 0 ; i < length; i++) {
        const value = Math.floor(Math.random() * 250)
        arr.push(value)
    }
    return arr
}

const arr = arrBuilder()
// const arr = [20,12,34,323, 3]
const defualtTree = tree(arr)


prettyPrint(defualtTree.root)
defualtTree.remove(2)       // removes 2 from the tree if its found and logs the tree to the console
defualtTree.insert(10)       // inserts 1 to the tree and log the tree to the console
console.log(defualtTree.find(10).node)  // { data: 1, left: null, right: null }
console.log(defualtTree.levelOrder())
console.log(defualtTree.inOrder())
console.log(defualtTree.preOrder())
console.log(defualtTree.postOrder())
console.log(defualtTree.height(defualtTree.root))
console.log(defualtTree.depth(defualtTree.root.left.left))
defualtTree.remove(10)
console.log(defualtTree.isBalanced())
