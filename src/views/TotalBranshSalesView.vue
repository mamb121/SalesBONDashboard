<template>
    <div id="myLineChart" style="width:100%; height:600px; margin: auto;"></div>
</template>

<script lang="ts">
import * as echarts from 'echarts/core';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';

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

