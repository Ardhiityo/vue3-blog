import {
    ref
} from "vue";

import {
    useRouter
} from "vue-router";

import {
    db
} from '@/firebase/config.js';

import {
    collection,
    addDoc
} from "firebase/firestore";

function post() {

    const router = useRouter();

    const tag = ref();
    const tags = ref([]);

    function addTag(tagFromVue) {
        if (tagFromVue) {
            tag.value = tagFromVue;
            tag.value = tag.value.toLowerCase().replace(/\s+/g, "");
            if (!tags.value.includes(tag.value)) {
                tags.value.push(tag.value);
            }
            tag.value = "";
        } else return;
    }

    async function createPost(title, body, tag) {
        addTag(tag);
        const posts = {
            title: title,
            body: body,
            tags: tags.value,
        };

        try {
            await addDoc(collection(db, "posts"), posts);
        } catch (e) {
            alert("Error adding document: ", e)
        }

        router.push({
            name: 'home'
        });
    }

    return {
        tags,
        addTag,
        createPost
    }

}

export default post;