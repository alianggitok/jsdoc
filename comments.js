/**
返回一个对象，这个对象包含被提供对象的所有属性。
后一个对象的属性会覆盖前一个对象的属性。
传入一个单独的对象，会创建一个它的浅拷贝（shallow copy）。
如果需要深拷贝（deep copy），请使用“clone()”。
@method merge
@param {Object} 被合并的一个或多个对象
@return {Object} 一个新的合并后的对象
**/

//通过node安装jsdoc3（https://github.com/jsdoc3/jsdoc），在文件目录下执行jsdoc 文件名.js