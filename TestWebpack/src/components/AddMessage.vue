<template>
    <div>
        <label for="title">留言標題:</label>
        <input type="text" id="title" name="title" required><br><br>

        <label for="content">留言內容:</label>
        <textarea id="content" name="content" rows="4" cols="50" required></textarea><br><br>

        <button v-on:click="submitToAddMessage" type="button">送出</button>
    </div>
</template>
<script>
    export default {
        methods: {
            submitToAddMessage() {
                $.ajax({
                    url: "/Message/CreateMessage",
                    type: "POST",
                    contentType: "application/json",
                    data: JSON.stringify({
                        "title": $("#title").val(),
                        "content": $("#content").val(),
                    }),
                    success: function (data) {
                        console.log(data);
                    },
                    error: function (error) {
                        console.error("Error:", error);
                    }
                })
            }
        }
    }

</script>