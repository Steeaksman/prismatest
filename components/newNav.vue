<template>
    <header class="bg-gray-800 text-white">
      <nav class="container mx-auto p-4 flex justify-between items-center">
        <!-- Logo -->
        <div class="text-lg font-bold">CrapsConnection</div>
  
        <!-- Desktop Navigation -->
        <ul class="hidden md:flex space-x-4">
          <NuxtLink to="/"> Home</NuxtLink>
          <NuxtLink to="/searchchoose"> Casinos List</NuxtLink>
          <NuxtLink to="/tablechoose"> Table Reports</NuxtLink>
          <NuxtLink to="/logout"> Logout</NuxtLink>
          <!-- <li><a href="#" class="hover:underline">Home</a></li>
          <li><a href="#" class="hover:underline">Casinos List</a></li>
          <li><a href="#" class="hover:underline">Table Reports</a></li>
          <li><a href="#" class="hover:underline">Logout</a></li> -->
        </ul>
  
        <!-- Hamburger Menu -->
        <button
          class="block md:hidden focus:outline-none"
          @click="toggleMenu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </nav>
  
      <!-- Mobile Navigation -->
      <ul
        v-if="isMenuOpen"
        class="md:hidden bg-gray-700 p-4 space-y-2"
      >
      <NuxtLink to="/"> Home</NuxtLink>
          <NuxtLink to="/searchchoose"> Casinos List</NuxtLink>
          <NuxtLink to="/tablechoose"> Table Reports</NuxtLink>
          <NuxtLink to="/logout"> Logout</NuxtLink>
      </ul>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
    data() {
      return {
        isMenuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional styles if needed */
  </style>
  