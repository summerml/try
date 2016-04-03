var data=new Array();
data=["元素0","元素1","元素2"];
function insertLeft() {
	// alert("左插入");
	var x=document.getElementById("in").value;
	// alert(x);
	data.splice(0,0,x);
	alert("data："+data);
}
function insertRight() {
	var x=document.getElementById("in").value;
	data[data.length]=x;
	alert("data："+data);
}
function leftOut(){
	data.splice(0,1);
	alert("data："+data);
}
function rightOut(){
	data.splice(data.length-1,1);
	alert("data："+data);
}
function act() {
	var idName=this.id;
	switch(idName) {
		case "left_in":
			insertLeft();
			alert(data);
			return data;
		case "right_in":
			insertRight();
			break;
		case "left_out":
			delLeft();
			break;
		case "right_out":
			delRight();
			break;
		default:
			alert("点击无效");
	}
}
// document.getElementsByTagName("button").onclick=function(){
// 	alert("绑定成功");
// }
 // document.getElementById("left_in").onclick=function(){
	// alert("绑定成功");
	// }
//笔记1
 $(document).on( "click", "button", act);
 $(document).on( "click", "#number", function(){
 	alert(data);
 });