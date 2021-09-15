import {Fragment} from 'react';
function QuickLinkComponent() {
    return (
        <Fragment>
            <div className="quick-links">
                <div className="title"> Tiện ích nhanh </div>
                <div className="body">
                    <a routerlink="/main/transfer/internal" href="/retail/vX/main/transfer/internal">Chuyển tiền trong ngân hàng
                        <i className="fas fa-chevron-right" />
                    </a>
                    <a routerlink="/main/transfer/interbank" href="/retail/vX/main/transfer/interbank">Chuyển tiền liên ngân hàng
                        <i className="fas fa-chevron-right" />
                    </a>
                    <a routerlink="/main/bill" href="/retail/vX/main/bill">Thanh toán hoá đơn
                        <i className="fas fa-chevron-right" />
                    </a>
                    <a routerlink="/main/inquiry/credit-card" href="/retail/vX/main/inquiry/credit-card">Tra cứu thẻ tín dụng
                        <i className="fas fa-chevron-right" />
                    </a>
                    <a routerlink="/main/mobile" href="/retail/vX/main/mobile">Nạp tiền điện thoại
                        <i className="fas fa-chevron-right" />
                    </a>
                </div>
            </div>
            <div className="mt-4">
                <div className="banner-swiper-container swiper-container swiper-container-initialized swiper-container-horizontal">
                    <div className="swiper-wrapper" style={{ transitionDuration: '0ms', transform: 'translate3d(-300px, 0px, 0px)' }}>
                        <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active swiper-slide-prev swiper-slide-duplicate-next" data-swiper-slide-index={1} style={{ width: '270px', marginRight: '30px' }}>
                            <a target="_blank" href="!#"  rel="noreferrer">
                                <img  alt="" className="w-100" style={{ borderRadius: '5px', height: '100%' }} src="https://ebank.tpb.vn/gateway/api/contentservices/api/contentstream-id/contentRepository/86a4d975-712f-49f0-9ae0-bded776fc4d7" /></a>
                        </div>
                        <div className="swiper-slide swiper-slide-active" data-swiper-slide-index={0} style={{ width: '270px', marginRight: '30px' }}>
                            <a target="_blank" href="!#" rel="noreferrer">
                                <img  alt="" className="w-100" style={{ borderRadius: '5px', height: '100%' }} src="https://ebank.tpb.vn/gateway/api/contentservices/api/contentstream-id/contentRepository/acdd6d66-7b82-4265-95ee-c6d4021e9c28" /></a>
                        </div>
                        <div className="swiper-slide swiper-slide-next swiper-slide-duplicate-prev" data-swiper-slide-index={1} style={{ width: '270px', marginRight: '30px' }}>
                            <a target="_blank" href="!#" rel="noreferrer">
                                <img  alt="" className="w-100" style={{ borderRadius: '5px', height: '100%' }} src="https://ebank.tpb.vn/gateway/api/contentservices/api/contentstream-id/contentRepository/86a4d975-712f-49f0-9ae0-bded776fc4d7" /></a>
                        </div>
                        <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={0} style={{ width: '270px', marginRight: '30px' }}>
                            <a target="_blank" href="!#" rel="noreferrer">
                                <img alt="" className="w-100" style={{ borderRadius: '5px', height: '100%' }} src="https://ebank.tpb.vn/gateway/api/contentservices/api/contentstream-id/contentRepository/acdd6d66-7b82-4265-95ee-c6d4021e9c28" /></a>
                        </div>
                    </div>
                    <div className="swiper-pagination button-pag swiper-pagination-clickable swiper-pagination-bullets">
                        <span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabIndex={0} role="button" aria-label="Go to slide 1" />
                        <span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 2" />
                    </div>
                    <div className="button-area">
                        <div className="btn-slider swiper-button-next" tabIndex={0} role="button" aria-label="Next slide">
                            <div className="circle right" />
                        </div>
                        <div className="btn-slider swiper-button-prev" tabIndex={0} role="button" aria-label="Previous slide">
                            <div className="circle left" />
                        </div>
                    </div>
                    <span className="swiper-notification" aria-live="assertive" aria-atomic="true" />
                </div>
            </div>
        </Fragment>
    );
}

export default QuickLinkComponent;