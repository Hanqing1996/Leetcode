/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function(IP) {
    address1=IP.split('.')
    address2=IP.split(':')
    if(address1.length===4){
        if(address1.every(part=>/^0$|^[1-9]\d{0,2}$/.test(part)&&Number(part)<256))
            return "IPv4"
    }
    if(address2.length===8){
        if(address2.every(part=>/^[0-9a-fA-F]{1,4}$/.test(part)))
            return "IPv6"
    }
    return "Neither"
};
