import './index.css';
import { Link } from "react-router-dom";
  
function BillPage() {
    return (
        <div className="content-wrap">
            <div className="search-area">
                <div className="app-navigation-tab">
                    <div className="tab-main">
                        <div className="nav-tab">
                            <Link to="/bill" className="nav-tab-button active" tabIndex={0}>Thanh toán hoá đơn </Link>
                            <Link to="/bill/bill-recurring" className="nav-tab-button" style={{ display: 'flex' }} tabIndex={0}>Lệnh định kỳ</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4" />
            <div className="container-bill">
                <div style={{ width: '50%', marginBottom: '20px' }}>
                    <div className="search-input">
                        <input className="form-control" type="text" placeholder="Tìm kiếm dịch vụ" />
                    </div>
                </div>
                <div className="list-card-link">
                    <div className="card-link-wrapper card-customize shadow-btn">
                        <Link className="card-link" style={{ position: 'relative' }} to="/bill/bill-electric">
                            <div className="card-img">
                                <img alt="" src="/assets/images/icons/bill/electricity.png" />
                            </div>
                            <div className="card-name card-color">Điện</div>
                        </Link>
                    </div>
                    <div className="card-link-wrapper card-customize shadow-btn">
                        <a href="!#" className="card-link" style={{ position: 'relative' }}>
                            <div className="card-img">
                                <img alt="" src="/assets/images/icons/bill/water.png" />
                            </div>
                            <div className="card-name card-color">Nước</div>
                        </a>
                    </div>
                    <div className="card-link-wrapper card-customize shadow-btn">
                        <a href="!#" className="card-link" style={{ position: 'relative' }}>
                            <div className="card-img">
                                <img alt="" src="/assets/images/icons/bill/landline-phone.png" />
                            </div>
                            <div className="card-name card-color">Điện thoại cố định</div>
                        </a>
                    </div>
                    <div className="card-link-wrapper card-customize shadow-btn">
                        <a href="!#" className="card-link" style={{ position: 'relative' }}>
                            <div className="card-img">
                                <img alt="" src="/assets/images/icons/bill/phone-bill.png" />
                            </div>
                            <div className="card-name card-color">Điện thoại di động trả sau</div>
                        </a>
                    </div>
                    <div className="card-link-wrapper card-customize shadow-btn">
                        <a href="!#" className="card-link" style={{ position: 'relative' }}>
                            <div className="card-img">
                                <img alt="" src="/assets/images/icons/bill/adsl-internet.png" />
                            </div>
                            <div className="card-name card-color">Cước Internet ADSL</div>
                        </a>
                    </div>
                    <div className="card-link-wrapper card-customize shadow-btn">
                        <a href="!#" className="card-link" style={{ position: 'relative' }}>
                            <div className="card-img">
                                <img alt="" src="/assets/images/icons/bill/cable-tv.png" />
                            </div>
                            <div className="card-name card-color">Cước Truyền hình</div>
                        </a>
                    </div>
                    <div className="card-link-wrapper card-customize shadow-btn">
                        <a href="!#" className="card-link" style={{ position: 'relative' }}>
                            <div className="card-img">
                                <img alt="" src="/assets/images/icons/bill/train-ticket.png" />
                            </div>
                            <div className="card-name card-color">Vé tàu</div>
                        </a>
                    </div>
                    <div className="card-link-wrapper card-customize shadow-btn">
                        <a href="!#" className="card-link" style={{ position: 'relative' }}>
                            <div className="card-img">
                                <img alt="" src="/assets/images/icons/bill/air-ticket.png" />
                            </div>
                            <div className="card-name card-color">Vé máy bay trả sau</div>
                        </a>
                    </div>
                    <div className="card-link-wrapper card-customize shadow-btn">
                        <a href="!#" className="card-link" style={{ position: 'relative' }}>
                            <div className="card-img">
                                <img alt="" src="/assets/images/icons/bill/mask_group.svg" />
                            </div>
                            <div className="card-name card-color">Bảo hiểm Sun Life</div>
                            <img alt="" src="/assets/images/icons/bill/ic_new.svg" style={{ position: 'absolute', top: '15px', right: '20px' }} />
                        </a>
                    </div>
                    <div className="card-link-wrapper card-customize  shadow-btn">
                        <a href="!#" className="card-link" style={{ position: 'relative' }}>
                            <div className="card-img">
                                <img alt="" src="/assets/images/icons/bill/tuition.png" />
                            </div>
                            <div className="card-name card-color">Học phí</div>
                        </a>
                    </div>
                    <div className="card-link-wrapper card-customize shadow-btn">
                        <a href="!#" className="card-link" style={{ position: 'relative' }}>
                            <div className="card-img">
                                <img alt="" src="/assets/images/icons/bill/hospital-fee.png" />
                            </div>
                            <div className="card-name card-color">Viện phí</div>
                        </a>
                    </div>
                </div>
                <div style={{ background: '#E6E9EE', width: '100%', height: '3px', marginBottom: '30px' }}>
                </div>
            </div>
        </div>
    );
}

export default BillPage;