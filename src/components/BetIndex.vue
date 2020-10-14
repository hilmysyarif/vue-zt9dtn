<template>
  <div class="container py-4">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <div class="card">
          <div class="card-header">Our Stats</div>
          <div class="card-body">
            <b-container class="bv-example-row">
              <b-row>
                <div class="col-md-12 justify-content-center">
                  <b class="">Balance : {{ ourBalance }}</b>
                </div>
              </b-row>

              <b-row>
                <div class="col-md-6">
                  <b class="float-left">Win : {{ winCounter }}</b>
                </div>
                <div class="col-md-6">
                  <b class="float-left">Lose : {{ loseCounter }}</b>
                </div>
              </b-row>
            </b-container>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />

    <div class="row justify-content-center">
      <div class="col-md-4 pb-4">
        <div class="card">
          <div class="card-header">
            Current Stats <b class="float-right">Round : {{ round }}</b>
          </div>
          <div class="card-body">
            <b-container class="bv-example-row">
              <b-row>
                <div class="col-md-6">
                  <b class="float-left">Time : {{ leftTime }}</b>
                </div>
              </b-row>

              <div class="justify-content-center">
                <b>Hot Items :</b>
                <div v-if="leftTime > 1">
                  <b-row>
                    <b-col v-if="hot == '1'"
                      ><img :src="getImgUrl(1)" width="32"
                    /></b-col>
                    <b-col v-if="hot == '2'"
                      ><img :src="getImgUrl(2)" width="32"
                    /></b-col>
                    <b-col v-if="hot == '3'"
                      ><img :src="getImgUrl(3)" width="32"
                    /></b-col>
                    <b-col v-if="hot == '4'"
                      ><img :src="getImgUrl(4)" width="32"
                    /></b-col>
                    <b-col v-if="hot == '5'"
                      ><img :src="getImgUrl(5)" width="32"
                    /></b-col>
                    <b-col v-if="hot == '6'"
                      ><img :src="getImgUrl(6)" width="32"
                    /></b-col>
                    <b-col v-if="hot == '7'"
                      ><img :src="getImgUrl(7)" width="32"
                    /></b-col>
                    <b-col v-if="hot == '8'"
                      ><img :src="getImgUrl(8)" width="32"
                    /></b-col>
                    <b-col v-if="hot === '9'"
                      ><img :src="getImgUrl(9)" width="32"
                    /></b-col>
                    <b-col v-if="hot === '10'"
                      ><img :src="getImgUrl(10)" width="32"
                    /></b-col>
                  </b-row>
                  <b>Prize :</b>
                  <b-row>
                    <b-col v-if="prize == '1'"
                      ><img :src="getImgUrl(1)" width="32"
                    /></b-col>
                    <b-col v-if="prize == '2'"
                      ><img :src="getImgUrl(2)" width="32"
                    /></b-col>
                    <b-col v-if="prize == '3'"
                      ><img :src="getImgUrl(3)" width="32"
                    /></b-col>
                    <b-col v-if="prize == '4'"
                      ><img :src="getImgUrl(4)" width="32"
                    /></b-col>
                    <b-col v-if="prize == '5'"
                      ><img :src="getImgUrl(5)" width="32"
                    /></b-col>
                    <b-col v-if="prize == '6'"
                      ><img :src="getImgUrl(6)" width="32"
                    /></b-col>
                    <b-col v-if="prize == '7'"
                      ><img :src="getImgUrl(7)" width="32"
                    /></b-col>
                    <b-col v-if="prize == '8'"
                      ><img :src="getImgUrl(8)" width="32"
                    /></b-col>
                    <b-col v-if="prize === '9'"
                      ><img :src="getImgUrl(9)" width="32"
                    /></b-col>
                    <b-col v-if="prize === '10'"
                      ><img :src="getImgUrl(10)" width="32"
                    /></b-col>
                  </b-row>
                </div>
              </div>
            </b-container>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">We Bets on :</div>
          <div class="card-body justify-content-center">
            <b-container class="bv-example-row">
              <b-row
                v-if="results.length > 0 && (leftTime >= 1 && type == 'T1')"
              >
                <div v-for="(article, index) in results" :key="index">
                  <b-col v-if="article === '1'"
                    ><img :src="getImgUrl(1)" width="32"
                  /></b-col>
                  <b-col v-if="article === '2'"
                    ><img :src="getImgUrl(2)" width="32"
                  /></b-col>
                  <b-col v-if="article === '3'"
                    ><img :src="getImgUrl(3)" width="32"
                  /></b-col>
                  <b-col v-if="article === '4'"
                    ><img :src="getImgUrl(4)" width="32"
                  /></b-col>
                  <b-col v-if="article === '5'"
                    ><img :src="getImgUrl(5)" width="32"
                  /></b-col>
                  <b-col v-if="article === '6'"
                    ><img :src="getImgUrl(6)" width="32"
                  /></b-col>
                  <b-col v-if="article === '7'"
                    ><img :src="getImgUrl(7)" width="32"
                  /></b-col>
                  <b-col v-if="article === '8'"
                    ><img :src="getImgUrl(8)" width="32"
                  /></b-col>
                  <b-col v-if="article === '9'"
                    ><img :src="getImgUrl(9)" width="32"
                  /></b-col>
                  <b-col v-if="article === '10'"
                    ><img :src="getImgUrl(10)" width="32"
                  /></b-col>
                </div>
              </b-row>
              <b-row v-else>No Bet available in current round.</b-row>
            </b-container>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">Last 8 Histories</div>
          <div class="card-body">
            <b-container class="bv-example-row">
              <b-row class="justify-content-center">
                <div v-for="(history, index) in history" :key="index">
                  <b-col v-if="history === 1"
                    ><img :src="getImgUrl(1)" width="32"
                  /></b-col>
                  <b-col v-if="history === 2"
                    ><img :src="getImgUrl(2)" width="32"
                  /></b-col>
                  <b-col v-if="history === 3"
                    ><img :src="getImgUrl(3)" width="32"
                  /></b-col>
                  <b-col v-if="history === 4"
                    ><img :src="getImgUrl(4)" width="32"
                  /></b-col>
                  <b-col v-if="history === 5"
                    ><img :src="getImgUrl(5)" width="32"
                  /></b-col>
                  <b-col v-if="history === 6"
                    ><img :src="getImgUrl(6)" width="32"
                  /></b-col>
                  <b-col v-if="history === 7"
                    ><img :src="getImgUrl(7)" width="32"
                  /></b-col>
                  <b-col v-if="history === 8"
                    ><img :src="getImgUrl(8)" width="32"
                  /></b-col>
                  <b-col v-if="history === 9"
                    ><img :src="getImgUrl(9)" width="32"
                  /></b-col>
                  <b-col v-if="history === 10"
                    ><img :src="getImgUrl(10)" width="32"
                  /></b-col>
                </div>
              </b-row>
            </b-container>
          </div>
        </div>
        <br />
        <div class="card">
          <div class="card-header">Report</div>
          <div class="card-body">
            <b-container class="bv-example-row">
              <b-row class="justify-content-center">
                <div v-for="(history, index) in history" :key="index">
                  <b-col v-if="history === 1"
                    ><img :src="getImgUrl(1)" width="32"
                  /></b-col>
                  <b-col v-if="history === 2"
                    ><img :src="getImgUrl(2)" width="32"
                  /></b-col>
                  <b-col v-if="history === 3"
                    ><img :src="getImgUrl(3)" width="32"
                  /></b-col>
                  <b-col v-if="history === 4"
                    ><img :src="getImgUrl(4)" width="32"
                  /></b-col>
                  <b-col v-if="history === 5"
                    ><img :src="getImgUrl(5)" width="32"
                  /></b-col>
                  <b-col v-if="history === 6"
                    ><img :src="getImgUrl(6)" width="32"
                  /></b-col>
                  <b-col v-if="history === 7"
                    ><img :src="getImgUrl(7)" width="32"
                  /></b-col>
                  <b-col v-if="history === 8"
                    ><img :src="getImgUrl(8)" width="32"
                  /></b-col>
                  <b-col v-if="history === 9"
                    ><img :src="getImgUrl(9)" width="32"
                  /></b-col>
                  <b-col v-if="history === 10"
                    ><img :src="getImgUrl(10)" width="32"
                  /></b-col>
                </div>
              </b-row>
            </b-container>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card">
          <div class="card-header">Last 8 Hot</div>
          <div class="card-body">
            <b-container class="bv-example-row">
              <b-row class="justify-content-center">
                <b-alert :show="showvar">Success remove hot data!</b-alert>
                <template>
                  <data-table
                    :data="data"
                    :columns="columns"
                    @onTablePropsChanged="reloadLocalTable"
                    url="/getRecords"
                  >
                  </data-table>
                </template>
              </b-row>
            </b-container>
          </div>
        </div>
      </div>
    </div>

    <br />
    <!--div class='row justify-content-center'>
            <div class='col-md-6'>
                <div class='card'>
                    <div class='card-header'>Scan to Login</div>
                    <div class='card-body' v-if="qrUrl != undefined">
                        <qrcode  v-bind:value="qrUrl" :options="{ width: 166 }"></qrcode>

                    </div>
                </div>
            </div>
        </div-->
  </div>
