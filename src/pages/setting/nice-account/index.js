import './index.css';
function SettingNiceAccountPage() {
    return (
        <div className="content-wrap">
            <div className="nice_account_container">
                <div>
                    <div className="nice_account_head">
                        <img src="/assets/images/nice_account_banner.png" alt="nice_account_banner" />
                        <p className="text-intro">Lựa chọn 3 số cuối cho dãy số tài khoản mong muốn!</p>
                        <div className="input-group prefix">
                            <span className="input-group-addon">0210 5921</span>
                            <div className="position-relative">
                                <input className="form-control form-control-default fw-500" type="text" placeholder="Nhập 3 số" maxLength={3} style={{ paddingRight: '12px' }} />
                                <div className="right-content" />
                            </div>
                        </div>
                    </div>
                    <div className="nice_account_content">
                        <div>
                            <div className="title-area">
                                <div className="line" />
                                <div className="title">Số tài khoản gợi ý</div>
                                <div className="line" />
                            </div>
                            <div className="suggest-list">
                                <div className="suggest-item">
                                    <div style={{ display: 'flex', marginLeft: '22px', alignItems: 'center' }}>
                                        <div className="checkbox-item">
                                            <label className="wrap-input-radio">
                                                <input type="radio" />
                                                <span className="new-radio-button" />
                                            </label>
                                        </div>
                                        <span>
                                            <span style={{ color: '#AD8AD8' }}>0210 5921 </span>088
                                        </span>
                                    </div>
                                    <span className="status">Miễn phí </span>
                                </div>
                                <div className="suggest-item">
                                    <div style={{ display: 'flex', marginLeft: '22px', alignItems: 'center' }}>
                                        <div className="checkbox-item">
                                            <label className="wrap-input-radio">
                                                <input type="radio" />
                                                <span className="new-radio-button" />
                                            </label>
                                        </div>
                                        <span>
                                            <span style={{ color: '#AD8AD8' }}>0210 5921 </span>386
                                        </span>
                                    </div>
                                    <span className="status">Miễn phí </span>
                                </div>
                                <div className="suggest-item">
                                    <div style={{ display: 'flex', marginLeft: '22px', alignItems: 'center' }}>
                                        <div className="checkbox-item">
                                            <label className="wrap-input-radio">
                                                <input type="radio" />
                                                <span className="new-radio-button" />
                                            </label>
                                        </div>
                                        <span>
                                            <span style={{ color: '#AD8AD8' }}>0210 5921 </span>000
                                        </span>
                                    </div>
                                    <span className="status" style={{ color: 'rgb(255, 152, 0)' }}>1,000,000 VND</span>
                                </div>
                                <div className="suggest-item">
                                    <div style={{ display: 'flex', marginLeft: '22px', alignItems: 'center' }}>
                                        <div className="checkbox-item">
                                            <label className="wrap-input-radio">
                                                <input type="radio" />
                                                <span className="new-radio-button" />
                                            </label>
                                        </div>
                                        <span>
                                            <span style={{ color: '#AD8AD8' }}>0210 5921 </span>222
                                        </span>
                                    </div>
                                    <span className="status" style={{ color: 'rgb(255, 152, 0)' }}>2,000,000 VND</span>
                                </div>
                                <div className="suggest-item">
                                    <div style={{ display: 'flex', marginLeft: '22px', alignItems: 'center' }}>
                                        <div className="checkbox-item">
                                            <label className="wrap-input-radio">
                                                <input type="radio" /><span className="new-radio-button" />
                                            </label>
                                        </div>
                                        <span>
                                            <span style={{ color: '#AD8AD8' }}>0210 5921 </span>333</span>
                                    </div>
                                    <span className="status" style={{ color: 'rgb(255, 152, 0)' }}>2,000,000 VND</span>
                                </div>
                                <div className="suggest-item">
                                    <div style={{ display: 'flex', marginLeft: '22px', alignItems: 'center' }}>
                                        <div className="checkbox-item"><label className="wrap-input-radio">
                                            <input type="radio" />
                                            <span className="new-radio-button" />
                                        </label>
                                        </div>
                                        <span>
                                            <span style={{ color: '#AD8AD8' }}>0210 5921 </span>444</span>
                                    </div>
                                    <span className="status" style={{ color: 'rgb(255, 152, 0)' }}>1,000,000 VND</span>
                                </div>
                                <div className="suggest-item">
                                    <div style={{ display: 'flex', marginLeft: '22px', alignItems: 'center' }}>
                                        <div className="checkbox-item">
                                            <label className="wrap-input-radio">
                                                <input type="radio" />
                                                <span className="new-radio-button" /></label>
                                        </div>
                                        <span>
                                            <span style={{ color: '#AD8AD8' }}>0210 5921 </span>555</span>
                                    </div>
                                    <span className="status" style={{ color: 'rgb(255, 152, 0)' }}>1,000,000 VND</span>
                                </div>
                                <div className="suggest-item">
                                    <div style={{ display: 'flex', marginLeft: '22px', alignItems: 'center' }}>
                                        <div className="checkbox-item">
                                            <label className="wrap-input-radio">
                                                <input type="radio" />
                                                <span className="new-radio-button" />
                                            </label>
                                        </div>
                                        <span>
                                            <span style={{ color: '#AD8AD8' }}>0210 5921
                                            </span>666
                                        </span>
                                    </div>
                                    <span className="status" style={{ color: 'rgb(255, 152, 0)' }}>1,000,000 VND</span>
                                </div>
                                <div className="suggest-item">
                                    <div style={{ display: 'flex', marginLeft: '22px', alignItems: 'center' }}>
                                        <div className="checkbox-item">
                                            <label className="wrap-input-radio">
                                                <input type="radio" />
                                                <span className="new-radio-button" />
                                            </label>
                                        </div>
                                        <span>
                                            <span style={{ color: '#AD8AD8' }}>0210 5921 </span>777
                                        </span>
                                    </div>
                                    <span className="status" style={{ color: 'rgb(255, 152, 0)' }}>1,000,000 VND
                                    </span>
                                </div>
                                <div className="suggest-item">
                                    <div style={{ display: 'flex', marginLeft: '22px', alignItems: 'center' }}>
                                        <div className="checkbox-item">
                                            <label className="wrap-input-radio">
                                                <input type="radio" />
                                                <span className="new-radio-button" />
                                            </label>
                                        </div>
                                        <span>
                                            <span style={{ color: '#AD8AD8' }}>0210 5921 </span>111
                                        </span>
                                    </div>
                                    <span className="status" style={{ color: 'rgb(255, 152, 0)' }}>2,000,000 VND
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button className="btn btn-primary btn-next" disabled>
                            <span>Tiếp tục</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SettingNiceAccountPage;