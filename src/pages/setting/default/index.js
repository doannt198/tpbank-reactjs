import './index.css';
function SettingDefaultPage() {
    return (
        <div className="content-wrap">
            <div>
                <div className="content-container">
                    <div className="d-flex flex-nowrap align-items-center justify-content-between">
                        <div className="value-color fw-500 txt-16"> Nhận tiền qua số điện thoại </div>
                        <div>
                            <label className="app-switch">
                                <input type="checkbox" />
                                <span className="app-slider" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="content-container-2 mt-2">
                    <div className="label-color txt-16"> Cho phép người khác chuyển tiền trong TPBank
                        cho Quý khách qua số điện thoại. Tiền sẽ được nhận vào tài khoản liên kết với số điện thoại.
                    </div>
                </div>
                <div className="content-container position-relative">
                    <div className="label-color"> Tài khoản liên kết với số điện thoại </div>
                    <div className="value-color fw-500 txt-16 mt-2"> TANO &nbsp; </div>
                    <div className="value-color fw-500 txt-16 mt-2"> 234341 </div>
                </div>
            </div>
        </div>
    );
}

export default SettingDefaultPage;