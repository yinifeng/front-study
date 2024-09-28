# nodejs

官方地址：https://nodejs.org/

14.19.2





## 一、nvm

**Node Version Manager（NVM）** 是一种用于管理多个主动节点.js版本的工具

下载地址：https://github.com/coreybutler/nvm-windows/releases

常用命令：

```shell
# 配置nvm镜像服务器
nvm node_mirror https://npmmirror.com/mirrors/node/

# 查看nvm版本
nvm version

# 显示已安装node的版本
nvm list

# 安装nodejs 版本
nvm install 版本号(lts 长期文档版 或 版本号 或 最新非文档版 latest)

# 指定使用某个版本
nvm use 版本号
```



## 二、JS代码执行图解

JS是单线程的，它的运行是基于事件循环机制（event Loop）

![](.\images\JS执行代码执行流程.jpg)



JS执行代码流程示例：

```javascript
setTimeout(()=>{
    //宏任务
    console.log(1);
});

queueMicrotask(()=>{
    //微任务
    console.log(2);
});

//微任务
Promise.resolve().then(()=> console.log(3));

Promise.resolve().then(()=> {
    setTimeout(()=>{
    	//宏任务
    	console.log(4);
	});
});

//栈代码块
console.log(5);

//执行顺序结果：5 2 3 1 4
```





## 三、包管理器

随着项目复杂度的提升，在开发中不可能所有的代码都要手动一行一行的编写，于是我们就需要一些将一些现成写好的代码引入到我们的项目中来帮助我们完成开发，就像是我们之前使用jQuery。jQuery这种外部代码在项目中，我们将其称之为包。



### 1、NPM

node中的包管理局叫做npm（node package manage），npm是世界上最大的包管理库。作为开发人员，我们可以将自己开发的包上传到npm中共别人使用，也可以直接从npm中下载别人开发好的包，在自家项目中使用。

npm由以下三个部分组成：

1. npm网站 （通过npm网站可以查找包，也可以管理自己开发提交到npm中的包。https://www.npmjs.com/）
2. npm CLI（Command Line Interface 即 命令行）（通过npm的命令行，可以在计算机中操作npm中的各种包（下载和上传等））
3. 仓库（仓库用来存储包以及包相关的各种信息）

对于初学者来讲，大多数情况下都是下载并使用npm中的各种包，而少有向npm中上传的操作。所以本节课的重点我们也会放到通过npm下载引用包的各种操作上，而不是上传管理等操作。

npm在按照node时已经一起安装，所以只有你的node正常安装了，npm自然就可以直接使用了。可以在命令行中输入`npm -v`来查看npm是否安装成功

```shell
# 查看npm版本信息
npm -v
```

**Package.Json**

包是一组编写好的代码，可以直接引入到项目中使用。具体来说，包其实就是一个文件夹，文件夹中会包含一个或多个js文件，这些js文件就是包中存放的各种代码。除了必要的代码外，包中还有一个东西是必须的，它叫做包的描述文件 —— package.json

package.json顾名思义，它就是一个用来描述包的json文件。它里边需要一个json格式的数据（json对象），在json文件中通过各个属性来描述包的基本信息，像包名、版本、依赖等包相关的一切信息。它大概长成这个样子：

```json
{
  "name": "my-awesome-package",
  "version": "1.0.0",
  "author": "Your Name <email@example.com>"
}
```

package.json中包含有哪些字段呢？我们来研究一下：

name（必备）

- 包的名称，可以包含小写字母、_和-

version（必备）

- 包的版本，需要遵从x.x.x的格式
- 规则：
  - 版本从1.0.0开始
  - 修复错误，兼容旧版（补丁）1.0.1、1.0.2
  - 添加功能，兼容旧版（小更新）1.1.0
  - 更新功能，影响兼容（大更新）2.0.0

author

- 包的作者，格式：Your Name <email@example.com>

description

- 包的描述

repository

- 仓库地址（git）

scripts

