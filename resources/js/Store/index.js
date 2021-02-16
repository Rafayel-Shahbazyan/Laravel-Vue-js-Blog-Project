export default {
    state: {
        category: [],
        post: [],
        blogPost: [],
        singlePost: [],
        allCategories: [],
        latestpost: []
    },
    getters: {
        getCategory(state){
            return state.category
        },
        getAllPost(state){
            return state.post
        },
        getblogPost(state){
            return state.blogPost
        },
        singlePost(state){
            return state.singlePost
        },
        allCategories(state) {
            return state.allCategories
        },
        latestpost(state){
            return state.latestpost
        }
    },
    actions: {
        allCategory(context){
            axios.get('/category')
                .then((response) => {
                    context.commit('categories',response.data.categories)
                })
        },

        gelAllPost(context){
            axios.get('/post')
                .then((response)=>{
                    context.commit('allPost',response.data.posts)
                })
        },

        getBlogPost(context){
            axios.get('/blogpost')
                .then((response)=>{
                    context.commit('getBlogPost',response.data.posts)
                })
        },

        getPostById(context,payload) {
            axios.get('/singlepost/' +  payload)
                .then((response) => {
                    context.commit('singlePost',response.data.post)
                })
        },
        allCategories(context) {
            axios.get('/categories/')
                .then((response) => {
                    context.commit('allCategories',response.data.categories)
                })
        },
        getPostByCatId(context,payload){
            axios.get('/categorypost/'+payload)
                .then((response)=>{
                    console.log(response.data.posts)
                    context.commit('getPostByCatId',response.data.posts)
                })
        },
        SearchPost(context,payload){
            axios.get('/search?s='+payload)
                .then((response)=>{
                    context.commit('getSearchPost',response.data.posts)
                })

        },

        latestPost(context) {
            axios.get('/latestpost')
                .then((response)=>{
                    context.commit('latestpost',response.data.posts)
                })
        }
    },
    mutations: {
        categories(state,data){
            return state.category = data
        },
        allPost(state,payload){
            return state.post = payload
        },
        getBlogPost(state,payload) {
            return state.blogPost = payload
        },
        singlePost(state,payload) {
            return state.singlePost = payload
        },
        allCategories(state,payload) {
            return state.allCategories = payload
        },
        getPostByCatId(state,payload){
            state.blogPost = payload
        },
        getSearchPost(state,payload){
            state.blogPost = payload
        },
        latestpost(state,payload){
            state.latestpost = payload
        }
    }
}
