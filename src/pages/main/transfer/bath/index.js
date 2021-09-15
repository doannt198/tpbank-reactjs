import './index.css';
import { Link } from 'react-router-dom';
function TransferBathPage() {
    return (
        <div className="content-wrap">
            <div className="batch">
                <div>
                    <div className="batch-upload-file">
                        <div className="slide-section mx-auto mb-4" style={{ maxWidth: '500px' }}>
                            <div className="debit-acc-selector">
                                <div className="label-color">Từ tài khoản</div>
                                <div className="fw-500 mt-2"> TRAN NGOC TAN </div>
                                <div className="fw-500"> 0210 5921 501 </div>
                                <div className="fw-500 mt-2" style={{ fontSize: '20px' }}> 544,991 VND
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <span className="text-1"> * Quý khách có thể chuyển tiền theo danh sách bằng
                                cách upload thông tin giao dịch dưới dạng file Excel theo mẫu của
                                TPBank. </span>
                        </div>
                        <div className="row">
                            <span className="text-2"> ** Giới hạn tối đa là 200 giao dịch/lần chuyển
                                theo danh sách. </span>
                        </div>
                        <div className="row">
                            <a className="file-upload" href="!#">
                                <img className="icon-download" src="/assets/images/icons/transfer/Icons_DownLoad.svg" alt="Icons_DownLoad"/>
                                Tải xuống file mẫu </a>
                        </div>
                        <div className="row">
                            <div className="file-section">
                                <div uploadtype="upload-excel">
                                    <div className="upload-document-container">
                                        <div className="upload-document-wrap">
                                            <div className="upload-inner">
                                                <div className="upload-title">Tải lên danh sách chuyển khoản
                                                </div>
                                                <img alt="" className="upload-icon" src="/assets/images/icons/transfer/ic_file_upload_inactive.svg" />
                                                <div className="upload-description">
                                                    <label className="select-file-button" htmlFor="myFile">Chọn file</label>
                                                    <span>&nbsp;hoặc kéo thả file vào đây</span>
                                                </div>
                                                <input id="myFile" name="myFile" type="file" accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/csv,application/x-csv,text/csv,text/comma-separated-values,text/x-comma-separated-values,text/tab-separated-values" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                        <Link to="/transfer/bath/list">
                            <button className="btn-default btn-primary">Tiếp tục</button>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TransferBathPage;