window.onload=function(){
	var oSmall=document.getElementById("small");
	var oBig=document.getElementById("big");
	var arrImg=["img/img1.jpg","img/img2.jpg","img/img3.jpg","img/img4.jpg","img/img5.jpg"];
	var arrText=["想到那些年我买过的彩笔和你执着的购杯情节<br/>还有我们一起爱过的最小说家族<br/>小小却很早成名的小四<br/>和有只叫不二兔子的大男生安东尼<br/><br/>我本就不是一个乐于看书的女生<br/>就算小说也一样<br/>你倒是一个看过很多书包括名著<br/>也擅长讲故事的女生<br/>对于微微一笑很倾城的先于电视剧的认识就来源于你<br/>",
	"其实我玩飞车好像是为了离那时候我喜欢的人近一点<br/>结果遇到了一个也玩飞车的同桌<br/>隐约记得说过到了100级就不玩这样的话<br/>也不知道后来有没有到100级<br/>也不知道为什么就没有再玩了<br/>后来我们有没有一起玩过炫舞记不清了<br/>看你朋友圈才发现我们还一起玩过弹弹堂<br/>关于幻想神域就想到那段我们一起荒度时光的日子<br/>一起玩游戏追剧睡前咯咯咯的翻微博<br/>我知道这样的日子不会再有了<br/>",
	"明明是早已二十出头的姑娘<br/>却总也凑不够六一儿童节的热闹<br/>岁数往上增长<br/>只有在这个日子里扎两个辫子显得刚刚好<br/>有时候想想年龄这种东西也确实没办法衡量长大<br/>当然，我们永远是美少女战士<br/>别问我为什么挑了这张照片<br/>我只能告诉你被莫名萌到惹<br/>",
	"对于时间我着实是没有什么概念<br/>所以对于厦门我还是记不清是哪一年去过<br/>滚烫的海滩和肆无忌惮的人群<br/>拥挤的夜市和奔跑的巴士<br/>我时常有一种想法<br/>我只是寄存在这个身体里的别人的灵魂<br/>一个没有记忆的灵魂<br/>勉强的获得了一些这个身体的一些记忆碎片<br/>所以有很多发生过的事情我没有影响<br/>所以有些既定的事情我不知道起因<br/>",
	"这是青岛之行<br/>恩，是去年的这个时候吧<br/>你可别告诉我是前年啊<br/>除了欧式优雅别致的建筑之外<br/>记忆最深刻的竟然是一个尽量不坐飞机的决心<br/>我是胆小鬼啊<br/>我还想去日本看樱花泡温泉穿浴衣过花火<br/>我还想去外国过圣诞<br/>前几天看的一个电影没预兆的想<br/>"]
	var num=0;
	var oTop=document.getElementById("rightTop");
	var aImg=oTop.getElementsByTagName("img")[0];
	var aP=oTop.getElementsByTagName("p")[0];
	var timer=null;
	var oText=document.getElementById("text");
	var oBtn=document.getElementById("btn2");
	var timer1=null;
	
	var timer2=null;
	timer2=setTimeout(function(){
		aImg.src=arrImg[0];
		aP.innerHTML=arrText[0];
		timer2=null;
	},800);
	
	//进去然后就自动切换图片
	show();
	
	//鼠标移入就停止自动切换，同时改变透明度和颜色
	oTop.onmouseover=function(){
		clearInterval(timer);
		oBig.style.opacity=oSmall.style.opacity="0.6";
		oBig.style.color=oSmall.style.color="#fff";
	}
	//鼠标移出事件
	oTop.onmouseout=function(){
		oBig.style.opacity=oSmall.style.opacity="0.3";
		oBig.style.color=oSmall.style.color="#222";
		show();
	}
	
	//往前翻点击事件
	oSmall.onclick=function(){
		num--;
		if(num==-1){
			num=4;
		}
		aImg.src=arrImg[num];
		aP.innerHTML=arrText[num];
	}
	
	//往后翻点击事件
	oBig.onclick=function(){
		num++;
		if(num==5){
			num=0;
		}
		aImg.src=arrImg[num];
		aP.innerHTML=arrText[num];
	}
	
	//点击许愿的时候弹出
	oBtn.onclick=function(){
		var want=oText.value;
		if(want==""){
			alert("还差一个字的距离你就可以许愿了思密达~");
		}
		else{
			alert("你的愿望:"+want+" 一定会实现的思密达~");
		}
		
	}
	
	//底部时间跳转
	var oFooter=document.getElementById("footer");
	var aP1=oFooter.getElementsByTagName("p")[1];
	
	timer1=setInterval(function(){
		var iNow=new Date();
		aP1.innerHTML=iNow.getFullYear()+'年'+(iNow.getMonth()+1)+"月"+iNow.getDate()+"日"+getTwo(iNow.getHours())+":"+getTwo(iNow.getMinutes())+":"+getTwo(iNow.getSeconds());	
	},1000);
	
	function getTwo(a){
		if(a<10){
			a="0"+a;
		}
		return a;
	}
	
	
	//自动切换图片的函数
	function show(){
		clearInterval(timer);
		timer=setInterval(function(){
			num++;
			if(num==5){
				num=0;
			}
			aImg.src=arrImg[num];
			aP.innerHTML=arrText[num];
		},2000);
	}
	
	
	
		
	
	
}
