import './index.css';
function SavingAutorollSettingPage() {
    return (
        <div className="content-wrap">
            <div className="autoroll-setting">
                <span className="title-style-1" style={{ textAlign: 'center', marginBottom: '8px' }}>Phương thức tái tục</span>
                <span style={{ fontSize: '16px', marginBottom: '24px', textAlign: 'center' }}> Khi tới
                    hạn quý khách muốn chuyển số tiền gốc và lãi như thế nào </span>
                <form className="saving-resume ng-untouched ng-dirty ng-valid" noValidate>
                    <div formcontrolname="type" className="ng-untouched ng-valid ng-dirty app-radio-group">
                        <div className="app-group-radio ng-untouched ng-pristine ng-valid">
                            <div className="app-wrap-radio item-hide">
                                Chuyển cả gốc và lãi sang kỳ hạn mới
                                <label className="wrap-input-radio">
                                    <input formcontrolname="radioOption" type="radio" className="ng-untouched ng-pristine ng-valid" />
                                    <span className="new-radio-button" />
                                </label>
                            </div>
                            <div className="app-wrap-radio">
                                Nhận lãi, chuyển gốc sang kỳ hạn mới
                                <label className="wrap-input-radio">
                                    <input formcontrolname="radioOption" type="radio" className="ng-untouched ng-pristine ng-valid" />
                                    <span className="new-radio-button radio-checked" />
                                </label>
                            </div>
                            <div className="app-wrap-radio item-hide">
                                Nhận cả gốc và lãi
                                <label className="wrap-input-radio">
                                    <input formcontrolname="radioOption" type="radio" className="ng-untouched ng-pristine ng-valid" />
                                    <span className="new-radio-button" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="wrap-accounts">
                        <div className="wrap-title-style">
                            <hr />
                            <span>Nhận tiền về tài khoản TPBank</span>
                            <hr />
                        </div>
                        <div formcontrolname="account" className="ng-untouched ng-dirty ng-valid">
                            <div className="select-container">
                                <div className="select-container__wrap-top">
                                    <span className="select-container__item-selected">124234234</span>
                                    <img alt="" className="select-container__icon" src="https://ebank.tpb.vn/retail/vX/assets/icons/chevron-right-solid.svg" width="8px" />
                                </div>
                                <div className="select-container__wrap-items select-container__wrap-items--height">
                                    {/* Hiển thị dropdown :  select-container__wrap-items--height */}
                                    <div className="select-container__select-option">
                                        <div className="account-detail">
                                            <span style={{ fontSize: '16px', fontWeight: 500 }}>TANO</span>
                                            <span>124234234</span>
                                            <span>706,555 VND</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-primary" style={{ width: '344px', margin: '0 auto' }} disabled>Tiếp tục</button>
                </form>
            </div>
        </div>
    );
}


export default SavingAutorollSettingPage;