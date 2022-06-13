var CookieNext = require('cookies-next');
var axios = require('axios');
var Router = require('next/router');

const urlTosideAccount = "https://account.tosidestudio.com"

module.exports = {
    
    tosideLoginModule: function tosideLoginModule (secretKey) {

        var sc = document.createElement("link")
        sc.setAttribute("href", "http://localhost:3006/css/tosidestudioaccount.css")
        sc.setAttribute("rel", "stylesheet")
        document.head.appendChild(sc);

        var elemDiv = document.createElement('div');
        elemDiv.id = "tosidestudioaccount"

        var containerDiv = document.createElement('div')
        containerDiv.className = "container"
        elemDiv.appendChild(containerDiv)

        var productIconDiv = document.createElement('div')
        productIconDiv.className = "producticon"
        containerDiv.appendChild(productIconDiv)

        var iconTosideDiv = document.createElement('div')
        iconTosideDiv.className = "iconToside"
        productIconDiv.appendChild(iconTosideDiv)

        var titleDiv = document.createElement('div')
        titleDiv.className = "title"
        titleDiv.innerHTML = "Login"
        containerDiv.appendChild(titleDiv)

        var descDiv = document.createElement('div')
        descDiv.className = "description"
        descDiv.innerHTML = "Accedi con il tuo account Toside Studio"
        containerDiv.appendChild(descDiv)

        var emailLabel = document.createElement('label')
        emailLabel.innerHTML = "E-mail"
        containerDiv.appendChild(emailLabel)

        var emailInput = document.createElement('input')
        emailInput.id = "tosideaccountUserEmail"
        emailInput.placeholder = "Insert here your e-mail"
        containerDiv.appendChild(emailInput)

        var pwdLabel = document.createElement('label')
        pwdLabel.innerHTML = "Password"
        containerDiv.appendChild(pwdLabel)

        var pwdInput = document.createElement('input')
        pwdInput.id = "tosideaccountUserPwd"
        pwdInput.type = "password"
        pwdInput.placeholder = "Insert here your password"
        containerDiv.appendChild(pwdInput)

        var loginButton = document.createElement('button')
        loginButton.innerHTML = "Login with Toside Studio"
        containerDiv.appendChild(loginButton)
        loginButton.addEventListener('click', function handleClick(event) {
            const userEmail = document.getElementById("tosideaccountUserEmail").value
            const userPwd = document.getElementById("tosideaccountUserPwd").value
            module.exports.tosideLoginUser(userEmail, userPwd, secretKey)
        });

        var bottomlinkDiv = document.createElement('div')
        bottomlinkDiv.className = "bottomlink"
        bottomlinkDiv.innerHTML = "Close"
        containerDiv.appendChild(bottomlinkDiv)
        bottomlinkDiv.addEventListener('click', function handleClick(event) {
            module.exports.tosideLoginModuleClose()
        });

        document.body.appendChild(elemDiv);
    },
    tosideLoginModuleClose: function tosideLoginModuleClose() {
        var elemDiv = document.getElementById("tosidestudioaccount")
        elemDiv.remove()
    },
    tosideSignupModule: function tosideSignupModule(secretKey) {

        var sc = document.createElement("link")
        sc.setAttribute("href", "http://localhost:3006/css/tosidestudioaccount.css")
        sc.setAttribute("rel", "stylesheet")
        document.head.appendChild(sc);

        var elemDiv = document.createElement('div');
        elemDiv.id = "tosidestudioaccount"

        var containerDiv = document.createElement('div')
        containerDiv.className = "container signup"
        elemDiv.appendChild(containerDiv)

        var productIconDiv = document.createElement('div')
        productIconDiv.className = "producticon"
        containerDiv.appendChild(productIconDiv)

        var iconTosideDiv = document.createElement('div')
        iconTosideDiv.className = "iconToside"
        productIconDiv.appendChild(iconTosideDiv)

        var titleDiv = document.createElement('div')
        titleDiv.className = "title"
        titleDiv.innerHTML = "Signup"
        containerDiv.appendChild(titleDiv)

        var descDiv = document.createElement('div')
        descDiv.className = "description"
        descDiv.innerHTML = "Create an account of Toside Studio now"
        containerDiv.appendChild(descDiv)

        // START - Firstname
        var firstnameBox = document.createElement('label')
        firstnameBox.className = "inputBox"
        containerDiv.appendChild(firstnameBox)

        var firstnameLabel = document.createElement('label')
        firstnameLabel.innerHTML = "Firstname"
        firstnameBox.appendChild(firstnameLabel)

        var firstnameInput = document.createElement('input')
        firstnameInput.id = "tosideaccountUserFirstname"
        firstnameInput.placeholder = "Insert here your firstname"
        firstnameBox.appendChild(firstnameInput)
        // END - Firstname

        // START - Lastname
        var lastnameBox = document.createElement('label')
        lastnameBox.className = "inputBox"
        containerDiv.appendChild(lastnameBox)

        var lastnameLabel = document.createElement('label')
        lastnameLabel.innerHTML = "Lastname"
        lastnameBox.appendChild(lastnameLabel)

        var lastnameInput = document.createElement('input')
        lastnameInput.id = "tosideaccountUserLastname"
        lastnameInput.placeholder = "Insert here your lastname"
        lastnameBox.appendChild(lastnameInput)
        // END - Lastname

        // START - Email
        var emailBox = document.createElement('label')
        emailBox.className = "inputBox"
        containerDiv.appendChild(emailBox)

        var emailLabel = document.createElement('label')
        emailLabel.innerHTML = "E-mail"
        emailBox.appendChild(emailLabel)

        var emailInput = document.createElement('input')
        emailInput.id = "tosideaccountUserEmail"
        emailInput.placeholder = "Insert here your e-mail"
        emailBox.appendChild(emailInput)
        // END - Email

        // START - Password
        var pwdBox = document.createElement('label')
        pwdBox.className = "inputBox"
        containerDiv.appendChild(pwdBox)

        var pwdLabel = document.createElement('label')
        pwdLabel.innerHTML = "Password"
        pwdBox.appendChild(pwdLabel)

        var pwdInput = document.createElement('input')
        pwdInput.id = "tosideaccountUserPwd"
        pwdInput.type = "password"
        pwdInput.placeholder = "Insert here your password"
        pwdBox.appendChild(pwdInput)
        // END - Password

        var loginButton = document.createElement('button')
        loginButton.innerHTML = "Continue"
        containerDiv.appendChild(loginButton)
        loginButton.addEventListener('click', function handleClick(event) {
            const userFirstname = document.getElementById("tosideaccountUserFirstname").value
            const userLastname = document.getElementById("tosideaccountUserLastname").value
            const userEmail = document.getElementById("tosideaccountUserEmail").value
            const userPwd = document.getElementById("tosideaccountUserPwd").value
            module.exports.tosideSignupUser(userFirstname, userLastname, userEmail, userPwd, secretKey)
        });

        var bottomlinkDiv = document.createElement('div')
        bottomlinkDiv.className = "bottomlink"
        bottomlinkDiv.innerHTML = "Close"
        containerDiv.appendChild(bottomlinkDiv)
        bottomlinkDiv.addEventListener('click', function handleClick(event) {
            module.exports.tosideLoginModuleClose()
        });

        var privacyDiv = document.createElement('div')
        privacyDiv.className = "privacy"
        privacyDiv.innerHTML = '<a target="_blank" href="https://www.iubenda.com/privacy-policy/30453535" class="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe " title="Privacy Policy ">Privacy Policy</a><script type="text/javascript">(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);</script>'
        containerDiv.appendChild(privacyDiv)

        document.body.appendChild(elemDiv);
    },
    tosideConfirmationcodeModule: function tosideConfirmationcodeModule(userEmail, secretKey) {

        var sc = document.createElement("link")
        sc.setAttribute("href", urlTosideAccount+"/css/tosidestudioaccount.css")
        sc.setAttribute("rel", "stylesheet")
        document.head.appendChild(sc);

        var elemDiv = document.createElement('div');
        elemDiv.id = "tosidestudioaccount"

        var containerDiv = document.createElement('div')
        containerDiv.className = "container signup"
        elemDiv.appendChild(containerDiv)

        var productIconDiv = document.createElement('div')
        productIconDiv.className = "producticon"
        containerDiv.appendChild(productIconDiv)

        var iconTosideDiv = document.createElement('div')
        iconTosideDiv.className = "iconToside"
        productIconDiv.appendChild(iconTosideDiv)

        var titleDiv = document.createElement('div')
        titleDiv.className = "title"
        titleDiv.innerHTML = "Confirmation"
        containerDiv.appendChild(titleDiv)

        var descDiv = document.createElement('div')
        descDiv.className = "description code"
        descDiv.innerHTML = "We have sent you an email with a code inside. Copy and paste it here to confirm your email."
        containerDiv.appendChild(descDiv)

        var codeLabel = document.createElement('label')
        codeLabel.innerHTML = "Confirmation code"
        containerDiv.appendChild(codeLabel)

        var codeInput = document.createElement('input')
        codeInput.id = "tosideaccountCode"
        codeInput.placeholder = "Insert here the code"
        containerDiv.appendChild(codeInput)

        var useremailInput = document.createElement('input')
        useremailInput.id = "tosideaccountUserEmail"
        useremailInput.type = "hidden"
        useremailInput.value = userEmail
        containerDiv.appendChild(useremailInput)

        var loginButton = document.createElement('button')
        loginButton.innerHTML = "Continue"
        containerDiv.appendChild(loginButton)
        loginButton.addEventListener('click', function handleClick(event) {
            const code = document.getElementById("tosideaccountCode").value
            const userEmail = document.getElementById("tosideaccountUserEmail").value
            module.exports.tosideConfirmCode(code, userEmail, secretKey)
        });

        var bottomlinkDiv = document.createElement('div')
        bottomlinkDiv.className = "bottomlink"
        bottomlinkDiv.innerHTML = "Close"
        containerDiv.appendChild(bottomlinkDiv)
        bottomlinkDiv.addEventListener('click', function handleClick(event) {
            module.exports.tosideLoginModuleClose()
        });

        document.body.appendChild(elemDiv);
    },
    tosideLoginCheck: function tosideLoginCheck() {
        const loggedInUser = CookieNext.checkCookies('user', {secure: true});
        return loggedInUser
    },
    tosideLogout: function tosideLogout() {
        if(module.exports.tosideLoginCheck()) {
            CookieNext.removeCookies('user', {secure: true});
            Router.reload(window.location.pathname)
        }
    },
    tosideLoginUser: function tosideLoginUser(userEmail, userPwd, secretKey) {

        if(!module.exports.tosideLoginCheck()) {
            axios({
                method: 'post',
                url: urlTosideAccount+':5006/api/v1/user/login',
                headers: {
                    'Content-Type': 'application/json',
                    'secretkey': secretKey
                },
                data: {
                    email: userEmail,
                    password: userPwd
                }
            }).then(function (response) {
                console.log(secretKey)
                const numUsers = response.data.totalNumUsers;
                if(numUsers==1) {
                    const user = response.data.userData
                    CookieNext.setCookies('user',user, {secure: true});
                    Router.reload(window.location.pathname)
                } else {
                    alert("Failed!")
                }
            });
        }
    },
    tosideSignupUser: function tosideSignupUser(userFirstname, userLastname, userEmail, userPwd, secretKey) {

        if(!module.exports.tosideLoginCheck()) {
            axios({
                method: 'put',
                url: urlTosideAccount+':5006/api/v1/user/signup',
                headers: {
                    'Content-Type': 'application/json',
                    'secretkey': secretKey
                },
                data: {
                    firstname: userFirstname,
                    lastname: userLastname,
                    email: userEmail,
                    password: userPwd
                }
            }).then(function (response) {
                if(response.data.error !== undefined) {
                    alert("Error")
                } else {
                    module.exports.tosideLoginModuleClose()
                    module.exports.tosideConfirmationcodeModule(userEmail, secretKey)
                }
            });
        }
    },
    tosideConfirmCode: function tosideConfirmCode(code, userEmail, secretKey) {

        if(!module.exports.tosideLoginCheck()) {
            axios({
                method: 'post',
                url: urlTosideAccount+':5006/api/v1/user/confirm',
                headers: {
                    'Content-Type': 'application/json',
                    'secretkey': secretKey
                },
                data: {
                    email: userEmail,
                    confirmationcode: code
                }
            }).then(function (response) {
                if(response.data.error !== undefined) {
                    alert("Error")
                } else {
                    if(response.data.users !== undefined){
                        const user = response.data.users[0]
                        CookieNext.setCookies('user',user, {secure: true});
                        Router.reload(window.location.pathname)
                    } else {
                        alert("Error")
                    }
                }
            });
        }
    }

}