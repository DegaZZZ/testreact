import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Image, Nav} from "react-bootstrap";

function Header() {
    return (
        <div>
            <Nav className={"navbar navbar-expand-lg navbar-dark bg-dark"}>
                <Container>
                    <Image className={"nav-item"} src={"https://upload.wikimedia.org/wikipedia/commons/3/33/F1.svg"} width="150" height="50" alt=""/>
                    <Button className={"navbar-toggler bg-dark"} type={"button"} data-bs-toggle={"collapse"}
                        data-bs-target={"#navContent"} aria-controls={"#navContent"} aria-expanded={"false"} aria-label={"Переключатель навигации"}>
                        <span className={"navbar-toggler-icon"}></span>
                    </Button>
                    <div className={"collapse navbar-collapse"} id={"navContent"}>
                        <ul className={"navbar-nav mb-0 mb-lg-0"}>
                            <li className={"nav-item"}>
                                <a className={"nav-link active text-light"} aria-current={"page"} href={"/russian"}>Русский</a>
                            </li>
                            <li className={"nav-item"}>
                                <a className={"nav-link active text-light"} aria-current={"page"} href={"/intershum"}>Интершум</a>
                            </li>
                            <li className={"nav-item"}>
                                <a className={"nav-link active text-light"} aria-current={"page"} href={"/english"}>English</a>
                            </li>
                            <li className={"nav-item"}>
                                <a className={"nav-link active text-light"} aria-current={"page"} href={"/community"}>Сообщество</a>
                            </li>
                            <li className={"nav-item"}>
                                <a className={"nav-link active text-light"} aria-current={"page"} href={"/support"}>Поддержать</a>
                            </li>
                        </ul>
                    </div>
                </Container>
            </Nav>
        </div>
    )
}

export default Header;
