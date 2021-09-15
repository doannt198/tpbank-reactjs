import './index.css';

function ChangeCardPinPage() {
    return (
        <div className="content-wrap">
            <div className="content-container-2 mt-4">
                <div className="select-acc-item mt-3 rounded bg-light p-3 position-relative ml-auto mr-auto text-left" style={{ maxWidth: '423px', fontSize: '13px' }}>
                    <div className="mt-2">Thông tin thẻ</div>
                    <div className="mt-2">ATM SMART 24/7</div>
                    <div className="mt-2 fw-500 cardNo">9704 23** **** 0461</div>
                </div>
                <form className="pin-input ng-pristine ng-invalid ng-touched" noValidate>
                    <div className="mt-4">Nhập mã PIN hiện tại</div>
                    <div className="app-eye-textbox" fcname="currentPinCode" placeholder="setting.common.pin_code">
                        <div className="mt-3 password-container ng-pristine ng-invalid ng-touched">
                            <input className="form-control input-password ng-pristine ng-invalid ng-touched" type="password" placeholder="Mã PIN" />
                            <img alt="" src="/assets/images/icons/card/change-card-pin/ic_eye.svg" className="show-password" />
                            <img alt="" src="/assets/images/icons/card/change-card-pin/ic_un-eye.svg" />
                        </div>
                    </div>
                    <div className="mt-4">Nhập mã PIN mới
                        <span className="my-tooltip">
                            <img alt="" className="icon-money-qanda" src="/assets/images/icons/card/change-card-pin/ic_info.svg" style={{ width: '17px' }} />
                            <span className="tooltip-text">Mã PIN mới không được trùng mã PIN cũ</span>
                        </span>
                    </div>
                    <div className="app-eye-textbox" fcname="newPinCode" placeholder="txt_change_pin_new_pin">
                        <div className="mt-3 password-container ng-pristine ng-invalid ng-touched">
                            <input className="form-control input-password ng-pristine ng-invalid ng-touched" type="password" placeholder="Mã PIN mới" />
                            <img alt="" src="/assets/images/icons/card/change-card-pin/ic_eye.svg" className="show-password" />
                            <img alt="" src="/assets/images/icons/card/change-card-pin/ic_un-eye.svg" />
                        </div>
                    </div>
                    <div className="app-eye-textbox" fcname="retypeNewPinCode" placeholder="txt_confirm_new_pin">
                        <div className="mt-3 password-container ng-pristine ng-invalid ng-touched">
                            <input className="form-control input-password ng-untouched ng-pristine ng-invalid" type="password" placeholder="Xác nhận mã PIN mới" />
                            <img alt="" src="/assets/images/icons/card/change-card-pin/ic_eye.svg" className="show-password" />
                            <img alt="" src="/assets/images/icons/card/change-card-pin/ic_un-eye.svg" />
                        </div>
                    </div>
                    <button className="btn btn-primary btn-next mt-4" style={{ width: '100%' }} type="submit" disabled>Tiếp Tục</button>
                </form>
            </div>
        </div>
    );
}

export default ChangeCardPinPage;