import './index.css';
function TransferBathListPage() {
    return (
        <div className="content-wrap">
            <div className="batch">
                <div className="d-none">
                    <div className="batch-upload-file">
                        <div className="slide-section mx-auto mb-4" style={{ maxWidth: '500px' }}>
                            <div className="debit-acc-selector">
                                <div className="label-color">Từ tài khoản</div>
                                <div className="fw-500 mt-2"> TRAN NGOC TAN </div>
                                <div className="fw-500"> 0210 5921 501 </div>
                                <div className="fw-500 mt-2" style={{ fontSize: '20px' }}> 5,283 VND </div>
                            </div>
                        </div>
                        <div className="row">
                            <span className="text-1"> * Quý khách có thể chuyển tiền theo danh sách bằng
                                cách upload thông tin giao dịch dưới dạng file Excel theo mẫu của
                                TPBank. </span>
                        </div>
                        <div className="row">
                            <span className="text-2"> ** Giới hạn tối đa là 200 giao dịch/lần chuyển theo
                                danh sách. </span>
                        </div>
                        <div className="row">
                            <a className="file-upload" href="!#">
                                <img className="icon-download" src="/assets/icons/Icons_DownLoad.svg" alt="Icons_DownLoad" /> Tải xuống file mẫu </a>
                        </div>
                        <div className="row">
                            <div className="file-section">
                                <div uploadtype="upload-excel">
                                    <div className="upload-document-container">
                                        <div className="upload-document-wrap">
                                            <div className="upload-inner">
                                                <div className="upload-title">Tải lên danh sách chuyển khoản
                                                </div>
                                                <img alt="ic_file_upload" className="upload-icon" src="/assets/icons/ic_file_upload.svg" />
                                                <div className="selected-file-name">
                                                    ft_batch_xlsx_2019_VIE.xlsx <span className="delete-file-button">
                                                        <img alt="ic_close" src=".//assets/images/icons/ic_close.svg" style={{ width: '12px', height: '12px' }} /></span>
                                                </div>
                                                <input id="myFile" name="myFile" type="file" accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/csv,application/x-csv,text/csv,text/comma-separated-values,text/x-comma-separated-values,text/tab-separated-values" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <button className="btn-default btn-primary">Tiếp tục</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="batch-verify">
                        <div className="account-info-section">
                            <div className="left-section">
                                <div className="item1">
                                    <div className="transfer-info-card">
                                        <span className="title">SỐ TIỀN GIAO DỊCH</span>
                                        <div className="amount">
                                            <span> 1 VND </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item3">
                                    <div className="line-vertical" />
                                    <div className="transfer-info-card">
                                        <span className="title">Cách thức</span>
                                        <div className="message">
                                            <span>Chuyển tiền một lần</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right-section">
                                <div className="item2">
                                    <div className="line-vertical" />
                                    <div className="account-card">
                                        <div className="image-section">
                                            <div className="avatar-container" style={{ width: '50px', height: '50px' }}>
                                                <img className="avatar-content" src="/assets/images/icons/transfer/logo-round.svg" width={50} height={50} style={{ maxWidth: '100%', borderRadius: '50%', objectFit: 'cover' }} alt="logo-round" />
                                            </div>
                                        </div>
                                        <div className="account-detail">
                                            <span className="title">Từ tài khoản </span>
                                            <div className="account-name text-in-div"> TRAN NGOC TAN
                                            </div>
                                            <div className="account-number text-in-div"> 0210 5921 501
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item4">
                                    <div className="line-vertical" />
                                    <div className="transfer-info-card">
                                        <span className="title">Thông điệp</span>
                                        <div className="message">
                                            <span>Chuyen tien theo danh sach</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="action-section">
                            <button className="btn-left btn-secondary">Tải Lại Tập Tin</button>
                            <button className="btn-center btn-secondary" tabIndex={0}>Hủy bỏ</button>
                            <button className="btn-right btn-primary" disabled="disabled">Xác Nhận Giao Dịch</button>
                        </div>
                        <div className="line-vertical-full" />
                        <div className="list-account-section ng-untouched ng-pristine ng-valid" style={{ width: '100%' }}>
                            <div className="input-display-type">
                                <div className="error-notification">
                                    <span> Tập tin tải lên có
                                        <span style={{ color: 'red' }}>1</span> thông báo lỗi. Vui lòng chỉnh
                                        sửa và tải lại tập tin để thực hiện giao dịch.
                                    </span>
                                </div>
                                <select-container formcontrolname="displayType" placeholder className="ng-untouched ng-pristine ng-valid">
                                    <div className="select-container">
                                        <div className="select-container__wrap-top">
                                            <span className="select-container__item-selected">Thông báo lỗi</span>
                                            <img className="select-container__icon" src="/assets/images/icons/transfer/chevron-right-solid.svg" width="8px" alt="chevron-right-solid" />
                                        </div>
                                        <div className="select-container__wrap-items select-container__wrap-items--height">
                                            <div className="select-container__select-option"> Tất cả </div>
                                            <div className="select-container__select-option"> Thông báo lỗi
                                            </div>
                                        </div>
                                    </div>
                                </select-container>
                            </div>
                            <div className="table-section">
                                <div className="table-scroll">
                                    <table className="table">
                                        <thead style={{ width: '100%' }}>
                                            <tr style={{ height: '35px', fontSize: '13px', fontWeight: 500, color: 'white', backgroundColor: '#42236a', width: '100%' }}>
                                                <th style={{ width: '43px', paddingLeft: '5px' }}>STT</th>
                                                <th style={{ width: '157px' }}>Tên người nhận</th>
                                                <th style={{ width: '110px' }}>Số tài khoản</th>
                                                <th style={{ width: '130px' }}>Số tiền chuyển</th>
                                                <th style={{ width: '140px' }}>Thông điệp</th>
                                                <th style={{ width: '220px' }}>Chi tiết lỗi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="highlight-row">
                                                <td style={{ textAlign: 'center' }}>
                                                    <div className="table-text" style={{ width: '43px' }}>1
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="table-text" style={{ width: '157px' }}>
                                                        <span>Test</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="table-text" style={{ width: '110px' }}>1231 23
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="table-text" style={{ width: '130px' }}>1 VND
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="table-text" style={{ width: '140px' }}>123123
                                                    </div>
                                                </td>
                                                <td className="table-text error-message" style={{ width: '220px' }}>
                                                    <div>Tài khoản người nhận không hợp lệ</div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="table-bottom">
                                <div className="display-select">
                                    <span> Hiển thị </span>
                                    <select-container formcontrolname="displayLimit" placeholder className="ng-untouched ng-pristine ng-valid">
                                        <div className="select-container">
                                            <div className="select-container__wrap-top">
                                                <span className="select-container__item-selected">5</span>
                                                <img className="select-container__icon" src="/assets/images/icons/transfer/chevron-right-solid.svg" width="8px" alt="chevron-right-solid"/>
                                            </div>
                                            <div className="select-container__wrap-items select-container__wrap-items--height">
                                                <div className="select-container__select-option"> 5 </div>
                                                <div className="select-container__select-option"> 10 </div>
                                                <div className="select-container__select-option"> 25 </div>
                                            </div>
                                        </div>
                                    </select-container>
                                </div>
                                <div className="pagination">
                                    <ul className="paginator">
                                        <li className="item-page button-first">
                                            <i className="fas fa-angle-double-left">
                                            </i>
                                        </li>
                                        <li className="item-page button-first">
                                            <i className="fas fa-angle-left" />
                                        </li>
                                        <li className="item-page enable-page">
                                            <span className="page">1</span>
                                        </li>
                                        <li className="item-page button-last">
                                            <i className="fas fa-angle-right">
                                            </i>
                                        </li>
                                        <li className="item-page button-last">
                                            <i className="fas fa-angle-double-right" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TransferBathListPage;