import React, { FC } from 'react';

import ReactMinimalPieChart from 'react-minimal-pie-chart'

interface PieChartOptions {
    data: number
    title: string
}
const PieChart: FC<PieChartOptions> = (props) => {

  

    const data = {
        datasets: [
            {
                data: [props.data, 100 - props.data],
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
            
            <ReactMinimalPieChart
                 animate
                 animationDuration={500}
                 animationEasing="ease-out"
                cx={50}
                cy={50}
                data={[
                    {
                        color: '#d0d0d0',
                        title: 'One',
                        value: 20
                    },
                    {
                        color: '#0091ea',
                        title: 'Two',
                        value: 80
                    },
                ]}
                label
                labelPosition={0}
                labelStyle={{
                    fontFamily: 'Open Sans',
                    fontSize: '20px',
                    fontWeight: 200
                  }}
                lengthAngle={360}
                lineWidth={15}
                onClick={undefined}
                onMouseOut={undefined}
                onMouseOver={undefined}
                paddingAngle={0}
                radius={50}
                rounded
                startAngle={200}
                viewBoxSize={[
                    80,
                    80
                ]}
            />



        </div>
    );
}

export default PieChart;
