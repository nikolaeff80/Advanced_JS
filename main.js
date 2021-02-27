const cartImage = 'https://placehold.it/100x80';
const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

let app = new Vue ({
	el: '#app',
	data: {
		catalogUrl: '/catalogData.json',
		products: [],
		imgCatalog: 'https://placehold.it/200x150',
		search:'',
		isVisibleCart: false,
	},
	methods: {
		getJSON (url) {
			return fetch (url)
				.then (result => result.json ())
				.catch (error => {
					console.log (error)
			})
		},
		addProduct (product) {
			console.log (product.id_product)
		}
	},
	computed:{
		filtered(){
			return this.search.length > 0
				? this.products.filter(e => ~e.product_name.toLowerCase().indexOf(this.search.toLowerCase()))
				: this.products
		}
	},
	mounted () {
		this.getJSON (`${API_URL + this.catalogUrl}`)
			.then (data => {
				for (let el of data) {
					this.products.push (el)
				}
			})
	}
})