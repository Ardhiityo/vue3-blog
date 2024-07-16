import {
    ref
} from "vue";

const getPosts = () => {

    const posts = ref([]);
    const err = ref(null);

    const load = async () => {
        try {
            const response = await fetch("http://localhost:3000/posts");
            if (response.ok) {
                const data = await response.json();
                posts.value = data;
            } else {
                throw Error("Data gagal dimuat");
            }
        } catch (error) {
            err.value = error.message;
        }
    };

    return {
        posts,
        err,
        load
    }
}

export default getPosts;