//xiaoming
//多人提交会出现同名
// var name ='xiaoming'
// var age =22
// function sum(num1,num2) {
// 	return num1 +num2
// }
// var flag = true
// if(flag) {
// 	console.log(sum(10,20));
// }

//匿名函数解决命名冲突问题，但是代码复用率不高

var moduleA = (function () {
//导出对象
var obj = {

}

	var name ='xiaoming'
var age =22
function sum(num1,num2) {
	return num1 +num2
}
var flag = true
if(flag) {
	console.log(sum(10,20));
}
obj.flag=flag;
obj.sum =sum
return obj
})()
