var obj1 = {a:[{x:1,y:[12,6,{t:true}]},"false"],b:"34"};
var json1 = JSON.stringify(obj1);
console.log(obj1);// {a: Array(2), b: "34"}
console.log(json1);// {"a":[{"x":1,"y":[12,6,{"t":true}]},"false"],"b":"34"}
var obj2 = JSON.parse(json1);
console.log(obj2);// {a: Array(2), b: "34"}

function replacer(key,value) {
	if(typeof value === "string") {
		return undefined;
	}
	return value;
}
var foo = {foundation:"Mozilla",model:"box",week:45,transport:"car",month:7};
var jsonString1 = JSON.stringify(foo,replacer);
console.log(jsonString1);// {"week":45,"month":7}

function replacer(key,value) {
	if(typeof value === "string") {
		return null;
	}
	return value;
}
var foo = {foundation:"Mozilla",model:"box",week:45,transport:"car",month:7};
var jsonString1 = JSON.stringify(foo,replacer);
console.log(jsonString1);// {"foundation":null,"model":null,"week":45,"transport":null,"month":7}

function replacer(key,value) {
	if( key === "foundation") {
		return 11111;
	}
	return value;
}
var foo = {foundation:"Mozilla",model:"box",week:45,transport:"car",month:7};
var jsonString1 = JSON.stringify(foo,replacer);
console.log(jsonString1);// {"foundation":11111,"model":"box","week":45,"transport":"car","month":7}

var o7 = JSON.parse('{"p": 5,"x":1}', function (k, v) {
    if(k === 'p') return 2*v;
    if(k === 'x') return 3*v;
    if(k === '')  return v;      //最终到达顶层    
});                             
console.log(o7);// {p: 10, x: 3}

