<template>
<div id="SingIn">
    <div class="min-h-screen flex items-center justify-center bg-blue text-bluck flex-col">
            <div class="bg-white p-10 rounded shadow-2xl w-1/3">
                <h2 class="text-center text-bold text-blue mb-3">Create Your Account</h2>
                <form action="" class="space-y-10">
               <div class=" mt-2 mb-2">
                   <label for="" class="block mb-3 text-xl">Email</label> 
                    <input type="email" class="py-3 px-4 w-full outline-none border border-blue" placeholder="User Name">
               </div>
               <div class=" mt-2 mb-2">
                   <label for="" class="block mb-3 text-xl">Name</label>
                   <input type="text" class="py-3 px-4 w-full outline-none border border-blue" placeholder="Email or Phone Number">
               </div>
               <div class=" mt-2 mb-2">
                   <label for="" class="block mb-3 text-xl">User Name</label>
                   <input type="text" class="py-3 px-4 w-full outline-none border border-blue" placeholder="Password">
               </div>
                    <div class=" mt-2 mb-2">
                   <label for="" class="block mb-3 text-xl">Password</label>
                   <input type="password" class="py-3 px-4 w-full outline-none border border-blue" placeholder="Password">
               </div>
                    <div class=" mt-2 mb-2">
                   <label for="" class="block mb-3 text-xl">Comfirm Password</label>
                   <input type="password" class="py-3 px-4 w-full outline-none border border-blue" placeholder="Password">
               </div>
              <router-link to="Log1"> <input type="submit" value="Next" class="w-full p-3 bg-indigo-600 text-white rounded-full text-xl mt-5 cursor-pointer"></router-link>
               
           </form>

        </div>
 
        </div>
</div>
</template>
<script>
export default{
    name: '#SingIn',
    data: function(){
        return{
            UserSing: ''
        }
    }
}
</script>