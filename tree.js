import { node , nextBigNode } from "./node.js";
import { prettyPrint } from "./print.js";
import { buildTree } from "./buildTree.js";
import { mergeSort } from "@reza2022/mergesort";

export const tree = function(arr) {
    const root = buildTree(arr)

    // build a function that inserts a given value to the tree if its not already in it
    const insert = function(val) {
        const data = find.call(this, val)
        if (data === null) {
            const crawl = function(currentNode = this.root, value = val) {
                if (currentNode.data < value) {
                    currentNode.right === null ? currentNode.right = node(value, null, null) : crawl(currentNode.right, value)
                } else if (currentNode.data > value) {
                    currentNode.left === null ? currentNode.left = node(value, null, null) : crawl(currentNode.left, value)
                }
            }
            crawl.call(this)
            prettyPrint(this.root)
        } else {
            console.log('value already inside tree')
        }
    }

    // build a function that removes a given value from the tree if its found
    const remove = function(val) {
        const data = find.call(this, val)
        if (data === null) {
            return console.log('value not in the tree')
        }
        const node = data.node
        const parent = data.parent
        const replaceData = nextBigNode(node)
        let replaceNode
        let replaceParent
        replaceData === null ? replaceNode = null : replaceNode = replaceData.node
        parent === 'root' ? this.root = replaceNode :
        node.data > parent.data ? parent.right = replaceNode :
        node.data < parent.data ? parent.left = replaceNode : console.log('the fuck') 
        if( replaceNode === null) {
            return prettyPrint(this.root)
        } else {
            replaceParent = replaceData.parent
            replaceParent.data > replaceNode.data ? replaceParent.left = null : replaceParent.right = null;
        }
        node.left !== null && node.left !== replaceNode ? replaceNode.left = node.left : replaceNode.left = null;
        node.right !== null && node.right !== replaceNode ? replaceNode.right = node.right : replaceNode.right = null;
        prettyPrint(this.root)
    }

    // find function gets a value as parameter and returns the node and its parent, if the value is found
    const find = function(value, node = this.root, parent = 'root'){
        if( node === null) {
            return null;
        }
        return value === node.data ? {node, parent} :
                value > node.data ? find(value, node.right, node) :
                value < node.data ? find(value, node.left, node) : null
    }

    // levelOrder function reads every node in level order traversal and returns an array of values
    const levelOrder = function(node = this.root, result = [], queue = []) {
        result.push(node.data)
        if(node.left !== null) {
            queue.push(node.left)
        }
        if(node.right !== null ) {
            queue.push(node.right)
        }
        if(queue.length === 0) {
            return result
        }
        const firstInLine = queue.shift()
        return levelOrder(firstInLine, result, queue)  
    }

    // inOrder function, reads the tree in (left SubTree, node, right subTree) order. returns a sorted array from low to high and the height of node
    const inOrder = function(node = this.root, result = [], i = -1, iArray = []) {
        i++
        if(node.left !== null) {
            inOrder(node.left, result, i, iArray) 
            result.push(node.data)   
        } else {
            result.push(node.data)
        } 
        if (node.right !== null) {
            inOrder(node.right, result, i, iArray)
        } 
        // save the level that carrent node is at
        let isAvailable = false
        for(let x = 0; x < iArray.length; x++) { // prevent duplicate level values
            if(i === iArray[x]) {
                isAvailable = true
                break
            } else {
                continue
            }
        }
        if(isAvailable === false && node.left === null && node.right === null) {
                iArray.push(i)
        }
        node.iArray = iArray
        return result
    }

    // preOrder function, read the tree in (node, leftSubTree, rightSubTree) order
    const preOrder = function(node = this.root, result = []) {
        result.push(node.data)
        if(node.left !== null) {
            preOrder(node.left, result)
        }
        if(node.right !== null) {
            preOrder(node.right, result)
        }
        return result
    }
    
    // postOrder function, read the tree in (rightSubTree, node, leftSubTree) order. returns an array of items
    const postOrder = function(node = this.root, result = []) {
        if (node.left !== null) {
            postOrder(node.left, result)
        }
        if(node.right !== null) {
            postOrder(node.right, result)
        }
        result.push(node.data)
        return result
    }

    // height function, returns the number of levels from the given node to the longest leaf
    const height = function(node) {
        inOrder(node)
        const iArray = node.iArray
        return mergeSort(iArray)[iArray.length - 1]
    }
    
    // depth function, returns the number of levels from the root to the given node
    const depth = function(valueNode, currentNode = this.root, i = -1) {
        if (valueNode === null) {
            return 'Node Not Found'
        }
        i++
        if (currentNode === valueNode) {
            return i
        } else {
            return valueNode.data > currentNode.data ? depth(valueNode, currentNode.right, i) :
            valueNode.data < currentNode.data ? depth(valueNode, currentNode.left, i) : 'node not found'
        }
    }

    // isBalanced function, returns true if tree is balanced, else it returns false
    const isBalanced = function() {
        inOrder(this.root)
        const iArray = mergeSort(this.root.iArray)
        return (iArray[iArray.length - 1] - iArray[0]) <= 1 
    }

    // reBalance function, reBalances the tree and console.log the tree

    const reBalance = function() {
        if(isBalanced.call(this)) {
            console.log('Tree Is Already Balanced')
            return 
        }
        const sortedTree = inOrder.call(this)
        this.root = buildTree(sortedTree)
        prettyPrint(this.root)
    }
    return {root, insert, remove, find, levelOrder, inOrder, preOrder, postOrder, height, depth, isBalanced, reBalance}
}