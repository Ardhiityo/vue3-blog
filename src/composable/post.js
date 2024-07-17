import {
    ref
} from "vue";

import {
    useRouter
} from "vue-router";

function post() {

    const router = useRouter();

    const tag = ref();
    const tags = ref([]);

    function addTag(tagFromVue) {
        tag.value = tagFromVue;
        tag.value = "#" + tag.value.toLowerCase().replace(/\s+/g, "");
        if (!tags.value.includes(tag.value)) {
            tags.value.push(tag.value);
        }
        tag.value = "";
    }

    async function createPost(title, body, tag) {
        addTag(tag);
        const posts = {
            title: title,
            body: body,
            tags: tags.value,
        };
        await fetch("http://localhost:3000/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(posts),
        });
        router.push("/");
    }

    return {
        tags,
        addTag,
        createPost
    }

}

export default post;