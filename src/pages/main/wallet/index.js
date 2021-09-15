import { Link } from 'react-router-dom';
import './index.css';
function WalletPage() {
    return (
        <div className="content-wrap">
            <div className="tab-main">
                <div className="nav-tab">
                    <div className="nav-tab-button active" routerlinkactive="active" tabIndex={0}>Danh sách ví </div>
                    <div className="nav-tab-button" routerlinkactive="active" tabIndex={0}>Chuyển tiền tới ví bất kỳ </div>
                </div>
            </div>
            <div className="ewallet-home-content">
                <div className="my-wallet-list">
                    <Link className="wallet-item shadow-btn" tabIndex={0} to="/wallet/add-link">
                        <img alt="" src="https://ebank.tpb.vn/retail/vX/assets/icons/ic_add-circular-button.svg" />
                        <div className="wallet-desc">
                            <div>Thêm liên kết ví</div>
                        </div>
                    </Link>
                    <div className="wallet-item shadow-btn">
                        <img alt="" src="https://ebank.tpb.vn/gateway/api/contentservices/api/contentstream-id/contentRepository/1e61f265-d40f-437a-87e2-08eca11f0ebe?_=1571989230425" />
                        <div className="wallet-desc">
                            <div className="provider">Momo</div>
                            <div className="fullname">TANO</div>
                            <div className="wallet-id">096 79234234</div>
                        </div>
                    </div>
                    <div className="wallet-item shadow-btn">
                        <img alt="" src="https://ebank.tpb.vn/gateway/api/contentservices/api/contentstream-id/contentRepository/4764a2da-e492-431f-9735-a61ab859c224?_=1571989188844" />
                        <div className="wallet-desc">
                            <div className="provider">AirPay</div>
                            <div className="fullname">TANO</div>
                            <div className="wallet-id">096 234233124</div>
                        </div>
                    </div>
                    <div className="wallet-item shadow-btn">
                        <img alt="" src="https://ebank.tpb.vn/gateway/api/contentservices/api/contentstream-id/contentRepository/3e0f25cd-b027-4748-ada5-b1faa4223b0f?_=1591348045058" />
                        <div className="wallet-desc">
                            <div className="provider">ZaloPay</div>
                            <div className="fullname">TANO</div>
                            <div className="wallet-id">096 534534</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WalletPage;