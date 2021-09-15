import { Link } from 'react-router-dom';
import './index.css';

function InquiryMainPage() {
    return (
        <div className="content-wrap">
            <div className="list-card-link">
                <div className="card-link-wrapper card-customize">
                    <Link className="card-link shadow-btn" style={{ position: 'relative' }} to="inquiry-account">
                        <div className="card-img">
                            <img src="https://ebank.tpb.vn/retail/vX/assets/images/card-links/bank.svg" alt="bank"/>
                        </div>
                        <div className="card-name card-color">Tài khoản</div>
                    </Link>
                </div>
                <div className="card-link-wrapper card-customize">
                    <Link className="card-link shadow-btn" style={{ position: 'relative' }} to="inquiry-saving">
                        <div className="card-img">
                            <img src="https://ebank.tpb.vn/retail/vX/assets/images/card-links/saving.svg" alt="saving"/>
                        </div>
                        <div className="card-name card-color">Tiết kiệm</div>
                    </Link>
                </div>
                <div className="card-link-wrapper card-customize">
                    <Link className="card-link shadow-btn" style={{ position: 'relative' }} to="inquiry-loan">
                        <div className="card-img">
                            <img src="https://ebank.tpb.vn/retail/vX/assets/images/card-links/loan.svg" alt="loan"/>
                        </div>
                        <div className="card-name card-color">Khoản vay</div>
                    </Link>
                </div>
                <div className="card-link-wrapper card-customize">
                    <Link className="card-link shadow-btn" style={{ position: 'relative' }} to="inquiry-credit-card">
                        <div className="card-img">
                            <img src="https://ebank.tpb.vn/retail/vX/assets/images/card-links/card.svg" alt="card"/>
                        </div>
                        <div className="card-name card-color">Thẻ tín dụng</div>
                    </Link>
                </div>
                <div className="card-link-wrapper card-customize">
                    <Link className="card-link shadow-btn" style={{ position: 'relative' }} to="inquiry-transfer">
                        <div className="card-img">
                            <img src="https://ebank.tpb.vn/retail/vX/assets/images/card-links/list.svg" alt="list"/>
                        </div>
                        <div className="card-name card-color">Lệnh chuyển tiền</div>
                    </Link>
                </div>
                <div className="card-link-wrapper card-customize">
                    <Link className="card-link shadow-btn" style={{ position: 'relative' }} to="inquiry-general">
                        <div className="card-img">
                            <img src="https://ebank.tpb.vn/retail/vX/assets/images/card-links/ic_in_ge_home.svg" alt="ic_in_ge_home"/>
                        </div>
                        <div className="card-name card-color">Thông Tin Tổng Hợp</div>
                    </Link>
                </div>
                <div className="card-link-wrapper card-customize">
                    <Link className="card-link shadow-btn" style={{ position: 'relative' }} to="inquiry-vat">
                        <div className="card-img">
                            <img src="https://ebank.tpb.vn/retail/vX/assets/images/card-links/ic_inquiry_vat.svg" alt="ic_inquiry_vat"/>
                        </div>
                        <div className="card-name card-color">Hóa Đơn VAT</div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default InquiryMainPage;