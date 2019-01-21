

// 数组去重封装1----创建空对象的方法
function delArrarr1(arr){
	var obj={};
	for(var i=0;i<arr.length;i++){
		if(obj[arr[i]]){
			obj[arr[i]]++;
		}else{
			obj[arr[i]]=1;
		}
	}
	var newArr=[];
	for(var i in obj){
		newArr.push(i);//此时的i为字符,如需数字可 newArr.push(parseInt(i))
	}
	return newArr;
}

// 数组去重封装2----indexOf方法
function delArrarr2(arr){
	var newArr=[];
	for(var i=0;i<arr.length;i++){
		if(newArr.indexOf(arr[i]) == -1){
			newArr.push(arr[i]);
		}
	}
	return newArr;
}


//日期的格式化
function createDate(){
	var d = new Date();
	
	var y = d.getFullYear()
	var mos = d.getMonth()
	var mydate = d.getDate()
	var day = d.getDay()
	
	var h = d.getHours()
	var m = d.getMinutes()
	var s = d.getSeconds()
	
	switch(day){
		case 0:day="星期日";break;
		case 1:day="星期一";break;
		case 2:day="星期二";break;
		case 3:day="星期三";break;
		case 4:day="星期四";break;
		case 5:day="星期五";break;
		case 6:day="星期六";break;
	}
	
	var str = y+"年"+createZero(mos+1)+"月"+createZero(mydate)+"日 "+day+" "+createZero(h)+":"+createZero(m)+":"+createZero(s);
	
	return str;
}

//补零
function createZero(n){
	if(n<10){
		return "0"+n
	}else{
		return ""+n
	}
}

// 范围随机数
function randomNum(a,b){
	return Math.round(Math.random()*(a-b)+b);
}

// 随机颜色
function createColor(){
		var str1=randomNum(0,255).toString(16);
		var str2=randomNum(0,255).toString(16);
		var str3=randomNum(0,255).toString(16);
		return  "#"+str1+str2+str3;
}

// 两个时间的时间差
function dateCha(oldDate,nowDate){

	var oT = oldDate.getTime();
	var nT = nowDate.getTime();
	var time = oT - nT;

	var day = Math.abs(parseInt(time/1000/60/60/24));
	var h = Math.abs(parseInt(time/1000/60/60)%24);
	var m = Math.abs(parseInt(time/1000/60)%60);
	var s = Math.abs(parseInt(time/1000)%60);

	return "两个时间相差："+day+"天"+h+"小时"+m+"分钟"+s+"秒钟";

}


// 获取非行内样式

function getStyle(ele,attr){
	if(ele.currentStyle){
		return ele.currentStyle[attr];
	}else{
		return getComputedStyle(ele,false)[attr];
	}
}


// 阻止冒泡事件
function stopBubble(e){
	if(e.stopPropagation){
		e.stopPropagation();	//正常浏览器
	}else{
		e.cancelBubble =true;	//兼容IE
	}
} 


//阻止默认事件
function stopDefault(e){
	if(e.preventDefault){
		e.preventDefault();		//正常浏览器
	}else{
		e.returnValue =false;	//兼容IE
	}
}


// 监听事件绑定
function addEvent(ele,myeve,callback){
	if(ele.addEventListener){
		ele.addEventListener(myeve,callback);	//正常浏览器
	}else{
		ele.attachEvent("on"+myeve,callback);	//兼容IE
	}
}


// 监事事件删除
function removeEvent(ele,myeve,callback){
	if(ele.removeEventListener){
		ele.removeEventListener(myeve,callback);	//正常浏览器
	}else{
		ele.detachEvent("on"+myeve,callback);		//兼容IE
	}
}

// 设置cookie
function setCookie(key,value,num){
	var d=new Date();
	d.setDate(d.getDate()+num);
	document.cookie = key+"="+value+";expires="+d;
}

// 删除cookie
function removeCookie(key){
	setCookie(key,1,-1);
}

// 获取cookie
function getCookie(key){
	var arr=document.cookie.split("; ");
	for(var i=0;i<arr.length;i++){
		if(arr[i].split("=")[0]==key){
			return arr[i].split("=")[1];
		}
	}
	return "";
}
