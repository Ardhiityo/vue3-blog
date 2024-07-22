import {
    db
} from '@/firebase/config.js';

import {
    collection,
    getDocs
} from "firebase/firestore";

import {
    ref,
    watchEffect
} from "vue";

import {
    defineStore
} from 'pinia'

export const getPosts = defineStore('posts', () => {
    const err = ref(null);

    async function load() {
        try {
            const data = ref([]);
            const snapshot = await getDocs(collection(db, "posts"));
            snapshot.forEach((p) => {
                // posts.value.push({
                //     id: p.id,
                //     ...p.data(),
                // });
                data.value.push({
                    id: p.id,
                    ...p.data(),
                });
            });
            return data.value;
        } catch (error) {
            return err.value = error.message;
        }
    }

    return {
        load,
        err
    }
});