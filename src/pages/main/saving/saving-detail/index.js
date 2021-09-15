import { Link } from 'react-router-dom';
import './index.css';
function SavingDetailPage() {
    return (
        <div className="content-wrap">
            <div className="detail-saving">
                <div className="show-header-button mobile">
                    <div className="header-btn">
                        <div className="button-right-header">
                            <div className="content">
                                <div data-toggle="modal" data-target="#finish-saving" style={{ cursor: 'pointer' }}>
                                    <span className="btn-header text-link">Tất toán</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-detail-top">
                        <h4>Thống kê</h4>
                        <div className="card-statistical">
                            <div className="package-value">
                                <div className="item-left">
                                    <p>Giá trị gói</p>
                                    <p className="amount"> 2,500,000 <span>VND</span></p>
                                </div>
                            </div>
                            <div className="progress-tooltip">
                                <div className="date row">
                                    <h6>17/02/2021</h6>
                                    <h6>17/03/2021</h6>
                                </div>
                                <div className="my-progress my-tooltip">
                                    <span className="tooltiptext" style={{ left: '36.2069%' }}>15 Ngày tới kỳ hạn</span>
                                    <div className="progress-content" style={{ width: '48.2759%' }} />
                                </div>
                                <div className="fromTo row">
                                    <p>Bắt đầu</p>
                                    <p>Kết thúc</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="saving-info-card">
                    <h4>Thông tin gói</h4>
                    <div className="content-package row">
                        <div className="content-package-left col-md-6">
                            <div className="detail-package">
                                <h5>Tên gói</h5>
                                <div className="name-saving">
                                    <h6>TK Điện Tử 10/02/2021</h6>
                                    <button>
                                        <Link to="/saving/change-package-name">Đổi tên</Link>
                                    </button>
                                </div>
                            </div>
                            <div className="detail-package">
                                <h5>Số tài khoản</h5>
                                <h6>23423 06N</h6>
                            </div>
                            <div className="detail-package">
                                <h5>Lãi tạm tính</h5>
                                <h6>6,904 <span>VND</span> </h6>
                            </div>
                        </div>
                        <div className="content-package-right col-md-6">
                            <div className="detail-package">
                                <h5>Kỳ hạn và lãi suất</h5>
                                <h6>1 Tháng &amp; 3.6%/Năm</h6>
                            </div>
                            <div className="detail-package desc">
                                <h5>Khi đến kỳ hạn</h5>
                                <h6>Nhận lãi, chuyển gốc sang kỳ hạn mới
                                    <span className="pointer">
                                        <Link to="/saving/autoroll-setting">Chỉnh sửa</Link>
                                    </span>
                                </h6>
                            </div>
                            <div className="detail-package acc-accept">
                                <h5>Tài khoản nhận</h5>
                                <h6>TANO</h6>
                                <p>124234234</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="finish-saving" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="modal-inner"><span className="my-modal-content">
                                <span>Khi tất toán trước hạn, Quý khách sẽ chỉ nhận được lãi suất không kỳ hạn</span>
                                <span style={{ color: '#42236a' }}>(0.1%/năm)</span>
                                <span> tính trên số ngày thực gửi cho tài khoản tiết kiệm này</span>
                            </span>
                                <div className="wrap-btn-saving" style={{ justifyContent: 'center' }}>
                                    <button className="btn-again btn btn-secondary" data-dismiss="modal">Hủy bỏ</button>
                                    <button className="btn-home btn btn-primary" style={{ textTransform: 'inherit' }}>Đồng ý</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SavingDetailPage;