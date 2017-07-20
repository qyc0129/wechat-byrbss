<h2><strong>需求分析</strong></h2>
<ol>
 	<li>
<p class="reader-word-layer reader-word-s1-1">BYR-bbs缺少可靠有用的论坛全版面搜索功能</p>
</li>
 	<li>广大同学迫切需要一个完善易上手的北邮人论坛搜索工具
<p class="reader-word-layer reader-word-s1-1"></p>
</li>
</ol>
<h2><strong>目标</strong></h2>
<ol>
 	<li>
<p class="reader-word-layer reader-word-s3-15">爬取所需的论坛帖子资料并存入数据库</p>
</li>
 	<li>
<p class="reader-word-layer reader-word-s3-15">开发合适的搜索引擎满足搜索需要</p>
</li>
 	<li>
<p class="reader-word-layer reader-word-s3-15">设计其他配套功能，例如收藏功能，满足同学们的需要</p>
</li>
</ol>
<h2><strong>总体设计</strong></h2>
系统业务流程及描述（可以流程图的方式呈现）

<img class="alignnone size-medium wp-image-10101" src="http://112.74.62.56/wp-content/uploads/2017/07/11-300x170.png" alt="" width="300" height="170" />
<h2><strong>详细设计</strong></h2>
<img class="alignnone size-medium wp-image-10102" src="http://112.74.62.56/wp-content/uploads/2017/07/WX20170713-122412@2x-175x300.png" alt="" width="175" height="300" />
<h2><strong>功能实现</strong></h2>
1.采用Python编写爬虫爬取论坛帖子的数据并存入搜索数据库中

&nbsp;

2.选用合适的搜索引擎后台作为支撑,这次选择了Elasticsearch作为搜索引擎

&nbsp;

3.小程序页面设计，分五个页面进行设计，分别完成首页两页组合，搜索结果显示页，具体信息页和收藏页面。

&nbsp;
<h2><strong>项目演示</strong></h2>
<img class="alignnone size-medium wp-image-10103" src="http://112.74.62.56/wp-content/uploads/2017/07/WX20170713-122449@2x-174x300.png" alt="" width="174" height="300" />

<img class="alignnone size-medium wp-image-10106" src="http://112.74.62.56/wp-content/uploads/2017/07/WX20170713-122644@2x-177x300.png" alt="" width="177" height="300" />

<img class="alignnone size-medium wp-image-10107" src="http://112.74.62.56/wp-content/uploads/2017/07/WX20170713-122656@2x-175x300.png" alt="" width="175" height="300" /><img class="alignnone size-medium wp-image-10108" src="http://112.74.62.56/wp-content/uploads/2017/07/WX20170713-122707@2x-175x300.png" alt="" width="175" height="300" />

<img class="alignnone size-medium wp-image-10109" src="http://112.74.62.56/wp-content/uploads/2017/07/WX20170713-122718@2x-188x300.png" alt="" width="188" height="300" /><img class="alignnone size-medium wp-image-10111" src="http://112.74.62.56/wp-content/uploads/2017/07/WX20170713-123001@2x-175x300.png" alt="" width="175" height="300" />
<h2><strong>团队故事</strong></h2>
<table style="height: 108px; border-color: #d8d8d8; background-color: #f9f9f9; width: 454px;" border="1" cellspacing="0" cellpadding="5px">
<tbody>
<tr style="height: 24px;">
<td style="width: 93px; height: 24px;"><strong>姓名</strong></td>
<td style="width: 335px; height: 24px;"><strong>职责</strong></td>
</tr>
<tr style="height: 24px;">
<td style="width: 93px; height: 24px;">邱宇辰</td>
<td style="width: 335px; height: 24px;">技术担当</td>
</tr>
<tr style="height: 24px;">
<td style="width: 93px; height: 24px;">刘叶</td>
<td style="width: 335px; height: 24px;">资源协调</td>
</tr>
</tbody>
</table>
团队联系方式：

邱宇辰：406855638@qq.com

刘叶：1471957118@qq.com
<h2><strong>资料链接</strong></h2>
<a href="https://github.com/qyc0129/wechat-byrbss" target="_blank"><em>byrbbs-search</em>-on-GitHub</a>
<a href="http://v.youku.com/v_show/id_XMjkwMzM1NDY4OA==.html" target="_blank"><em>byrbbs-search</em>-优酷视频</a>

