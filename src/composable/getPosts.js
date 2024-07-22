import {
    db
} from '@/firebase/config.js';

import {
    collection,
    getDocs
} from "firebase/firestore";

import {
    ref
} from "vue";

import {
    defineStore
} from 'pinia'

export const getPosts = defineStore('posts', () => {
    const err = ref(null);
    const posts = ref([]);

    async function load() {
        const loading = ref(true);
        try {
            const snapshot = await getDocs(collection(db, "posts"));
            snapshot.forEach((p) => {
                return posts.value.push({
                    id: p.id,
                    ...p.data(),
                });
            });
        } catch (error) {
            return err.value = error.message;
        } finally {
            loading.value = false;
            return loading.value;
        }
    }

    return {
        posts,
        err,
        load
    }
});