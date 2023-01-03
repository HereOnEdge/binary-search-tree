export const node = function(nodeData, lChild, rChild) {
    const data = nodeData;
    const left = lChild;
    const right = rChild;

    return {data, left, right}
};

export const nextBigNode = function(node) {
    if(node.right === null) {
        return node.left === null ? null : {node : node.left, parent : node};
    } else {
        const rightNode = node.right
        const infiniteLeft = (n = rightNode, parent = node) => n.left === null ? {node: n, parent} : infiniteLeft(n.left, n)
        return infiniteLeft()
    }
}
