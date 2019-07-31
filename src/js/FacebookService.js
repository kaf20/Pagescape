/* eslint-disable */

function FacebookService() {
    if (undefined === window.fbAsyncInit) {
        window.fbAsyncInit = function () {
            FB.init({
                appId: "647903355689768",
                cookie: true,
                xfbml: true,
                version: "v4.0"
            });

            FB.AppEvents.logPageView();
        };

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s);
            js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, "script", "facebook-jssdk"));
    }
}

FacebookService.prototype.login = function () {
    FB.login(function (response) {
        if (response.authResponse) {
            console.log("Welcome!  Fetching your information.... ");
            // eslint-disable-next-line no-undef
            FB.api("/me", function (response) {
                console.info(response);
            });
            FB.getLoginStatus(function (response) {
                console.info(response);
            });
            FB.api("/me/accounts", function (response) {
                console.info(response);
            });
        } else {
            console.log("User cancelled login or did not fully authorize.");
        }
    });
};

const instance = new FacebookService();

exports.login = () => {
    instance.login();
};
