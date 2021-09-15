import './index.css';
function SettingDeviceManagementPage() {
    return (
        <div className="content-wrap">
            <div className="device-content">
                <div className="title">
                    <img src="https://ebank.tpb.vn/retail/vX/assets/icons/ic_device_lock.svg" alt="ic_device_lock"/>
                    <p>Các thiết bị quý khách từng sử dụng để đăng nhập vào ebank</p>
                </div>
                <div className="device-items">
                    <div className="item">
                        <img src="https://ebank.tpb.vn/retail/vX/assets/icons/ic_device_web.svg" alt="ic_device_web"/>
                        <div className="info">
                            <p>Chrome</p>
                            <h4 style={{ color: '#17C37B' }}>Đang đăng nhập</h4>
                        </div>
                        <span>Huỷ liên kết</span>
                    </div>
                    <div className="line" />
                    <div>
                        <p className="otherDeviceTitle">Thiết bị khác</p>
                        <div className="item">
                            <img src="https://ebank.tpb.vn/retail/vX/assets/icons/ic_device_web.svg" alt="ic_device_web"/>
                            <div className="info">
                                <p>Chrome</p>
                                <h4>Đăng nhập lần cuối 21:37 02/03/2021</h4>
                            </div>
                            <span>Huỷ liên kết</span>
                        </div>
                        <div className="line" />
                    </div>
                    <div>
                        <div className="item">
                            <img src="https://ebank.tpb.vn/retail/vX/assets/icons/ic_device_mobile.svg" alt="ic_device_mobile"/>
                            <div className="info">
                                <p>M2010J19CG</p>
                                <h4>Đăng nhập lần cuối 23:21 26/02/2021</h4>
                            </div>
                            <span>Huỷ liên kết</span>
                        </div>
                        <div className="line" />
                    </div>
                    <div>
                        <div className="item">
                            <img src="https://ebank.tpb.vn/retail/vX/assets/icons/ic_device_mobile.svg" alt="ic_device_mobile"/>
                            <div className="info">
                                <p>MI 8</p>
                                <h4>Đăng nhập lần cuối 08:39 30/11/2020</h4>
                            </div>
                            <span>Huỷ liên kết</span>
                        </div>
                        <div className="line" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SettingDeviceManagementPage;