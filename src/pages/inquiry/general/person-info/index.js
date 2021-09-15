import './index.css';

function PersonInfoPage() {
    return (
        <div className="content-wrap">
            <div className="personal-info">
                <div className="personal-info-completed">
                    <div className="title">Tài khoản đã hoàn thiện thông tin</div>
                    <div className="upgrade-account-info">
                        <span className="txt-item-upgrade">
                            <i className="fas fa-check icon-check-upgrade" /> Hạn mức giao dịch tối đa</span>
                        <span className="txt-item-upgrade">
                            <i className="fas fa-check icon-check-upgrade" /> Đăng ký mở thẻ ghi nợ quốc tế</span>
                        <span className="txt-item-upgrade">
                            <i className="fas fa-check icon-check-upgrade" /> Đăng ký vay và ứng tiền
                        </span>
                        <span className="txt-item-upgrade">
                            <i className="fas fa-check icon-check-upgrade" /> Nhiều ưu đãi hấp dẫn từ TPBank
                        </span>
                    </div>
                </div>
            </div>
            <div className="customer">
                <div className="customer-left">
                    <div className="customer-left-item user-name" id="personal_information_username">
                        <div className="customer-left-item-content">
                            <div className="header">
                                <span className="txt-label">Tên đăng nhập</span>
                                <span className="txt-action" tabIndex={0}>Thay đổi</span>
                            </div>
                            <span>0123654</span>
                        </div>
                    </div>
                    <div className="customer-left-item" id="personal_information_fullname">
                        <div className="customer-left-item-content">
                            <div className="header">
                                <span className="txt-label">Họ và tên</span>
                            </div>
                            <span className="txt-value">TANO</span>
                        </div>
                    </div>
                    <div className="customer-left-item" id="personal_information_phonenumber">
                        <div className="customer-left-item-content">
                            <div className="header">
                                <span className="txt-label">Số điện thoại</span>
                                <span className="tooltip"><span className="txt-action">Thay đổi</span>
                                    <span className="tooltip-text">
                                        <strong>Thay đổi số điện thoại</strong>
                                        <br />Nếu quý khách muốn thay đổi số điện thoại vui
                                        lòng đến quầy TPBank để được hướng dẫn thêm.<br />
                                        <a href="!#" target="_blank">
                                            <img src="/assets/icons/ic_search_location.svg" alt="ic_search_location"/>
                                            <strong>Tìm quầy TPBank</strong>
                                        </a>
                                    </span>
                                </span>
                            </div>
                            <span className="txt-value">*** *** *796</span>
                        </div>
                    </div>
                    <div className="customer-left-item" id="personal_information_icnumber">
                        <div className="customer-left-item-content non-border-bottom">
                            <div className="header">
                                <span className="txt-label">Số CMND/Hộ chiếu/Thẻ CCCD</span>
                            </div>
                            <span className="txt-value">0123456789</span>
                        </div>
                    </div>
                </div>
                <div className="customer-right">
                    <div className="customer-right-item-provider">
                        <div className="item-left" id="personal_information_daterofic">
                            <div className="date-provide">
                                <div className="header">
                                    <span className="txt-label">Ngày cấp</span>
                                </div>
                                <span className="txt-value">01/01/2020</span>
                            </div>
                        </div>
                        <div className="item-right" id="personal_information_addressofic">
                            <div className="place-provide">
                                <div className="header">
                                    <span className="txt-label">Nơi cấp</span>
                                </div>
                                <span className="txt-value">HA NOI</span>
                            </div>
                        </div>
                    </div>
                    <div className="customer-right-item" id="personal_information_address">
                        <div className="customer-left-item-content">
                            <div className="header">
                                <span className="txt-label">Địa Chỉ</span>
                                <span className="txt-action" tabIndex={0}>Chỉnh sửa
                                </span>
                            </div>
                            <span className="txt-value">AD TH TT Ha Noi</span>
                        </div>
                    </div>
                    <div className="customer-right-item" id="personal_information_email">
                        <div className="customer-left-item-content non-border-bottom">
                            <div className="header">
                                <span className="txt-label">Email
                                </span>
                                <span className="txt-action" tabIndex={0}>Chỉnh sửa</span>
                            </div>
                            <span className="txt-value">2434@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonInfoPage;