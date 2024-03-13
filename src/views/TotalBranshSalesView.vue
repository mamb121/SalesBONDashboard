<template>
  <v-card
    class="mx-auto my-1"
    elevation="1"
  >
    <v-card-item
    style="border-bottom: 1px solid gray;"
    >
    <div class="px-0 d-flex" style="justify-content: space-between; align-items: center;">
      <v-card-title
      class="text-left"
      >
        Total Branch Sales
      </v-card-title>
      <v-btn icon class="text-right"  elevation="0" @click="showFilter = true">
          <v-icon>mdi-filter</v-icon>
      </v-btn>
    </div>
    </v-card-item>
    <v-card-text>
      <div id="myLineChart" style="width:100%; height:600px; margin: auto;"></div>
    </v-card-text>
  </v-card>
  <v-navigation-drawer      
      v-model="showFilter"
      location="right"
      absolute
      temporary
      width="300px"
      class="elevation-2"
      hide-overlay
    >
      <v-list-item>
        <v-list-item-title>Filters</v-list-item-title>
      </v-list-item>
      <v-divider />
      <BranshFilter></BranshFilter>
    </v-navigation-drawer>
  
</template>

<script lang="ts">
import * as echarts from 'echarts/core';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import BranshFilter from '@/components/BranshFilter.vue';
import { BarChart,PieChart,LineChart } from 'echarts/charts';

import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,

} from 'echarts/components';

import { GridComponent } from 'echarts/components';

use([
  CanvasRenderer,
  BarChart,
  PieChart,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
]);

export default{
  components:{
    BranshFilter
  },
  data(){
    return {
      showFilter:true,
  }
  },
  mounted() {
    const pieOptions: echarts.EChartsCoreOption = {
      title: {
        text: 'Traffic Sources',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      legend: {
        orient: 'horizontal',
        left: 'center',
        bottom: 'bottom',
      },
      xAxis: {
        type: 'category',
        ata: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
            data: [510000, 490200, 480200, 430200, 470200, 440200, 500200, 490200, 510200, 520200, 470200, 430200],
            type: 'line'
            }
        ]
    };

    const myContiner = document.getElementById('myLineChart')
    const myLineChartInst = echarts.init(myContiner)

    myLineChartInst.setOption(pieOptions)
  },
}

</script>

