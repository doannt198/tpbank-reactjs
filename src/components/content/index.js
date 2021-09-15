function ContentComponent() {
    return (
        <div className="content-wrap">
            <div className="acc-slider-container swiper-container swiper-container-initialized swiper-container-horizontal">
                <div className="swiper-wrapper" style={{ transitionDuration: '0ms', transform: 'translate3d(200px, 0px, 0px)' }}>
                    <div className="acc-slider-slide swiper-slide swiper-slide-active" style={{ marginRight: '25px' }}>
                        <div className="acc-slider-card">
                            <div className="card-name">TANO</div>
                            <div className="card-number">124234234</div>
                            <div className="card-balances"> 706,555 <span>VND</span>
                                <img alt="" className="eye" src="/assets/images/main/ic_un-eye.png" />
                            </div>
                            <div className="recharge-button">
                                <a href="/retail/vX/main/inquiry/account/overview?id=02105921501">
                                    <span className="text-link">Chi tiết</span>
                                    <img alt="" src="/assets/images/main/right.png" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
                    <span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabIndex={0} role="button" aria-label="Go to slide 1" />
                </div>
                <div>
                    <div className="acc-slider-btn-next swiper-button-next swiper-button-disabled" tabIndex={0} role="button" aria-label="Next slide" aria-disabled="true">
                    </div>
                    <div className="acc-slider-btn-prev swiper-button-prev swiper-button-disabled" tabIndex={0} role="button" aria-label="Previous slide" aria-disabled="true">
                    </div>
                    <div className="acc-slider-left-blur" />
                    <div className="acc-slider-right-blur" />
                </div>
                <span className="swiper-notification" aria-live="assertive" aria-atomic="true" />
            </div>
            <div className="row mb-3" style={{ marginTop: '32px' }}>
                <div className="col-lg">
                    <div className="function-search">
                        <input className="form-control w-100" maxLength={100} type="text" placeholder="Tìm kiếm dịch vụ" />
                        <div className="result-area" hidden>
                            <div className="instruction">
                                <div>
                                    <div>
                                        <img alt="" src="/assets/images/main/search-function.svg" style={{ height: '24px' }} />
                                    </div>
                                    <div className="mt-1"> Quý khách có thể tìm nhanh các tính năng </div>
                                    <div> Ví dụ: Chuyển tiền theo lịch, Tra cứu thẻ tín dụng... </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg d-none d-lg-flex align-items-end">
                    <div style={{ borderBottom: '2px solid #E6E9EE', width: '100%' }} />
                </div>
            </div>
            <div className="list-card-link">
                <div className="card-link-wrapper card-customize">
                    <a className="card-link shadow-btn" style={{ position: 'relative' }} href="/transfer-internal.html">
                        <div className="card-img">
                            <img alt="" src="/assets/images/main/transfer.png" />
                        </div>
                        <div className="card-name card-color">Chuyển khoản</div>
                    </a>
                </div>
                <div className="card-link-wrapper card-customize">
                    <a className="card-link shadow-btn" style={{ position: 'relative' }} href="bill.html">
                        <div className="card-img">
                            <img alt="" src="/assets/images/main/bill.png" />
                        </div>
                        <div className="card-name card-color">Hoá đơn</div>
                    </a>
                </div>
                <div className="card-link-wrapper card-customize">
                    <a className="card-link shadow-btn" style={{ position: 'relative' }} href="mobile.html">
                        <div className="card-img">
                            <img alt="" src="/assets/images/main/phone-topup.png" />
                        </div>
                        <div className="card-name card-color">Nạp tiền điện thoại</div>
                    </a>
                </div>
                <div className="card-link-wrapper card-customize">
                    <a className="card-link shadow-btn" style={{ position: 'relative' }} href="inquiry.html">
                        <div className="card-img">
                            <img alt="" src="/assets/images/main/inquiry.png" />
                        </div>
                        <div className="card-name card-color">Tra cứu</div>
                    </a>
                </div>
                <div className="card-link-wrapper card-customize">
                    <a className="card-link shadow-btn" style={{ position: 'relative' }} href="saving.html">
                        <div className="card-img">
                            <img alt="" src="/assets/images/main/saving.png" />
                        </div>
                        <div className="card-name card-color">Tiết kiệm
                        </div>
                    </a>
                </div>
                <div className="card-link-wrapper card-customize">
                    <a className="card-link shadow-btn" style={{ position: 'relative' }} href="card.html">
                        <div className="card-img">
                            <img alt="" src="/assets/images/main/card.png" />
                        </div>
                        <div className="card-name card-color">Quản lý thẻ</div>
                    </a>
                </div>
                <div className="card-link-wrapper card-customize">
                    <a className="card-link shadow-btn" style={{ position: 'relative' }} href="loan.html">
                        <div className="card-img">
                            <img alt="" src="/assets/images/main/loan.png" />
                        </div>
                        <div className="card-name card-color">Khoản vay</div>
                    </a>
                </div>
                <div className="card-link-wrapper card-customize">
                    <a className="card-link shadow-btn" style={{ position: 'relative' }} href="loyalty.html">
                        <div className="card-img">
                            <img alt="" src="/assets/images/main/loyalty.png" />
                        </div>
                        <div className="card-name card-color">Khách hàng thân thiết</div>
                    </a>
                </div>
                <div className="card-link-wrapper card-customize">
                    <a className="card-link shadow-btn" style={{ position: 'relative' }} href="wallet.html">
                        <div className="card-img">
                            <img alt="" src="/assets/images/main/ewallet.png" />
                        </div>
                        <div className="card-name card-color">Ví điện tử
                        </div>
                    </a>
                </div>
                <div className="card-link-wrapper card-customize">
                    <a className="card-link shadow-btn" style={{ position: 'relative' }} href="/">
                        <div className="card-img">
                            <img alt="" src="/assets/images/main/abroad.png" />
                        </div>
                        <div className="card-name card-color">Chuyển Tiền Du Học</div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ContentComponent;