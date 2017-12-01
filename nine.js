// function clickButton () {
// 	// body...
// 	document.getElementsByClassName("btns")[1].click();
// 	//现在body一开始onload的时候，应该会调用endMsg()
// }
var blingId=0;
var arrCol=new Array(3);
var arrIndex=new Array(3);

function bling_bling () {
	// body...
	//alert("begin Button was ready!!")
	reset();
	ranIndex();	
	// ranCol();

	for(i=0;i<3;i++){
		
		document.getElementsByClassName("diamond")[arrIndex[i]].style.backgroundColor 
		=randomHexColor();//随机的颜色
	}
	//document.getElementsByClassName("diamond")[4].style.backgroundColor ="red";
}
function endMsg () {
	// body...
	//document.getElementsByClassName("diamond")[4].style.backgroundColor ="blue";
	clearInterval(blingId);
	blingId=0;
	reset();
}
function reset(){
	for(i=0;i<9;i++){
		//var index=Math.floor(Math.random()*9);//向下取整0-8
		document.getElementsByClassName("diamond")[i].style.backgroundColor ="orange";
	}
}

function beginMsg () {
	// body...
	if(blingId==0){
		blingId=setInterval(bling_bling,1000/4);
	}
	
	//console.log(action);
}
// function ranCol(){
// 	for(i=0;i<3;i++){
// 		var col=Math.floor(Math.random()*256);
// 		arrCol[i] = col;
// 	}
// 	return arrCol;
// }

function ranIndex(){
	var j=0;
	while(j<3){
		var index=Math.floor(Math.random()*9);//向下取整0-8
		if(arrIndex[j-1]!=index && arrIndex[j-2]!=index){
			arrIndex[j]=index;
			j++
		}
	}
}

function randomHexColor() { //随机生成十六进制颜色
 var hex = Math.floor(Math.random() * 16777216).toString(16); //生成ffffff以内16进制数
 while (hex.length < 6) { //while循环判断hex位数，少于6位前面加0凑够6位
  hex = '0' + hex;
 }
 return '#' + hex; //返回‘#'开头16进制颜色
}