- 自动脚本

  ```json
  "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "dev": "echo \"Error: no dev specified\" && exit 1"
  }
  start 和 test可以直接通过npm start 或 npm test执行
  其他命令需要通过npm run xxx 执行
  ```

除了上述的字段外，package.json中还有一些其他字段由于暂时还未涉及，所以我们遇到的时在详细说明。

通常情况下，我们的自己创建的每一个node项目，都可以被认为是一个包。都应该为其创建package.json描述文件。同时，npm可以帮助我们快速的创建package.json文件。只需要进入项目并输入`npm init`即可进入npm的交互界面，只需根据提示输入相应信息即可。输入后根据提示输入相应信息即可：

```shell
# npm初始化一个项目
npm init

# 可以直接通过默认选项来创建package.json
npm init -y

# 安装包
npm install lodash
```

接下来，我们来看看`npm install lodash`这个命令到底做了什么：

第一，我们看到的，调用后它会自动连接npm服务器，将最新的loadsh包下载到项目的node_modules目录下，如果目录不存在下载包时会自动创建。

第二，它会修改package.json文件，在dependencies字段中将刚刚下载的包设置为依赖项

```json
"dependencies": {
    "lodash": "^4.17.21"
 }
```

package.json中的dependencies表示当前包的依赖包，也就意味着我们的包必须有这些包才能够正常的运行。设置依赖项后，当我们在项目中执行`npm install`后，依赖项中的包会自动下载到当前项目中。设置依赖项时`"lodash": "^4.17.21"`前边的loadsh表示包的名字，后边是包的版本。`"^4.17.21"`表示匹配最新的4.x.x的版本，也就是如果后期lodash包更新到了4.18.1，我们的包也会一起更新，但是如果更新到了5.0.0，我们的包是不会随之更新的。如果是`"~4.17.21"`，~表示匹配最小依赖，也就是4.17.x。如果是`"*"`则表示匹配最新版本，即x.x.x（不建议使用）。当然也可以不加任何前缀，这样只会匹配到当前版本。

也可以在安装时直接指定，要安装的包的版本，像是这样

```shell
# 安装包也可以简写成
npm i lodash

# 指定安装版本的组件
npm install lodash@3.2.0

# 安装打印某个版本的组件
npm install lodash@"> 3.2.0"

# 如果不希望，包出现在package.json的依赖中，可以添加–no-save指令禁止
npm install lodash --no-save

# 或者，也可以通过-D或–save-dev，将其添加到开发依赖
npm install lodash -D
```

第三，安装包后项目中会自动生成package.lock.json文件，这个文件主要是用来记录当前项目的下包的结构和版本的，提升重新下载包的速度，以及确保包的版本正确。



**全局安装**

全局安装指，直接将包安装到计算机本地，通常全局安装的都是一些命令行工具，全局安装后工具使用起来也会更加便利。全局安装只需要在执行install指令时添加-g指令即可。比如，现在我们尝试全局安装laughs组件：

```shell
# 全局安装组件
npm i laughs -g

# 如果全局安装 不能使用命令，需要 环境变量配置 NPM_GLOBAL 到 node_global
```

配置NPM_GLOBAL

```tex
1、在 cmd 窗口用下面命令修改路径。（如下命令引号内为你新建的npm_global文件夹和npm_cache文件夹路径）

npm config set prefix "D:\Program Files\nodejs\npm_global"

npm config set cache "D:\Program Files\nodejs\npm_cache"

2、让新建的全局模块功能能直接在 cmd 窗口中运行，需要将npm_global文件夹路径加入到系统环境变量中。

（1）新建系统环境变量NPM_GLOBAL,其值为上述npm_global的文件夹路径。
```

上例中安装的是一个命令行工具，安装成功后只需要在命令行中输入ha即可在命令行中显示一个英文的笑话，当然这是一个纯粹为了演示而安装的组件。

所有的组件可以通过`npm uninstall xxx`来完成卸载。

```shell
# 卸载组件
npm uninstall lodash
```



**配置镜像**

