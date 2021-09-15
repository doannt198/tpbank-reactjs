import './index.css';
function MobilePage() {
    return (
        <div className="content-wrap">
            <div id="container-phone-top-up">
                <div>
                    <div className="mx-auto" style={{ marginBottom: '18px', maxWidth: '496px' }}>
                        <div className="debit-acc-selector">
                            <div className="label-color">Từ tài khoản</div>
                            <div className="fw-500 mt-2"> TANO </div>
                            <div className="fw-500"> 124234234 </div>
                            <div className="fw-500 mt-2" style={{ fontSize: '20px' }}> 706,555 VND </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <form className="wrap-content ng-pristine ng-invalid ng-touched" noValidate>
                            <div className="input-content content-provider">
                                <div className="content-input">
                                    <input className="input-text input-provider ng-untouched ng-pristine ng-invalid" formcontrolname="provider" type="text" placeholder="Chọn nhà mạng" /><span className="icon-arrow-down" />
                                    <ul className="list-provider height-transition">
                                        <li>
                                            <span>Viettel</span>
                                        </li>
                                        <li>
                                            <span>Vinaphone</span>
                                        </li>
                                        <li>
                                            <span>Mobifone</span>
                                        </li>
                                        <li>
                                            <span>Vietnam mobile</span>
                                        </li>
                                        <li>
                                            <span>Gmobile</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="input-content">
                                <input className="input-text ng-pristine ng-invalid ng-touched" formcontrolname="phoneNumber" maxLength={12} minLength={12} phonemask type="text" placeholder="Nhập số điện thoại" />
                            </div>
                            <div className="list-face-value">
                                <ul className="list-value">
                                    <li className="card-value">
                                        <div className="value-face">
                                            <span>30,000 VND</span>
                                        </div>
                                    </li>
                                    <li className="card-value">
                                        <div className="value-face">
                                            <span>50,000 VND</span>
                                        </div>
                                    </li>
                                    <li className="card-value">
                                        <div className="value-face">
                                            <span>100,000 VND</span>
                                        </div>
                                    </li>
                                    <li className="card-value">
                                        <div className="value-face">
                                            <span>200,000 VND</span>
                                        </div>
                                    </li>
                                    <li className="card-value">
                                        <div className="value-face">
                                            <span>300,000 VND</span>
                                        </div>
                                    </li>
                                    <li className="card-value">
                                        <div className="value-face">
                                            <span>500,000 VND</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="btn-action">
                                <button className="btn btn-primary btn-next" disabled>
                                    <span>Tiếp tục</span>
                                </button>
                            </div>
                        </form>
                        <div className="history-transaction">
                            <div className="recent-transactions">Các giao dịch gần đây</div>
                            <div className="line" />
                            <div className="list-recent-transaction">
                                <ul className="list-card-link" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MobilePage;