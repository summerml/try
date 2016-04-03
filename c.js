var data=new Array();
data=["元素0","元素1","元素2"];
function act() {
	var idName=this.id;
	switch(idName) {
		case "left_in":
			var x=document.getElementById("in").value;
			data.splice(0,0,x);
			alert("data："+data);
			break;
		case "right_in":
			var x=document.getElementById("in").value;
			data[data.length]=x;
			alert("data："+data);
			break;
		case "left_out":
			data.splice(0,1);
			alert("data："+data);
			break;
		case "right_out":
			data.splice(data.length-1,1);
			alert("data："+data);
			break;
		default:
			alert("点击无效");
	}
	return data;
}
$(document).on( "click", "button", act);
// document.getElementsByTagName("button").onclick=function(){
// 	alert("绑定成功");
// }
 // document.getElementById("left_in").onclick=function(){
	// alert("绑定成功");
	// }
//笔记1
 $(document).on( "click", "#number", function(){
 	alert(data);
 });