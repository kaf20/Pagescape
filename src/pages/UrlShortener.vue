<template>
    <div class="url-container">
        <md-subheader>URL Shortener</md-subheader>

        <div class="form">
            <md-field class="url">
                <label>URL</label>
                <md-input v-model="url"></md-input>
            </md-field>

            <md-button class="md-raised" @click="onClick">Shorten</md-button>

            <div class="shortenedUrl">
                <p>{{ shortenedUrl }}</p>
            </div>
        </div>

        <md-dialog :md-active.sync="showDialog">
            <md-dialog-title>No idea about this path</md-dialog-title>
            <div class="redirectFailedUrl-container">
                <p>{{ `http://localhost:18080/url-shortener/${$route.query.h}` }}</p>
            </div>
            <md-dialog-actions>
                <md-button class="md-primary" @click="showDialog = false">Close</md-button>
            </md-dialog-actions>
        </md-dialog>
    </div>
</template>

<script>
    import axios from "axios";
    import qs from 'qs';

    export default {
        name: "Normal",
        mounted: function() {
            this.showDialog = this.$route.query.h != null;
        },
        data: () => ({
            url: "",
            shortenedUrl: "",
            menuVisible: false,
            showDialog: false
        }),
        methods: {
            onClick: function () {
                axios.post("http://localhost:18080/url-shortener/encode", qs.stringify({url: this.url}))
                    .then(response => this.shortenedUrl = `http://localhost:18080/url-shortener/${response.data.result}`);
            }
        }
    }
</script>

<style lang="scss" scoped>
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

    .redirectFailedUrl-container {
        margin: 0 20px;
    }
</style>
