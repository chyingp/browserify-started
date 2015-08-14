## 入门例子：getting-started

getting-started

```
browserify main.js > bundle.js
```

## 业务模块+系统模块

add-node-modules

```
browserify main.js > bundle.js
```

## 外部通过require引用

```
browserify -r ./header.js:header -r ./main.js:main > bundle.js
```

## 多个bundle

```
touch build
browserify -r ./common.js > build/common.js
browserify -x ./common.js page1.js > build/page1.js
browserify -x ./common.js page2.js > build/pagex.js
```