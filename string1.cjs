let numFormat = (testStr) => {
    let s = '';
    if (testStr[0]==='$') {
        s = testStr.slice(1,testStr.length);
    }
    if (testStr[1]==='$') {
        s = testStr[0] + testStr.slice(2,testStr.length);
    }
    return s;
}

module.exports = numFormat;