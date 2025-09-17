import { useState } from "react";
import { getImageUrl } from "../../utils/utils";

const Header = () => {
    const [isNavActive, setIsNavActive] = useState(false);
    const [isMenuActive, setIsMenuActive] = useState(false);

    const handleMenuClick = () => {
        setIsNavActive(!isNavActive);
        setIsMenuActive(!isMenuActive);
    };

    const logoImgUrl = getImageUrl("/img/white_logo.png");

    return (
        <header>
            <div className="container">
                <h1 className="logo">
                    <a href="#">
                        <img src={logoImgUrl} alt="미니 로고" />
                    </a>
                </h1>
                <button
                    className={isMenuActive ? "menu active" : "menu"}
                    onClick={handleMenuClick}
                >
                    <span className="sr_only">메뉴 버튼</span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <nav className={isNavActive ? "active" : ""}>
                    <h2 className="sr_only">메인 네비게이션</h2>
                    <ul>
                        <li>
                            <a href="#">브랜드</a>
                        </li>
                        <li>
                            <a href="#">모델</a>
                        </li>
                        <li>
                            <a href="#">디지털 익스피리언스</a>
                        </li>
                        <li>
                            <a href="#">뉴스</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
