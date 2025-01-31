<template>
    <!-- TRhis is the wrapper for the page -->
    <section class="bg-slate-100 min-h-screen">

<div class="flex flex-row bg-slate-100  justify-evenly mb-8" >
        

<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
   <NuxtLink to="/casinoslist">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Click here to view a list of all Casinos in the US.</h5>
    </NuxtLink>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here you will find a list of casinos that feature gaming
in the continental United States
.</p>
    <NuxtLink to="/casinoslist" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Show All
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </NuxtLink>
</div>


    

<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Search for Casinos by name city or state</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">If you have an idea of what you are looking for,
        you can narrow your choices by searching for a particular casino by  city ,state or casino name  here.</p>
    <NuxtLink to="/search" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Search Casinos List
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </NuxtLink>
</div>

</div>

























        <!-- <h1>
    Already signed in?
    <br>
    Login to leave a table report
    <br>
    New User?
    <br>
   
    <NuxtLink to="/register">Register  to create table report</NuxtLink>
</h1> -->
</section>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>