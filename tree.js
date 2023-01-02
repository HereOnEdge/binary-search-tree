import { mergeSort } from "@reza2022/mergesort";
import { node } from "./node.js";


export const tree = function(arr) {
    const root = buildTree(arr)
        
    return {root}
}

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
    
    else {
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


