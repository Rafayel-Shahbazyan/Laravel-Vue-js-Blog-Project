<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row justify-content-around">
                <!-- left column -->
                <div class="col-md-6">
                    <!-- general form elements -->
                    <div class="card card-primary">
                        <div class="card-header">
                            <h3 class="card-title">Edit Category</h3>
                        </div>
                        <!-- /.card-header -->
                        <!-- form start -->
                        <form role="form" @submit.prevent="updateCategory()">
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="categoryId">Edit Category</label>
                                    <input type="text" class="form-control" id="categoryId" placeholder="Edit Category" v-model="form.cat_name" name="cat_name" :class="{ 'is-invalid': form.errors.has('cat_name') }">
                                    <has-error :form="form" field="cat_name"></has-error>
                                </div>
                            </div>
                            <div class="card-footer">
                                <button type="submit" class="btn btn-primary">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import swal from "sweetalert2";

export default {
    name: "Edit",
    mounted() {
        axios.get(`/edit-category/${this.$route.params.categoryId}`)
        .then((response) => {
            this.form.fill(response.data.category)
        })
    },
    data() {
        return {
            form: new Form({
                cat_name: ''
            })
        }
    },
    methods: {
        updateCategory() {
            this.form.post(`/update-category/${this.$route.params.categoryId}`)
                .then(response => {
                    this.$router.push('/category-list')
                    Swal.fire({
                        icon: 'success',
                        title: 'Category Updated Successfully'
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
