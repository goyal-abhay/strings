let findMonth = (testStr) => {
    let arr = [];
    arr = testStr.split('/');
    return arr[1];
}

module.exports = findMonth;