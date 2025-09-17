import { getImageUrl } from "../../utils/utils";

const Footer = () => {
    const logoImgUrl = getImageUrl("/img/white_logo.png");
    const youtubeImgUrl = getImageUrl("/img/footer_sns_youtube.png");
    const instagramImgUrl = getImageUrl("/img/footer_sns_instagram.png");
    const facebookImgUrl = getImageUrl("/img/footer_sns_facebook.png");

    return (
        <footer>
            <div className="container">
                <div className="logo_sns_box">
                    <a href="#">
                        <img src={logoImgUrl} alt="미니 로고" />
                    </a>
                    <ul className="sns">
                        <li>
                            <a href="#" target="_blank" title="새창">
                                <img src={youtubeImgUrl} alt="유투브" />
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" title="새창">
                                <img src={instagramImgUrl} alt="인스타그램" />
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" title="새창">
                                <img src={facebookImgUrl} alt="페이스북" />
                            </a>
                        </li>
                    </ul>
                </div>
                <address>
                    <ul>
                        <li>
                            <p>상호명</p>
                            <p>BMW코리아㈜</p>
                        </li>
                        <li>
                            <p>대표자명</p>
                            <p>한상윤</p>
                        </li>
                        <li>
                            <p>사업자 등록번호</p>
                            <p>211-86-08983</p>
                        </li>
                        <li>
                            <p>주소</p>
                            <p>
                                서울특별시 중구 퇴계로 100 스테이트타워 남산
                                14층 (우) 04631
                            </p>
                        </li>
                    </ul>
                </address>
                <p className="copyright">
                    COPYRIGHT © BMW KOREA 2025. ALL RIGHTS RESERVED.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
