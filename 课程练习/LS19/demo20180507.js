var date1 = new Date(2017,9,18,12,34,1);//注意：月0-11，日：1-31，时：0-23，分：0-59，秒：0-59，毫秒：0-999
console.log(date1);// Wed Oct 18 2017 12:34:01 GMT+0800 (中国标准时间)

var date4 = new Date(0);    //1970-01-01:00:00:00
var date4 = new Date(1000); //1970-01-01:00:00:01 1000为毫秒
console.log(date4);// Thu Jan 01 1970 08:00:01 GMT+0800 (中国标准时间)
date4.getTime();// date4逆运算
var date5 = new Date();
new Date(Date.now());// Tue May 08 2018 16:45:55 GMT+0800 (中国标准时间)
console.log(date5);// Tue May 08 2018 16:45:55 GMT+0800 (中国标准时间)

var date6 = new Date(NaN);
console.log(date6);//Invalid Date 无效日期

var d1 = new Date();
var d2 = Date();// 去掉new
console.log(d1,typeof d1);// Tue May 08 2018 16:08:44 GMT+0800 (中国标准时间) "object"
console.log(d2,typeof d2);// Tue May 08 2018 16:08:44 GMT+0800 (中国标准时间) string

var n1 = new Number("123");
var n2 = Number("123");
console.log(n1,typeof n1);// Number {123} "object"
console.log(n2,typeof n2);// 123 "number"

var d = new Date("1978-11-25");
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());// 1978 10 6 25 8

var d = new Date(2012,3,21,15,7,23,234);
console.log(d.toTimeString(),"___",d.toLocaleTimeString());// 15:07:23 GMT+0800 (中国标准时间) ___ 下午3:07:23

console.log(Date.parse("2010-01-01 11:12:23.111"));// 1262315543111
console.log(new Date("2010-01-01 11:12:23.111"));// Fri Jan 01 2010 11:12:23 GMT+0800 (中国标准时间)
console.log(new Date().toISOString());// 2018-05-08T08:49:21.174Z

// 无时间的日期格式
console.log(new Date("2001"));// Mon Jan 01 2001 08:00:00 GMT+0800 (中国标准时间)
console.log(new Date("2001-02"));// Thu Feb 01 2001 08:00:00 GMT+0800 (中国标准时间)
console.log(new Date("2001-02-22"));// Thu Feb 22 2001 08:00:00 GMT+0800 (中国标准时间)

console.log(new Date("1970-01-01").getTime());// 0
console.log(new Date("1970-01-02") > new Date("1970-01-01"));// true
console.log(new Date("1970-01-02") - new Date("1970-01-01"));// 86400000
console.log(new Date((new Date("1970-01-01").getTime())+86400000));// Fri Jan 02 1970 08:00:00 GMT+0800 (中国标准时间)

// 输出50天后的月日，星期
var today = new Date();
var newDate = new Date(today.getTime()+1000*3600*24*50);
console.log(newDate);// Tue Jun 26 2018 15:05:34 GMT+0800 (中国标准时间) // 当前日期 Tue Jun 7 2018 15:05:34 GMT+0800 (中国标准时间) 