import { mergeSort } from "@reza2022/mergesort";
import { node , nextBigNode } from "./node.js";
import { prettyPrint } from "./print.js";

export const tree = function(arr) {
    const root = buildTree(arr)
    const insert = function(val) {

    }
    const remove = function(val) {
        const data = find.call(this, val)
        const node = data.node
        const parent = data.parent
        const replace = nextBigNode(node)
        parent === 'root' ? this.root = replace :
        parent.data < node.data ? parent.right = replace :
        parent.data > node.data ? parent.left = replace : console.log('the fuck');
        if(replace === null){
            prettyPrint(this.root)
            return
        }
        if(node.left !== null && node.left !== replace) {
            replace.left = node.left
            node.right.left === replace ? node.right.left = null : console.log('something wrong')
        }  else {
            replace.left = null;
        }
        node.right !== null && node.right !== replace ? replace.right = node.right : replace.right = null;
         
        prettyPrint(this.root)
    }
    return {root, insert, remove}
}


const find = function(value, node = this.root, parent = 'root'){
    return value === node.data ? {node, parent} :
            value > node.data ? find(value, node.right, node) :
            value < node.data ? find(value, node.left, node) : null
}


// call find function with the value as argument
// store its value inside data variable
// store data.node inside node variable
// store data.parent inside parent variable
// call nextBigNode function with node as its node
// store its return value inside replace variable
// if parent = this.root
    // this.root = replace 
// if else parent.data is less than node.data
    // parent.right = replace
// if else parent.data is more than node.data
    // parent.left = replace
// if node.left is not null and it's value not equal to replace.data
    // replace.left = node.left
    // else replace.left = null
// if node.right is not null and it's value is not equal to replace.data
    // replace.right = node.right
    // else replace.right = null

    



// write a function named find that gets a value and  node = this.root and parent = this.root as arguments and returns the node and it's parent inside a object
// check if value is equal to the data of the node
    // if true then return the node and the parent
// if value is more than data of the node 
    // call the find function with node.right as node and node as parent
// if value is less than the data of the node
    // call find function with node.left as node and node as parent 




// build a function that gets an array and create a balanced binary search tree and returns the root of the tree
const buildTree = function(arr) {
    const sortedArr = mergeSort(arr)
    let rightArr;
    let leftArr;
    let leftNode
    let rightNode
    const middle = Math.floor(sortedArr.length / 2);
    if(middle === sortedArr.length) {   // if there is only one item inside array
        leftArr = null             // has no left or right child
        rightArr = null
    } else if(sortedArr[middle] === sortedArr[middle + 1]) {   // if there is a duplicate remove it
        sortedArr.splice(middle + 1, 1)
        return buildTree(sortedArr)
    } else if(sortedArr[middle] === sortedArr[middle - 1]) {
        sortedArr.splice(middle - 1, 1)
        return buildTree(sortedArr)
    }
    
    else {   // check for left and right childs
        middle - 1 < 0 ? leftArr = null : leftArr = sortedArr.slice(0 , middle);
        middle + 1 >= arr.length ? rightArr = null : rightArr = sortedArr.slice(middle + 1);
    }
    if(leftArr !== null) {
        leftNode = buildTree(leftArr)
    } else {
        leftNode = null
    }
    if(rightArr !== null) {
        rightNode = buildTree(rightArr)
    } else {
        rightNode = null
    }
    return node(sortedArr[middle],leftNode ,rightNode )
}


