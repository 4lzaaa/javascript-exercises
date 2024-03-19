const reverseString = function(str) {

    let array = str.split('');
    let reverse = array.reverse();
    let join = reverse.join('');
    return(join);


};

// Do not edit below this line
module.exports = reverseString;
