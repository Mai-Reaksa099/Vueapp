<template>
    <div id="HomePafe">
        <!--Header-->
         <nav class=" bg-indigo-400">
        <div class="flex justify-between text-2xl  ">
            <a href="#" class="my-2">LoGO App</a>
            <div class="flex justify-evenly flex-rows">
                <div>
                    <input type="search" name="" id="" class=" my-2 mr-20  outline-none border border-blue  bg-gray-50 rounded-full text-md pl-5 ">
                    <!--<i class="fa-solid fa-magnifying-glass "></i>-->
                </div>
                <a href="" class="mr-10 pl-20"><i class="fa-solid fa-bookmark my-2 mr-5  text-3xl"></i></a>
                <a href="" class="mr-10"><i class="fa-solid fa-bell my-2 text-3xl"></i></a>
                <div class="pr-5">
                    <img :src="perlog" alt="" class=" w-12 h-12 rounded-full p-1">
                </div>
            </div>
        </div>
        </nav>
        <!--***************-->
        <div class="flex">
            <div class="w-50  ">
        
                 <div class="mr-5  py-5">
                    <div class="text-2xl text-center my-4">
                        <i class="fa-solid fa-podcast"></i>
                        <p>Podcast</p>
                    </div>
                    <div class="text-2xl text-center my-4">
                        <i class="fa-solid fa-user-group"></i>
                        <p>Community</p>
                    </div>
                    <div class="text-2xl text-center my-4">
                        <i class="fa-solid fa-calendar-day"></i>
                        <p>Even</p>
                    </div>
                </div>
            </div>
            <div class="w-2/4 text-center text-lg font-bold my-1">
                <div class="flex mb-2">
                    <h4 class="">Home Page</h4>
                    <h4 class="pl-4">Recommnedt</h4>
                    <h4 class="pl-4">Top Read</h4>
                </div>
            <!--################################-->
                <div class="bg-indigo-200 p-2 rounded-md">
                   <div class="flex justify-between ">
                        <div class="flex mr-2">
                             <div>
                                <img class="w-16 h-16 bg-red rounded-full" :src="perlog" alt="">
                            </div>
                            <div class="ml-2">
                                <h2 class="text-lg mb-2">User Name</h2>
                                <h4 class="text-lg">Title Post</h4>
                                <p class=" text-sm">Description
                                </p>
                                
                            </div>
                        </div>
                        <div class="flex ">
                            <div><i class="fa-solid fa-star p-2 text-xl"></i></div>
                            <div><i class="fa-solid fa-bookmark p-2 text-xl"></i></div>
                        </div>
                   </div>
                   <div class=" mx-20">
                       <div class="text-center ">
                           <img  :src="PhoneLog" alt="" class=" w-full h-80  rounded-lg">    
                       </div>
                       <div class="flex justify-around my-2 text-lg">
                       <div><i class="fa-solid fa-heart"></i></div>
                       <div><i class="fa-solid fa-comment"></i></div>
                       <div><i class="fa-solid fa-flag"></i></div>
                       <div><i class="fa-solid fa-arrow-up-right-from-square"></i></div>
                   </div>
                   </div>
                   
                </div>
            <!--################################-->
                <div class="bg-indigo-200 p-2 rounded-md mt-2">
                   <div class="flex justify-between ">
                        <div class="flex mr-2">
                            <div>
                                <img class="w-16 h-16 bg-red rounded-full" :src="perlog" alt="">
                            </div>
                            <div class="ml-2">
                                <h2 class="text-lg mb-2">User Name</h2>
                                <h2 class="text-sm">Title Post</h2>
                                <h2 class="text-sm">Discription

                                </h2>
                            </div>
                        </div>
                        <div class="flex ">
                            <div><i class="fa-solid fa-star p-2 text-xl"></i></div>
                            <div><i class="fa-solid fa-bookmark p-2 text-xl"></i></div>
                        </div>
                   </div>
                   <div class=" mx-20">
                       <div class="text-center ">
                           <img  :src="dtc" alt="" class=" w-full rounded-lg">    
                       </div>
                       <div class="flex justify-around my-2 text-lg">
                       <div><i class="fa-solid fa-heart"></i></div>
                       <div><i class="fa-solid fa-comment"></i></div>
                       <div><i class="fa-solid fa-flag"></i></div>
                       <div><i class="fa-solid fa-arrow-up-right-from-square"></i></div>
                   </div>
                   </div>
                   
                </div>
            </div>
            <div class="text-center w-1/3 ">
                
                <div>
                
                <div class="flex flex-col">
                    <h2 class="text-xl">Recommendt User</h2>
                    <div class=" ">
                        
                        <div class="  bg-gray-100 rounded-lg  flex flex-rows items-center justify-between m-5 p-3">
                            <div class=" flex ">
                                <div class="shrink-0">
                                    <img class="h-16 w-16 rounded-full" :src="perlog" alt="ChitChat Logo">
                                </div>
                                <div class="">
                                    
                                    <h1 class="text-lg font-bold text-black pb-2 mt-2 pr-2">
                                        Jason Hander
                                    </h1>
                                    <p class="text-slate-500 text-sm pl-2">Teacher and Researcher</p>
                                </div>
                            </div>
                            <div>
                                <button class="w-24 p-2  bg-indigo-500 text-white rounded-full text-sm cursor-pointer">Follw</button>
                            </div>
                        </div>
                        
                        <div class="  bg-gray-100 rounded-lg  flex flex-rows items-center justify-between m-5 p-3">
                            <div class=" flex ">
                                <div class="shrink-0">
                                    <img class="h-16 w-16 rounded-full" :src="puser" alt="ChitChat Logo">
                                </div>
                                <div class="">
                                    
                                    <h1 class="text-lg font-bold text-black pb-2 mt-2 pr-2">
                                        Jason Hander
                                    </h1>
                                    <p class="text-slate-500 text-sm pl-2">Teacher and Researcher</p>
                                </div>
                            </div>
                            <div>
                                <button class="w-24 p-2 bg-indigo-500 text-white rounded-full text-sm cursor-pointer">Follw</button>
                            </div>
                        </div>


                        <div class="  bg-gray-100 rounded-lg  flex flex-rows items-center justify-between m-5 p-3">
                            <div class=" flex ">
                                <div class="shrink-0">
                                    <img class="h-16 w-16 rounded-full" :src="beliget" alt="ChitChat Logo">
                                </div>
                                <div class="">
                                    
                                    <h1 class="text-lg font-bold text-black pb-2 mt-2 pr-2">
                                        Bill Gates
                                    </h1>
                                    <p class="text-slate-500 text-sm pl-2">Founder Microsoft</p>
                                </div>
                            </div>
                            <div>
                                <button class="w-24 p-2 bg-indigo-500 text-white rounded-full text-sm cursor-pointer">Follw</button>
                            </div>
                        </div>

                              <div class="  bg-gray-100 rounded-lg  flex flex-rows items-center justify-between m-5 p-3">
                            <div class=" flex ">
                                <div class="shrink-0">
                                    <img class="h-16 w-16 rounded-full" :src="avd" alt="ChitChat Logo">
                                </div>
                                <div class="">
                                    
                                    <h1 class="text-lg font-bold text-black pb-2 mt-2 pr-2">
                                        Akshat Bordia
                                    </h1>
                                    <p class="text-slate-500 text-sm pl-2">Advisor Team Developer</p>
                                </div>
                            </div>
                            <div>
                                <button class="w-24 p-2 bg-indigo-500 text-white rounded-full text-sm cursor-pointer">Follw</button>
                            </div>
                        </div>
                    </div>
                </div>
				
            </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name:'Page',
    data: function(){
        return{
            PhoneLog: 'https://healthvoices.org.au/wp-content/uploads/2020/11/ideas-2500.jpg',
            puser: 'https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg',
            beliget: 'https://likewise-stage.azureedge.net/uploads/3eb6cf23-895b-45e9-b92c-5fb1b457dd04/bill-gates-profile-pic.jpg',
            perlog: 'https://www.brooksschool.org/uploaded/News/new-faculty-2019-federico.gif',
            dtc: 'https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/747/original/Data_Science.jpg',
            avd: 'https://www.citrix.com/blogs/wp-content/upload/2018/03/slack_compressed-e1521621363404-360x360.jpg'
        }
    }
}
</script>