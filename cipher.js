function cipher (string, factor) {
    let array = [];
    for(i = 0; i < string.length; i++) {
        if(string.charCodeAt(i) < 91 && string.charCodeAt(i) > 64) {
            let temp = string.charCodeAt(i);
            temp = temp + factor;  
            if(temp > 91) temp = temp - 26;
            array[i] = String.fromCharCode(temp);
        } else if(string.charCodeAt(i) < 123 && string.charCodeAt(i) > 96) {
            let temp = string.charCodeAt(i);
            temp = temp + factor;  
            if(temp > 123) temp = temp - 26;
            array[i] = String.fromCharCode(temp);
        } else {
            array[i] = string.charAt(i);
        }
    }

    return array.join('');
}



module.exports = cipher;