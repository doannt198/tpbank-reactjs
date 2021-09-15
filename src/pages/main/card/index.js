import { Link } from 'react-router-dom';
import './index.css';
function CardPage() {
    return (
        <div className="content-wrap">
            <div>
                <div style={{ opacity: 1 }}>
                    <div className="card-name">ATM SMART 24/7</div>
                    <div className="card-slider-container swiper-container swiper-container-initialized swiper-container-horizontal">
                        <div className="swiper-wrapper" style={{ transitionDuration: '0ms', transform: 'translate3d(242px, 0px, 0px)' }}>
                            <div className="card-slider-slide swiper-slide swiper-slide-active" style={{ backgroundImage: 'url("https://ebank.tpb.vn/gateway/api/contentservices/api/contentstream-id/contentRepository/7d15ba22-f341-4f2e-a577-8d1cb151fe6a?_=1593762288699")', marginRight: '40px' }}>
                                <div className="slider-card">
                                    <div className="card-no">9704 23** **** 0461</div>
                                    <div className="card-number">07/18</div>
                                    <div className="card-balances">TANO</div>
                                </div>
                            </div>
                            <div className="card-slider-slide swiper-slide swiper-slide-next" style={{ backgroundImage: 'url("assets/images/card/debit.svg")', marginRight: '40px' }}>
                            </div>
                        </div>
                        <div className="button-area">
                            <div className="btn-slider swiper-button-prev swiper-button-disabled" tabIndex={0} role="button" aria-label="Previous slide" aria-disabled="true" />
                            <div className="card-slider-left-blur" />
                            <div className="btn-slider swiper-button-next" tabIndex={0} role="button" aria-label="Next slide" aria-disabled="false">
                            </div>
                            <div className="card-slider-right-blur" />
                        </div>
                        <div className="swiper-pagination button-pag swiper-pagination-clickable swiper-pagination-bullets">
                            <span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabIndex={0} role="button" aria-label="Go to slide 1" />
                            <span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 2" />
                        </div>
                        <span className="swiper-notification" aria-live="assertive" aria-atomic="true" />
                    </div>
                    <div className="card-detail">
                        <div className="card-atm btn-area">
                            <div className="btn-action">
                                <div className="btn-icon shadow-btn lock" />
                                <p>Khóa Thẻ</p>
                            </div>
                            <div className="btn-action">
                                <div className="btn-icon shadow-btn  open-card" />
                                <p>Phát hành lại thẻ</p>
                            </div>
                            <div className="btn-action">
                                <div className="btn-icon shadow-btn reset-card-pin" tabIndex={0}>
                                </div>
                                <p>Cấp lại mã PIN thẻ</p>
                            </div>
                            <Link className="btn-action" to="card/change-card-pin">
                                <div className="btn-icon shadow-btn change-card-pin" tabIndex={0}>
                                </div>
                                <p>Thay đổi mã PIN thẻ</p>
                            </Link>
                        </div>
                        <div className="info-ares">
                            <div className="card-debit-atm">
                                <div className="info-ares-item">
                                    <span>Số dư tài
                                        khoản liên kết</span>
                                    <span>706,555 VND</span>
                                </div>
                                <div className="info-ares-item">
                                    <span>Số tài
                                        khoản liên kết</span>
                                    <span>124234234</span>
                                </div>
                                <div className="info-ares-item view-status">
                                    <span>Tình trạng thẻ</span>
                                    <span>Hoạt động</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardPage;