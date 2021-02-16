<template>
    <span id="blogPost">
        <section id="inner-headline">
          <div class="container">
            <div class="row">
              <div class="span4">
                <div class="inner-heading">
                  <h2>Posts</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="content">
          <div class="container">
            <div class="row">
              <div class="span8">
                <article v-for="(post,index) in blogPost" :key="index">
                  <div class="row">
                    <div class="span8">
                      <div class="post-image">
                        <div class="post-heading">
                          <h3><a href="#">{{ post.title }}</a></h3>
                        </div>
                        <img :src="`uploadImage/${post.photo}`" alt=""/>
                      </div>
                      <p>
                          {{ post.description | sortLength(0, '...') }}
                      </p>
                      <div class="bottom-article">
                        <ul class="meta-post">
                          <li><i class="icon-calendar"></i><a href="#"> Mar 23, 2013</a></li>
                          <li v-if="post.user"><i class="icon-user"></i><a href="#"> {{ post.user.name }}</a></li>
                          <li v-if="post.category"><i class="icon-folder-open"></i><a href="#">{{ post.category.cat_name }}</a></li>
                        </ul>
                        <router-link :to="`/blog/${post.id}`" class="pull-right">Continue reading <i class="icon-angle-right"></i></router-link>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
                <BlogSidebar />
            </div>
          </div>
        </section>
    </span>
</template>

<script>
import BlogSidebar from './BlogSidebar.vue';

export default {
    name: "BlogPost",
    data() {
        return {
            id: ""
        }
    },
    components: {
        BlogSidebar
    },

    mounted() {
        this.$store.dispatch('getBlogPost')
    },
    computed: {
        blogPost() {
            return this.$store.getters.getblogPost
        }
    },
    methods: {
        getAllCategoryPost() {
            if(this.$route.params.id != null){
                this.$store.dispatch('getPostByCatId', this.$route.params.id);
            }else{
                this.$store.dispatch('getBlogPost');
            }
        }
    },
    watch:{
        $route(to,from){
            this.getAllCategoryPost()
        }
    }
}
</script>

<style scoped>

</style>
