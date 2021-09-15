import './index.css';
function InquirySavingPage() {
    return (
        <div className="content row">
            <div className="content-left">
                <div className="total-vnd card borderBottom">
                    <h4 className="title">Tổng tiết kiệm VND</h4>
                    <h4 className="amount">660,492 <span>VND</span></h4>
                </div>
            </div>
            <div className="content-right">
                <div className="scroll-content">
                    <div className="account-saving">
                        <div className="title-saving pointer">
                            <h4>Tiết Kiệm Kỳ Hạn Điện Tử
                                <span>(83)</span>
                            </h4>
                            <img alt="down" className="icon-down scaleHydro" src="https://ebank.tpb.vn/retail/vX/assets/icons/Icons_Arrow_Down.svg" />
                        </div>
                        <div className="has-conntent-saving">
                            <div className="saving-item row pointer" tabIndex={0}>
                                <div className="col-sm-2 oval">
                                    <img alt="Saving" src="https://ebank.tpb.vn/retail/vX/assets/icons/inquiry/ic_piggy.svg" />
                                </div>
                                <div className="center col-sm-9">
                                    <h6>TK Kỳ Hạn Điện Tử 07/09/20</h6>
                                    <div className="medium">
                                        <h6 className="account-number">23423 04V</h6>
                                        <div className="gr_curr">
                                            <h6 className="curren">2,538,692
                                                <span>VND</span>
                                            </h6>
                                        </div>
                                    </div>
                                    <p>Thu hoạch <span>07/03/2021</span></p>
                                </div>
                            </div>
                            <div className="saving-item row pointer" tabIndex={0}>
                                <div className="col-sm-2 oval">
                                    <img alt="Saving" src="https://ebank.tpb.vn/retail/vX/assets/icons/inquiry/ic_piggy.svg" />
                                </div>
                                <div className="center col-sm-9">
                                    <h6>TK Điện Tử 08/02/2021</h6>
                                    <div className="medium">
                                        <h6 className="account-number">23423 06K</h6>
                                        <div className="gr_curr">
                                            <h6 className="curren">2,500,000
                                                <span>VND</span>
                                            </h6>
                                        </div>
                                    </div>
                                    <p>Thu hoạch
                                        <span>08/03/2021</span>
                                    </p>
                                </div>
                            </div>
                            <div className="saving-item row pointer" tabIndex={0}>
                                <div className="col-sm-2 oval">
                                    <img alt="Saving" src="https://ebank.tpb.vn/retail/vX/assets/icons/inquiry/ic_piggy.svg" />
                                </div>
                                <div className="center col-sm-9">
                                    <h6>TK Điện Tử 08/02/2021</h6>
                                    <div className="medium">
                                        <h6 className="account-number">23423 06F</h6>
                                        <div className="gr_curr">
                                            <h6 className="curren">2,500,000
                                                <span>VND</span>
                                            </h6>
                                        </div>
                                    </div>
                                    <p>Thu hoạch
                                        <span>08/08/2021</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InquirySavingPage;