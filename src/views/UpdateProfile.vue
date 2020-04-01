<template>
    <div id="update">
        <div class="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full">
    <div>
      <img class="mx-auto h-24 w-auto" src="../assets/images/logo.png" alt="Workflow" />
      <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-white">
        Start your fitness training Today
      </h2>
    </div>
    <br>
<!-- <form class="w-full max-w-lg"> -->
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input v-model="profile.firstName" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane">
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input v-model="profile.lastName" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe">
    </div> 
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
        City
      </label>
      <input v-model="profile.city" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="City">
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Location
      </label>
      <input v-model="profile.location" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Location">
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
        Telephone
      </label>
      <input v-model="profile.telephone" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="Telephone">
    </div>
  </div>
      <div class="mt-6">
        <button type="submit" @click="updateProfile" class="group relative uppercase w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-yellow-800 bg-yellow-400 hover:bg-yellow-900 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
          <span class="absolute left-0 inset-y pl-3">
           <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </span>
          Create My Account
        </button>
        <br>
      </div>
<!-- </form> -->
  </div>
</div>
    </div>
</template>

<script>
// import {fb, db} from '../firebase'

    export default {
      name: "update",
      
      props: {
        msg: String
      },
      data() {
        return {
          profile: {
            firstName: null,
            lastName: null,
            city: null,
            telephone: null,
            location: null,
          }
        }
      },
      methods: {
        updateProfile() {
           this.$firestore.profile.update(this.profile);
      }
        
    },
    // firestore() {
		// 	const user = fb.auth().currentUser;
		// 	return {
		// 		profiles: db.collection('profiles').doc(user.uid),
		// 	}
		// },

}
</script>

<style lang="scss" scoped>

</style>