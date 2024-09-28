# TypeScript

中文官方文档：https://ts.nodejs.cn/doc

英文官方文档：https://www.typescriptlang.org/

1、安装

```shell
# npm全局安装
npm install -g typescript

# 查看ts版本
tsc -v
```

2、使用TS

tsc app.ts  => app.js

通常使用.ts作为TypeScript代码文件扩展名

然后运行以下命令将TypeScript编译为JavaScript代码

```shell
tsc app.ts
# 不需要每次执行重复的命令代码
tsc app.ts -w

#指定es6编译
tsc index.tx --target es6
```

3、原始数据类型

```typescript
//1、原始数据类型：boolean number string undefined null symbol
//2、对象类型：对象(object) 数组(Array) 元组(Tuple) 枚举(enum) 函数(function)
//3、其他类型：any never unknown void 值类型

//声明变量
let 变量名:类型 = 数据;
```

4、tsconfig.json配置文件

tsc --init  生成tsconfig.json, 放项目根目录

```json

```

