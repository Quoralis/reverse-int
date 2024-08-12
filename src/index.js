module.exports = function reverse (n) {
    let arr = Array.from(n.toString())
    let RevArr = arr.reverse()
    return parseInt(RevArr.join(''))
}
