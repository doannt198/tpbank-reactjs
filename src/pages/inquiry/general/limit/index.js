import './index.css';

function LimitPage() {
    return (
        <div className="content-wrap">
            <div className="limit">
                <div className="limit-left">
                    <div className="limit-left-transfer"><span className="limit-title">HẠN MỨC CHUYỂN TIỀN</span>
                        <div className="limit-left-transfer-info">
                            <div className="limit-left-transfer-info-item" id="limit_information_fund_internal">
                                <div className="border-customize" id="limit_information_fund_internal_child"><span className="label">Trong TPBank</span>
                                    <div className="limit-info">
                                        <span>50,000,000 VND/lần</span>
                                        <span>100,000,000 VND/ngày</span>
                                    </div>
                                </div>
                            </div>
                            <div className="limit-left-transfer-info-item" id="limit_information_fund_interbank247">
                                <div className="border-customize" id="limit_information_fund_interbank247_child">
                                    <span className="label">Liên ngân hàng (nhanh 24/7)</span>
                                    <div className="limit-info">
                                        <span>50,000,000 VND/lần</span>
                                        <span>100,000,000 VND/ngày</span>
                                    </div>
                                </div>
                            </div>
                            <div className="limit-left-transfer-info-item" id="limit_information_fund_interbank_normal">
                                <div className="border-customize" id="limit_information_fund_interbank_normal_child"><span className="label">Liên ngân hàng (thông thường)</span>
                                    <div className="limit-info"><span>50,000,000
                                        VND/lần</span><span>100,000,000 VND/ngày</span></div>
                                </div>
                            </div>
                            <div className="limit-left-transfer-info-item" id="limit_information_billing">
                                <div className="border-customize" id="limit_information_billing_child">
                                    <span className="label">Thanh toán hóa đơn</span>
                                    <div className="limit-info">
                                        <span>50,000,000 VND/lần</span>
                                        <span>100,000,000 VND/ngày</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="limit-left-topup">
                        <span className="limit-title">HẠN MỨC NẠP TIỀN</span>
                        <div className="limit-left-topup-info mb-0">
                            <div className="limit-left-topup-info-item" id="limit_information_funtopup_account">
                                <div className="border-customize" id="limit_information_funtopup_account_child">
                                    <span className="label">Vào tài khoản</span>
                                    <div className="topup-info">
                                        <span>10,000,000 VND/lần</span>
                                        <span>30,000,000 VND/ngày</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="limit-right">
                    <div className="limit-right-napas">
                        <span className="limit-title">HẠN MỨC GIAO DỊCH THẺ</span>
                        <div className="limit-right-napas-list">
                            <div className="card-item">
                                <div className="card-item-container">
                                    <img alt="" src="https://ebank.tpb.vn/retail/vX/assets/icons/inquiry/ic_in_ge_atm.svg" />
                                    <span>Thẻ ATM (1)</span>
                                    <i className="fas fa-chevron-up" />
                                </div>
                                <div className="card-item-detail show-info">
                                    <div className="card-item-detail-info">
                                        <span className="card-no">SỐ THẺ: 9704 23** **** 0461</span>
                                        <div className="card-item-detail-info-limit">
                                            <div className="card-item-detail-info-limit-row">
                                                <span className="label">Hạn mức rút tiền</span>
                                                <div className="limit-amount">
                                                    <span>5,000,000 VND/lần</span>
                                                    <span>20,000,000 VND/ngày</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LimitPage;