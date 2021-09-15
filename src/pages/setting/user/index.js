import './index.css';

function SettingUserPage() {
    return (
        <div className="content-wrap">
            <div className="customer-info">
                <div className="customer-info__left">
                    <div className="customer-info__full-name" style={{ height: '90px', overflow: 'unset' }}>
                        <div className="title-item">Tên đăng nhập</div>
                        <div>2123
                        </div>
                        <div className="customer-info__btn-edit" tabIndex={0}> Thay đổi</div>
                    </div>
                    <div className="customer-info__full-name">
                        <div className="title-item">Họ và tên</div>
                        <div>TANO</div>
                    </div>
                    <div className="customer-info__phone-number">
                        <div className="title-item">Số điện thoại</div>
                        <div>*** *** *123</div>
                    </div>
                    <div className="customer-info__entity-id">
                        <div className="title-item">Số CMND/Hộ chiếu/Thẻ CCCD</div>
                        <div>123123</div>
                    </div>
                </div>
                <div className="customer-info__right">
                    <div className="customer-info__place-provide pb-3">
                        <div>
                            <div>Nơi cấp</div>
                            <div style={{ color: '#42236a' }}>HA NOI</div>
                        </div>
                        <div>
                            <div style={{ color: '#ad8ad8', fontSize: '14px' }}>Ngày cấp</div>
                            <div>01/01/2011</div>
                        </div>
                    </div>
                    <div className="customer-info__address">
                        <div style={{ position: 'relative' }}>
                            <div className="title-item">Địa Chỉ</div>
                            <div className="full-address">Hà Noi </div>
                            <div className="customer-info__btn-edit" tabIndex={0}> Chỉnh sửa</div>
                        </div>
                    </div>
                    <div className="customer-info__email">
                        <div style={{ position: 'relative' }}>
                            <div className="title-item">Email</div>
                            <div className="email-address">abc@gmail.com</div>
                            <div className="customer-info__btn-edit" tabIndex={0}> Chỉnh sửa</div>
                        </div>
                    </div>
                    <div className="customer-info__images">
                        <div>Hình ảnh xác minh</div>
                        <div className="customer-info__wrap-images" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SettingUserPage;