export const node = function(nodeData, lChild, rChild) {
    const data = nodeData;
    const left = lChild;
    const right = rChild;

    return {data, left, right}
};