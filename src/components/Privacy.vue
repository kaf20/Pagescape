<template>
    <div id="privacyPolicy">
        <div class="statement">
            Privacy Policy Statement
        </div>
        <div class="content">
            <p class="title">Statement of Policy</p>
            <p>The protection of privacy in relation to personal data is the concern of every person in the Pagescape. We respect personal data privacy and are committed to fully implementing and complying with the data protection principles and all relevant provisions under the Ordinance. The Deputy Privacy Commissioner for Personal Data monitors and supervises compliance with the Ordinance within the Pagescape.</p>
            <p>When we collect personal data from individuals, we will provide them with a Personal Information Collection Statement ("PICS") on or before the collection in an appropriate format and manner (e.g. in the same paper form or web page that collects the personal data, or in a notice posted up at the reception area of Pagescape for reference).</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'privacy'
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #privacyPolicy .statement {
        text-align: center;
        font-size: xx-large;
        font-family: sans-serif;
        margin: 2% 0;
    }
    #privacyPolicy .content {
        margin: 5% 10%;
        font-family: arial,sans-serif;
    }
    #privacyPolicy .title {
        font-size: large;
    }
</style>
