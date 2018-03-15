var n1 = 12345.6789;
console.log(n1.toFixed(2));
console.log(n1.toPrecision(2));
console.log(n1.toString());
console.log(n1.toExponential(2));
// result:
// 12345.68
// 1.2e+4
// 12345.6789
// 1.23e+4

console.log("A" > "a");
console.log("B".localeCompare("A")); //考虑本地化的字符排序，返回0或非0
console.log("A".localeCompare("A")); //考虑本地化的字符排序，返回0或非0
console.log("A".localeCompare("B"));
// result:1 0 -1

var str2 = "abcdef".slice(2);//cdef
var str3 = "abcdef".slice(2,5);//cde
var str4 = "abcdef".slice(-2);//ef
var str5 = "abcdef".slice(2,-2);//cd
var arr6 = "abcdef".split("c");//["ab","def"]
var arr7 = "abcdef".split("c",1);//["ab"]
var arr8 = "abcdef".split("c",2);//["ab","def"]
var str9 = "abcdef".charAt(2);//"c"
var str10 = "abcdef".charCodeAt(3);//100
var str11 = "abcdefabcdef".indexOf("d",1);//3
var str12 = "abcdefabcdef".indexOf("d",4);//9
var str13 = "abcdefghijklmn";
var str14 = str13.substr(2,5);//cdefg
var str15 = str13.substring(2,5);//cde

var str16 = "aaa".concat("bbb");//aaabbb
var str17 = "    abc def     \r\n  ".trim();//abc def
var str18 = "abcDEF".toLowerCase();//abcdef
var str19 = "abcDEF".toUpperCase();//ABCDEF
var lastIndexOf = "abcDEFabcDEFabcDEF".lastIndexOf("D");//15