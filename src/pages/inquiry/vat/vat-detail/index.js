import './index.css';
function VatDetailPage() {
    return (
        <div className="transaction">
            {/* <div className="show-header-button acc-selector-on-header">
                <div className="button-right-header">
                    <div className="content">
                        <div style={{ cursor: 'pointer' }}>
                            <span className="acc-selected">TANO</span>
                            <img alt="" src="https://ebank.tpb.vn/retail/vX/assets/icons/down.svg" />
                            <div className="list-account shadow-btn d-none">
                                <div className="list-account-item">
                                    <div className="icon-select">
                                        <i className="fas fa-check d-block" />
                                    </div>
                                    <div className="info">
                                        <span className="account-name">TANO</span>
                                        <span className="account-number">124234234</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="transaction-search">
                <div className="transaction-search">
                    <div className="search-input">
                        <input className="form-control" maxLength={100} type="text" placeholder="Tìm kiếm" />
                    </div>
                    <div className="action-search-filter">
                        <div className="action-search-filter-label">
                            <span className="label">Lọc theo</span>
                        </div>
                        <div className="mr-2">
                            <div className="inquiry-date-range-wrapper">
                                <div className="open-options-btn">
                                    <i className="far fa-calendar" />
                                    <span>1 Tháng Gần Nhất</span>
                                </div>
                                <div className="select-option-date hide">
                                    <div className="value-option">7 Ngày Gần Nhất</div>
                                    <div className="value-option selected">1 Tháng Gần Nhất</div>
                                    <div className="value-option">3 Tháng Gần Nhất</div>
                                    <div className="value-option">Tùy Chọn</div>
                                </div>
                                <div className="inquiry-calendar-date-selection d-none">
                                    <div> CHỌN KHOẢNG THỜI GIAN </div>
                                    <div className="mt-3 label-color"> Ngày bắt đầu </div>
                                    <div className="mt-1">
                                        <div className="tpb-date-picker2">
                                            <input className="form-control form-control-default txtMainInput" maxLength={10} type="text" placeholder="--/--/----" />
                                            <i className="far fa-calendar" />
                                            <input className="form-control txtHiddenInput" type="text" aria-haspopup="dialog" />
                                        </div>
                                    </div>
                                    <div className="mt-3" style={{ borderTop: '1px solid #E6E9EE' }} />
                                    <div className="mt-3 label-color"> Ngày kết thúc </div>
                                    <div className="mt-1">
                                        <div className="tpb-date-picker2">
                                            <input className="form-control form-control-default txtMainInput" maxLength={10} type="text" placeholder="--/--/----" />
                                            <i className="far fa-calendar" />
                                            <input className="form-control txtHiddenInput" type="text" aria-haspopup="dialog" />
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <button className="btn btn-primary w-100" disabled> Xác nhận
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="result-search">
                        <span>0 kết quả</span>
                    </div>
                    <div className="content-transaction">
                        <ul className="list-transaction" id="content-transaction">
                        </ul>
                        <div className="data-not-found">
                            <div className="w-100 text-center">
                                <img alt="" src="https://ebank.tpb.vn/retail/vX/assets/icons/inquiry/ic_inquiry.svg" />
                            </div>
                            <div className="w-100 text-center description">Không tìm thấy hoá
                                đơn phù hợp</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VatDetailPage;