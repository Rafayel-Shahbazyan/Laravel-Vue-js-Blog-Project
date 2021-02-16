import AdminHome from './components/admin/AdminHome.vue';
import CategoryList from './components/admin/Category/List.vue';
import AddCategory from './components/admin/Category/New.vue';
import EditCategory from './components/admin/Category/Edit.vue';

//Frontend component
import PublicHome from './components/public/PublicHome.vue';
import BlogPost from './components/public/blog/BlogPost.vue';
import SinglePost from './components/public/blog/SingleBlog.vue';

//Post
import PostList from './components/admin/Post/List.vue';
import AddPost from './components/admin/Post/New.vue';
import EditPost from './components/admin/Post/Edit.vue';

export const routes = [
    {
        path: '/home',
        component: AdminHome
    },
    {
        path: '/category-list',
        component: CategoryList
    },
    {
        path: '/add-category',
        component: AddCategory
    },
    {
        path:'/edit-category/:categoryId',
        component: EditCategory
    },

    //Post

    {
        path: '/post-list',
        component: PostList
    },
    {
        path: '/add-post',
        component: AddPost
    },
    {
        path:'/edit-post/:postId',
        component: EditPost
    },

    //Frontend Routes
    {
        path:'/',
        component: PublicHome
    },
    {
        path:'/blog',
        component: BlogPost
    },
    {
        path:'/blog/:id',
        component: SinglePost
    },
    {
        path:'/categories/:id',
        component: BlogPost
    }
]
