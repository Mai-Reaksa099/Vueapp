<template>
  <div class="home">
    <!--<router-link to="/Log1"><UserLog></UserLog></router-link>-->
    <UserLog></UserLog>
  </div>
  <router-view></router-view>
</template>

<script>
import UserLog from "../components/UserLog.vue";
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    UserLog
}
}
</script>
