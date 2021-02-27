import error from './errorComp'

const prodItem = {
    props: ['img', 'item'],
    template: `
        <div class="product-item">
            <img :src="img" alt="Some img">
            <div class="desc">
                <h3> {{ item.product_name }}</h3>
                <p>{{ item.price }} $</p>
                <button class="buy-btn" @click="$root.$refs.prod.addProduct(item)">Купить</button>
            </div>
        </div>`
}


const products = {
    data() {
        return {
            imgCatalog: 'https://placehold.it/200x150',
            catalogUrl: '/catalogData.json',
            API_URL: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses',
            products: [],
            filtered:[],
            showErrorConnect: false,
            errMsg: null,
        }
    },
    components: {
        'prod-item': prodItem,
        'error': error
    },
    methods: {
        addProduct(product) {
            console.log(`Product ${product.product_name} added`)
        },
    },
    mounted() {
        this.$parent.getJSON(this.API_URL + this.catalogUrl)
            .then(data => {
                for (let el of data) {
                    this.products.push(el)
                    this.filtered.push(el)
                }
            })
            .catch(error => {
                this.showErrorConnect = true
                this.errMsg = "Ошибка получения данных Продуктов"
            })
    },
    template: `
        <div>
            <error v-if="showErrorConnect" :msg="errMsg"></error>
            <div class="products" v-else>
                <prod-item 
                    v-for="p in filtered"
                    :key="p.id_product"
                    :img="imgCatalog"
                    :item="p"
                >
                </prod-item>
            </div>
        </div>
    `
}

export default products