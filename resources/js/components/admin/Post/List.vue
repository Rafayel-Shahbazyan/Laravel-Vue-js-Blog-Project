<template>
    <div>
        <section class="content">
            <div class="row justify-content-around">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Post List</h3>

                            <div class="card-tools">
                                <button class="btn btn-primary">
                                    <router-link to="/add-post" style="color:#fff">Add New Post</router-link>
                                </button>
                            </div>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <table id="example2" class="table table-bordered table-hover">
                                <thead>
                                <tr>
                                    <th>Sl</th>
                                    <th>User</th>
                                    <th>Category</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Photo</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(post,index) in allPost" :key="index">
                                    <td>{{ index+1 }}</td>
                                    <td v-if="post.user">{{ post.user.name }}</td>
                                    <td v-if="post.category">{{ post.category.cat_name }}</td>
                                    <td>{{post.title | sortLength(0,"---")}}</td>
                                    <td>{{post.description | sortLength(0,"....")}}</td>
                                    <td><img :src="post.photo" alt="" width="40" height="50"></td>
                                    <td>
                                        <router-link :to="`edit-post/${post.id}`">Edit</router-link>
                                        <a href="" @click.prevent="deletePost(post.id)">Delete</a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "List",
    mounted(){
        this.$store.dispatch('gelAllPost')
    },
    computed: {
        allPost(){
            return this.$store.getters.getAllPost
        }
    },
    methods: {
        deletePost(id) {
            axios.get('/delete/' + id )
            .then(() => {
                this.$store.dispatch('gelAllPost')
                Swal.fire({
                    icon: 'success',
                    title: 'Post Deleted Successfully'
                })
            })
            .catch(() => {

            })
        }
    }
}
</script>

<style scoped>

</style>
