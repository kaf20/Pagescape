<template>
    <div class="FacebookLogin">
        <input type="button" class="loginButton" v-on:click="handleLogin" value="Facebook"/>
    </div>
</template>

<script>
    const facebookService = require("../js/FacebookService.js");

    export default {
        name: 'FacebookLogin',
        methods: {
            handleLogin: () => {
                facebookService.login();
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
