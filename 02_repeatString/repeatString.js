const repeatString = function(str, num) {

    if ((str == null) || (num === Infinity) || (num === null) || (num < 0)) {
        return "ERROR"
    }; 

    return new Array(num + 1).join(str);

};

// Do not edit below this line
module.exports = repeatString;
