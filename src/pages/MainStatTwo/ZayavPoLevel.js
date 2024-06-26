import React, {useEffect, useRef, useState} from 'react';
import 'chart.js/auto';
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend} from 'chart.js';
import {getTable} from "../../http/monitorApi";

Chart.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
);

const ZayavPoLevel = () => {
  const chartContainerRef = useRef(null);
  const chartRef = useRef(null);
  const [fetchedData, setFetchedData] = useState(null);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTable();
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
      console.log(dates, counts, counts1)
      const labels = dates.map(date => {
        switch (date) {
          case '000000001':
            return 'Бакалавр';
          case '000000002':
            return 'Специалист';
          case '000000003':
            return 'Магистр';
          case '000000008':
            return 'Аспирантура';
        }
      });
      console.log(labels)
      chartRef.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Заявлений по уровням подготовки',
            data: counts,
            borderWidth: 1,
          },
          {
            label: 'Согласий по уровням подготовки',
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

export default ZayavPoLevel;
