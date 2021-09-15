import './index.css';
function TransferSchedulePage() {
    return (
        <div className="content-wrap">
            <div className="schedule">
                <div className="edit-area">
                    <div className="schedule-create">
                        <div className="select-type">
                            <div className="header text-center">
                                <span className="header-title">Chọn loại chuyển tiền</span>
                                <span className="header-note">Chọn loại chuyển tiền để cài đặt lịch thực
                                    hiện</span>
                            </div>
                            <div className="card-option-schedule mb-3 mr-3" onclick="window.location.replace('/transfer-schedule-detail.html');">
                                <span>
                                    <i className="image-type internal" />
                                </span>
                                <span className="text-type">Chuyển tiền trong TPBank</span>
                            </div>
                            <div className="card-option-schedule mb-3" onclick="window.location.replace('/transfer-schedule-detail.html');">
                                <span>
                                    <i className="image-type external" />
                                </span>
                                <span className="text-type">Chuyển tiền liên ngân hàng</span>
                            </div>
                            <div className="card-option-schedule mb-3 mr-3" onclick="window.location.replace('/transfer-schedule-detail.html');">
                                <span>
                                    <i className="image-type atm" />
                                </span>
                                <span className="text-type">Chuyển tiền qua thẻ ATM</span>
                            </div>
                            <div className="card-option-schedule" onclick="window.location.replace('/transfer-schedule-detail.html');">
                                <span>
                                    <i className="image-type stock" />
                                </span>
                                <span className="text-type">Chuyển tiền chứng khoán</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TransferSchedulePage;