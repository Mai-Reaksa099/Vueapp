<template>
    <div>
        <div class="min-h-screen flex items-center justify-center bg-blue text-bluck flex-col">
            <div class="bg-white p-10 rounded shadow-2xl w-1/3">
                <h2 class="text-center text-bold text-blue mb-3">Create Your Account</h2>
                <div class="flex justify-between gap-4">

                    <div class="text-center m-2">
                        <label for="" >Year</label>
                        <select name="" id="" class="outline-none border border-blue w-full  m-2 p-4 text-xl">
                           
                            <option value="2021">2014</option>
                            <option value="2020">2013</option>
                            <option value="2022">2013</option>
                            <option value="2022">2012</option>
                            <option value="2022">2011</option>
                            <option value="2022">2010</option>
                        </select>
                        
                    </div>
                    <div class="text-center m-2">
                        <label for="">Month</label>
                        <select name="" id="" class="outline-none border border-blue w-full m-2  p-4 text-xl">
                            <option value="2022">January</option>
                            <option value="2022">February</option>
                            <option value="2022">March</option>
                            <option value="2022">April</option>
                            <option value="2022">May</option>
                            <option value="2022">June</option>
                            <option value="2022">July</option>
                            <option value="2022">Agust</option>
                            <option value="2022">Setember</option>
                            <option value="2022">October</option>
                            <option value="2022">Novermber</option>
                            <option value="2022">December</option>
                        </select>
                    </div>
                    <div class="text-center m-2">
                        <label for="">Day</label>
                        <select name="" id="" class="outline-none border border-blue w-full m-2  p-4 text-xl">
                            <option value="2022">1</option>
                            <option value="2022">2</option>
                            <option value="2022">3</option>
                            <option value="2022">4</option>
                            <option value="2022">5</option>
                            <option value="2022">6</option>
                            <option value="2022">7</option>
                            <option value="2022">8</option>
                            <option value="2022">9</option>
                            <option value="2022">10</option>
                            <option value="2022">11</option>
                            <option value="2022">12</option>
                            <option value="2022">13</option>
                            <option value="2022">14</option>
                            <option value="2022">15</option>
                            <option value="2022">16</option>
                            <option value="2022">17</option>
                            <option value="2022">18</option>
                            <option value="2022">19</option>
                            <option value="2022">20</option>
                            <option value="2022">21</option>
                            <option value="2022">22</option>
                            <option value="2022">23</option>
                            <option value="2022">24</option>
                            <option value="2022">25</option>
                            <option value="2022">26</option>
                            <option value="2022">27</option>
                            <option value="2022">28</option>
                            <option value="2022">29</option>
                            <option value="2022">30</option>
                            <option value="2022">31</option>


                        </select>
                    </div>

                </div>
                <router-link to="LogPhone"><input type="submit" value="Next" class="w-full p-2 bg-indigo-600 text-white  rounded-full text-xl mt-5 cursor-pointer"></router-link>
            </div>  
        </div>
    </div>
</template>
<script>
export default{
    name: 'Log1',
    data: function(){
        return{
            LogIn1: ''
        }
    }
}
</script>