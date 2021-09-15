import './index.css';
function TransferInternalPage() {
    return (
        <div className="content-wrap">
            <div className="transfer-wrap-component">
                <div className="transfer-full-width">
                    <div className="ng-untouched ng-pristine ng-invalid">
                        <div className="transfer-container">
                            <div style={{ marginBottom: '18px' }}>
                                <div className="debit-acc-selector">
                                    <div className="label-color">Từ tài khoản</div>
                                    <div className="fw-500 mt-2"> Tano </div>
                                    <div className="fw-500"> 23425 </div>
                                    <div className="fw-500 mt-2" style={{ fontSize: '20px' }}> 1236,555 VND </div>
                                </div>
                            </div>
                            <div className="input-container ng-untouched ng-pristine ng-valid">
                                <div className="input searching">
                                    <input className="input-customize ng-untouched ng-pristine ng-valid" formcontrolname="object" maxLength={31} placeholder="Nhập số tài khoản/số điện thoại" />
                                    <div>
                                        <img className="searching-icon" src="https://ebank.tpb.vn/retail/vX/assets/icons/icons-contact.svg" alt="icons-contact"/>
                                    </div>
                                    <div className="dropdown">
                                        <div className="searching-input">
                                            <i className="searching-input-icon" />
                                            <input className="input-detail ng-untouched ng-pristine ng-valid" formcontrolname="searching" placeholder="Tìm kiếm" />
                                        </div>
                                        <div className="dropdown-content">
                                            <div>
                                                <div className="px-3 pb-3 pt-1 label-color fw-500 d-flex flex-nowrap align-items-center" style={{ borderBottom: '1px solid #E6E9EE' }}>
                                                    <i className="far fa-user-circle" style={{ fontSize: '120%' }} />
                                                    <span className="ml-2">Tài khoản của quý khách</span>
                                                </div>
                                                <div className="my-accounts__bold my-accounts__customize padding-left">
                                                    VND TPBank</div>
                                                <div className="my-accounts-detail">
                                                    <div className="padding-left">23523423
                                                    </div>
                                                    <div className="my-accounts__bold text-align__right padding-right">
                                                        2346,555 VND</div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="p-3 label-color fw-500 d-flex flex-nowrap align-items-center" style={{ borderTop: '1px solid #E6E9EE', borderBottom: '1px solid #E6E9EE' }}>
                                                    <img src="https://ebank.tpb.vn/retail/vX/assets/icons/ic_history.svg" alt="ic_history"/>
                                                    <span className="ml-2">Tài khoản chuyển gần đây</span>
                                                </div>
                                                <div className="customers">
                                                    <div className="my-accounts__bold padding-left">ádfasdf
                                                    </div>
                                                    <div className="padding-left"> 5645645
                                                    </div>
                                                </div>
                                                <div className="customers">
                                                    <div className="my-accounts__bold padding-left">ádfasd</div>
                                                    <div className="padding-left"> 264534
                                                    </div>
                                                </div>
                                                <div className="customers">
                                                    <div className="my-accounts__bold padding-left">sdfasdf</div>
                                                    <div className="padding-left"> 2354235
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-3 label-color fw-500 d-flex flex-nowrap align-items-center" style={{ borderTop: '1px solid #E6E9EE', borderBottom: '1px solid #E6E9EE' }}>
                                                <img src="https://ebank.tpb.vn/retail/vX/assets/icons/ic_list.svg" alt="ic_list"/>
                                                <span className="ml-2">Tài khoản đã lưu</span>
                                            </div>
                                            <div>
                                                <div className="customers">
                                                    <div className="my-accounts__bold padding-left">ádfasd LIMITED</div>
                                                    <div className="padding-left"> 42343
                                                    </div>
                                                </div>
                                                <div className="customers">
                                                    <div className="my-accounts__bold padding-left">fasdfds</div>
                                                    <div className="padding-left"> 234234
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container ng-untouched ng-pristine ng-invalid">
                                <div className="money-container">
                                    <div className="money-input">
                                        <input formcontrolname="money" placeholder="Nhập số tiền VND" maxLength={19} className="ng-untouched ng-pristine ng-invalid" />
                                        <p className="text-color__orange text-bold"> Hạn mức
                                            <span className="tooltip">
                                                <img className="icon-money-qanda" src="https://ebank.tpb.vn/retail/vX/assets/icons/icons-question-fill.svg" alt="icons-question-fill"/>
                                                <span className="tooltip-text">Hạn mức tối đa/lần:
                                                    50,000,000 VND
                                                    Hạn mức tối đa/ngày: 100,000,000 VND</span>
                                            </span>
                                        </p>
                                    </div>
                                    <div className="suggest">
                                    </div>
                                </div>
                                <div className="method">
                                    <div className="method-detail">
                                        <p>100,000 VND</p>
                                    </div>
                                    <div className="method-detail">
                                        <p>200,000 VND</p>
                                    </div>
                                    <div className="method-detail">
                                        <p>300,000 VND</p>
                                    </div>
                                    <div className="method-detail">
                                        <p>500,000 VND</p>
                                    </div>
                                    <div className="method-detail">
                                        <p>1,000,000 VND</p>
                                    </div>
                                    <div className="method-detail">
                                        <p>2,000,000 VND</p>
                                    </div>
                                    <div className="method-detail">
                                        <p>3,000,000 VND</p>
                                    </div>
                                    <div className="method-detail">
                                        <p>5,000,000 VND</p>
                                    </div>
                                </div>
                                <div className="remarks">
                                    <div className="input textarea">
                                        <textarea formcontrolname="description" formatremarks rows={5} placeholder="Nhập nội dung chuyển tiền" maxLength={140} className="ng-untouched ng-pristine ng-invalid" defaultValue={""} />
                                        <p><i className="message-icon text-color__orange" /></p>
                                    </div>
                                    <div className="remark-hint">
                                        <div arrowbottom="-5px" arrowleft="28px" className="coach-mark-sticker" key="fund-transfer-sticker" _nghost-bog-c43>
                                        </div>
                                        <div className="gift-icon">
                                            <i className="fas fa-gift" />
                                        </div>
                                        <div className="hint">Chuyen tien</div>
                                        <div className="hint">TRAN NGOC TAN chuyen tien</div>
                                    </div>
                                </div>
                                <div className="remarks common-config-height common-config-customize">
                                    <div className="common-config">
                                        <div className="common-detail-config">
                                            <div> Chuyển tiền ngay </div>
                                        </div>
                                        <div className="common-config-button">
                                            <div>
                                                <span className="text-link text-link-size"> Cài đặt lịch
                                                    <img className="common-image" src="https://ebank.tpb.vn/retail/vX/assets/icons/right.svg" alt="right"/></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="toggle">
                                    <div className="toggle-container">
                                        <label className="toggle-body">
                                            <input type="checkbox" className="unsaved" />
                                            <span className="toggle-slider toggle-round" />
                                        </label>
                                    </div>
                                    <span>Lưu mẫu chuyển tiền</span>
                                </div>
                                <div className="mb-3 d-none">
                                    <input className="form-control form-control-default p-3 ng-untouched ng-pristine ng-valid" formcontrolname="templateName" maxLength={100} type="text" placeholder="Đặt tên mẫu chuyển tiền" />
                                </div>
                                <div className="button-container">
                                    <button className="btn btn-primary button" disabled> Tiếp tục </button>
                                </div>
                            </div>
                            <div className="modal-switch-method">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TransferInternalPage;