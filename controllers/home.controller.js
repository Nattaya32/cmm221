exports.index = function(req,res){
	/*let content = {
		banner : [
		{
			id: 1,
			url: '//image/img-1,jpg'
		},
		{
			id: 2,
			url:'//image/img-1.jpg'
		}
		]
	}
	res.json(content)
}*/
res.render ('home.twig')
}