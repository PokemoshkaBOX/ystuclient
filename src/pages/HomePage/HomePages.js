import React, {useContext, useState, useEffect, Suspense} from 'react';
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MONITOR_ROUTE } from "../../utils/consts";
import { Context } from "../../index";
import { login } from "../../http/userApi";
import { observer } from "mobx-react-lite";
import "./Style.css"
const HomePage = observer(() => {
    const { user } = useContext(Context);
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    useEffect(() => {
        // При загрузке компонента проверяем, был ли пользователь запомнен
        const rememberMeValue = localStorage.getItem('rememberMe') === 'true';
        setRememberMe(rememberMeValue);

        if (rememberMeValue) {
            const savedEmail = localStorage.getItem('email');
            setEmail(savedEmail || '');
        }
    }, []);

    const handleUsernameChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleRememberMeChange = (event) => {
        setRememberMe(event.target.checked);
    };

    const logOut = () => {
        localStorage.removeItem('token');
        user.setUser({});
        user.setIsAuth(false);
    };

    const click = async () => {
        try {
            await login(email, password);
            user.setUser(user);
            user.setIsAuth(true);

            // Сохраняем данные, если пользователь выбрал Remember Me
            if (rememberMe) {
                localStorage.setItem('email', email);
                localStorage.setItem('rememberMe', 'true');
            } else {
                localStorage.removeItem('email');
                localStorage.removeItem('rememberMe');
            }

            history(MONITOR_ROUTE);
        } catch (e) {
            if (e.response && e.response.data && e.response.data.message) {
                alert(e.response.data.message);
            } else {
                console.error("Произошла ошибка при выполнении запроса:", e);
            }
        }
    };

    return (
        <Container fluid
            className="d-flex"
                   style={{justifyContent: "center", backgroundColor: "rgb(45, 46, 50)", margin: 0, bot: 0, top:0, right: 0, left: 0, padding: 0}}
        >
                <Card style={{width: 600, backgroundColor: "rgba(0,0,0,0.3)", position: 'absolute', marginTop: window.innerHeight/2-140}} className="p-5">
                    {user.isAuth ? <h2 className="m-auto" style={{textAlign: "center", color: "white"}}>Вы авторизованы как {email}</h2>
                        : <h2 className="m-auto" style={{color: "white"}}>Авторизация</h2>}
                    {user.isAuth ?
                        <Button
                            variant="outline-dark"
                            onClick={() => logOut()}
                            style={{color: "white", borderColor: "white"}}
                        >
                            {'Выйти'}
                        </Button>
                        :
                        <Form className="d-flex flex-column">
                            <Form.Control
                                style={{color: "black"}}
                                className="mt-3"
                                placeholder="Введите email"
                                value={email}
                                onChange={handleUsernameChange}
                            />
                            <Form.Control
                                style={{color: "black"}}
                                className="mt-3"
                                placeholder="Введите пароль"
                                value={password}
                                onChange={handlePasswordChange}
                                type="password"
                            />
                            <Row className="d-flex align-self-auto mt-3 pl-3 pr-3">
                                <Col xs={3} md={10}>
                                    <br />
                                    <label style={{color: "white"}}>
                                        <input
                                            type="checkbox"
                                            checked={rememberMe}
                                            onChange={handleRememberMeChange}
                                        />
                                        Remember Me
                                    </label>
                                    <br />
                                </Col>
                                <Col xs={4} md={2}>
                                    <Button
                                        style={{color: "white", borderColor: "white"}}
                                        variant="outline-dark"
                                        onClick={click}
                                    >
                                        {'Войти'}
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    }
                </Card>
        </Container>
    );
});

export default HomePage;
