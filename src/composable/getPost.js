import {
    ref
} from "vue";

const getPost = (id) => {

    const post = ref({});
    const err = ref(null);
    const loading = ref(true);

    const load = async () => {
        try {
            await new Promise(resolve => setTimeout(resolve, 3000));
            const response = await fetch("http://localhost:3000/posts/" + id);
            if (response.ok) {
                const data = await response.json();
                post.value = data;
                loading.value = false;
            } else {
                throw Error("Data gagal dimuat");
            }
        } catch (error) {
            err.value = error.message;
        }
    };

    load();
    
    return {
        post,
        err,
        loading
    }
}

export default getPost;