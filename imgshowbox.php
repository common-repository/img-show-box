<?php
/*
Plugin Name: Image show box
Plugin URI: http://www.joychao.cc/shares/1162.html
Description: A cool image show box width lightbox. 一款炫酷的图片查看插件，仿QQ空间个人中心查看图片效果 
Version: 2.2.0
Author: Joy chao
Author URI: http://www.joychao.cc

    Copyright 2011  Joychao  (email : 44294631@qq.com)

    This program is free software; you can redistribute it and/or modify
    it under the terms of the  GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/

?>
<?php 
    
  add_action('wp_footer','add_head_script',1);

  function add_head_script(){

 	 echo '<script src='.plugins_url('img/jquery-1.6.1.js',__FILE__).'></script>';
        echo '<script src="'.plugins_url('img/show.js',__FILE__).'" type="text/javascript"></script>
<link rel="stylesheet" type="text/css" href="'.plugins_url('img/imgshow.css',__FILE__).'" >';
  }
?>
