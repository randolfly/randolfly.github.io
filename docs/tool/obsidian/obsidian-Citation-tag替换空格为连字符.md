---
date: 2022-08-02
tag:
  - obsidian
category:
  - skill
  - obsidian
---



## 定义

使用 Obsidian 的 Citation 插件时候，经常会碰见在 Zotero 中以空格分隔的 tag，此时在 Citation 导入后就会因为空格被分割为多个 tag。

## 方案

```js
if (this.field.name.match(/^(keywords?|groups)$/)) {
	for (let text of this.field.text.split(marker.comma)) {
		text = text.trim();
        //   if (text)
        //		this.entry.fields[this.field.name].push(text);
        if (text){
        	var textReplaceSpace = text.replace(/\s+/g, "-");
	this.entry.fields[this.field.name].push(textReplaceSpace);
        }
	}
}
```

将存在 `keywords` 的地方替换为上面的式子，意思就是使用 Regex 来替换空格为”-“

## 参考

##### 引文
##### 脚注
