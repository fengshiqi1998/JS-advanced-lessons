var str = "aabbccdd";
str.replace("aa","xx");// "xxbbccdd"

var str = "a fAt bat ,a faT cat";
var reg1 = /[bc]at/gi;
str.replace(reg1,"xx");// "a fAt xx ,a faT xx"

var str = "a fAt bat ,a faT cat";
var reg2 = new RegExp(/fat/,"gi");
str.replace(reg2,"xx");// "a xx bat ,a xx cat"

var str = "a fAt bat ,a faT cat";
var reg2 = new RegExp(/fat/,"i");
str.replace(reg2,"xx");// "a xx bat ,a faT cat"

var str = "a fAt bat ,a faT cat";
var reg2 = new RegExp(/fat/,"g");
str.replace(reg2,"xx");// "a fAt bat ,a faT cat"

