import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import {Button, Image, Nav} from "react-bootstrap";
import Logo from "../img/2418779.svg"

function Header() {
    return (
        <div>
            <Nav className={"navbar navbar-expand-lg navbar-dark bg-dark"}>
                <div className={"container cont"}>
                    <Image className={"nav-item img"} src={Logo} width="150" height="50" alt=""/>
                    <Button className={"navbar-toggler bg-dark"} type={"button"} data-bs-toggle={"collapse"}
                        data-bs-target={"#navContent"} aria-controls={"#navContent"} aria-expanded={"false"} aria-label={"Переключатель навигации"}>
                        <span className={"navbar-toggler-icon"}></span>
                    </Button>
                    <div className={"collapse navbar-collapse navigation"} id={"navContent"}>
                        <ul className={"navbar-nav mb-0 mb-lg-0"} id={"bar"}>
                            <li className={"nav-item"}>
                                <a className={"nav-link active ms-lg-3 navigation"} aria-current={"page"} href={"/russian"}>Russian</a>
                            </li>
                            <li className={"nav-item"}>
                                <a className={"nav-link active ms-lg-3"} aria-current={"page"} href={"/intershum"}>Intershum</a>
                            </li>
                            <li className={"nav-item"}>
                                <a className={"nav-link active ms-lg-3"} aria-current={"page"} href={"/english"}>English</a>
                            </li>
                            <li className={"nav-item dropdown"}>
                                <a className={"nav-link dropdown-toggle active text-light ms-lg-3"}
                                   id={"navbarDropdown"} data-bs-toggle={"dropdown"} href={"#"}
                                   role={"button"} aria-expanded={"false"} aria-current={"page"}>Community</a>
                                <ul className={"dropdown-menu"} aria-labelledby={"navbarDropdown"}>
                                    <li><a href={"/melharucos"} className={"dropdown-item"}>Melharucos</a></li>
                                </ul>
                            </li>
                            <li className={"nav-item"}>
                                <a className={"nav-link active text-light ms-lg-3"} aria-current={"page"} href={"/support"}>Support</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Nav>
        </div>
    )
}

export default Header;
