import React, { FC } from 'react';
import { Doughnut } from 'react-chartjs-2';
const data = {
    datasets: [
        {
        data: [10, 20, 30]
    }
],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Red',
        'Yellow',
        'Blue'
    ]
};
export const PieChartStory = () => (
    <section className="best-offer" id="best-offer-section">
        <div className="skills">
            <Doughnut
                data={data} />
        </div>

    </section>
);
export default { title: 'PieChart' };

