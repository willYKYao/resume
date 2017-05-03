$(function(){
	var num=0;
	
	//头部信息超快的收起，然后慢慢放下
	$("#head .head_list").slideUp(1).slideDown("normal");
	
	
	//鼠标移入事件
	$("#nav>div").bind("mouseenter",function(){
		//通过width判断，当是大导航时
		if($("#nav>div").width()>=150){
			$(this).addClass("hover_div")							//匹配当前div，改变样式
					.find("h2").addClass("hover_head")				//匹配当前div下的h2，改变样式
					.end()											//匹配当前div
					.siblings().removeClass("hover_div")			//匹配当前div的兄弟节点，移除样式
					.find("h2").removeClass("hover_head");			//匹配当前div的兄弟节点下的h2，移除样式
		
			$("#nav>div").find("span").stop(true);					//停止内容区的直接子元素div下的span节点的动画 不然快速进出，鼠标停止了，但是span还在继续运动
			$(this).siblings().find("span").animate({"right":"-40px"})
			$(this).find("span")									//其他span隐藏
					.delay(400)
					.animate({"right":0});							//延时 给当前的span添加动画出现
		}
		else{
			$(this).animate({"opacity":"1"},1);						//小导航时，鼠标移入改变透明度
		}
	});
	
	//鼠标移出事件
	$("#nav>div").bind("mouseleave",function(){
		if($("#nav>div").width()<150){								//小导航时，鼠标移出透明度变为0.3
			$("#nav>div").not(".opacity").animate({"opacity":"0.3"},1);//除了被点击的
		}
	});

	//鼠标点击事件
	$("#nav>div").bind("click",function(){
		num = $(this).index();										//点击的角标
		if($("#nav>div").width()>=150){								//大导航
			$(this).animate({"opacity":"1"},1).addClass("opacity")	//当前变透明度并且添加class
					.siblings().animate({"opacity":"0.3"},1).removeClass("opacity");
			$("#nav").removeClass("hide")							//导航区移除				
					.css("background","transparent");				//导航区背景改为透明
			$("#wrap").animate({"margin":"80px auto"});				//整体往上移动
			$("#nav>div").each(function(){	
				
				$(this).css({"position":"absolute","color":"#fff","font-size":"10px"})//改变定位和字体颜色
					.animate({										//变小移动到左边
						"left":"0",
						"top":$(this).index()*40+"px",
						"width":"100px",
						"height":"30px"
					},400,function(){								//回调  内容区块状并淡
						$("#content").css("display","block").animate({"opacity":"1"},400,function(){
							$(".content_wrap").css({"top":-350*num+"px"}).animate({"opacity":"1"},400);
						});
					});
			});
		}
		
		else{
			$(".content_wrap").stop();
			$(".content_wrap").animate({"top":-350*num+"px"},1000);
			$(this).animate({"opacity":"1"},1).addClass("opacity")	//当前变透明度并且添加class
					.siblings().animate({"opacity":"0.3"},1).removeClass("opacity");
		}
		$("#nav>div").find("h2").removeClass("hover_head")			//改变head的样式，把span隐藏
					.end()
					.find("span").hide();
	});
	
	//鼠标移入，文字滚动
	$(".content_message").find("div").each(function(){
		$(this).css("width",$(this).parent().width()+"px");
	});
	$(".content_message div").hover(function(){
		$(this).stop(true);
		$(this).animate({"top":-$(this).height()/2+"px"});
		},
		function(){
			$(this).animate({"top":"0px"});
		}
	);
	
	$("#content .content_demo li a").mouseenter(function(){
		$(this).find("p").stop(true);
		$(this).css("color","#444")
				.find("p")
				.animate({"line-height":"60px"},"fast").animate({"line-height":"70px"},"fast");
	});
	$("#content .content_demo li a").mouseleave(function(){
		$(this).css("color","#777");
	});
})
