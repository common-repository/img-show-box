jQuery(document).ready(function(){
//the range of this plugins,may be you should do some changes;你也许需要修改下面这行$(" ")内的作用范围；
$(".post-content img,.post-text img,.entry img,.wrap img.content img,.post img,.posttext img").addClass("imgshow");
	$(".noimgshow").removeClass("imgshow");
		$("[class=imgshow]").unwrap();
$(".imgshow").click(function(){
			//show
		var boxhtml="<div id='lightbox'><div id='bg'></div><div id='img_content'><div id='close' style='position:relative;'><a></a></div><div id='theimg'></div><div id='thetitle'></div></div></div>";
			//add the all div 添加div
			$("body").append(boxhtml);
		var img_url=$(this).attr("src");
		var img_alt=$(this).attr("alt");
		var img_title=$(this).attr("title");
		
			$("#theimg").html("<img src='"+img_url+"' alt='"+img_alt+"' title='"+img_title+"'/>");
			$("#thetitle").html("<span>"+img_title+"</span>");
		
		//图片长宽比例ee. the ratio of image is ee. 
	    var ee=$(this).height()/$(this).width();
        var window_h=$(window).height()/2;
		var window_w=$(window).width()/2;
		
		//显示层.show the img by lightbox
		$("#lightbox").fadeIn(50);
		//尺寸判断 judge and resize the size.
			if($("#theimg img").height()>(2*window_h-60))
			{
				$("#theimg img").height(2*window_h-60);	
				$("#theimg img").width(mh/ee);
			}
		var mh=$("#theimg img").height();
		var mw=$("#theimg img").width();
		
		$("#img_content").stop().animate({height:mh},500)	
		$("#img_content").animate({"margin-top":-mh/2-20+"px"},{queue:false})
		$("#img_content").animate({width:mw},700).animate({"margin-left":-mw/2-10+"px"},{queue:false});

		$("#lightbox,#close").click(function(){
		$("#lightbox").remove();
	});
});
	
	
});