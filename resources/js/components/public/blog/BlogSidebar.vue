<template>
    <span id="blogsidebar">
        <div class="span4">
            <aside class="right-sidebar">
              <div class="widget">
                <form class="form-search">
                  <input @keyup="RealSearch" placeholder="Type something" type="text" class="input-medium search-query" v-model="keyword">
                  <button @click.prevent="RealSearch" type="submit" class="btn btn-square btn-theme">Search</button>
                </form>
              </div>
              <div class="widget">
                <h5 class="widgetheading">Categories</h5>
                <ul class="cat">
                    <li v-for="(category,index) in allCategories" :key="index">
                        <i class="icon-angle-right"></i>
                        <router-link :to="`/categories/${category.id}`">{{category.cat_name}}</router-link>
                    </li>
                </ul>
              </div>
              <div class="widget">
                <h5 class="widgetheading">Latest posts</h5>
                <ul class="recent">
                  <li v-for="(post,index) in blogPost" :key="index" v-if="index<5">
                    <img :src="`uploadImage/${post.photo}`" class="pull-left" alt="" width="40" height="40"/>
                    <h6><router-link :to="`/blog/${post.id}`">{{ post.title }}</router-link></h6>
                    <p>
                        {{ post.description | sortLength(100, '...') }}
                    </p>
                  </li>
                </ul>
              </div>
            </aside>
        </div>
    </span>
</template>

<script>
import _ from 'lodash';

export default {
    name: "BlogSidebar",
    data() {
        return {
            keyword: ""
        }
    },
    computed: {
        allCategories() {
            return this.$store.getters.allCategories
        },
        blogPost() {
            return this.$store.getters.latestpost
        }
    },
    mounted() {
        this.$store.dispatch('latestPost')
        this.$store.dispatch('allCategories')
    },
    methods: {
        RealSearch:_.debounce(function () {
            this.$store.dispatch('SearchPost',this.keyword);
        },1000)
    }
}
</script>

<style scoped>

</style>
