<template>
    <md-list>
        <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Inbox</span>
        </md-list-item>

        <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
        </md-list-item>

        <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
        </md-list-item>

        <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text"><a href="/url-shortener">URL Shortener</a></span>
        </md-list-item>

        <md-list-item>
            <md-icon>lightbulb</md-icon>
            <span class="md-list-item-text"><a href="/privacy">Privacy</a></span>
        </md-list-item>
    </md-list>
</template>

<script>
    export default {
        name: 'DrawerItems'
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
