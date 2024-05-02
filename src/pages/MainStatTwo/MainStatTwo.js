import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import '../../App.css'
import AbiturientsMain from "../MainStat/AbiturientsMain";
import RFMain from "../MainStat/RFMain";
import NotRFMain from "../MainStat/NotRFMain";
import AllsMain from "../MainStat/AllsMain";
import AppSubMain from "../MainStat/AppSubMain";
import StatPoDnyam from "./StatPoDnyam";
import ZayavPoLevel from "./ZayavPoLevel";
import OrigDaNet from "./OrigDaNet";
import {useNavigate} from "react-router-dom";
import {RFMAP_ROUTE} from "../../utils/consts";

const MonitorMain = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const navigate = useNavigate();

  // Функция для переключения страницы
  const switchPage = () => {
    navigate(RFMAP_ROUTE);
  };

  // Функция для обработки нажатия клавиши
  const handleKeyDown = (event) => {
    if (event.key === ' ') {
      switchPage();
    }
  };

  // Используем useEffect для установки интервала переключения страниц
  useEffect(() => {
    const interval = setInterval(switchPage, 60000); // 60000 миллисекунд = 1 минута

    // Очищаем интервал при размонтировании компонента
    return () => clearInterval(interval);
  }, []);

  // Используем useEffect для добавления обработчика событий клавиатуры
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    // Удаляем обработчик при размонтировании компонента
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit', // Удаляем секунды из отображения
  };
    return (
        <Container fluid style={{paddingTop: 10}}>
            <Row>
                <Col md={12} xs={11} style={{textAlign: "center"}}>
                    <h1>Статистика приёмной компании {currentDateTime.toLocaleDateString('ru-RU', options)}</h1>
                </Col>
            </Row>
            <Row>
                <Col md={3}>
                   <AbiturientsMain/>
               </Col>
                <Col md={2}>
                    <RFMain/>
                </Col>
                <Col md={2}>
                    <NotRFMain/>
                </Col>
                <Col md={3}>
                    <AllsMain/>
                </Col>
                <Col md={2}>
                    <AppSubMain/>
                </Col>
            </Row>
            <Row style={{marginTop: 10}}>
                <Col md={12} xs={12}>
                    <Row>
                        <Col md={4} xs={12}>
                            <div className="colSt">
                                <ZayavPoLevel/>
                            </div>
                        </Col>
                        <Col md={8} xs={12}>
                            <div className="colSt">
                                <OrigDaNet/>
                            </div>
                        </Col>
                    </Row>

                </Col>
            </Row>
            <Row style={{marginTop: 10}}>
                <Col md={12} xs={12}>
                    <Row>
                        <Col md={12} xs={12}>
                            <div className="colSt">
                                <StatPoDnyam/>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default MonitorMain;