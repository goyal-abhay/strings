let concatStr = (arrStr) => {
    if (arrStr.length === 0) return '';
    let s = '';
    for (let i=0; i<arrStr.length; i++){
        s+=arrStr[i] + ' ';
    }
    s = s.trim();
    s+='.';
    return s;
}

module.exports = concatStr;