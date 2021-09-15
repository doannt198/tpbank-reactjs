import './index.css';
import { Link } from "react-router-dom";


function BillElectricPage() {
    return (
        <div className="content-wrap">
            <div className="mx-auto d-none" style={{ marginBottom: '18px', maxWidth: '496px' }}>
                <div className="debit-acc-selector">
                    <div className="label-color">Từ tài khoản</div>
                    <div className="fw-500 mt-2"> TRAN NGOC TAN </div>
                    <div className="fw-500"> 0210 5921 501 </div>
                    <div className="fw-500 mt-2" style={{ fontSize: '20px' }}> 5,283 VND </div>
                </div>
            </div>
            <div className="container-bill">
                <div className="container-list-provider">
                    <div className="list-provider">
                        <ul className="list-card-link">
                            <li className="card-link-wrapper">
                                <Link className="card-link card-provider" to="/bill/bill-electric-detail">
                                    <div className="content-card">
                                        <div className="container-icon-provider">
                                            <img alt="" className="icon-logo" src="https://ebank.tpb.vn/gateway/api/contentservices/api/contentstream-id/contentRepository/6d549869-dca9-403d-927c-efe38216c51f?_=1554954768300" />
                                        </div>
                                        <div className="content-name-provider">
                                            <span className="name-provider">Điện lực TP Hà Nội</span>
                                            <span className="icon-arrow-right" style={{backgroundImage: "url('/assets/images/icons/bill/chevron-right-solid.1b15a896fc37da4a8955.svg')"}}/>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li className="card-link-wrapper">
                                <Link className="card-link card-provider" to="/bill/bill-electric-detail">
                                    <div className="content-card">
                                        <div className="container-icon-provider">
                                            <img alt="" className="icon-logo" src="https://ebank.tpb.vn/gateway/api/contentservices/api/contentstream-id/contentRepository/6d549869-dca9-403d-927c-efe38216c51f?_=1554954768300" />
                                        </div>
                                        <div className="content-name-provider"><span className="name-provider">Điện lực miền Bắc</span>
                                        <span className="icon-arrow-right" style={{backgroundImage: "url('/assets/images/icons/bill/chevron-right-solid.1b15a896fc37da4a8955.svg')"}}/></div>
                                    </div>
                                </Link>
                            </li>
                            <li className="card-link-wrapper">
                                <Link className="card-link card-provider" to="/bill/bill-electric-detail">
                                    <div className="content-card">
                                        <div className="container-icon-provider">
                                            <img alt="" className="icon-logo" src="https://ebank.tpb.vn/gateway/api/contentservices/api/contentstream-id/contentRepository/6d549869-dca9-403d-927c-efe38216c51f?_=1554954768300" />
                                        </div>
                                        <div className="content-name-provider">
                                            <span className="name-provider">Điện lực miền Nam</span>
                                            <span className="icon-arrow-right" style={{backgroundImage: "url('/assets/images/icons/bill/chevron-right-solid.1b15a896fc37da4a8955.svg')"}}/>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li className="card-link-wrapper">
                                <Link className="card-link card-provider" to="/bill/bill-electric-detail">
                                    <div className="content-card">
                                        <div className="container-icon-provider">
                                            <img alt="" className="icon-logo" src="https://ebank.tpb.vn/gateway/api/contentservices/api/contentstream-id/contentRepository/6d549869-dca9-403d-927c-efe38216c51f?_=1554954768300" />
                                        </div>
                                        <div className="content-name-provider">
                                            <span className="name-provider">Điện lực miền Trung</span>
                                            <span className="icon-arrow-right" style={{backgroundImage: "url('/assets/images/icons/bill/chevron-right-solid.1b15a896fc37da4a8955.svg')"}}/>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li className="card-link-wrapper">
                                <Link className="card-link card-provider" to="/bill/bill-electric-detail">
                                    <div className="content-card">
                                        <div className="container-icon-provider">
                                            <img alt="" className="icon-logo" src="https://ebank.tpb.vn/gateway/api/contentservices/api/contentstream-id/contentRepository/6d549869-dca9-403d-927c-efe38216c51f?_=1554954768300" />
                                        </div>
                                        <div className="content-name-provider"><span className="name-provider">Điện lực TP HCM</span>
                                        <span className="icon-arrow-right" style={{backgroundImage: "url('/assets/images/icons/bill/chevron-right-solid.1b15a896fc37da4a8955.svg')"}}/></div>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BillElectricPage;