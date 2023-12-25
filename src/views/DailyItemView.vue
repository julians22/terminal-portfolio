<script setup>
import axios from 'axios';
import {ref, onMounted} from 'vue';

const loading = ref(true);
const dailies = ref(null);
const errors = ref(null);

const storageUrl = import.meta.env.VITE_DAILY_ITEMS_STORAGE_URL;

const fetchData = () => {
    errors.value = dailies.value = null
    loading.value = true

    let url = `${import.meta.env.VITE_DAILY_ITEMS_API_URL}/public/daily-items`;

    // replace `getPost` with your data fetching util / API wrapper
    axios.get(url)
    .then(function (response) {
        dailies.value = response.data;
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        errors.value = error;
        console.log(error);
    })
    .finally(function () {
        loading.value = false;
    });
}

onMounted(() => {
    fetchData();
});
</script>

<template>
    <div class="daily-items bg-cyan-100">
      <h1 class="font-bold text-center text-cyan-600 text-xl mt-4">Yooo!! Welcome</h1>

        <div class="text-center mt-6" v-if="loading">
            <strong>Tunggu yeee...</strong>
            <br>
            <strong>Inet lu 2G, sabar 💪</strong>
        </div>

        <div v-else-if="!loading && dailies != null">
            <div class="flex flex-wrap pt-4 px-4 justify-around">
                <div :title="daily.title" class="bg-white w-[270px] border rounded-md px-2 py-1 flex flex-col items-center mb-4" v-for="daily in dailies.data">
                    <img :src="`${storageUrl}/${daily.image}`" alt="" class="aspect-square object-contain object-center w-11/12 rounded-md">
                    <p class="text-black font-medium text-sm text-center tracking-tight truncate text-ellipsis ..." :title="daily.title">{{ daily.title }}</p>
                    <a :title="`Beli ${daily.title}`" :href="daily.url" class="text-base text-white font-light bg-black rounded-full px-2 py-1 border mt-2">Gasken!🔥</a>
                </div>
            </div>
        </div>

        <div class="text-center text-red-900" v-else>
            <strong>
                Duh keknya ada yang error deh
            </strong>

            <div class="text-6xl">
                🤬
            </div>
        </div>

    </div>
  </template>
  
  <style>
    .daily-items {
        width: 100%;
    }
  @media (min-width: 1024px) {
    .daily-items {
      min-height: 100vh;
      width: 600px;
    }
  }
  </style>