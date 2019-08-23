<template>
    <div class="home">
        <div class="drug_information_div">
            <span>藥品信息</span>
            <span>Drug information</span>
        </div>

        <div class="info_div" v-if="JSON.stringify(info) !=='{}'">
            <h3 class="orange">首次防偽查詢日期 ：{{info.firstTime || '無'}}</h3>
            <!--<p>{{info.firstTime}}</p>-->
            <h2 class="title">【產品名稱】</h2>
            <p>通用名：{{info.alias || '無'}}</p>
            <p>商品名：{{info.name || '無'}}</p>
            <p>英文名：{{info.code || '無'}}</p>
            <h2 class="title">【主要成分】</h2>
            <p>{{info.component || '無'}}</p>
            <h2 class="title">【性  狀】</h2>
            <p>{{info.character || '無'}}</p>
            <h2 class="title">【產品原理】</h2>
            <p>{{info.content || '無'}}</p>
        </div>
        <div class="info_div" v-else style="font-size: 14px">暫無此商品信息</div>
    </div>
</template>
<script>
    export default {
        props: {

        },
        data () {
            return {
                info: {},
                param: this.$route.params.param,
            }
        },
        mounted(){
            this.$axios.get(`/api/hon/security/get/${this.param}`).then(res => {
                if (res.status === 200 && res.data.success === 'true') {
                    this.info = res.data.data;
                }
            }).catch(error => {
                this.$Message.error(error || '請求失敗');
            })
        },
        methods: {

        }
    }
</script>
<style lang="scss" scoped>
    .drug_information_div {
        width: 85%;
        margin: 32px auto;
        border-left: 2px solid $themeColor;
        span:first-child{
            font-size: 36px;
            font-weight: bolder;
            margin: 0 30px 0 10px;
        }
        span:nth-child(2){
            font-size: 20px;
            color: #b3afaf;
        }
    }
    .info_div {
        width: 85%;
        margin: 32px auto;
        font-size: 14px;
        line-height: 2;
    }
    .title {
        color: $themeColor;
        margin-left: -1%;
    }
    .orange {
        color: #FF900E;
    }
</style>
