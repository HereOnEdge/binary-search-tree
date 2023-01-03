export const node = function(nodeData, lChild, rChild) {
    const data = nodeData;
    const left = lChild;
    const right = rChild;

    return {data, left, right}
};

export const nextBigNode = function(node) {
    if(node.right === null) {
        return node.left === null ? null : node.left;
    } else {
        const rightNode = node.right
        const infiniteLeft = (n = rightNode, parent = node) => n.left === null ? {node: n, parent} : infiniteLeft(n.left, n)
        return infiniteLeft()
    }
}


// check if node has a right child
// if it doesnt check if it has a left child
// if it has a left child return node's left child
// if it doesnt have left child then return null
// if it does have a right child then store it inside a variable called rightNode
// make another function called infiniteLeft that gets rightNode as argument
// check if node has a leftChild
// if it doesn't return the node
// if it does have a left child then call the infiniteLeft with the node's left child as argument 