const Header = () => {
    return (
        <header>
            <div className="container">
                <h1 className="logo">
                    <a href="#">
                        <img src="" alt="" />
                    </a>
                </h1>
                <button className="menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <nav>
                    <h2>메인 네비게이션</h2>
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
