<template>
  <div>
    <div class="bg-gray-900">
     <section>
      <div class="container max-w-full mx-auto py-24 px-6">
        <h1 class="text-center text-4xl text-black font-medium leading-snug tracking-wider">Make Your Payment</h1>
        <div class="h-1 mx-auto bg-indigo-200 w-24 opacity-75 mt-4 rounded"></div>

        <div class="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
          <div class="relative block flex flex-col md:flex-row items-center">

            <div
              class="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-mr-4"
            >
            </div> 

            <div
              class="w-full max-w-md sm:w-2/3 lg:w-1/3 sm:my-5 my-8 relative z-10 bg-white rounded-lg shadow-lg"
            >
              <div
                class="text-sm leading-none rounded-t-lg bg-gray-200 text-black font-semibold uppercase py-4 text-center tracking-wide"
              >Order a Trainer</div>
              <div
                class="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6"
              >
               <h2 class="text-sm text-gray-500 text-center pb-6">
                  <span class="text-3xl">GH&cent;220</span> /mo  
                </h2>
                Make your payment as we confirm your payment a trainer will contact you within 2 hours from the time of your payment confirmation
              </div>
              <div class="flex pl-12 justify-start sm:justify-start mt-3">

            <form method=POST action="https://community.ipaygh.com/gateway">
                <input type=hidden name=merchant_key value="tk_93ebedda-6c5a-11ea-b8e9-f23c9170642f" />
                <input type=hidden name=success_url value="http://localhost:8080/successful"/>
                <input type=hidden name=cancelled_url value="http://localhost:8080"/>
                <input type=hidden name=deferred_url value="http://localhost:8080"/>
                <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
                Invoice ID
                </label>
                <input class="appearance-none block w-full bg-gray-800 text-gray-700 border border-gray-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type=text name=invoice_id value="" placeholder="Invoice ID">
                    </div>
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        Amount
                        </label>
                        <input class="appearance-none block w-full bg-gray-800 text-gray-700 border border-gray-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name=total type=text size=10 placeholder="Amount"> 
                        <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                    </div>
                    <input class="mt-3 text-lg font-semibold bg-black w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:bg-gray-700" type=submit />
            </form>
              </div>
              <div class="block flex items-center p-8 uppercase">
              </div>
            </div>

             <div
              class="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-ml-4"
            >
            </div> 

          </div>
        </div>
      </div>
    </section>

   </div>
 </div>
</template>

<script>
 import { fb, db } from "../firebase";
export default {
  data() {
    return {
      // updates:[],
      Profile: {
        firstName: null,
        lastName: null,
        location: null,
        city: null,
        telephone: null
      },
      email: null
    };
  },
  created() {
    var user = fb.auth().currentUser;

    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.telephone = user.telephone;
    this.city = user.city;
    this.location = user.location;
    this.email = user.email;
    // photoUrl = user.photoURL;
  },

  firestore() {
    const user = fb.auth().currentUser;
    return {
      profile: db.collection("profiles").doc(user.uid)
    };
  },
}
</script>

<style lang="scss" scoped>

</style>