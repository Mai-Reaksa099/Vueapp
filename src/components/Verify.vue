<template>
    <div>
        <div class="min-h-screen flex items-center justify-center bg-blue text-bluck flex-col">
            <div class="bg-white p-10 rounded shadow-2xl w-1/3">
                <h2 class="text-center text-bold text-blue mb-3">Your Phone Number</h2>
                <label for="phone" class="pb-3">Verify Code</label><br><br>
                <input type="number" name="number" id="number" class="py-2 px-4 w-full outline-none border border-blue">
                <router-link to="Bio"><input type="submit" value="Send" class="w-full p-2   bg-indigo-600 text-white  rounded-full text-xl mt-5 cursor-pointer"></router-link>
            </div>  
        </div>
    </div>
</template>
<script>
export default{
    name:'Verify',
    data: function(){
        return{
            PhoneLog: ''
        }
    }
}
</script>