<template>
    <div>
        <div class="min-h-screen flex items-center justify-center  text-bluck flex-col">
            <div class="bg-white p-10 rounded shadow-2xl w-1/3">
                <h2 class="text-center text-bold text-blue mb-3">Create Your Account</h2>
                <form action="" class="space-y-10">
               <div class=" mt-2 mb-2">
                   <label for="" class="block mb-3 text-xl">User Name</label> 
                    <input v-model="nameuser" type="text" class="py-3 px-4 w-full outline-none border border-blue" placeholder="User Name">
               </div>
               <div class=" mt-2 mb-2">
                   <label for="" class="block mb-3 text-xl">Email</label>
                   <input v-model="email" type="email" class="py-3 px-4 w-full outline-none border border-blue" placeholder="Email or Phone Number">
               </div>
               <div class=" mt-2 mb-2">
                   <label for="" class="block mb-3 text-xl">Password</label>
                   <input v-model="password" type="password" class="py-3 px-4 w-full outline-none border border-blue" placeholder="Password">
               </div>
               <router-link to="Homepage"><input @click="signin" type="submit" value="Sig In" class="w-full p-3  bg-indigo-600 text-white rounded-full text-xl mt-5 cursor-pointer"></router-link>
               <p class="text-center mt-4 underline cursor-pointer">Forgot Password?</p>
           </form>

        </div>
        <div class="w-1/3 flex flex-col ">
                <router-link to="SignIn"><button class=" w-full p-2 bg-indigo-300 text-white rounded-full  text-lg justify-items-center mt-2 cursor-pointer text-center">Sing Up </button></router-link>
                <button class="w-full p-2 bg-indigo-300 text-white rounded-full text-lg mt-2 cursor-pointer text-center">Google</button>
                <button class="w-full p-2 bg-indigo-300 text-white rounded-full text-lg mt-2 cursor-pointer text-center">Fackbook</button>
        </div>
           
        </div>


    </div>
</template>
<script>
//import firebase from "firebase/app"

export default{
    name: 'LogIn',
    data: function(){
        return{
            email: "",
            password: "",
            initail: "",
            nameuser: ""
        }
    },
    methods: {
        singnin(){
            /*firebase.auth().signInWithEmailAndPassword(this.email, this.password, this.nameuser).then(
                (user) =>{
                    console.log(user)
                },
                (err) =>{
                    alert(err)
                }
            )*/
        }
    }
}
</script>