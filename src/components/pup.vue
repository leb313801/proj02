<template>
    <!-- #2 : Modal Window -->
    <div>
        <div class="modal02">
            <div class="popup_big02" style="height:500px;">
                <div>
                    <table>
                        <tr>
                            <td>
                                <table>
                                    <tr> 
                                        <td>
                                            <input type="radio" v-model="chk" value="1"> 비교차트 1번과 비교함
                                        </td>
                                    </tr>
                                    <tr> 
                                        <td>
                                            <input type="radio" v-model="chk" value="2"> 비교차트 2번과 비교함
                                        </td>
                                    </tr>
                                    <tr> 
                                        <td>
                                            <input type="radio" v-model="chk" value="3"> 비교차트 3번과 비교함
                                        </td>
                                    </tr>
                                    <tr> 
                                        <td>
                                            <input type="radio" v-model="chk" value="4"> 비교차트 4번과 비교함
                                        </td>
                                    </tr>
                                    <tr> 
                                        <td>
                                            <input type="radio" v-model="chk" value="5"> 비교차트 5번과 비교함
                                        </td>
                                    </tr>
                                    <tr> 
                                        <td>
                                            <input type="radio" v-model="chk" value="6"> 비교차트 6번과 비교함
                                        </td>
                                    </tr>
                                </table>
                                <button @click="add_chart">비교하기 {{chk}}</button>
                            </td>
                            <td>
                                <table>
                                    <tr>
                                        <td style="padding-left:50px">
                                            <line-chart :addData="addData"/>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </div>

                <button @click="closePup" type="button">
                    확인
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import LineChart from '@/components/LineChart.vue'
export default {
    name: 'pup',
    components:{
        LineChart
    },
    data(){
        return{
            addData: {},
            chk:''
        }
    },
    props: {
      chartId: {
          type: String
      }
    },
    methods: {
        closePup() {
			// 팝업창 close
			this.$emit('close-popup', this.is_show);
		},
        
        add_chart() {
            const chart1 = {name: 'Add1', data: [19038, 59438, 814405, 112438, 89890, 11816, 182374, 11411]};
            const chart2 = {name: 'Add2', data: [19308, 59438, 81405, 112438, 89890, 11816, 12374, 181411]};
            const chart3 = {name: 'Add3', data: [19108, 594328, 12405, 11438, 89890, 11816, 182374, 18411]};
            const chart4 = {name: 'Add4', data: [1908, 59438, 81405, 1212438, 89890, 11816, 182374, 181411]};
            const chart5 = {name: 'Add5', data: [19028, 59438, 813405, 12438, 89920, 11816, 182374, 181411]};
            const chart6 = {name: 'Add6', data: [1908, 59438, 81405, 12438, 89890, 118126, 182374, 181411]};
            const chart7 = {name: 'Add7', data: [1908, 59438, 81405, 112438, 89890, 11816, 1823724, 18411]};

            if( this.chk === '1'){
                this.addData = chart1;
            } else if( this.chk === '2'){
                this.addData = chart2;
            } else if( this.chk === '3'){
                this.addData = chart3;
            } else if( this.chk === '4'){
                this.addData = chart4;
            } else if( this.chk === '5'){
                this.addData = chart5
            } else if( this.chk === '6'){
                this.addData = chart6;
            } else if( this.chk === '7'){
                this.addData = chart7;
            }
            //console.log(this.addData)
        }
    },
    mounted(){
        console.log("pupdata --------------")
        console.log("chartId :" + this.chartId )
      
    }
}
</script>


<style>
.modal02 {
    position: fixed;
    top: -1px;
    left: 2px;
    right: 0px;
    bottom: 0px;
    z-index: 1000;
    background-color: rgba( 0, 0, 0, 0.5 ); 
}
.popup_big02 {border-radius: 3px;border: 1px solid #cdd0d7;background: #fff;position: absolute;overflow-y: auto;left: 50%; width: 1000px; margin-left: -600px; margin-top: 20px; z-index: 99999;}

</style>