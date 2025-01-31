<template>
    <div>
      <div class="max-w-2xl mx-auto mt-10 p-6 bg-white border border-gray-200 rounded-lg shadow-md">
        <form @submit.prevent="submitForm">
          <!-- Report Title Input -->
          <div class="mb-4">
            <label for="report-title" class="block text-sm font-medium text-gray-700">
              Report Title
            </label>
            <input
              type="text"
              id="report-title"
              v-model="formData.title"
              name="title"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="Enter a descriptive title for the Report"
              required
            />
          </div>
  
          <!-- Casino Name Input -->
          <div class="mb-4">
            <label for="casinoName" class="block text-sm font-medium text-gray-700">
              Casino Name
            </label>
            <input
              type="text"
              id="casinoName"
              v-model="formData.casinoName"
              name="casinoName"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="Enter a Casino Name "
              required
            />
          </div>
  
  
  
  
  
          <!-- Location Input -->
          <div class="mb-4">
            <label for="casinoLocation" class="block text-sm font-medium text-gray-700">
             Casino Location
            </label>
            <input
            type = "text"
              id="casinoLocation"
              v-model="formData.casinoLocation"
              name="casinoLocation"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="City and State of Casino..."
              required
            ></input>
          </div>
  
          <!-- Message Input -->
          <div class="mb-4">
            <label for="message" class="block text-sm font-medium text-gray-700">
              text
            </label>
            <textarea
              id="message"
              v-model="formData.message"
              name="message"
              rows="5"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="Write your table report here..."
              required
            ></textarea>
          </div>
  
          <!-- Submit Button -->
          <div class="text-right">
            <button
              type="submit"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit Your Report
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  /* import { ref } from 'vue';
  import { useFetch } from '#app'; */

  definePageMeta({
    middleware:  ["auth"],
});
  
  const formData = ref({
    title: '',
    casinoName: '',
    message: '',
    casinoLocation: '', 
  });
  
  const submitForm = async () => {
    try {
      const response = await fetch('/api/t_Reports', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData.value)
      });
  
      const result = await response.json();
      console.log('Success:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  </script>
  