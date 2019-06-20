# px to rpx

This is an extension for Visual Studio Code that allows you to convert px to rpx.

[中文版](README.zh-CN.md)


## Usages

![Usage](imgs/px2rpx.gif)

### Install

```bash
ext install px-to-rpx
```

### How To Use

+ Smart snippet: (e.g.) input `20px`
+ CLI: Press `F1`, enter `px2px` or  `px2px in selection`
+ Context Menu: `px2px` or  `px2px in selection`

### Keybindings
* `Cmd+Alt+P` Px to rpx
* `Alt+Shift+P` Converts selected text from px to rpx.

### Support Language

html vue swan wxml axml css wxss acss less scss sass stylus tpl

### Configuration

Open your user and workspace settings (`File > Preferences > Settings`):

+ `px-to-rpx.baseWidth` base design view width (unit: px), default: 1242
+ `px-to-rpx.fixedDigits` `px` to `rpx` decimal point maximum length, default: 3
+ `px-to-rpx.autoRemovePrefixZero` Automatically remove prefix 0, default: false

**NOTE:** Muse be restart vscode after modification

### Change log
See Change Log [here](https://github.com/zhengjiaqi/vscode-px-to-rpx/blob/master/CHANGELOG.md)

**Enjoy!**  