let self = {};

const rest = require('restler')


self.getquery = function(query) {
    const queryPromise = new Promise((resolve, reject) => {
        //restler.get/post/put/delete(url).on('complete') es como el .done

        rest.get('https://api.mercadolibre.com/sites/MLA/search?q=' + query + '&limit=4').on('complete', function(data) {
        //console.log(JSON.stringify(result) + 'service')
            const author = {
                'name': 'Michelle',
                'lastname': 'SB'
            }
            const categories = []
            const items = []        
            
            const producto = {
                author,
                categories,
                items
            }

            data.results.map((result)=>{
                let precio = result.price
                let preciored= Math.floor(precio)
                let decimales = ((precio - preciored)*100)
                
                items.push({
                    'id': result.id,
                    'title': result.title,
                    'price': {
                        'currency': result.currency_id,
                        'amount': preciored,
                        'decimals': decimales
                    },
                    'picture': result.thumbnail,
                    'condition': result.condition,
                    'address': result.address.state_name,
                    'free_shipping': result.shipping.free_shipping
                })
            })
					if (data.filters[0]) {
							console.log('hola soy una cat')
							data.filters[0].values[0].path_from_root.map((cat)=>{
									categories.push(cat.name)    
							})
					}else{
							let MaxObj = {
									'name': '',
									'results': 0
							}
					
					if (data.available_filters[0] == undefined) {
						console.log('holaaa soy el if')
						MaxObj.name = ''
						categories.push(MaxObj.name)
					}else{		
						console.log('holaaa soy el else')
						data.available_filters[0].values.map((cat)=>{        
							if (cat.results > MaxObj.results) {
								MaxObj = {
									'name': cat.name,
									'results': cat.results
								}
							}				
						})
						categories.push(MaxObj.name)
					}	
				}
    
        	resolve(producto);
      	}).on('fail', function(err) {
        	reject(err)
      	})  
    })
    return queryPromise      
}



self.getproduct = function (id) {
    const getproduct = new Promise((resolve, reject) => {
        //restler.get/post/put/delete(url).on('complete') es como el .done
        rest.get('https://api.mercadolibre.com/items/' + id).on('complete', function(result) {
            resolve(result);
        }).on('fail', function(err) {
					reject(err)
				})  
        
    })
    return getproduct
}


self.getproddescrip = function (id) {
    const getproddescrip = new Promise((resolve, reject) => {
        //restler.get/post/put/delete(url).on('complete') es como el .done
        rest.get('https://api.mercadolibre.com/items/' + id + '/description').on('complete', function(result) {
            resolve(result);
        }).on('fail', function(err) {
					reject(err)
				})  
    })
    return getproddescrip
}

self.getcategory = function (id) {
    const getcategory = new Promise((resolve, reject) => {
        //restler.get/post/put/delete(url).on('complete') es como el .done
        rest.get('https://api.mercadolibre.com/categories/' + id).on('complete', function(result) {
            const categ = []

            result.path_from_root.map((cat)=>{
                categ.push(cat.name)    
            })

            resolve(categ);
        }).on('fail', function(err) {
					reject(err)
				})  
        
    })
    return getcategory
}


      
module.exports = self