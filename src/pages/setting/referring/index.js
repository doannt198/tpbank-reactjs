function SettingReferringPage() {
    return (
        <div className="content-wrap">
            <div className="referring">
                <div className="referring__left left-center">
                    <div className="referring__left-content">
                        <span className="referring__left-title">Mã giới thiệu của quý khách</span>
                        <div className="referring__left-code">
                            <span>WD57AKK0</span>
                        </div>
                        <div className="referring__left-wrap-link">
                            <span>Sao Chép</span>
                        </div>
                    </div>
                </div>
                <div className="referring__right hide">
                    <div className="referring__right-title">
                        <span>Đã giới thiệu thành công</span>
                    </div>
                    <div className="referring__right-wrap-content" id="content-referring">
                    </div>
                </div>
            </div>
            <div className="referral__noti">
                <span className="referral__noti-text">Đã sao chép vào bộ nhớ tạm</span>
                <img className="referral__noti-close" src="https://ebank.tpb.vn/retail/vX/assets/images/setting/icons-close-line.svg" alt="icons-close-line"/>
            </div>
        </div>
    );
}

export default SettingReferringPage;