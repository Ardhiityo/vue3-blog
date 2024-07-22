import {
    db
} from '@/firebase/config.js';

import {
    doc,
    getDoc
} from "firebase/firestore";

import {
    defineStore
} from 'pinia'

import {
    ref
} from 'vue';

export const getPost = defineStore('post', () => {
    const err = ref(null);
    async function getId(id) {
        try {
            // Referensi dokumen berdasarkan ID
            const docRef = doc(db, 'posts', id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                return {
                    id,
                    ...docSnap.data()
                }
            } else {
                throw Error('Dokumen tidak ditemukan');
            }
        } catch (error) {
            err.value = error.message;
        }
    }
    return {
        err,
        getId
    }
});