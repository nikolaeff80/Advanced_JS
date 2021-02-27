let product = {
    props: ['product', 'img'],
    template: `
                <div class="product-item">
                    <img :src="img" alt="Some img">
                    <div class="desc">
                        <h3> {{ product.product_name }} </h3>
                        <p>{{ product.price }} $</p>
                        <!--button class="buy-btn" @click="$root.$refs.cart.addProduct (product)">Купить</button-->
                        <button class="buy-btn" @click="$parent.addProduct (product)">Купить</button>
                    </div>
            </div>
    `
}

let products = {
    props: [],
    data () {
        return {
            filtered: [],
            products: [],
            imgCatalog: 'https://placehold.it/200x150',
            catalogUrl: `/catalogData.json`,
            API_URL: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'
        }
    },
    methods: {
        addProduct (product) {
			this.$root.$refs.cart.addProduct (product) 
		}
    },
    template: `
        <div class="products">
              <product
              v-for="product of filtered"
              :key="product.id_product"
              :img="imgCatalog"
              :product="product"
              ></product>  
        </div>
    `,
    components: {
        product
    },
    mounted () {
        this.$parent.getJSON(`/api/products`)
			.then (data => {
				for (let el of data) {
					this.products.push (el)
					this.filtered.push (el)
				}
		})
    }
}

export default products