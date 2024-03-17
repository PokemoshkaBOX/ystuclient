import React, {useEffect, useRef, useState} from 'react';
import 'chart.js/auto';
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend} from 'chart.js';
import {getChan} from "../../http/DIdgitalSystemApi";

Chart.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
);
const StatPoDnyamDidgital = ({Inst}) => {
    const chartContainerRef = useRef(null);
  const chartRef = useRef(null);
  const [fetchedData, setFetchedData] = useState(null);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getChan(Inst);
        console.log(data)
        setFetchedData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const canvas = chartContainerRef.current;
    const ctx = canvas.getContext('2d');

    if (chartRef.current) {
      chartRef.current.destroy();
    }
    if(fetchedData) {
      const {dates, counts} = fetchedData;
      const labels = dates.map(date => {
        switch (date) {
          case '000000001':
            return 'Лично';
          case '000000002':
            return 'Почта';
          case '000000003':
            return 'Веб';
          case '000000004':
            return 'Суперсервис(Госуслуги)';
        }
      });
      console.log(dates)
      chartRef.current = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: labels,
          datasets: [{
            label: 'Заявлений по форме подачи',
            data: counts,
            backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'],
            borderWidth: 1,
          }],
        },
        options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        indexAxis: 'y',
        plugins: {
          zoom: {
            pan: {
              enabled: true,
              mode: 'xy',
            },
            zoom: {
              wheel: {
                enabled: true,
              },
              pinch: {
                enabled: true,
              },
              mode: 'xy',
            },
          },
        },
      },
      });
      const resizeHandler = () => {
        chartRef.current.resize();
      };

      window.addEventListener('resize', resizeHandler);

      return () => {
        window.removeEventListener('resize', resizeHandler);
      };
    }
  }, [fetchedData]);

  return (
    <div className="chartContainer" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
      <div className="lineChartStyle" style={{width: '100%', height: '400px'}}>
      <canvas ref={chartContainerRef} style={{marginLeft: 80}}></canvas>
      </div>
    </div>
  );
};

export default StatPoDnyamDidgital;