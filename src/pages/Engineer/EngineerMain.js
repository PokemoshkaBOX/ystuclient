import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import "../../App.css"
import AbiturientsEngineer from "../DidgitalSystem/AbiturientsDidgital";
import RFMainEngineer from "../DidgitalSystem/RFMainDidgital";
import NotRFEngineer from "../DidgitalSystem/NotRFDidgital";
import AppSubEngineer from "../DidgitalSystem/AppSubDidgital";
import AllsEngineer from "../DidgitalSystem/AllsDidgital";
import ZayavPoFinansEngineer from "../DidgitalSystem/ZayavPoFinansDidgital";
import ZayvPodanoEngineer from "../DidgitalSystem/ZayvPodanoDidgital";
import StatPoBallEngineer from "../DidgitalSystem/StatPoBallDidgital";
import ZayavlenyiPoInstitutEngineer from "../DidgitalSystem/ZayavlenyiPoInstitutDidgital";
import {useNavigate} from "react-router-dom";
import {MENEGMENT_ROUTE} from "../../utils/consts";

const EngineerMain = () => {
    let Inst = '6'
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const navigate = useNavigate();

  // Функция для переключения страницы
  const switchPage = () => {
    navigate(MENEGMENT_ROUTE);
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
                    <h2>Статистика приёмной компании по институту<b style={{color: "rgb(30, 145, 221)"}}> инженерии и машиностроения</b> {currentDateTime.toLocaleDateString('ru-RU', options)}</h2>
                </Col>
            </Row>
            <Row>
                <Col md={3}>
                   <AbiturientsEngineer Inst={Inst}/>
               </Col>
                <Col md={2}>
                    <RFMainEngineer Inst={Inst}/>
                </Col>
                <Col md={2}>
                    <NotRFEngineer Inst={Inst}/>
                </Col>
                <Col md={3}>
                    <AllsEngineer Inst={Inst}/>
                </Col>
                <Col md={2}>
                    <AppSubEngineer Inst={Inst}/>
                </Col>
            </Row>

            <Row style={{marginTop: 10}}>
                <Col md={12} xs={12}>
                    <Row>
                        <Col md={5} xs={12}>
                            <div className="colSt">
                                <ZayavPoFinansEngineer Inst={Inst}/>
                            </div>
                        </Col>
                        <Col md={7} xs={12}>
                            <div className="colSt">
                                <ZayvPodanoEngineer Inst={Inst}/>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row style={{marginTop: 10}}>
                <Col md={12} xs={12}>
                    <Row>
                        <Col md={5} xs={12}>
                            <div className="colSt">
                                <StatPoBallEngineer Inst={Inst}/>
                            </div>
                        </Col>
                        <Col md={7} xs={12}>
                            <div className="colSt">
                                <ZayavlenyiPoInstitutEngineer Inst={Inst}/>
                            </div>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </Container>
    );
};

export default EngineerMain;