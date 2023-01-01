export const node = function(nodeData, lChild, rChild) {
    const data = nodeData;
    const leftChild = lChild;
    const rightChild = rChild;

    return {data, leftChild, rightChild}
};