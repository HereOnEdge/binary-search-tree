import { tree } from "./tree.js";
// import { arrBuilder } from "./randomArray.js";


// const arr = arrBuilder()
const arr = ['آبشار هوایی', 'جلیقه پرنده', 'آبشار زمینی', 'مشعل پرنده', 'مشعل زمینی','ص', 'ح', 'س', 'ش', 'مشعل فضایی'];
// const arr = [20,12,34,323, 3]
const defualtTree = tree(arr)

console.log(defualtTree.include('مشعل'))
// console.log(defualtTree.isBalanced())
// console.log(defualtTree.inOrder())
// console.log(defualtTree.preOrder())
// console.log(defualtTree.postOrder())
// console.log(defualtTree.levelOrder())
// defualtTree.insert(120)
// defualtTree.insert(130)
// defualtTree.insert(231)
// console.log(defualtTree.isBalanced())
// defualtTree.reBalance()
// console.log(defualtTree.isBalanced())
// console.log(defualtTree.inOrder())
// console.log(defualtTree.preOrder())
// console.log(defualtTree.postOrder())
// console.log(defualtTree.levelOrder())
