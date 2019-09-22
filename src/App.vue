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
                <router-view class="view"></router-view>
            </md-app-content>
        </md-app>
    </div>
</template>

<script>
    import DrawerItems from "./components/DrawerItems";

    export default {
        name: 'Normal',
        data: () => ({
            menuVisible: false
        }),
        components: {DrawerItems}
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
</style>
