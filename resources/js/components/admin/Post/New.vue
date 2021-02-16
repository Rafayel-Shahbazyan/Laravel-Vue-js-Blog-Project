<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row justify-content-around">
                <!-- left column -->
                <div class="col-md-10">
                    <!-- general form elements -->
                    <div class="card card-primary">
                        <div class="card-header">
                            <h3 class="card-title">Add New Post</h3>
                        </div>
                        <!-- /.card-header -->
                        <!-- form start -->
                        <form role="form" enctype="multipart/form-data" @submit.prevent="addNewPost()">
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="postId">Add New Post</label>
                                    <input type="text" class="form-control" id="postId" placeholder="Add New Post" v-model="form.title" name="title" :class="{ 'is-invalid': form.errors.has('title') }">
                                    <has-error :form="form" field="title"></has-error>
                                </div>

                                <div class="form-group">
                                    <label>Add New Description</label>
                                    <markdown-editor v-model="form.description"></markdown-editor>
                                    <has-error :form="form" field="description"></has-error>
                                </div>

                                <div class="form-group">
                                    <label>Select</label>
                                    <select class="form-control" :class="{ 'is-invalid': form.errors.has('cat_id') }" v-model="form.cat_id">
                                        <option disabled value="">Select One</option>
                                        <option :value="category.id" v-for="(category,index) in getAllCategory" :key="index">{{ category.cat_name }}</option>
                                    </select>
                                    <has-error :form="form" field="cat_id"></has-error>
                                </div>

                                <div class="form-group">
                                    <input @change="changePhoto($event)" name="photo" type="file" :class="{ 'is-invalid': form.errors.has('photo') }">
                                    <img :src="form.photo" alt="" width="58" height="58"/>
                                    <has-error :form="form" field="photo"></has-error>
                                </div>

                            </div>
                            <div class="card-footer">
                                <button type="submit" class="btn btn-primary">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "New",
    data() {
        return {
            form: new Form({
                title: "",
                description: "",
                cat_id: "",
                photo: ""
            })
        }
    },
    mounted() {
        this.$store.dispatch("allCategory")
    },
    computed: {
        getAllCategory(){
            return this.$store.getters.getCategory
        }
    },
    methods: {
        changePhoto(event){
            let file = event.target.files[0];

            if (file.size > 1048576) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href>Why do I have this issue?</a>'
                })
            } else{
                let reader = new FileReader();
                reader.onload = event => {
                    this.form.photo = event.target.result
                    console.log(event.target.result)
                };
                reader.readAsDataURL(file);
            }

        },

        addNewPost(){
            this.form.post('/save-post')
            .then(() => {
                this.$router.push('/post-list')

                Swal.fire({
                    icon: 'success',
                    title: 'Post Added Successfully'
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
