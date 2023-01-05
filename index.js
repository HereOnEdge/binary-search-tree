import { tree } from "./tree.js";
import { arrBuilder } from "./randomArray.js";


const arr = arrBuilder()
// const arr = [20,12,34,323, 3]
const defualtTree = tree(arr)

console.log(defualtTree.isBalanced())
console.log(defualtTree.inOrder())
console.log(defualtTree.preOrder())
console.log(defualtTree.postOrder())
console.log(defualtTree.levelOrder())
defualtTree.insert(120)
defualtTree.insert(130)
defualtTree.insert(231)
console.log(defualtTree.isBalanced())
defualtTree.reBalance()
console.log(defualtTree.isBalanced())
console.log(defualtTree.inOrder())
console.log(defualtTree.preOrder())
console.log(defualtTree.postOrder())
console.log(defualtTree.levelOrder())
