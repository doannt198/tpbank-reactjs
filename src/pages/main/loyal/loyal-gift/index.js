import './index.css';

function LoyalGiftPage() {
    return (
        <div className="content-wrap">
            <div className="view-gift-detail">
                <div className="detail-section-1 col-md-5">
                    <img alt="" src="/assets/images/icons/loyalty/gif.png" />
                    <div className="gift-info">
                        <div className="gift-common">
                            <span className="txt-title row">Điểm của quà</span>
                            <div className="point row">3,300
                                <span>điểm
                                </span>
                            </div>
                        </div>
                        <div className="gift-common">
                            <span className="txt-title row">Mã quà</span>
                            <span className="txt-content text-uppercase row">GRAB30</span>
                        </div>
                        <div className="gift-common remove-border">
                            <span className="txt-title row">Số quà còn lại</span>
                            <span className="txt-content row">996597</span>
                        </div>
                    </div>
                </div>
                <div className="detail-section-2 col-md-7">
                    <div className="gift-content">
                        <span className="gift-content-title row">Nội dung ưu đãi</span>
                        <span className="gift-content-detail row">Voucher Grab trị giá 30.000 đồng</span>
                    </div>
                    <button className="btn btn-primary btn-change-gift" type="button">Đổi quà</button>
                </div>
            </div>
        </div>
    );
}

export default LoyalGiftPage;