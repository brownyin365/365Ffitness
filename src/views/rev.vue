<template>
    <div id="signin">
        <div class="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full">
    <div>
      <img class="mx-auto h-24 w-auto" src="../assets/images/logo.png" alt="Workflow" />
      <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-white">
        Start your fitness training Today
      </h2>
    </div>
    <form class="mt-24">
      <input type="hidden" name="remember" value="true" />
      <div class="rounded-md shadow-sm">
        <div>
          <input aria-label="Email address" name="email" v-model="email" type="email" required class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-900 placeholder-gray-500 text-white rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 bg-gray-800 sm:text-sm sm:leading-5" placeholder="Email address" />
        </div>
        <div>
          <input aria-label="Password" name="password" v-model="password" type="password" required class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-900 placeholder-gray-500 text-white rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 bg-gray-800 sm:text-sm sm:leading-5" placeholder="Password" />
        </div>
      </div>

      <div class="mt-6 flex items-center justify-between">
        <div class="flex items-center">
          <!-- <input id="remember_me" type="checkbox" class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" /> -->
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
    </form>
  </div>
</div>
    </div>
</template>

<script>
import { fb } from '../firebase'
    export default {
      name: "signin",
      props: {
          msg: String
        },
        data() {
          return {
            email: null,
            password: null
          }
        },

        methods: {
           login() {
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
           }
        }

    }
</script>

<style lang="scss" scoped>

</style>








    <form class="mt-16" @submit.prevent="register">
      <input type="hidden" name="remember" value="true" />
      <div class="rounded-md shadow-sm">
        <div>
          <input aria-label="First Name" name="firstName" v-model="firstName" type="text" required class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-900 placeholder-gray-500 text-white rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 bg-gray-800 sm:text-sm sm:leading-5" placeholder="First Name" />
        </div>
        <div>
          <input aria-label="Last Name" name="lastName" v-model="lastName" type="text" required class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-900 placeholder-gray-500 text-white rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 bg-gray-800 sm:text-sm sm:leading-5" placeholder="Last Name" />
        </div> 
        <div>
          <input aria-label="Telephone" name="telephone" v-model="telephone" type="text" required class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-900 placeholder-gray-500 text-white rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 bg-gray-800 sm:text-sm sm:leading-5" placeholder="Telephone" />
        </div>
        <div>
          <input aria-label="Location" name="location" v-model="location" type="text" required class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-900 placeholder-gray-500 text-white rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 bg-gray-800 sm:text-sm sm:leading-5" placeholder="Location" />
        </div>    
        <div>
          <input aria-label="Email address" name="email" v-model="email" type="email" required class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-900 placeholder-gray-500 text-white rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 bg-gray-800 sm:text-sm sm:leading-5" placeholder="Email address" />
        </div>
        <div>
          <input aria-label="Password" name="password" v-model="password" type="password" required class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-900 placeholder-gray-500 text-white rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 bg-gray-800 sm:text-sm sm:leading-5" placeholder="Password" />
        </div>
      </div>

      <div class="mt-6 flex items-center justify-between">
        <div class="flex items-center">
          <!-- <input id="remember_me" type="checkbox" class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" /> -->
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








    // List

    <template>
    <div>
        <div class="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover" style="background-image:url('https://source.unsplash.com/1L71sPT5XKc');">



  <div class="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0"   v-for="update in updates" v-bind:key="update.id">
    
	<!--Main Col-->
	<div id="profile" class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
	

		<div class="p-4 md:p-12 text-center lg:text-left">
			<!-- Image for mobile view-->
			<div class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center" style="background-image: url('https://source.unsplash.com/MP0IUfwrn0A')"></div>
			
		
				<h1 class="text-3xl font-bold pt-8 lg:pt-0">{{update.firstName}} {{update.lastName}}</h1>
				<div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-teal-500 opacity-25"></div>
				<div>{{update.location}}</div>
				<p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start"><svg class="h-4 fill-current text-teal-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"/></svg> What you do</p>
				<p class="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start"><svg class="h-4 fill-current text-teal-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z"/></svg> Your Location - 25.0000° N, 71.0000° W</p>
				<p class="pt-8 text-sm">Totally optional short description about yourself, what you do and so on.</p>

					<div class="pt-12 pb-8">
						<button class="bg-teal-700 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded-full">
						Get In Touch
						</button> 
						<router-link to="/update" class="bg-teal-700 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded-full">
						Update Profile
						</router-link> 
						<button @click="logout()" class="bg-teal-700 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded-full">
						Sign Out
						</button> 
					</div>

					<div class="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
						<a class="link" href="#" data-tippy-content="@facebook_handle"><svg class="h-6 fill-current text-gray-600 hover:text-teal-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"/></svg></a>
						<a class="link" href="#" data-tippy-content="@twitter_handle"><svg class="h-6 fill-current text-gray-600 hover:text-teal-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/></svg></a>
						<a class="link" href="#" data-tippy-content="@unsplash_handle"><svg class="h-6 fill-current text-gray-600 hover:text-teal-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google</title><path d="M7.5 6.75V0h9v6.75h-9zm9 3.75H24V24H0V10.5h7.5v6.75h9V10.5z"/></svg></a>
						<a class="link" href="#" data-tippy-content="@dribble_handle"><svg class="h-6 fill-current text-gray-600 hover:text-teal-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/></svg></a>
						<a class="link" href="#" data-tippy-content="@instagram_handle"><svg class="h-6 fill-current text-gray-600 hover:text-teal-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg></a>
						<a class="link" href="#" data-tippy-content="@youtube_handle"><svg class="h-6 fill-current text-gray-600 hover:text-teal-700" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>YouTube</title><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg></a>
					</div>
				</div>
				<!-- Use https://simpleicons.org/ to find the svg for your preferred product --> 

					</div>


				
				<!--Img Col-->
				<div class="w-full lg:w-2/5">
					<!-- Big profile image for side bar (desktop) -->
					<img src="https://source.unsplash.com/MP0IUfwrn0A" class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block">
					<!-- Image from: http://unsplash.com/photos/MP0IUfwrn0A -->
					
				</div>
			</div>
        
        <!-- Pin to top right corner -->
        <div class="absolute top-0 right-0 h-12 w-18 p-4">
            <button class="js-change-theme focus:outline-none">🌙</button>
        </div>

     </div>
    </div>
    
