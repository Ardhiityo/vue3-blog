import {
    ref
} from "vue";

const getPost = (id) => {

    const post = ref({});
    const err = ref(null);

    const load = async () => {
        try {
            const response = await fetch("http://localhost:3000/posts/" + id);
            if (response.ok) {
                const data = await response.json();
                post.value = data;
            } else {
                throw Error("Data gagal dimuat");
            }
        } catch (error) {
            err.value = error.message;
        }
    };

    return {
        post,
        err,
        load
    }
}

export default getPost;