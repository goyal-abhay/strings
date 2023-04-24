let fullName = (testObj) => {
    let s = '';
    let n = ''
    for (let i in testObj){
        n = testObj[i].toUpperCase();
        s = s+n+' ';
    }
    return s;
}

module.exports = fullName;