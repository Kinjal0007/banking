'use client'
import 'chart.js/auto';
import {Chart as ChartJS,ArcElement,Tooltip,Legend} from "chart.js"
import { Doughnut } from 'react-chartjs-2';



const DoughnutChart = ({accounts}:DoughnutChartProps) => {
    const data={
        datasets: [
            {
                label: 'Banks',
                data: [1203,2340,5609],
                backgroundColor: ['#51e2f5','#8BC1F7','#5cbdb9']
            }
        ],
        labels: ['Bank 1 ','Bank 2','Bank 3']
    }
  return <Doughnut 
  data={data}
  
  options = {{
    cutout: '60%',
    plugins: {
        legend: {
            display: false
        }
    }
  }}/>
}

export default DoughnutChart