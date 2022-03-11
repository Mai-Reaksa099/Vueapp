<template>
    <div id="PhonLog">
        <div class="min-h-screen flex items-center justify-center bg-blue text-bluck flex-col">
            <div class="bg-white p-10 rounded shadow-2xl w-1/3">
                <h2 class="text-center text-bold text-blue mb-3">Your Phone Number</h2>
                <label for="phone" class="pb-3">Verify Code</label><br><br>
                <textarea name="" id="" cols="50" rows="3" placeholder="Bio.." class="border border-blue w-full outline-none text-xl"></textarea>
                <router-link to="Homepage"><input type="submit" value="Send" class="w-full p-2 bg-indigo-600 text-white rounded-full text-xl mt-5 cursor-pointer"></router-link>
            </div>  
        </div>
    </div>
</template>
<script>
export default{
    name:'#PhoneLog',
    data: function(){
        return{
            PhoneLog: ''
        }
    }
}
</script>