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
				'free_shipping': result.shipping.free_shipping
            })
            //console.log(result + 'hola soy un result')
        })

        if (data.filters.values) {
            data.filters[0].values[0].path_from_root.map((cat)=>{
                categories.push(cat.name)    
            })
        }else{
            let MaxObj = {
                'name': '',
                'results': 0
            }
            console.log('else1')
            data.available_filters[0].values.map((cat)=>{
                console.log(cat + 'else2')
                
                if (cat.results > MaxObj.results) {
                    console.log('else3')
                    MaxObj = {
                        'name': cat.name,
                        'results': cat.results
                    }
                }
                
            })
            categories.push(MaxObj.name)
        }
                
        

        resolve(producto);
        })  
    })
    return queryPromise      
}



self.getproduct = function (id) {
    const getproduct = new Promise((resolve, reject) => {
        //restler.get/post/put/delete(url).on('complete') es como el .done
        rest.get('https://api.mercadolibre.com/items/' + id).on('complete', function(result) {
            resolve(result);
        })  
    })
    return getproduct
}


self.getproddescrip = function (id) {
    const getproddescrip = new Promise((resolve, reject) => {
        //restler.get/post/put/delete(url).on('complete') es como el .done
        rest.get('https://api.mercadolibre.com/items/' + id + '/description').on('complete', function(result) {
            resolve(result);
        })  
    })
    return getproddescrip
}




      
module.exports = self