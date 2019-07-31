<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <FacebookLogin/>
    </div>
</template>

<script>
    import FacebookLogin from "./components/FacebookLogin";

    export default {
        name: 'app',
        components: {
            FacebookLogin
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 160px;
    }
</style>
