const express = require ('express') /* const การประกาศตัวแปร require รับค่าแล้วเก็บไว้ในตัแปร */
const {twig} = require ('twig')

const app = express() /*เรียกฟังก์ชัน รันแล้วเก็บไว้ใน app */

app.set('view engine','twig')

const homeController = require('./controllers/home.controller') /*วิ่งไปหาในโฟลเดอร์ก่อน มี/เพื่อให้เซอร์เวอร์แสดงชื่อ*/
const newsController = require('./controllers/news.controller')

app.get('/',homeController.index)
app.get('/news',newsController.index)

app.use('/assets',express.static(__dirname + '/static/assets',{
	maxAge: 86400000 /*เวลาที่จะเก็บไฟล์ หมดเวลาไฟล์จะโหลดใหม่*/
}))

/*app.get('/',function(req,res){  /*รับ / เข้ามา แล้วส่ง Hello ออกไป */
	/*res.send('Hello')
})*/

app.listen(8000,function(err){ /*บอกว่าบอก port*/
	console.log('Server is running on port 8000') /*แล้วแสดงค่าออกตามที่กำหนด*/
})