import React, { useEffect, useRef, useState } from 'react';
import 'chart.js/auto';
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { getCount } from "../../http/monitorApi";
import { getProba } from "../../http/DIdgitalSystemApi";
import { Resizable } from 'react-resizable';
import Draggable from 'react-draggable';
import '../../App.css'
import {Col, Container, Row} from "react-bootstrap";

Chart.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
);

const ProbaMain = () => {
  const chartContainerRef = useRef(null);
  const chartRef = useRef(null);
  const [fetchedData, setFetchedData] = useState(null);
  let SELECT = `CAST(D AS date)`;
  let COUNT = `COUNT([KodFL])`;
  let GROUP = `CAST(D AS date)`;
  let WHERE = `[Osn] = 'Полное возмещение затрат'`;

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProba(SELECT, COUNT, GROUP, WHERE);
        console.log(data);
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
    if (fetchedData) {
      const { data1, data2 } = fetchedData;
      chartRef.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data1,
          datasets: [{
            label: 'Статистика подачи заявлений по дням',
            data: data2,
            borderWidth: 1,
          }],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
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
    }
  }, [fetchedData]);

  return (
       <Container fluid style={{paddingTop: 10}}>
         <Row>
           <Col md = {4}>

           </Col>
              <Resizable
                size={{ width: this.state.width, height: this.state.height }}
                onResizeStop={(e, direction, ref, d) => {
                  this.setState({
                    width: this.state.width + d.width,
                    height: this.state.height + d.height,
                  });
                }}
              >
                 <Col md = {4}>
                    <div className="colSt">
                      <div className="chartContainer" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
                        <div className="lineChartStyle" style={{ width: '600px', height: '400px' }}>
                          <canvas ref={chartContainerRef} style={{ width: "100%", height: "100%" }}></canvas>
                        </div>
                      </div>
                    </div>
                 </Col>
              </Resizable>
           <Col md = {4}>

           </Col>
         </Row>
       </Container>
  );
};

export default ProbaMain;