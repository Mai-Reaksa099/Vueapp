<template>
    <div id="Phone">
            <div class="min-h-screen flex items-center justify-center bg-blue text-bluck flex-col">
            <div class="bg-white p-10 rounded shadow-2xl w-1/3">
                <h2 class="text-center text-bold text-blue mb-3">Create Your Account</h2>
                
                <input type="submit" value="Next" class="w-full p-2  bg-indigo-600 text-white rounded-full text-xl mt-5 cursor-pointer">
            </div>  
        </div>
    </div>
</template>
<script>
export default{
    name: '#Phone',
    data: function(){
        return{
            Phone: ''
        }
}

    }
</script>