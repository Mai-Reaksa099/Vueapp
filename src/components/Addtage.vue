<template>
    <div id="PhonLog">
        <div class="min-h-screen flex items-center justify-center bg-blue text-bluck flex-col">
            <div class="bg-white p-10 rounded shadow-2xl w-1/3">
               <div>
                   <h3>Engineering</h3>
               </div>
               <div>
                   <h3>Technology</h3>
               </div>
               <div>
                   <h3>Data Analysis</h3>
               </div>
               <div>
                    <h3>Web Teachnology</h3>
               </div>
                <input type="submit" value="Send" class="w-full p-2 bg-blue text-white rounded-full text-xl mt-5 cursor-pointer">
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

<style scoped>

</style>