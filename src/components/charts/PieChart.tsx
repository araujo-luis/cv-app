import React, { FC } from 'react';

import ReactMinimalPieChart from 'react-minimal-pie-chart'

interface PieChartOptions {
    value: number
    title: string
}
const PieChart: FC<PieChartOptions> = (props) => {

    const data = {
        datasets: [
            {
                color: "#d0d0d0",
                value: 100 - props.value,
            },
            {
                color: "#0091ea",
                value: props.value,
            }
        ],
    };

    return (
        <div>

            <ReactMinimalPieChart className="skills-donut-chart"
                animate
                animationDuration={500}
                animationEasing="ease-out"
                cx={50}
                cy={50}
                data={data.datasets}
                label
                labelPosition={0}
                labelStyle={{
                    fontFamily: 'Open Sans',
                    fontSize: '20px',
                    fontWeight: 200
                }}
                lengthAngle={-360}
                lineWidth={15}
                onClick={undefined}
                onMouseOut={undefined}
                onMouseOver={undefined}
                paddingAngle={0}
                radius={50}
                rounded
                startAngle={-90}
                viewBoxSize={[
                    80,
                    80
                ]}
            />4
        </div>
    );
}

export default PieChart;