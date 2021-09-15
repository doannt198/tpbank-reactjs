import './index.css';
function InquiryTransferPage() {
    return (
        <div className="transfer-container">
            <div className="button-header">
                <div className="button-header-item">
                    <i className="icon search-key" /> Tìm kiếm
                </div>
                <div className="button-header-item">
                    <i className="icon search-date" /> Mốc thời gian
                </div>
                <div className="button-header-item" id="transfer-type">
                    <i className="icon search-catalogue" /> Loại chuyển tiền
                </div>
            </div>
            <div className="content-transaction" data-toggle="modal" data-target="#detail-transaction">
                <div className="list-transaction">
                    <div className="container-transaction">
                        <div className="date-content">
                            <div className="date-left">24</div>
                            <div className="date-right">
                                <p className="day-bold">Thứ 4</p>
                                <p>Tháng 2/2021</p>
                            </div>
                        </div>
                        <div className="transaction-main">
                            <div className="credit-name resize">
                                <span className="detail-record resize"> Tới: NGUYEN THI THU HANG
                                </span>
                                <span className="money-transfer resize">- 500,000 VND</span>
                            </div>
                            <div className="transaction-type">
                                <div className="item-detail">
                                    <span><i className="image-type external" />
                                    </span>
                                    <span className="text-type">Chuyển tiền liên ngân
                                        hàng</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-transaction" data-toggle="modal" data-target="#detail-transaction">
                        <div className="date-content">
                            <div className="date-left">12</div>
                            <div className="date-right">
                                <p className="day-bold">Thứ 6</p>
                                <p>Tháng 2/2021</p>
                            </div>
                        </div>
                        <div className="transaction-main">
                            <div className="credit-name resize">
                                <span className="detail-record resize"> Tới: NGUYEN TIEN DOAN
                                </span>
                                <span className="money-transfer resize">- 100,000 VND</span>
                            </div>
                            <div className="transaction-type">
                                <div className="item-detail"><span><i className="image-type internal" /></span><span className="text-type">Chuyển tiền trong ngân hàng</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="search-by-key hide">
                </div>
                <div className="search-by-catalogue hide">
                    <ul>
                        <li className="catalogue-item" data-catalogue="INTERNAL">
                            <span>
                                <span className="icon-color internal-type">
                                </span>Chuyển tiền trong ngân hàng
                            </span>
                            <span className="check-circle" />
                        </li>
                        <li className="catalogue-item" data-catalogue="EXTERNAL">
                            <span>
                                <span className="icon-color external-type">
                                </span>Chuyển tiền liên ngân hàng</span>
                            <span className="check-circle" />
                        </li>
                        <li className="catalogue-item" data-catalogue="ATM">
                            <span>
                                <span className="icon-color atm-type" />Chuyển tiền qua thẻ
                                ATM</span><span className="check-circle" />
                        </li>
                        <li className="catalogue-item" data-catalogue="STOCK">
                            <span>
                                <span className="icon-color stock-type" />Chuyển tiền chứng
                                khoán</span><span className="check-circle">
                            </span>
                        </li>
                        <li className="catalogue-item" data-catalogue="BATCH">
                            <span>
                                <span className="icon-color batch-type" />Chuyển tiền theo
                                danh
                                sách
                            </span>
                            <span className="check-circle">
                            </span>
                        </li>
                    </ul>
                    <div className="button-search">
                        <button type="button" className="button btn-secondary btn-cancel btn-close-transfer-type">
                            Hủy bỏ </button>
                        <button type="button" className="button btn-primary btn-ok"> Tìm kiếm
                        </button>
                    </div>
                </div>
            </div>
            <div className="download-area">
                <span className="down">
                    <img src="https://ebank.tpb.vn/retail/vX/assets/icons/Icons_DownLoad.svg" alt="Icons_DownLoad"/>
                    Tải lịch sử giao dịch
                </span>
            </div>
            <div className="modal fade" id="detail-transaction" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Chi Tiết Giao
                                Dịch</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body transaction-modal">
                            <div className="amount-info">
                                <div className="amount-title"><span>SỐ TIỀN GIAO DỊCH</span>
                                </div>
                                <div className="amount-detail"><span>- 500,000 VND</span>
                                </div>
                            </div>
                            <div className="line" style={{ width: '100% !important', marginLeft: '0px !important' }}>
                            </div>
                            <div className="account-info">
                                <div className="text_1"><span>Từ tài khoản</span></div>
                                <div className="text_2"><span>TANO</span></div>
                                <div className="text_3"><span>124234234</span></div>
                            </div>
                            <div className="line" />
                            <div className="account-info">
                                <div className="text_1"><span>Tới tài khoản</span></div>
                                <div className="text_2"><span>1903 3663 2480 10</span></div>
                                <div className="text_3"><span>NGUYEN THI THU HANG</span> </div>
                                <div className="text_3"><span>Ngân hàng Kỹ thương Việt Nam(Techcombank, TCB)</span></div>
                            </div>
                            <div className="line" />
                            <div className="detail-wrap">
                                <div className="record">
                                    <div className="left-content"><span>Ngày thực hiện</span></div>
                                    <div className="right-content"><span>24/02/2021</span>
                                    </div>
                                </div>
                                <div className="record">
                                    <div className="left-content"><span>Mã giao dịch</span> </div>
                                    <div className="right-content">
                                        <span>011V009210550816</span></div>
                                </div>
                                <div className="record">
                                    <div className="left-content"><span>Nội dung chuyển tiền</span>
                                    </div>
                                    <div className="right-content"><span>thaorrr.ngg</span>
                                    </div>
                                </div>
                                <div className="record">
                                    <div className="left-content"><span>Cách thức</span>
                                    </div>
                                    <div className="right-content"><span>Chuyển tiền nhanh 24/7</span>
                                    </div>
                                </div>
                                <div className="record">
                                    <div className="left-content"><span>Trạng thái</span>
                                    </div>
                                    <div className="right-content">
                                        <span>Thành công</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InquiryTransferPage;