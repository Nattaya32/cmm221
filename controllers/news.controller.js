exports.index = function(req,res){
	let content = {
		news : [
		{
			id: 1,
			url: '//image/img-1,jpg',
			title: 'new 1'
		},
		{
			id: 2,
			url:'//image/img-1.jpg',
			title: 'new 2'
		}
		]
	}
	res.json(content)
}