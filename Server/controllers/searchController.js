let self = {}
const searchService = require('../services/searchService')


self.getquery = function(req, res) {
    const query = req.query.q; //para levantar query params siempre se usa esto en node
	console.log(query, 'hola soy el query')
	searchService.getquery(query).then((result) => {
		//console.log(result + 'lalala')
			
			return res.json(result)
    }).catch(function(err) {
		console.log(err);
	  });
    
}

self.getproduct = function (req, res) {
	const id = req.params.id
	console.log(id, 'hola getproduct')

	searchService.getproduct(id).then((result) => {

		searchService.getproddescrip(id).then((data) => {
			const cat = result.category_id
			
			searchService.getcategory(cat).then((info) => {
				
				let precio = result.price
				let preciored= Math.floor(precio)
				let decimales = ((precio - preciored)*100)
				const producto = {
					'author': {
						'name': 'Michelle',
						'lastname': 'SB'
					},
					'item': {
						'id': result.id,
						'title': result.title,
						'price': {
							'currency': result.currency_id,
							'amount': preciored,
							'decimals': decimales,
						},
						'picture': result.pictures,
						'condition': result.condition,
						'free_shipping': result.shipping.free_shipping,
						'sold_quantity': result.sold_quantity,
						'address': result.seller_address.state.name,
						'description': data.plain_text,
						'category': info
					}
				}
				res.json(producto)
			}).catch(function(err) {
				console.log(err);
			  });

		}).catch(function(err) {
			console.log(err);
		  });

	}).catch(function(err) {
		console.log(err);
	  });
}

// self.getcategory = function(req, res) {
//     const id = req.params.id; //para levantar query params siempre se usa esto en node
// 	console.log(id, 'hola getcategory')
// 	searchService.getcategory(id).then((result) => {
// 			const categories = [result]	
// 			console.log(result)		
// 			res.json(categories)
//     }).catch(function(err) {
// 		console.log(err);
// 	  });
    
// }


module.exports = self