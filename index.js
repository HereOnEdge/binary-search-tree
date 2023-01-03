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
// const arr = [20,12,34,323]
const defualtTree = tree(arr)

prettyPrint(defualtTree.root)
defualtTree.remove(2)
defualtTree.insert(1)