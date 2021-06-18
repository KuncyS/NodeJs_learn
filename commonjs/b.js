/*
 * @Descripttion: 
 * @version: 
 * @Author: Kuncy
 * @Date: 2021-06-18 17:18:38
 * @LastEditors: Kuncy
 * @LastEditTime: 2021-06-18 17:34:48
 */
/* const opts=require('./a')

const add=opts.add
const mul=opts.mul
commonjs 解构语法的原理
*/



const { add,mul } = require('./a')
const sum=add(10,20)

const result=mul(100,200)

console.log(sum)

console.log(result)