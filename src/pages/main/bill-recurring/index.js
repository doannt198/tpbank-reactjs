import './index.css';
import { Link } from "react-router-dom";
function BillRecurringPage() {
    return (
        <div className="content-wrap">
            <div className="tab-main">
            <div className="nav-tab">
                <Link to="bill" className="nav-tab-button" tabIndex={0}>Thanh toán hoá đơn </Link>
                <Link to="bill-recurring" className="nav-tab-button active" style={{ display: 'flex' }} tabIndex={0}>Lệnh định kỳ</Link>
            </div>
            </div>
            <div className="recurring-content">
                <div className="intro-content">
                    <img alt="" src="/assets/images/icons/bill/bill-recurring/thanh-toan-dinh-ky.png" />
                    <span className="slogan">Đặt lệnh hôm nay, Hàng tháng rảnh tay!</span>
                    <Link to="/bill/add-bill-recurring" className="recurring-item-add shadow-btn" tabIndex={0}>
                        <div className="icon-add-recurring">
                            <img alt="" className="icon-oder" src="/assets/images/icons/bill/bill-recurring/icons-add-orange.svg" />
                        </div>
                        <span className="text-add-recurring">Đặt Lệnh Định Kỳ</span>
                    </Link>
                </div>
                <div className="content-description" style={{ fontSize: '12px', margin: '16px 0', color: '#AD8AD8', textAlign: 'center' }}>
                    <div>Các lệnh thanh toán định kỳ hiện có</div>
                    <img alt="" className="icon-oder" src="/assets/images/icons/bill/bill-recurring/icons-order.svg" style={{ width: '29px', height: '34px', margin: '40px auto 6px' }} />
                    <p className="text">Quý khách hiện chưa có lệnh thanh toán định kỳ</p>
                </div>
            </div>
        </div>
    );
}

export default BillRecurringPage;