<template>
    <div>
        <div class="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full">
    <div>
      <img class="mx-auto h-18 w-auto" src="../assets/images/logo.png" alt="Workflow" />
      <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-white">
        Start your fitness training Today
      </h2>
    </div>
    <br>
    
<form class="w-full max-w-lg" @submit.prevent="register">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input v-model="firstName" class="appearance-none block w-full bg-gray-800 text-gray-700 border border-gray-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane">
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input v-model="lastName" class="appearance-none block w-full bg-gray-800 text-gray-700 border border-gray-900 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe">
    </div> 
  </div>
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
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
        City
      </label>
      <input v-model="city" class="appearance-none block w-full bg-gray-800 text-gray-700 border border-gray-900 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="City">
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Location
      </label>
      <input v-model="location" class="appearance-none block w-full bg-gray-800 text-gray-700 border border-gray-900 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Location">
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
        Telephone
      </label>
      <input v-model="telephone" class="appearance-none block w-full bg-gray-800 text-gray-700 border border-gray-900 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="Telephone">
    </div>
     <!-- <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
        Upload Photo
      </label>
      <input @change="uploadPhoto" class="appearance-none block w-full bg-gray-800 text-gray-700 border border-gray-900 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="file" placeholder="Telephone">
    </div> -->
  </div>
  <div class="mt-6 flex items-center justify-between">
        <div class="flex items-center">
          <label for="remember_me" class="ml-2 block text-sm leading-5 text-white hover:text-indigo-500">
            <router-link to="/signin">Already a User</router-link>
          </label>
        </div>

        <div class="text-sm leading-5">
          <a href="#" class="font-medium text-yellow-800 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
            Forgot your password?
          </a>
        </div>
      </div>

      <div class="mt-6">
        <button type="submit" class="group relative uppercase w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-yellow-800 bg-yellow-400 hover:bg-yellow-900 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
          <span class="absolute left-0 inset-y pl-3">
           <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </span>
          Create My Account
        </button>
        <br>
        <p class="mt-2 text-center text-sm leading-5 text-yellow-800 max-w">
        <a href="#" class="font-medium text-yellow-800 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
           Includes a 14 day trial before billing begins
        </a>
      </p>
      </div>
  </form>
    </div>
  </div>
    </div>
</template>

<script>
import {fb, db} from '../firebase'
import 'vuejs-noty/dist/vuejs-noty.css'


    export default {
      data() {
        return {
          firstName: null,
          lastName: null,
          city: null,
          telephone: null,
          location: null,
          email: null,
          password: null
        }
      },
      methods: {
        register() {
           fb.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then((user) => {
                    // eslint-disable-next-line no-undef
                    
                    db.collection("profiles").doc(user.user.uid).set({
                        firstName: this.firstName,
                        lastName: this.lastName,
                        city: this.city,
                        telephone: this.telephone,
                        location: this.location,
                    })
                    .then((response) =>{
                        // console.log("Document successfully written!");
                        // this.$noty.show("Added Successfully!")
                        this.$noty.success("Successfully Registered ", response);
                    })
                    .catch((error) =>{
                        console.error("Error writing document: ", error);
                    });
                    this.$router.replace('/');
                })
              
                .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode == 'auth/weak-password') {
                    alert('The password is too weak.');
                } else {
                    alert(errorMessage);
                }
                console.log(errorMessage);
            });
      },

      uploadPhoto(e) {
        let file = e.target.files[0]

        var storageRef = fb.storage().ref('photos/' + file.name);
        storageRef.put(file);

        console.log(e.target.files[0]);
      }
       
    }

}
</script>

<style lang="scss" scoped>

</style>
