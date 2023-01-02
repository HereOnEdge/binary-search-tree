import { mergeSort } from "@reza2022/mergesort";
import { node } from "./node.js";


export const tree = function(arr) {
    const root = function(){
        return buildTree.call(this, arr);
    } 
        
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
    if(middle === sortedArr.length) {
        leftArr = null
        rightArr = null
    } else {
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


