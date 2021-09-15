import './index.css';

function SettingChangePasswordPage() {
    return (

        <div className="content-wrap">
            <div className="change-password-container">
                <form className="change-passwrod-form ng-untouched ng-pristine ng-invalid" noValidate>
                    <div className="change-passwrod-form__old-password-title">Nhập mật khẩu hiện tại</div>
                    <div>
                        <div className="app-form-field">
                            <div className="change-passwrod-form__wrap-old-password"><input autoCapitalize="off" autoComplete="off" autoCorrect="off" className="app-input-default change-passwrod-form__input-old-pass ng-untouched ng-pristine ng-invalid" formcontrolname="currentPass" nonaccented spellCheck="off" type="password" placeholder="Mật khẩu" />
                                <img src="https://ebank.tpb.vn/retail/vX/assets/icons/icons_eye.svg" alt="icons_eye"/>
                                <img hidden src="https://ebank.tpb.vn/retail/vX/assets/icons/icons_unEye.svg" alt="icons_unEye"/>
                            </div>
                        </div>
                    </div>
                    <div className="change-passwrod-form__new-password-title">Nhập mật khẩu mới </div>
                    <div>
                        <div className="app-form-field">
                            <div className="change-passwrod-form__wrap-new-password">
                            <input autoCapitalize="off" autoComplete="off" autoCorrect="off" className="app-input-default change-passwrod-form__input-new-pass ng-untouched ng-pristine ng-invalid" formcontrolname="newPass" nonaccented spellCheck="off" type="password" placeholder="Mật khẩu" />
                                <img src="https://ebank.tpb.vn/retail/vX/assets/icons/icons_eye.svg" alt="icons_eye"/>
                                <img hidden src="https://ebank.tpb.vn/retail/vX/assets/icons/icons_unEye.svg" alt = "icons_eye"/>
                            </div>
                        </div>
                    </div>
                    <div className="change-passwrod-form__wrap-text-hint">
                        <div className="change-passwrod-form__text-hint">
                            <img src="https://ebank.tpb.vn/retail/vX/assets/icons/ic_check_bold.svg" alt="ic_check_bold" width={12} />
                            <span>Ít nhất 8 ký tự</span>
                        </div>
                        <div className="change-passwrod-form__text-hint" style={{ display: 'flex' }}>
                            <img src="https://ebank.tpb.vn/retail/vX/assets/icons/ic_check_bold.svg" alt="ic_check_bold" style={{ height: 'fit-content' }} width={12} />
                            <span>Bao gồm ký tự viết hoa và viết thường</span>
                        </div>
                        <div className="change-passwrod-form__text-hint">
                            <img src="https://ebank.tpb.vn/retail/vX/assets/icons/ic_check_bold.svg" alt="ic_check_bold" width={12} />
                            <span>Bao gồm ký tự số</span>
                        </div>
                    </div>
                    <button className="btn change-passwrod-form__btn btn-secondary-disable" type="submit" disabled>Cập nhật</button>
                </form>
            </div>
        </div>
    );
}

export default SettingChangePasswordPage;