<template>
    <div>
        <h1>Login</h1>

        <label for="username">UserName:</label>
        <input type="text" id="username" name="username" required><br><br>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br><br>

        <button id="loginButton" v-on:click="GetLoginAccount()" type="button">Login</button>
        <a href="/Member/Register"><button type="button"> Register</button></a>
    </div>
</template>
<script>
    import Commom from '../Commom'
    export default {
        methods: {
            GetLoginAccount() {
                const url = "/Member/GetLoginAccount";
                const data = JSON.stringify({
                    "UserName": $("#username").val(),
                    "Password": $("#password").val(),
                });
                Commom.PostCommonAPI(url, data).then((result) => {
                    window.location.href = "/Message/List"
                });
                
            }
        }
    }
</script>