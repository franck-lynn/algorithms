import R from 'ramda'

console.log(R.toUpper('javascript语言精粹'));

var books = [
        { name: 'vue.js实战', author: "梁灏" },
        { name: 'javascript语言精粹', author: "道格拉斯 " },
        { name: 'python高级程序设计', author: "尼古拉斯" },
        { name: 'c语言权威指南', author: "比尔" },
    ]

let sortByName = R.sortBy(R.compose(R.toUpper, R.prop('name')));

console.log(sortByName(books));



const sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop('name')));
const alice = {
  name: '爱丽丝',
  age: 101
};
const bob = {
  name: '鲍勃',
  age: -10
};
const clara = {
  name: '卡拉',
  age: 314.159
};
const people = [clara, bob, alice];
// sortByNameCaseInsensitive(people); //=> [alice, bob, clara]
console.log(sortByNameCaseInsensitive(people));






