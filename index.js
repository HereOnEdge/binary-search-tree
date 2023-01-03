import { prettyPrint } from "./print.js";
import { tree } from "./tree.js";

const arr = [34,20,52,12,3,4,2,54,2,123,12,26, 59]
// const arr = [20,12,34,323]
const defualtTree = tree(arr)

prettyPrint(defualtTree.root)
defualtTree.remove(4)