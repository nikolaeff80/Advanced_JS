const search = {
    template:`
        <form action="#" class="search-form" @submit.prevent="filter(userSearch)">
            <input type="text" class="search-field" v-model="userSearch">
            <button class="btn-search" type="submit">
                <i class="fas fa-search"></i>
            </button>
        </form>`,
    data(){
        return{
            userSearch: ''
        }
    },
    methods:{
        filter(str) {
			let reg = new RegExp(str, 'i')
			this.$root.$refs.prod._data.filtered = this.$root.$refs.prod._data.products.filter(el => reg.test(el.product_name))
		},
    }
}

export default search