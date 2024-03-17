import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import "../../App.css"
import AbiturientsDidgital from "../DidgitalSystem/AbiturientsDidgital";
import RFMainDidgital from "../DidgitalSystem/RFMainDidgital";
import NotRFDidgital from "../DidgitalSystem/NotRFDidgital";
import AllsDidgital from "../DidgitalSystem/AllsDidgital";
import AppSubDidgital from "../DidgitalSystem/AppSubDidgital";
import ZayavPoFinansDidgital from "../DidgitalSystem/ZayavPoFinansDidgital";
import ZayvPodanoDidgital from "../DidgitalSystem/ZayvPodanoDidgital";
import StatPoBallDidgital from "../DidgitalSystem/StatPoBallDidgital";
import ZayavlenyiPoInstitutDidgital from "../DidgitalSystem/ZayavlenyiPoInstitutDidgital";
import {useNavigate} from "react-router-dom";
import {HOME_ROUTE} from "../../utils/consts";

const MenegmentMain = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const Inst = '2'
    const navigate = useNavigate();

  // Функция для переключения страницы
  const switchPage = () => {
    navigate(HOME_ROUTE);
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
        <Container fluid style={{ paddingTop: 10}}>
            <Row>
                <Col md={12} xs={11} style={{textAlign: "center"}}>
                    <h2>Статистика приёмной компании по институту <b style={{color: "rgb(30, 145, 221)"}}>архитектуры и дизайна</b> {currentDateTime.toLocaleDateString('ru-RU', options)}</h2>
                </Col>
            </Row>
            <Row>
                <Col md={3}>
                   <AbiturientsDidgital Inst={Inst}/>
               </Col>
                <Col md={2}>
                    <RFMainDidgital Inst={Inst}/>
                </Col>
                <Col md={2}>
                    <NotRFDidgital Inst={Inst}/>
                </Col>
                <Col md={3}>
                    <AllsDidgital Inst={Inst}/>
                </Col>
                <Col md={2}>
                    <AppSubDidgital Inst={Inst}/>
                </Col>
            </Row>

            <Row style={{marginTop: 10}}>
                <Col md={12} xs={12}>
                    <Row>
                        <Col md={5} xs={12}>
                            <div className="colSt">
                                <ZayavPoFinansDidgital Inst={Inst}/>
                            </div>
                        </Col>
                        <Col md={7} xs={12}>
                            <div className="colSt">
                                <ZayvPodanoDidgital Inst={Inst}/>
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
                                <StatPoBallDidgital Inst={Inst}/>
                            </div>
                        </Col>
                        <Col md={7} xs={12}>
                            <div className="colSt">
                                <ZayavlenyiPoInstitutDidgital Inst={Inst}/>
                            </div>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </Container>
    );
};

export default MenegmentMain;