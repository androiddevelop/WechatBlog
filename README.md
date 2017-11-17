# WechatBlog
**Codeboy博客微信小程序**

微信扫码即可查看
<br/>
<img width="200" height="200" src="wechatblog.png" />

### 安装调试:

1. 请下载[CodeboyBlog](https://github.com/androiddevelop/CodeboyBlog)，复制`search`和`wechat`目录到博客根目录，暂时只支持Jekyll博客，不支持`Hexo`博客，其中`search`目录提供博客列表，`wechat`目录提供博客详情。

2. 运行`wechat`目录下的 `create.sh` 文件，生成对应的内容模板。

3. 部署博客。

4. 下载小程序代码，修改部分配置
  - /app.json 博客名字(改成自己博客名称)和标题栏样式(非必须)。
  - 其他样式请修改wxss。

5. 本地测试通过后，发布小程序。

### 更新内容:

#### 2017-11-17

#### v0.0.2
- 去除博客列表标题中的ss分类。

#### v0.0.1
- 添加初版微信小程序支持，可以便捷创建专属于自己博客的小程序。
