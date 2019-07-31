<template>
    <div class="facebookLoginContext">
        <input type="button" class="loginButton" v-on:click="loginHandler" value="Facebook"/>
    </div>
</template>

<script>
    const facebookService = require("../js/FacebookService.js");

    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        methods: {
            loginHandler: () => {
                facebookService.login();
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
