import './index.css';

function AddLinkPage() {
    return (
        <div className="content-wrap">
            <div className="ewallet-link-content">
                <div className="content-wrapper">
                    <div className="ewallet-choose-account-wrap">
                        <div className="account-info">
                            <div className="title">Từ tài khoản</div>
                            <div className="acc-name">Tano</div>
                            <div className="acc-number">1234321</div>
                            <div className="acc-balance-line">
                                <span className="acc-balance">706,555VND</span>
                                <span className="change-acc-btn">
                                    <span className="text-change text-link" data-toggle="modal" data-target="#ewallet-choose-account-wrap">Đổi</span>
                                    <img alt="right" src="/assets/images/icons/wallet/right.svg" />
                                </span>
                            </div>
                        </div>
                    </div>
                    <form noValidate className="ng-dirty ng-touched ng-valid">
                        <select-container formcontrolname="provider" className="ng-untouched ng-dirty ng-valid">
                            <div className="select-container">
                                <div className="select-container__wrap-top">
                                    <span className="select-container__item-selected">AirPay</span>
                                    <img alt="" className="select-container__icon" src="/assets/images/icons/wallet/chevron-right-solid.svg" width="8px" />
                                </div>
                       
                               <div className="select-container__wrap-items select-container__wrap-items--height">
                                    <div className="select-container__select-option">
                                        AirPay
                                    </div>
                                    <div className="select-container__select-option">
                                        Foxpay
                                    </div>
                                    <div className="select-container__select-option">
                                        Momo
                                    </div>
                                    <div className="select-container__select-option">
                                        Payoo
                                    </div>
                                    <div className="select-container__select-option">
                                        Truemoney
                                    </div>
                                    <div className="select-container__select-option">
                                        VNPT
                                    </div>
                                    <div className="select-container__select-option">
                                        ZaloPay
                                    </div>
                                </div>
                            </div>
                        </select-container>
                        <div className="input-container">
                            <input className="input-phone-wallet ng-dirty ng-valid ng-touched" formcontrolname="ewalletId" inputwalletid spellCheck="false" type="text" placeholder="Số điện thoại đăng ký ví/Số ví" />
                        </div>
                    </form>
                    <div className="term-text">
                        <span>Bằng việc xác nhận quý khách sẽ đồng ý với </span>
                        <a className="show-term-btn" href="https://tpb.vn/wps/wcm/connect/2ac2cee8-2604-487a-a3e1-f7b3493076a9/%C4%90K%C4%90K+Li%C3%AAn+k%E1%BA%BFt+V%C3%AD.pdf?MOD=AJPERES&CVID=mVuH7CU&CVID=mV9imF-" rel="noreferrer" target="_blank">Điều khoản và chính sách sử dụng</a>
                        <span> của TPBank </span>
                    </div>
                    <button className="btn btn-primary btn-next" disabled>Tiếp tục</button>
                </div>
            </div>
            <div className="modal fade" id="ewallet-choose-account-wrap" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Chọn tài khoản</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="change-acc-modal-content-wrapper">
                                <div className="account-info">
                                    <div className="acc-name">TANO</div>
                                    <div className="acc-number">02234234</div>
                                    <div className="acc-balance-line">
                                        <span className="acc-balance">706,555 VND</span>
                                        <span className="change-acc-btn">
                                            <span className="text-change text-link">Chọn</span>
                                            <img alt="" src="https://ebank.tpb.vn/retail/vX/assets/icons/right.svg" /></span>
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

export default AddLinkPage;