</template>

<script>
import { fb, db } from '../firebase'
    export default {
        data() {
            return {
				updates:[],
                email: null
            }
		},
		created() {
			db.collection("profiles").get().then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					// doc.data() is never undefined for query doc snapshots
					// console.log(doc.id, " => ", doc.data());
					this.updates.push(doc.data());
				});
			});
		},
        methods: {
			logout() {
				fb.auth().signOut()
				.then(() => {
					this.$router.replace('/');
				})
				.catch((err) => {
					console.log(err);
				})
			}
		
		}
		
    }
</script>

<style lang="scss" scoped>

</style>








<template>
    <div>
        <div class="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover" style="background-image:url('https://source.unsplash.com/1L71sPT5XKc');">



  <div class="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
    
	<!--Main Col-->
	<div id="profile" class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
	

		<div class="p-4 md:p-12 text-center lg:text-left">
			<!-- Image for mobile view-->
			<div class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center" style="background-image: url('https://source.unsplash.com/MP0IUfwrn0A')"></div>
			
		
				<h1 class="text-3xl font-bold pt-8 lg:pt-0">{{firstName}} {{lastName}}</h1>
				<div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-teal-500 opacity-25"></div>
				<div>{{location}}</div>
				<p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start"><svg class="h-4 fill-current text-teal-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"/></svg> What you do</p>
				<p class="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start"><svg class="h-4 fill-current text-teal-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z"/></svg> Your Location - 25.0000° N, 71.0000° W</p>
				<p class="pt-8 text-sm">Totally optional short description about yourself, what you do and so on.</p>

					<div class="pt-12 pb-8">
						<button class="bg-teal-700 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded-full">
						Get In Touch
						</button> 
						<router-link to="/update" class="bg-teal-700 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded-full">
						Update Profile
						</router-link> 
						<button @click="logout()" class="bg-teal-700 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded-full">
						Sign Out
						</button> 
					</div>

					<div class="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
						<a class="link" href="#" data-tippy-content="@facebook_handle"><svg class="h-6 fill-current text-gray-600 hover:text-teal-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"/></svg></a>
						<a class="link" href="#" data-tippy-content="@twitter_handle"><svg class="h-6 fill-current text-gray-600 hover:text-teal-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/></svg></a>
						<a class="link" href="#" data-tippy-content="@unsplash_handle"><svg class="h-6 fill-current text-gray-600 hover:text-teal-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google</title><path d="M7.5 6.75V0h9v6.75h-9zm9 3.75H24V24H0V10.5h7.5v6.75h9V10.5z"/></svg></a>
						<a class="link" href="#" data-tippy-content="@dribble_handle"><svg class="h-6 fill-current text-gray-600 hover:text-teal-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/></svg></a>
						<a class="link" href="#" data-tippy-content="@instagram_handle"><svg class="h-6 fill-current text-gray-600 hover:text-teal-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg></a>
						<a class="link" href="#" data-tippy-content="@youtube_handle"><svg class="h-6 fill-current text-gray-600 hover:text-teal-700" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>YouTube</title><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg></a>
					</div>
				</div>
				<!-- Use https://simpleicons.org/ to find the svg for your preferred product --> 

					</div>


				
				<!--Img Col-->
				<div class="w-full lg:w-2/5">
					<!-- Big profile image for side bar (desktop) -->
					<img src="https://source.unsplash.com/MP0IUfwrn0A" class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block">
					<!-- Image from: http://unsplash.com/photos/MP0IUfwrn0A -->
					
				</div>
			</div>
        
        <!-- Pin to top right corner -->
        <div class="absolute top-0 right-0 h-12 w-18 p-4">
            <button class="js-change-theme focus:outline-none">🌙</button>
        </div>

     </div>
    </div>
    
