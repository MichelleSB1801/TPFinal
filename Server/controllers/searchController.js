let self = {}
const searchService = require('../services/searchService')
var currencyFormatter = require('currency-formatter');


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

	searchService.getproduct(id).then((result) => {

		searchService.getproddescrip(id).then((data) => {
			const cat = result.category_id
			
			searchService.getcategory(cat).then((info) => {
				let estado = ''
				if (result.condition == 'new') {
					estado += 'Nuevo'
				}else{
					estado += 'Usado'
				}
				let precio = result.price
				let preciored= Math.floor(precio)
				let decimales = ((precio - preciored).toFixed(2))*100
				if (decimales == 0) {
					decimales += '0'
				}

				console.log(preciored)
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
							'amount': currencyFormatter.format(preciored, {
								thousand: '.',
								decimalDigits: 0,
							  }),
							'decimals': decimales,
						},
						'picture': result.pictures[0].url,
						'condition': estado,
						'free_shipping': result.shipping.free_shipping,
						'sold_quantity': result.sold_quantity,
						'address': result.seller_address.state.name,
						'description': data.plain_text,
						'category': info
					}
				}
				res.json(producto)

				console.log(producto.price.amount)
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