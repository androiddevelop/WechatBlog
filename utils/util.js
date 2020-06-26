const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

 const stringToBase64 = str =>{
   var c1, c2, c3;
   var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
   var i = 0, len = str.length, strin = '';
   while (i < len) {
     c1 = str.charCodeAt(i++) & 0xff;
     if (i == len) {
       strin += base64EncodeChars.charAt(c1 >> 2);
       strin += base64EncodeChars.charAt((c1 & 0x3) << 4);
       strin += "==";
       break;
     }
     c2 = str.charCodeAt(i++);
     if (i == len) {
       strin += base64EncodeChars.charAt(c1 >> 2);
       strin += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
       strin += base64EncodeChars.charAt((c2 & 0xF) << 2);
       strin += "=";
       break;
     }
     c3 = str.charCodeAt(i++);
     strin += base64EncodeChars.charAt(c1 >> 2);
     strin += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
     strin += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
     strin += base64EncodeChars.charAt(c3 & 0x3F)
   }
   return strin
 }

module.exports = {
  formatTime: formatTime,
  stringToBase64: stringToBase64
}