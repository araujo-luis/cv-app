import React, { FC } from 'react';
import { Doughnut } from 'react-chartjs-2';

const Chart = require('react-chartjs-2').Chart;
interface PieChartOptions {
    data: number
    title: string
}
const PieChart: FC<PieChartOptions> = (props) => {

    var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
    Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
        draw: function () {
            originalDoughnutDraw.apply(this, arguments);

            var chart = this.chart;
            var width = chart.chart.width,
                height = chart.chart.height,
                ctx = chart.chart.ctx;

            var fontSize = (height / 114).toFixed(2);
            ctx.font = fontSize + "em sans-serif";
            ctx.textBaseline = "middle";

            var sum = 0;
            
            sum += chart.config.data.datasets[0].data[0];
            var text = sum,
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = height / 1.6;
            ctx.fillText(text, textX, textY);
        }
    });

    const data = {
        datasets: [
            {
                data: [props.data, 100 - props.data ],
                backgroundColor: ["#0091ea", "#78909c"],
            }
        ],
    };
    const options = {
        tooltips: {
            enabled: false
        },
        title: {
            display: true,
            text: props.title
        }
    }
    return (
        <div>
            <Doughnut
                data={data}
                width={100}
                height={50}
                options={options} />
        </div>
    );
}

export default PieChart;
