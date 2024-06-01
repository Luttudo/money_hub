"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }) => {
    const data = {
        datasets: [
            {
                label: "Banks",
                data: [1250, 2500, 3750],
                backgroundColor: ["#0747b6", "#2265d", "#2f91fa"]
            }
        ],
        labels: ['Banco 1', 'Banco 2', 'Banco 3']
    }

    return <Doughnut data={data} />;
};

export default DoughnutChart;























// "use client"

// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Doughnut } from "react-chartjs-2";

// ChartJS.register(ArcElement, Tooltip, Legend);

// const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
//     const data = {
//         datasets: [
//             {
//                 label: "Banks",
//                 data: [1250, 2500, 3750],
//                 backgroundColor: ["#0747b6", "#2265d, #2f91fa"]
//             }
//         ],
//         labels: ['Banco 1', 'Banco 2', 'Banco 3']
//     }

//     return <Doughnut data={data} />
// }

// export default DoughnutChart