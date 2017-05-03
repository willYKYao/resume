$(function(){
	//多次用到的选择器
	var $list = $(".list");
	var $next = $(".left");
	var $prev = $(".right");
	
	var page = 0;									//默认一开始是第一屏
	var i = 4;										//一屏4张图
	var len = $list.find("li").length;				//一共有几张图
	var page_count = Math.ceil(len/4);				//那么有几屏 向上取整
	
	
	for(var i = 0;i<page_count-1;i++){				//按几屏来生成有几个点
		$(".point").first().after("<a class='point' href='javascript:;'></a>");
	}
	
	var page_width = $(".content").width();			//一屏多宽
	$list.width(page_count*page_width);				//设置ul的宽 所有屏的宽度
	
	
	$prev.click(function(){							//<绑定点击事件
		
		$next.removeClass("active");				//样式
		$prev.addClass("active");
		
		if(page==page_count-1){						//在最后一屏
			$list.animate({							//ul添加动画
				"left":0							//让ul的left为初始值
			},"slow");
			page=0;									//把page设置成0
		}
		else{
			if(!$list.is(":animated")){				//判断没有动画时才加动画
													//感觉有点像清除定时器
				$list.animate({						//如果还没有到最后一屏 ul添加动画
					"left":"-="+page_width+"px"		//每点击一次，向左移动一屏
				},"slow");
				page++;
			}
		}
		
//		$(".point").not(":eq(page)").removeClass("active");
//		$(".point").eq(page).addClass("active");	//除了第当前屏的点 其他点都移除active
		pointClass(page);
		
	});
	
	
	$next.click(function(){							//>绑定点击事件
		$prev.removeClass("active");
		$next.addClass("active");
		
		if(page>0){									
			if(!$list.is(":animated")){
				$list.animate({
					"left":"+="+page_width+"px"			
				});
				page--;
			}
		}
		else{
			alert("这已经是第一张了！");
		}
//		$(".point").not(":eq(page)").removeClass("active");
//		$(".point").eq(page).addClass("active");
		pointClass(page);
	});
	
	
	for(var i = 0;i<page_count;i++){				//给每个小圆点绑定事件
		$(".point").eq(i)[0].index = i;
		$(".point").eq(i).click(function(){	
			page=this.index;
//			$(".point").not(":eq("+page+")").removeClass("active");
//			$(".point").eq(page).addClass("active");//当前圆点有active，其他都没有
			pointClass(page);
			$list.animate({							//ul添加动画
				"left":-this.index*page_width+"px"	//ul在第..个小圆点*每一屏的位置
			});
			
		});
	}
	
	function pointClass(a){
		$(".point").not(":eq(a)").removeClass("active");
		$(".point").eq(a).addClass("active");
	}

})
