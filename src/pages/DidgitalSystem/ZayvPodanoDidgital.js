import React, {useEffect, useRef, useState} from 'react';
import 'chart.js/auto';
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend} from 'chart.js';
import {getObl} from "../../http/DIdgitalSystemApi";
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ChartDataLabels
);

const ZayvPodanoDidgital = ({Inst}) => {
  const chartContainerRef = useRef(null);
  const chartRef = useRef(null);
  const [fetchedData, setFetchedData] = useState(null);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getObl(Inst);
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
      const {dates, counts, counts1} = fetchedData;
      chartRef.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: dates,
          datasets: [
            {
              label: 'Средний балл по направлениям',
              data: counts,
              borderWidth: 1,
            },
              {
              label: 'Средний балл по направлениям согласия',
              data: counts1,
              borderWidth: 1,
            },
          ],
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
      <div className="lineChartStyle" style={{ width: '100%', height: '400px' }}>
      <canvas ref={chartContainerRef} style={{width: "100%", height: "100%"}}></canvas>
      </div>
    </div>
  );
};

export default ZayvPodanoDidgital;
