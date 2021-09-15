import { Link } from 'react-router-dom';
import './index.css';
function InquiryVatPage() {
    return (
        <div className="content-wrap">
            <div className="vat-home">
                <div className="title">Quý khách vui lòng chọn tài khoản mong muốn</div>
                <div className="card-acc-info">
                    <div className="acc-name">TANO</div>
                    <div className="acc-number">124234234</div>
                    <div className="acc-item">
                        <span className="amount">706,555 VND</span>
                        <Link className="action" tabIndex={0} to="/inquiry/inquiry-vat/vat-detail">Chọn</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InquiryVatPage;