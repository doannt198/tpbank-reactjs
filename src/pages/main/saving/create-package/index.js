import './index.css';

function SavingCreatePackagePage() {
    return (
        <div className="content-wrap">
            <div className="create-saving-package">
                <div className="select-package-type d-block">
                    <div>
                        <div className="title">Lựa chọn loại tiết kiệm để bắt đầu</div>
                        <div className="card-select-package">
                            <div className="icon-package">
                                <img alt="" src="/assets/images/icons/saving/ic_piggy_2.svg" />
                            </div>
                            <div className="package-info">
                                <div className="package-name">Tiết kiệm Điện Tử</div>
                                <div className="package-period">
                                    <span className="txt-color-2">Kỳ hạn:</span>
                                    <span>Từ 1 tuần đến 36 tháng</span>
                                </div>
                                <div className="package-interest-rate">
                                    <div className="interest-rate">
                                        <span className="txt-color-2">Lãi suất cao nhất: </span>
                                        <span>6.45 %</span>
                                    </div>
                                    <div className="action">Chọn
                                        <i className="fas fa-chevron-right ml-2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-select-package">
                            <div className="icon-package">
                                <img alt="ic_gold_2" src="/assets/images/icons/saving/ic_gold_2.svg" />
                            </div>
                            <div className="package-info">
                                <div className="package-name">Tiết kiệm Tài Lộc Điện Tử</div>
                                <div className="package-period">
                                    <span className="txt-color-2">Kỳ hạn: </span>
                                    <span>4, 5, 7, 13 tháng</span>
                                </div>
                                <div className="package-interest-rate">
                                    <div className="interest-rate">
                                        <span className="txt-color-2">Lãi suất cao nhất: </span>
                                        <span>6.25 %</span>
                                    </div>
                                    <div className="action">Chọn
                                        <i className="fas fa-chevron-right ml-2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="input-info-package d-none">
                    <app-header-button className="show-header-button d-block">
                        <div className="button-right-header">
                            <div className="content">
                                <div style={{ cursor: 'pointer' }}>
                                    <span className="btn-header-inner text-link">
                                        <img alt="" src="assets/icons/icons-question-fill.svg" style={{ marginRight: '8px' }} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </app-header-button>
                    <div className="input-info-package-content">
                        <div className="select-account">
                            <div className="debit-acc-selector">
                                <div className="label-color">Từ tài khoản</div>
                                <div className="fw-500 mt-2"> TRAN NGOC TAN </div>
                                <div className="fw-500"> 0210 5921 501 </div>
                                <div className="fw-500 mt-2" style={{ fontSize: '20px' }}> 5,283 VND
                                </div>
                            </div>
                        </div>
                        <input className="input-package-name" maxLength={250} spellCheck="false" type="text" placeholder="Nhập tên gói" />
                        <div className="input-money">
                            <div className="money-container ng-untouched ng-pristine ng-valid">
                                <div className="money-input">
                                    <input formcontrolname="money" placeholder="Tối thiểu 10,000,000 VND" maxLength={19} className="ng-untouched ng-pristine ng-valid" />
                                    <span className="currency">VND</span>
                                </div>
                                <div className="suggest">
                                </div>
                            </div>
                            <div className="method">
                                <div className="method-detail">
                                    <p>10,000,000 VND</p>
                                </div>
                                <div className="method-detail">
                                    <p>20,000,000 VND</p>
                                </div>
                                <div className="method-detail">
                                    <p>30,000,000 VND</p>
                                </div>
                                <div className="method-detail">
                                    <p>50,000,000 VND</p>
                                </div>
                                <div className="method-detail">
                                    <p>100,000,000 VND</p>
                                </div>
                                <div className="method-detail">
                                    <p>200,000,000 VND</p>
                                </div>
                                <div className="method-detail">
                                    <p>300,000,000 VND</p>
                                </div>
                                <div className="method-detail">
                                    <p>500,000,000 VND</p>
                                </div>
                            </div>
                        </div>
                        <div className="select-interest-rate">
                            <div className="select-container">
                                <div className="select-container__wrap-top">
                                    <span className="select-container__placeholder">Chọn kỳ
                                        hạn</span>
                                    <img alt="" className="select-container__icon" src="assets/icons/chevron-right-solid.svg" width="8px" />
                                </div>
                                <div className="select-container__wrap-items select-container__wrap-items--height">
                                </div>
                            </div>
                        </div>
                        <div className="interest-amount">
                            <span style={{ color: '#ad8ad8' }}>Lãi tạm tính cuối kỳ</span>
                            <span style={{ fontSize: '20px', fontWeight: 500 }}>-- </span>
                        </div>
                        <div className="setting-autoroll">
                            <div className="select-container">
                                <div className="select-container__wrap-top">
                                    <span className="select-container__placeholder">Cài đặt tự động
                                        tái tục</span>
                                    <img alt="" className="select-container__icon" src="assets/icons/chevron-right-solid.svg" width="8px" />
                                </div>
                                <div className="select-container__wrap-items select-container__wrap-items--height">
                                    <div className="select-container__select-option"> Nhận cả gốc và
                                        lãi </div>
                                    div class="select-container__select-option"&gt; Nhận lãi,
                                    chuyển gốc sang kỳ hạn mới
                                </div>
                                <div className="select-container__select-option"> Chuyển cả gốc và
                                    lãi sang kỳ hạn mới </div>
                            </div>
                        </div>
                    </div>
                    <div className="select-account d-none">
                        <div>
                            <div className="position-relative tpb-dropdown">
                                <div className="child-2-side display-area active">
                                    <div>
                                        <span>0210 5921 501 - TRAN NGOC TAN</span>
                                    </div>
                                    <div className="text-secondary">
                                        <i className="fas fa-chevron-down" />
                                        <i className="fas fa-chevron-up d-none" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-primary w-100" disabled>Tiếp tục</button>
                </div>
            </div>
        </div>
    );
}

export default SavingCreatePackagePage;