</template>

<script>
import { fb, db } from '../firebase'
    export default {
        data() {
            return {
				// updates:[],
				firstName: null,
				lastName: null,
				location: null,
				city: null,
				telephone: null,
				email: null
            }
		},
		// created() {
		// 	var user = fb.auth().currentUser;

		// 	this.firstName = user.displayName;
		// 	this.lastName = user.lastName;
		// 	this.telephone = user.telephone;
		// 	this.city = user.city;
		// 	this.location = user.location;
		// 	this.email = user.email;
		// 	// photoUrl = user.photoURL;
			
		// 	},
	
		firestore() {
			const user = fb.auth().currentUser;
			return {
				profile: db.collection('profiles').doc(user.uid),
			}
		},
        methods: {
			logout() {
				fb.auth().signOut()
				.then(() => {
					this.$router.replace('/')
				})
				.catch((err) => {
					console.log(err);
				})
			}
		
		}
		
    }
</script>

<style lang="scss" scoped>

</style>
















<form class="w-full max-w-lg" @submit.prevent="register">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input v-model="firstName" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane">
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input v-model="lastName" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe">
    </div> 
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
        Email
      </label>
      <input v-model="email" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="Email">
    </div>
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Password
      </label>
      <input v-model="password" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************">
      <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
        City
      </label>
      <input v-model="city" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="City">
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Location
      </label>
      <input v-model="location" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Location">
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
        Telephone
      </label>
      <input v-model="telephone" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="Telephone">
    </div>
  </div>
  <div class="mt-6 flex items-center justify-between">
        <div class="flex items-center">
          <!-- <input id="remember_me" type="checkbox" class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" /> -->
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






   // uploadPhoto(e) {
    //     let file = e.target.files[0]

    //     var storageRef = fb.storage().ref('photos/' + file.name);
    //     let uploadTask = storageRef.put(file);

    //     uploadTask.on('state_changed', () =>{
  
    //     }, (error) => {
    //       console.log(error)
    //       // Handle unsuccessful uploads
    //     }, () =>{
    //       // Handle successful uploads on complete
    //       // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    //       uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) =>{
    //         this.profile.images = downloadURL;
    //         console.log('File available at', downloadURL);
    //       });
    //     });
    // }