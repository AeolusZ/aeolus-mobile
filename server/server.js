const express = require('express')
const mongoose = require('mongoose')
// 链接mongo 并且使用aeolus这个集合（没有会新建的）
const DB_URL = 'mongodb://127.0.0.1:27017/aeolus'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function(){
    console.log('mongodb连接成功')
})
// 类似于mysql的表，mongo里有文档、字段的概念
const User = mongoose.model('users', new mongoose.Schema({
    name: {type: String, require: true},
    age: {type: Number, require: true}
}))
// 增
// User.create({
//     name: 'dy',
//     age: 19
// }, function(err, doc){
//     if(!err) {
//         console.log(doc)
//     } else {
//         console.log(err)
//     }
// })
// 删
// User.remove({age: 30}, function(err, doc){
//     console.log(doc)
// })
// 改
User.update({'name': 'zxw'}, {'$set': {age: 18}}, function(err, doc){
    console.log(doc)
})
// 新建app
const app = express()
// 访问根目录
app.get('/', function(req, res){
    res.send('<h1>hello world</h1>')
})
app.get('/data', function(req, res) {
    // 查
    User.findOne({name: 'zxw'}, function(err, doc){
        if (!err) {
            res.send(doc)
        }
    })
})
app.listen(9093, function(){
    console.log('server start at port 9093')
})