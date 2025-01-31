<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="w-full max-w-md p-8 bg-white rounded shadow-md">
        <h2 class="mb-6 text-2xl font-bold text-center text-gray-800">Login</h2>
        <form>
          <!-- Email -->
          <div class="mb-4">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              v-model="email"
              class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
  
          <!-- Password -->
          <div class="mb-6">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
  
          <!-- Submit Button -->
          <button
          @click="login" 
            type="button"
            class="w-full px-4 py-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Login
          </button>

          <!-- Success Message -->
        <div v-if="successMsg">
            <p id="filled_success_help" class="mt-2 text-xs text-green-600 dark:text-green-400"><span class="font-medium">Well done! </span>{{ successMsg }}</p>

        </div>

        <!-- Errorr message -->
        <div v-if="errorMsg">
            <p id="filled_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Oh, snapp! </span>{{ errorMsg }}</p>
</div>
        </form>
      </div>
    </div>
  </template>

<script setup>
const supabase = useSupabaseClient()
const user = useSupabaseUser()
const email = useState(() => null)
const password = useState(() => null)
const successMsg = useState(() => false)
const errorMsg = useState(() => false)

if(user.value) {
    await navigateTo('/')
}

const login = async () => {
    const {data, error} = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value,
    })

    if(error) {
        successMsg.value = null
        errorMsg.value = error.message
        return
    }

    errorMsg.value = null
    successMsg.value = 'Redirecting...'
    setTimeout(async () => {
        successMsg.value = null
        await navigateTo('/tablechoose')
    },2000)
}

const githubLogin = async () => {
    const {data, error} = await supabase.auth.signInWithOAuth({
        provider: 'github'
    })

    if(error) {
        successMsg.value = null
        errorMsg.value = error.message
        return
    }

    errorMsg.value = null
    successMsg.value = 'Redirecting...'
    setTimeout(async () => {
        successMsg.value = null
        await navigateTo('/')
    },2000)
}

const googleLogin = async () => {
    const {data, error} = await supabase.auth.signInWithOAuth({
        provider: 'google'
    })

    if(error) {
        successMsg.value = null
        errorMsg.value = error.message
        return
    }

    errorMsg.value = null
    successMsg.value = 'Redirecting...'
    setTimeout(async () => {
        successMsg.value = null
        await navigateTo('/')
    },2000)
}
</script>

  