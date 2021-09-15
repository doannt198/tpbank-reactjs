import './index.css';

function NotificationPage() {
    return (
        <div>
            <div className="content-wrap">
                <div className="notification-page">
                    <div className="tab-list">
                        <div className="tab active"> Biến Động Số Dư
                        </div>
                        <div className="tab"> Ưu đãi
                            <span className="have-new-icon" />
                        </div>
                        <div className="tab"> Chung
                            <div className="have-new-icon number"> 22 </div>
                        </div>
                    </div>
                    <div className="list">
                        <div className="item notification-list-item read-noti">
                            <div className="message">(TPBank): 25/06/21;14:16
                                TK: xxxx5921501
                                PS:+1.000.000VND
                                SD: 1.005.324VND
                                SD KHA DUNG: 1.005.324VND
                                ND: anh manh gui tien</div>
                            <div className="date">25/06 14:28</div>
                            <i className="fas fa-trash btn-delete" />
                        </div>
                        <div className="item notification-list-item read-noti">
                            <div className="message">(TPBank):23/06/21;17:21
                                TK: xxxx5921501
                                PS: -1.000.000VND
                                SD: 5.283VND
                                SD KHA DUNG: 5.283VND
                                ND: RUT TIEN TAI ATM</div>
                            <div className="date">23/06 17:21</div>
                            <i className="fas fa-trash btn-delete" />
                        </div>
                        <div className="item notification-list-item read-noti">
                            <div className="message">(TPBank): 22/06/21;17:42
                                TK: xxxx5921501
                                PS:-3.565.000VND
                                SD: 1.005.283VND
                                SD KHA DUNG: 1.005.283VND
                                ND: TRAN NGOC TAN chuyen tien</div>
                            <div className="date">22/06 17:43</div>
                            <i className="fas fa-trash btn-delete" />
                        </div>
                        <div className="item notification-list-item read-noti">
                            <div className="message">(TPBank): 13/06/21;09:14
                                TK: xxxx5921501
                                PS:-50.000VND
                                SD: 2.639VND
                                SD KHA DUNG: 2.639VND
                                ND: NAP TIEN VI MOMO - 0964909796 - 12816082480</div>
                            <div className="date">13/06 09:15</div>
                            <i className="fas fa-trash btn-delete" />
                        </div>
                    </div>
                    <img className="btn-check-all" src="./assets/images/icons/check-all.svg" alt="check-all"/>
                </div>
            </div>
            <div className="d-none">
                <div className="mx-auto" style={{ width: '496px' }}>
                    <div className="preview d-none" style={{ height: '673px', overflow: 'hidden' }}>
                        <div>
                            <img src="/assets/images/icons/bao-lixi.svg" alt="bao-lixi"/>
                        </div>
                        <div className="lottieContainer d-none">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotificationPage;