<template>
    <div class="page-container">

        <md-app md-mode="reveal">
            <md-app-toolbar class="md-primary">
                <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
                    <md-icon>menu</md-icon>
                </md-button>
                <span class="md-title">Greetings!</span>
            </md-app-toolbar>

            <md-app-drawer :md-active.sync="menuVisible">
                <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

                <DrawerItems/>
            </md-app-drawer>

            <md-app-content>
                <md-subheader>URL Shortener</md-subheader>

                <div class="form">
                    <md-field class="url">
                        <label>URL</label>
                        <md-input v-model="url"></md-input>
                    </md-field>

                    <md-button class="md-raised" @click="onClick">Shorten</md-button>

                    <div class="shortenedUrl">
                        <p>https://www.youtube.com/watch?v=g-qvFjvyqcs</p>
                    </div>
                </div>
            </md-app-content>
        </md-app>
    </div>
</template>

<script>
    import DrawerItems from "./DrawerItems";
    export default {
        name: 'Normal',
        data: () => ({
            url: '',
            shortenedUrl: '',
            menuVisible: false
        }),
        components: {DrawerItems},
        methods: {
            onClick: function () {
                alert("haha");
            }
        }
    }
</script>

<style lang="scss" scoped>
    .md-app {
        min-height: 850px;
        border: 1px solid rgba(#000, .12);
    }

    .md-drawer {
        width: 230px;
        max-width: calc(100vw - 125px);
    }

    .form {
        margin: 0 20px 0 20px;
    }

    .url {
        width: 90%;
        margin: 0 20px 0 0;
        float: left;
    }

    .shortenedUrl {
        margin: 40px 30% 0 35%;
    }
</style>
