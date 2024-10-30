=== Image show box ===
Contributors: Joychao
Donate link: http://www.joychao.cc/
Tags: img,image,lightbox,show
Requires at least: 3.0
Tested up to: 3.2.1
Stable tag: 2.2.0


一款炫酷的图片查看插件，仿QQ空间个人中心查看图片效果。A cool image show box.
== Description ==
-仿QQ空间个人中心查看图片功能；<br />
-Lightbox效果；<br /> 
-采用JQuery编写,不写入数据库；<br />
-可自定义不显示效果部分（<span style="color:red;">在需要屏蔽效果位置使用带有class="noimgshow"的标签包括即可</span>）；<br />
-完全原创，版权归<a href="http://www.joychao.cc">Joychao（http://www.joychao.cc）</a>所有；<br />
-增加点击半透明层可关闭查看。<br />
-无须用户操作自动判断是否加载jQuery类库；<br />


如有问题请联系：
	QQ:44294631<br />
	Url:<a href="http://www.joychao.cc">www.joychao.cc</a><br />
	Email:<a href="mailto:joy@joychao.cc">Joy@joychao.cc</a>,<a href="mailto:44294631@qq.com">44294631@qq.com</a><br />
	Msn:anzhengchao@msn.cn<br />
Thank you!<br />

== Installation ==
1.上传插件到wordpress的/wp-content/plugins/目录;<br />
2.进入控制板启用插件;<br />
1. Upload `plugin-name.php` to the `/wp-content/plugins/` directory<br />
2. Activate the plugin through the 'Plugins' menu in WordPress<br />
--------------------------------------------------
▶说明：有可能根据主题不同需要做如下修改：<br />
  找到img文件夹下show.js的24行：<br />
 $(".post-content img,.post-text img,.entry img,#container img,.content img,.post img,.posttext img").addClass("imgshow");<br />
 
  在 $("")里边填入你的主题文章内容现实的外层的标签的ID或者类名加上img,例如加入：.entry img;<br />
  或者你自己添加一句:$(".entry img").addClass("imgshow");<br />
--------------------------------------------------
▶例如：我的主题内容显示部分是：<br />
	&lt;div id="post-content"&gt;这里是文章内容&lt;/div&gt;<br />
	那么就应该加入：#post-content img<br />
	或者添加一句：$(".entry img").addClass("imgshow");<br />
	
<p style="color:red;">
注意：ID请在名字前使用:#号；类名（class）请使用： .号；</p><br />
例如：id="abc",那么填入：#abc img;<br />
	class="abc",那么填入：.abc img;<br />
如有问题请联系：<br />
	QQ:44294631<br />
	Url:<a href="http://www.joychao.cc">www.joychao.cc</a><br />
	Email:<a href="mailto:joy@joychao.cc">Joy@joychao.cc</a>,<a href="mailto:44294631@qq.com">44294631@qq.com</a><br />
	Msn:anzhengchao@msn.cn<br />
Thank you!<br />
== Screenshots ==
1. /tags/2.1.4/screenshot-1.jpg


