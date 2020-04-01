<template>
    <div id="signin">
        <div class="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full">
    <div>
      <img class="mx-auto h-18 w-auto" src="../assets/images/logo.png" alt="Workflow" />
      <!-- <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-white">
        Start your fitness training Today
      </h2> -->
    </div>
    <br><br>
     <input type="hidden" name="remember" value="true" />
      <!-- <div class="rounded-md shadow-sm">
        <div>
          <input aria-label="Email address" name="email" v-model="email" type="email" required class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-900 placeholder-gray-500 text-white rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 bg-gray-800 sm:text-sm sm:leading-5" placeholder="Email address" />
        </div>
        <div>
          <input aria-label="Password" name="password" v-model="password" type="password" required class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-900 placeholder-gray-500 text-white rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 bg-gray-800 sm:text-sm sm:leading-5" placeholder="Password" />
        </div>
      </div> -->

          <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
              Email
            </label>
            <input v-model="email" class="appearance-none block w-full bg-gray-800 text-gray-700 border border-gray-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="Email">
          </div>
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              Password
            </label>
            <input v-model="password" class="appearance-none block w-full bg-gray-800 text-gray-700 border border-gray-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************">
            <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
          </div>
        </div>

       <div class="mt-6 flex items-center justify-between">
        <div class="flex items-center">
          <label for="remember_me" class="ml-2 block text-sm leading-5 text-white hover:text-indigo-500">
            <router-link to="/signup">Not a User Yet</router-link>
          </label>
        </div>

        <div class="text-sm leading-5">
          <a href="#" class="font-medium text-yellow-800 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
            Forgot your password?
          </a>
        </div>
      </div>

      <div class="mt-6">
        <button type="submit" @click="login" class="group relative uppercase w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-yellow-800 bg-yellow-400 hover:bg-yellow-900 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
          <span class="absolute left-0 inset-y pl-3">
           <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </span>
          Sign in
        </button>
        <br>
        <p class="mt-2 text-center text-sm leading-5 text-yellow-800 max-w">
        <a href="#" class="font-medium text-yellow-800 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
           Includes a 14 day trial before billing begins
        </a>
      </p>
      </div>
                        </div>
                        </div>
                </div>
</template>

<script>
import {fb} from '../firebase'
export default {
  name: "Login",
  props: {
    msg: String
  },
  data(){
      return {
          name:null,
          email:null,
          password:null
      }
  },
  methods:{
      login(){
          fb.auth().signInWithEmailAndPassword(this.email, this.password)
                        .then(() => {
                        // eslint-disable-next-line no-undef
                          this.$router.replace('profile');  
                        })
                        .catch(function(error) {
                            // Handle Errors here.
                            var errorCode = error.code;
                            var errorMessage = error.message;
                            if (errorCode === 'auth/wrong-password') {
                                alert('Wrong password.');
                            } else {
                                alert(errorMessage);
                            }
                            console.log(error);
                    });
      },
     
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>