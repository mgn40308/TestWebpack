<template>
    <div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <h1>留言板</h1>
            <div style="display: flex; align-items: center;">
                <a href="/Message/AddMessage">
                    <button type="button">新增留言</button>
                </a>
            </div>
        </div>
        <table style="width: 100%;">
            <thead>
                <tr>
                    <th style="width: 10%;">留言數</th>
                    <th style="width: 50%;">標題</th>
                    <th style="width: 15%;">作者</th>
                    <th style="width: 20%;">發表時間</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(message, index) in messages" :key="index">
                    <td>{{ message.ReplyCount }}</td>
                    <td><a v-on:click="toDetail(message.Id)">{{ message.Title }}</a></td>
                    <td>{{ message.UserName }}</td>
                    <td>{{ FromtDate( message.Date )}}</td>
                    <td :name="message.UserName">
                        <button class="d-none" v-on:click="DeleteMessage(message.Id)">X</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div style="text-align: center;">
            <ul class="pagination">
                <li>
                    <button type="button" v-on:click="GetNextPage(pageNumber-1)">＜</button>
                </li>
                <li v-for="page in pageCount" :key="page">
                    <button type="button" v-on:click="GetMessageList(page)">{{ page }}</button>
                </li>
                <li>
                    <button type="button" v-on:click="GetNextPage(pageNumber+1)">＞</button>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import Commom from '../Commom'
    export default {
            data() {
                return {
                    messageId:'',
                    messages: [],
                    pageCount: 0,
                    pageNumber: 1,
                }
            },           
        created() {
                this.GetMessagePageCount();
                this.GetMessageList();
                

            },
            methods: {
                GetMessageList(id) {
                    const self = this;
                    if (id !== self.pageNumber) {
                        this.LoadPage(id);
                    }

                },
                LoadPage(id) {
                    const self = this;
                    const url = "/Message/GetMessageList/" + id;
                    Commom.GetCommonAPI(url).then((result) => {
                        self.messages = result;
                        $("td button").addClass("d-none")
                        self.GetUserPerssion();
                        if (id) {
                            self.pageNumber = id;
                        }
                    });
                  
                },
                GetUserPerssion() {
                    const url = "/Message/GetUserPerssion";
                    const result = Commom.GetCommonAPI(url).then((result) => {
                        if (result == "all") {
                            $("td").find("button").removeClass("d-none");
                        } else {
                            $("[name='" + result + "'").find("button").removeClass("d-none");
                        }
                    });                   
                },
                DeleteMessage(id) {
                    const self = this;
                    const url = "/Message/DeleteMessage/" + id;
                    Commom.GetCommonAPI(url).then(() => {
                        self.LoadPage(self.pageNumber);
                    })                   
                },
                async GetMessagePageCount() {
                    const self = this;
                    const url = "/Message/GetMessagePageCount";
                    const result = await Commom.GetCommonAPI(url);
                    self.pageCount = result;
             

                },
                GetNextPage(page) {
                    if (page <= this.pageCount && page > 0) {
                        this.GetMessageList(page);
                    }
                },
                FromtDate(date) {
                    var timestamp = new Date(date);
                    var year = timestamp.getFullYear();
                    var month = timestamp.getMonth() + 1;
                    var day = timestamp.getDate();
                    var hours = timestamp.getHours();
                    var minutes = timestamp.getMinutes();
                    var formattedTimestamp = year + '/' + month + '/' + day + ' ' + hours + ':' + minutes;
                    return formattedTimestamp
                }, toDetail(id) {
                    this.$store.commit("updateMessage", id)
                    this.$router.push("/Message/Detail");                   
                }                 
            }
    }
</script>