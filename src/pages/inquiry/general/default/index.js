import { Link } from 'react-router-dom';
import './index.css';
function GeneralDefaultPage() {
    return (
        <div className="content-wrap">
            <div className="search-input">
                <input className="form-control" type="text" placeholder="Tìm kiếm thông tin" />
            </div>
            <hr />
            <div className="content-card-link">
                <div className="content-card-link-item" tabIndex={0}>
                    <Link className="content-card-link-item-container shadow-btn" to="inquiry-general/person-info">
                        <img alt="" src="https://ebank.tpb.vn/retail/vX/assets/icons/inquiry/ic_personal_info.svg" />
                        <span>Thông tin cá nhân</span>
                        <i className="fas fa-chevron-right" />
                    </Link>
                </div>
                <div className="content-card-link-item" tabIndex={0}>
                    <Link className="content-card-link-item-container shadow-btn" to="inquiry-general/periodic">
                        <img alt="" src="https://ebank.tpb.vn/retail/vX/assets/icons/inquiry/ic_periodic.svg" />
                        <span>Danh sách hóa đơn/lệnh chuyển tiền</span>
                        <i className="fas fa-chevron-right" />
                    </Link>
                </div>
                <div className="content-card-link-item" tabIndex={0}>
                    <Link className="content-card-link-item-container shadow-btn" to="inquiry-general/financial-overview">
                        <img alt="" src="https://ebank.tpb.vn/retail/vX/assets/icons/inquiry/ic_financial_overview.svg" />\
                        <span>Tổng quan tài chính</span>
                        <i className="fas fa-chevron-right" />
                    </Link>
                </div>
                <div className="content-card-link-item" tabIndex={0}>
                    <Link className="content-card-link-item-container shadow-btn" to="inquiry-general/ewallet">
                        <img alt="" src="https://ebank.tpb.vn/retail/vX/assets/icons/inquiry/ic_wallet.svg" />
                        <span>Ví điện tử liên kết</span><i className="fas fa-chevron-right" />
                    </Link>
                </div>
                <div className="content-card-link-item" tabIndex={0}>
                    <Link className="content-card-link-item-container shadow-btn" to="inquiry-general/limit">
                        <img alt="" src="https://ebank.tpb.vn/retail/vX/assets/icons/inquiry/ic_limit.svg" />
                        <span>Thông tin hạn mức</span>
                        <i className="fas fa-chevron-right" />
                    </Link>
                </div>
                <div className="content-card-link-item" tabIndex={0}>
                    <Link className="content-card-link-item-container shadow-btn" to="inquiry-general/app">
                        <img alt="" src="https://ebank.tpb.vn/retail/vX/assets/icons/inquiry/ic_app_used.svg" />
                        <span>Ứng dụng của TPBank</span>
                        <i className="fas fa-chevron-right" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default GeneralDefaultPage;