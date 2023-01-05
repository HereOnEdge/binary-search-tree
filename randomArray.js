// write a function that generates an array of random numbers
export const arrBuilder = function() {
    const length = Math.floor((Math.random() + 1) * 20);
    const arr = []
    for(let i = 0 ; i < length; i++) {
        const value = Math.floor(Math.random() * 250)
        arr.push(value)
    }
    return arr
}