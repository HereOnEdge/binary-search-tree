import { prettyPrint } from "./print.js";
import { tree } from "./tree.js";

const arr = [20,34,52,12,34,3,56,4,2,54,2,123,12,34,56,26]
const defualtTree = tree(arr)

prettyPrint(defualtTree.root)