</template>

<script>
import moment from "moment";
export default {
  created() {
    this.getData();
  },
  data() {
    return {
      results: null,
      leftTime: null,
      round: null,
      history: null,
      hot: null,
      type: null,
      prize: null,
      winCounter: null,
      loseCounter: null,
      tempUid: null,
      timeQr: null,
      qrUrl: null,
      hot_history: null,
      showvar: false,
      ourBalance: null,
      sec: 1000,
      url: "/getRecords",
      data: {},
      tableProps: {
        search: "",
        length: 8,
        column: "id",
        dir: "desc"
      },
      columns: [
        {
          label: "ID",
          name: "id",
          orderable: true
        },
        {
          label: "Hot",
          name: "hot_id",
          orderable: true,
          transform: ({ data, name }) =>
            "<img src='" + this.getImgUrl(`${data[name]}`) + "' width='32' />"
        },
        {
          label: "First",
          name: "num_1",
          orderable: true,
          transform: ({ data, name }) =>
            "<img src='" + this.getImgUrl(`${data[name]}`) + "' width='32' />"
        },
        {
          label: "Last",
          name: "num_2",
          orderable: true,
          transform: ({ data, name }) =>
            "<img src='" + this.getImgUrl(`${data[name]}`) + "' width='32' />"
        },
        {
          label: "Prize",
          name: "prize_id",
          orderable: true,
          transform: ({ data, name }) =>
            "<img src='" + this.getImgUrl(`${data[name]}`) + "' width='32' />"
        },
        {
          label: "Date",
          name: "created_at",
          orderable: true,
          transform: ({ data, name }) =>
            moment(`${data[name]}`).format("YYYY-MM-DD HH:mm:ss")
        },
        {
          label: "Actions",
          name: "id",
          orderable: true,
          transform: ({ data, name }) =>
            "<a class='btn btn-danger' href='/delHotRec/" +
            `${data[name]}` +
            "'>Delete</a>"
        }
      ]
    };
  },
  computed: {
    results: function() {
      return this.results;
    }
  },
  created() {
    this.getData(this.url);
  },
  methods: {
    callStats: function() {
      this.axios
        .get("/getCurrentStats")
        .then(response => {
          this.leftTime = response.data.left_time;
          this.round = response.data.round;
          this.hot = response.data.hot;
          this.history = response.data.history;
          this.type = response.data.type;
          this.results = response.data.bet_data;
          this.prize = response.data.prize;
          this.winCounter = response.data.win_counter;
          this.loseCounter = response.data.lose_counter;
          this.hot_history = response.data.last_hot;
          this.ourBalance = response.data.balance;
        })
        .catch(error => console.log(error));
    },
    generateQrCode: function() {
      this.axios
        .get("/loginQr")
        .then(response => {
          this.qrUrl = response.data.data;
        })
        .catch(error => console.log(error));
    },
    intervalFetchData: function() {
      setInterval(() => {
        this.callStats();
        this.reloadLocalTable(this.tableProps);
      }, 1000);
      // setInterval(() => {
      //     this.generateQrCode()
      //     }, 120000);
    },
    getImgUrl: function(num) {
      var images = require.context("~@/../../public/img/", false, /\.png$/);
      return images("./food_" + num + ".png");
    },
    deleteRow(dataCol) {
      this.axios
        .get("/delHotRec/" + dataCol)
        .then(response => {
          this.showvar = true;
          setTimeout(function() {
            this.showvar = false;
          }, this.sec);
        })
        .catch(error => console.log(error));
    },
    reloadTableEloquent() {
      this.$refs.eloquent.getData();
    },
    reloadQueryTable(options) {
      this.getData(this.url, options);
    },
    reloadLocalTable(options) {
      this.getData(this.url, options);
    },
    getData(url = this.url, options = this.tableProps) {
      this.axios
        .get(url, {
          params: options
        })
        .then(response => {
          this.data = response.data;
        })
        .catch(error => {});
    }
  },
  mounted() {
    // Run the functions once when mounted
    this.callStats();
    //this.generateQrCode();
    this.intervalFetchData();
    this.getData(this.url);
  }
};
</script>
<style scoped>
@import "../../public/css/app.css";
</style>
