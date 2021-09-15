import './index.css';

function MainPage() {
    return (
        <div className="content-wrap">
            <div className="setting">
                <div className="setting__wrap-item-top">
                    <div className="setting__wrap-card">
                        <a className="setting__card-setting" tabIndex={0} href="/setting-upgrade.html">
                            <div className="card-setting-container shadow-btn">
                                <img src="https://ebank.tpb.vn/retail/vX/assets/icons/Icons_Profile.svg" />
                                <div className="card-setting-container__content">
                                    <div className="wrap-update-account">
                                        <div className="setting__upgrade-account-title title-card">
                                            Nâng cấp tài khoản</div>
                                    </div>
                                </div>
                                <i className="card-setting-container__icon-right fas fa-chevron-right" />
                            </div>
                        </a>
                    </div><span className="setting__part-title">Cá nhân</span>
                    <div className="setting__wrap-card">
                        <a className="setting__card-setting" tabIndex={0} href="/setting-change-password.html">
                            <div className="card-setting-container shadow-btn">
                                <img src="https://ebank.tpb.vn/retail/vX/assets/icons/setting/unlock.svg" />
                                <div className="card-setting-container__content">
                                    <div className="title-card">Đổi mật khẩu</div>
                                </div>
                                <i className="card-setting-container__icon-right fas fa-chevron-right" />
                            </div>
                        </a>
                        <div className="setting__card-setting" tabIndex={0}>
                            <a className="card-setting-container shadow-btn" href="/setting-auth-method.html">
                                <img src="https://ebank.tpb.vn/retail/vX/assets/icons/setting/shield.svg" />
                                <div className="card-setting-container__content">
                                    <div className="title-card">Phương thức xác thực giao dịch</div>
                                </div>
                                <i className="card-setting-container__icon-right fas fa-chevron-right" />
                            </a>
                        </div>
                        <div className="setting__card-setting" routerlink="/main/setting/user" tabIndex={0}>
                            <a className="card-setting-container shadow-btn" href="/setting-user.html">
                                <img src="https://ebank.tpb.vn/retail/vX/assets/icons/Icons_Badge.svg" />
                                <div className="card-setting-container__content">
                                    <div className="title-card">Thông tin tài khoản</div>
                                </div>
                                <i className="card-setting-container__icon-right fas fa-chevron-right" />
                            </a>
                        </div>
                        <div className="setting__card-setting" tabIndex={0}>
                            <a className="card-setting-container shadow-btn" href="/setting-default.html">
                                <img src="https://ebank.tpb.vn/retail/vX/assets/icons/Icons_Default_Account.svg" />
                                <div className="card-setting-container__content">
                                    <div className="title-card">Tài khoản liên kết với số điện thoại
                                    </div>
                                </div>
                                <i className="card-setting-container__icon-right fas fa-chevron-right" />
                            </a>
                        </div>
                        <div className="setting__card-setting" tabIndex={0}>
                            <a className="card-setting-container shadow-btn" href="/setting-device-management.html">
                                <img src="https://ebank.tpb.vn/retail/vX/assets/icons/Icons_Manage_Device.svg" />
                                <div className="card-setting-container__content">
                                    <div className="title-card">Quản lý thiết bị</div>
                                </div>
                                <i className="card-setting-container__icon-right fas fa-chevron-right" />
                            </a>
                        </div>
                        <div className="setting__card-setting" tabIndex={0}>
                            <a className="card-setting-container shadow-btn" href="./setting-sms-banking.html">
                                <img src="https://ebank.tpb.vn/retail/vX/assets/icons/Icons_SMS_Banking.svg" />
                                <div className="card-setting-container__content">
                                    <div className="title-card">SMS Banking</div>
                                </div>
                                <i className="card-setting-container__icon-right fas fa-chevron-right" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="setting__wrap-item-center">
                    <span className="setting__part-title title-card">Chung</span>
                    <div className="setting__wrap-card">
                        <div className="setting__card-setting" tabIndex={0}>
                            <a className="card-setting-container shadow-btn" href="/setting-faq.html">
                                <img src="https://ebank.tpb.vn/retail/vX/assets/icons/Icons_Question _ Outline.svg" />
                                <div className="card-setting-container__content">
                                    <div className="title-card">Câu hỏi thường gặp</div>
                                </div>
                                <i className="card-setting-container__icon-right fas fa-chevron-right" />
                            </a>
                        </div>
                        <div className="setting__card-setting" tabIndex={0}>
                            <a className="card-setting-container shadow-btn" href="/setting-support.html">
                                <img src="https://ebank.tpb.vn/retail/vX/assets/icons/Icons_Phone_Calling.svg" />
                                <div className="card-setting-container__content">
                                    <div className="title-card">Liên hệ hỗ trợ</div>
                                </div>
                                <i className="card-setting-container__icon-right fas fa-chevron-right" />
                            </a>
                        </div>
                        <div className="setting__card-setting" tabIndex={0}>
                            <a className="card-setting-container shadow-btn" href="/setting-referring.html">
                                <img src="https://ebank.tpb.vn/retail/vX/assets/icons/Icons_Share.svg" />
                                <div className="card-setting-container__content">
                                    <div className="title-card">Giới thiệu bạn bè</div>
                                </div>
                                <i className="card-setting-container__icon-right fas fa-chevron-right" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="setting__wrap-item-bottom">
                    <span className="setting__part-title">Ứng Dụng</span>
                    <div className="setting__wrap-card">
                        <div className="setting__card-setting setting__card-setting-style-1">
                            <div className="card-setting-container shadow-btn">
                                <img src="https://ebank.tpb.vn/retail/vX/assets/icons/Icons_World.svg" />
                                <div className="card-setting-container__content">
                                    <form className="setting__wrap-lanuage ng-untouched ng-pristine ng-valid" noValidate>
                                        <div className="setting__language-title title-card">Ngôn ngữ
                                        </div>
                                        <div className="setting__language-item">
                                            <span>Tiếng Việt</span>
                                            <label className="wrap-input-radio">
                                                <input formcontrolname="language" type="radio" defaultValue="vi" className="ng-untouched ng-pristine ng-valid" />
                                                <span className="new-radio-button radio-checked" />
                                            </label>
                                        </div>
                                        <div className="setting__language-item">
                                            <span>Tiếng Anh</span>
                                            <label className="wrap-input-radio">
                                                <input formcontrolname="language" type="radio" defaultValue="en" className="ng-untouched ng-pristine ng-valid" />
                                                <span className="new-radio-button" />
                                            </label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;