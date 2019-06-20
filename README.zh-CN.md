# px to rpx

一个易用的 `px` 转 `rpx` VSCode 插件

[English](README.md)

## Usages

![Usage](imgs/px2rpx.gif)

### 如何安装

```bash
ext install px-to-rpx
```

### 如何使用

+ css文件智能代码提示，如：输入 `20px` 智能提示转化后 `rpx` 值
+ 通过 `F1` 命令面板执行：`px2rpx` 或 `px2rpx in selection` 命令
+ 通过右键菜单执行：`px2rpx` 或 `px2rpx in selection` 命令

### 快捷键
* `Cmd+Alt+P` 当前文件 px 转为 rpx
* `Alt+Shift+P` 选中内容 px 转为 rpx.

### 支持语言

html vue swan wxml axml css wxss acss less scss sass stylus tpl

### 设置

点击 VS Code 的 `文件 > 首选项 > 设置`，打开设置面板：

+ `px-to-rpx.baseWidth` 基准设计稿宽度 (单位: px), 默认值: 1242
+ `px-to-rpx.fixedDigits` `px` 转 `rpx` 小数点最大长度, 默认值: 3
+ `px-to-rpx.autoRemovePrefixZero` 自动移除0开头的前缀, 默认值：false

**注意：** 需要修改配置后重新启动 VSCode 才会生效

### 更新日志
[Change log](https://github.com/zhengjiaqi/vscode-px-to-rpx/blob/master/CHANGELOG.md)

**快来用起来吧!**  