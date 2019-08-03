<template>
    <div class="postPanel">
        <div class="statistic">
            <div class="title">
                <p>男女比例</p>
            </div>
            <div class="separator"></div>
            40%:60%
        </div>
        <div class="statistic" style="top: 20%">
            <div class="title">
                <p>男女比例</p>
            </div>
            <div class="separator"></div>
            40%:60%
        </div>
        <div class="post">
            <div class="content">
                <div class="title">
                    <p>14:20 旺角信和 落閘中</p>
                    <p>各界做足準備，今晚班狗睇黎會亂咬人</p>
                </div>
                <img alt="alt" src="https://scontent.fhkg10-1.fna.fbcdn.net/v/t1.0-9/67673846_10156418964203483_7783805643273535488_n.jpg?_nc_cat=1&_nc_oc=AQkIAuER7PJ32renNdsnnVTa7CieH_LIO-ZH_deXcwk3ljNKbNM4H-YsMubQWOZSWxo&_nc_ht=scontent.fhkg10-1.fna&oh=167944e0c6800d024b3e6fc756a12fac&oe=5DDA23FC" width="100%"/>
            </div>
            <div class="separator"></div>
            <div class="comment">
                <div class="profilePhoto">
                    <img alt="alt" src="https://scontent.fhkg10-1.fna.fbcdn.net/v/t1.0-1/c6.6.74.74a/p86x86/251941_110797232393328_1793893346_n.jpg?_nc_cat=103&_nc_oc=AQloUFxxDYtjWjLAEymqg2nW77UAgZwPCxxue3nNJ_7AUU8VRFraoS085gcWKAiSCBg&_nc_ht=scontent.fhkg10-1.fna&oh=74f38a953466c43cfb00d7631c25f214&oe=5DEA0378"/>
                </div>
                <div class="text" style="max-width: 50px;">
                    <span>CLS</span>
                </div>
            </div>
            <div class="comment">
                <div class="profilePhoto">
                    <img alt="alt" src="https://scontent.fhkg10-1.fna.fbcdn.net/v/t1.0-1/c6.6.74.74a/p86x86/251941_110797232393328_1793893346_n.jpg?_nc_cat=103&_nc_oc=AQloUFxxDYtjWjLAEymqg2nW77UAgZwPCxxue3nNJ_7AUU8VRFraoS085gcWKAiSCBg&_nc_ht=scontent.fhkg10-1.fna&oh=74f38a953466c43cfb00d7631c25f214&oe=5DEA0378"/>
                </div>
                <div class="text" style="max-width: 50px;">
                    <span>CLS</span>
                </div>
            </div>
            <div class="comment">
                <div class="profilePhoto">
                    <img alt="alt" src="https://scontent.fhkg10-1.fna.fbcdn.net/v/t1.0-1/c6.6.74.74a/p86x86/251941_110797232393328_1793893346_n.jpg?_nc_cat=103&_nc_oc=AQloUFxxDYtjWjLAEymqg2nW77UAgZwPCxxue3nNJ_7AUU8VRFraoS085gcWKAiSCBg&_nc_ht=scontent.fhkg10-1.fna&oh=74f38a953466c43cfb00d7631c25f214&oe=5DEA0378"/>
                </div>
                <div class="text" style="max-width: 50px;">
                    <span>CLS</span>
                </div>
            </div>
            <div class="comment">
                <div class="profilePhoto">
                    <img alt="alt" src="https://scontent.fhkg10-1.fna.fbcdn.net/v/t1.0-1/c6.6.74.74a/p86x86/251941_110797232393328_1793893346_n.jpg?_nc_cat=103&_nc_oc=AQloUFxxDYtjWjLAEymqg2nW77UAgZwPCxxue3nNJ_7AUU8VRFraoS085gcWKAiSCBg&_nc_ht=scontent.fhkg10-1.fna&oh=74f38a953466c43cfb00d7631c25f214&oe=5DEA0378"/>
                </div>
                <div class="text" style="max-width: 50px;">
                    <span>CLS</span>
                </div>
            </div>
            <div class="comment">
                <div class="profilePhoto">
                    <img alt="alt" src="https://scontent.fhkg10-1.fna.fbcdn.net/v/t1.0-1/c6.6.74.74a/p86x86/251941_110797232393328_1793893346_n.jpg?_nc_cat=103&_nc_oc=AQloUFxxDYtjWjLAEymqg2nW77UAgZwPCxxue3nNJ_7AUU8VRFraoS085gcWKAiSCBg&_nc_ht=scontent.fhkg10-1.fna&oh=74f38a953466c43cfb00d7631c25f214&oe=5DEA0378"/>
                </div>
                <div class="text" style="max-width: 50px;">
                    <span>CLS</span>
                </div>
            </div>
            <div class="comment">
                <div class="profilePhoto">
                    <img alt="alt" src="https://scontent.fhkg10-1.fna.fbcdn.net/v/t1.0-1/c6.6.74.74a/p86x86/251941_110797232393328_1793893346_n.jpg?_nc_cat=103&_nc_oc=AQloUFxxDYtjWjLAEymqg2nW77UAgZwPCxxue3nNJ_7AUU8VRFraoS085gcWKAiSCBg&_nc_ht=scontent.fhkg10-1.fna&oh=74f38a953466c43cfb00d7631c25f214&oe=5DEA0378"/>
                </div>
                <div class="text" style="max-width: 50px;">
                    <span>CLS</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PostPanel"
    }
</script>

<style scoped>
    .postPanel .post {
        position: absolute;
        right: 5%;
        width: 38%;
        margin: 2% 2%;
        background: white;
        border-radius: 8px;
    }
    .postPanel .post .comment {
        margin: 1% 0;
    }
    .postPanel .statistic {
        position: absolute;
        left: 5%;
        width: 44%;
        min-height: 100px;
        margin: 2% 2%;
        background: white;
        border-radius: 8px;
    }
    .postPanel .title {
        margin: 0 3%;
    }
    .postPanel .separator {
        margin: 3% 0;
        border-bottom: lightgray 1px solid;
    }
    .postPanel .profilePhoto {
        float: left;
        margin: 0 1%;
    }
    .postPanel .profilePhoto img {
        border-radius: 50%;
        display: block;
        overflow: hidden;
        width: 32px;
        height: 32px;
    }
    .postPanel .text {
        min-height: 28px;
        padding: 10px 0 10px 2%;
        margin: 0 0 0 8%;
        background: #f2f3f5;
        border-radius: 18px;
        word-wrap: break-word;
        word-break: break-word;
        white-space: normal;
        box-sizing: border-box;
        font-size: small;
    }
</style>