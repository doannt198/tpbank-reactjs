import './index.css';
import { Link } from 'react-router-dom';

function SavingPage() {
    return (
        <div className="content-wrap">
            <div className="saving-home">
                <div className="saving-home-normal">
                    <div className="saving-action-inquiry">
                        <div className="icon-inquiry">
                            <img alt="" src="https://ebank.tpb.vn/retail/vX/assets/images/menu/inquiry-active.svg" />
                        </div>
                        <div className="content">
                            <span className="title">Tra cứu gói tiết kiệm tại Quầy, LiveBank, Savy?</span>
                            <div className="action-link" routerlink="/main/inquiry/saving" tabIndex={0}>
                                <span className="mr-2">Bấm vào đây</span>
                                <i className="fas fa-chevron-right" />
                            </div>
                        </div>
                    </div>
                    <div className="list-saving">
                        <div className="image-cover" style={{backgroundImage: "url('/assets/images/icons/saving/saving-home-cover-2.4ee69270ca6f9bfa026c.png')"}}>
                            <span>Tiết kiệm càng nhiều, lợi ích càng nhiều!</span>
                            <div className="create-package">
                                <Link  to="/saving/create-package">
                                    <i className="fas fa-plus mr-2" />
                                    <span>Tạo Gói Tiết Kiệm</span>
                                </Link>
                            </div>
                        </div>
                        <div className="title">Gói Tiết kiệm Điện tử đã có (83)</div>
                        <div className="card-saving-item">
                            <div className="icon-saving">
                                <img alt="" src="/assets/images/icons/saving/ic_piggy_2.svg" />
                            </div>
                            <div className="saving-info">
                                <div className="saving-name">TK Điện Tử 10/02/2021</div>
                                <div className="saving-number">02342321 06N</div>
                                <div className="saving-amount">
                                    <b>2,500,000 VND</b>
                                </div>
                                <div className="saving-finalization">
                                    <div className="finalization-date"> Tất toán 17/03/2021 </div>
                                    <Link className="action" to="/saving/saving-detail">Xem chi tiết
                                        <i className="fas fa-chevron-right ml-2" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="card-saving-item">
                            <div className="icon-saving">
                                <img alt="" src="/assets/images/icons/saving/ic_piggy_2.svg" />
                            </div>
                            <div className="saving-info">
                                <div className="saving-name">TK Điện Tử 08/02/2021</div>
                                <div className="saving-number">02234221 06M</div>
                                <div className="saving-amount">
                                    <b>2,500,000 VND</b>
                                </div>
                                <div className="saving-finalization">
                                    <div className="finalization-date"> Tất toán 08/03/2021 </div>
                                    <Link className="action" to="/saving/saving-detail">Xem chi tiết
                                        <i className="fas fa-chevron-right ml-2" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SavingPage;