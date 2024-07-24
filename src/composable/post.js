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

import {
    defineStore
} from 'pinia'


export const post = defineStore('createPost', () => {

    const router = useRouter();

    async function createPost(titleForm, bodyForm, tagsForm) {
        const posts = {
            title: titleForm,
            body: bodyForm,
            tags: tagsForm,
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
        createPost
    }
});