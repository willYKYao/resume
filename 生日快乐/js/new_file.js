window.onload=function(){
	var oDiv=document.getElementById('heart');
	var aLi=oDiv.getElementsByTagName("li");
	var oDiv2=document.getElementById("name");

	
	var timer=null;
	var timer1=null;
	var a=0;
	
	//给心跳定位
	var iWidth=window.innerWidth;//获取浏览器内部宽高 除去工具栏什么的 好用哎
	var iHeight=window.innerHeight;
	oDiv.style.left=(parseInt(iWidth)-parseInt(oDiv.offsetWidth))/2+"px";
	oDiv.style.top=(parseInt(iHeight)-parseInt(oDiv.offsetHeight))/2+"px";
	
//页面加载后延迟，心开始跳动,同时变宽高和透明度
	setTimeout(function doMove1(){
		timer=setInterval(function(){
			for(var i=0;i<aLi.length;i++){
				doMove(aLi[i],{width:32,height:32,opacity:70},function(){
					for(var i=0;i<aLi.length;i++){
						doMove(aLi[i],{width:30,height:30,opacity:30})
					}
				});
			}
		},1500);
	},500);
	
	//心飘到左边
	oDiv.onclick=function(){
		for(var i=0;i<aLi.length;i++){
			clearInterval(timer);
			doMove(this,{left:50,top:50,opacity:0},function(){
				oDiv.style.opacity=100;
				for(var j=0;j<aLi.length;j++){
					aLi[j].style.left=0;
					aLi[j].style.top=0;
				}
				
				//绕场一周 等前面的li出去后延迟出发
				timer1=setInterval(function(){
					setTimeout(function(){
						//alert(a);
					 	haha(a);
					 	
					 	//这个递增要放在timeout里 不能放在外面
					 	a++;
						if(a>=10){
							clearInterval(timer1);
							setTimeout(function(){
								window.open("next.html");
							},12000);
							
						}
					},200);
				},300);
			});
		}
	}
	
	
	
	//心跳
	function doMove(obj,json,fn){
		if(obj.timer){
			clearInterval(obj.timer);
		}
		
		obj.timer=setInterval(function(){
			var flag=true;//假设所有的值都到达了目标值,好像放在外面还是有bug
			for(attr in json){
				var speed=0;
				var haha=0;
				if(attr=="opacity"){
					haha=Math.round(parseFloat(getStyle(obj,attr))*100);
				}
				else{
					haha=parseInt(getStyle(obj,attr));
				}
				speed=(json[attr]-haha)/10;
				speed=speed>0?Math.ceil(speed):Math.floor(speed);
				if(json[attr]!==haha){
					flag=false;
				}
				if(attr=="opacity"){
					obj.style.opacity=(haha+speed)/100;
					obj.style.filter="alpha(opacity:"+(haha+speed)+")";
				}
				else{
					obj.style[attr]=(haha+speed)+"px";
				}
			}
			if(flag){
				clearInterval(obj.timer);
				if(fn){
					fn();
				}
			}
		},50);
	}
	
	//绕场一周
	function haha(a){
		
		doMove(aLi[a],{left:(iWidth-100)},function(){
			doMove(aLi[a],{top:(iHeight-100)},function(){
				doMove(aLi[a],{left:0},function(){
					doMove(aLi[a],{top:0},function(){
						doMove(aLi[a],{opacity:0});
					});
				});
			});
		});
	}
	
	//获取属性值
	function getStyle(obj,attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];	
		}
		else{
			return getComputedStyle(obj,false)[attr];
		}
	}
}