npm的服务器位于国外，有时访问速度会比较慢，可以通过配置国内镜像来解决该问题，配置代码：

```shell
npm install -g cnpm --registry=https://registry.npmmirror.com
```

上边的指令会为计算机安装一个名为cnpm的新指令，该指令的功能和npm相同，不同点在于它会通过国内的镜像服务器下载包。

安装完成后，便可以通过cnpm命令来安装包。

```shell
cnpm i lodash
```

使用cnpm后，计算机中便同时存储在cnpm和npm两个命令，可以根据需要选择使用(推荐使用npm，下载慢修改配置镜像仓库)。但是由于cnpm的运行方式和npm不太一样，所以就我个人来讲，更愿意直接修改npm的地址为镜像地址。显示这样，即可直接修改npm的仓库地址：

```shell
# 设置阿里的淘宝镜像加速
npm set registry https://registry.npmmirror.com
```

修改后，直接使用npm时访问的就是国内的npm镜像服务器，如果想恢复到原版的配置，可以执行以下命令：

```shell
# 恢复配置的镜像服务器，恢复默认镜像服务器
npm config delete registry

# 查看设置的镜像服务器配置
npm config get registry
```



### 2、Yarn

早期的npm存在有诸多问题，不是非常的好用。yarn的出现就是为了帮助我们解决npm中的各种问题，如何解决呢？方案很简单使用yarn替换掉npm。当然现在的npm相较于之前的已经得到了很大的优化，所以你完全可以选择不使用yarn。

在新版本的node中，corepack中已经包含了yarn，可以通过启用corepack的方式使yarn启用。首先执行以下命令启用corepack：

```shell
# 第一种方式，利用npm全局安装yarn
npm i yarn -g

# 第二种方式，启用yarn，node16版本以上，默认关闭的，通过以下启用，这里包括启用pnpm
corepack enable

# 查看yarn版本
yarn -v

# 切换yarn版本，最新版：
corepack prepare yarn@stable --activate

# 切换yarn版本1，最新版：
corepack prepare yarn@1 --activate

# 切换yarn版本3，最新版：
corepack prepare yarn@3 --activate

# yarn 添加 express 依赖
yarn add express

# yarn 版本3没有node_modules，所以yarn3 后 执行 node index.js 要 这样执行 yarn node index.js

# yarn 初始化项目 指定yarn版本初始化
yarn init -2
```

**yarn命令**

yarn init （初始化，创建package.json）

yarn add xxx（添加依赖）

yarn add xxx -D（添加开发依赖）

yarn remove xxx（移除包）

yarn（自动安装依赖）

yarn run（执行自定义脚本）

yarn <指令>（执行自定义脚本）

yarn global add（全局安装）

yarn global remove（全局移除）

yarn global bin（全局安装目录）



 注意：yarn 全局安装可能无法使用，需要配置环境变量 ，通过yarn global bin 的路径配置到path中



**yarn 配置镜像：**

```shell
#yarn3 以下版本列出配置项
yarn config list

#yarn3以上版本列出配置项
yarn config

#yarn 3 之后设置仓库的 是 npmRegistryServer
yarn config set npmRegistryServer https://registry.npmmirror.com

# 配置：
yarn config set registry https://registry.npmmirror.com

# 恢复：
yarn config delete registry
```



### 3、Pnpm

pnpm又是一款node中的包管理器，我真的不想在介绍了。但是想想还是说一下吧，毕竟也不难。作为初学者的你，npm、yarn和pnpm选一个学一学就可以了。

```shell
# 安装
npm install -g pnpm

# corepack 启用
corepack enable
```

**命令：**

pnpm init（初始化项目，添加package.json）

pnpm add xxx（添加依赖）

pnpm add -D xxx（添加开发依赖）

pnpm add -g xxx（添加全局包）

pnpm install（安装依赖）

pnpm remove xxx（移除包）



**Pnpm镜像配置**

```shell
#配置：
pnpm config set registry https://registry.npmmirror.com

#恢复：
pnpm config delete registry
```

