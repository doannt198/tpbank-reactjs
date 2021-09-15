import './index.css';
function SettingAuthMethodPage() {
    return (
        <div className="content-wrap">
            <div className="show-header-button">
                <div className="button-right-header">
                    <div className="content">
                        <div style={{ cursor: 'pointer' }}> Chính sách Phương Thức Xác Thực
                            <img className="icon-rule" data-toggle="modal" data-target="#auth-policy" src="https://ebank.tpb.vn/retail/vX/assets/icons/icons-question-fill.svg" alt="icons-question-fill"/>
                        </div>
                    </div>
                </div>
                <div className="content-container-2">
                    <div className="fw-500 txt-16"> Phương Thức Xác Thực Đang Sử Dụng </div>
                    <div>
                        <div>
                            <div className="content-container child-2-side fw-500">
                                <div className="txt-16">
                                    <div>
                                        <img className="mr-1" src="https://ebank.tpb.vn/retail/vX/assets/icons/setting/sms-otp.svg" alt="sms-otp"/> SMS/OTP
                                    </div>
                                </div>
                                <div>
                                    <a className="text-secondary" routerlink="/main/setting/auth-method/change-high-risk" href="https://ebank.tpb.vn/retail/vX/main/setting/auth-method/change-high-risk">Thay đổi
                                        <i className="fas fa-chevron-right" />
                                    </a>
                                </div>
                            </div>
                            <div className="label-color mt-2">Phí sử dụng SMS OTP là 20,000 VND/tháng.
                                Quý khách có thể thay đổi sang eToken để tiết kiệm chi phí này.</div>
                        </div>
                    </div>
                    <div className="mt-4 bg-light px-4 py-3 child-2-side rounded-top">
                        <div className="txt-16 fw-500 value-color"> Xác thực nhanh </div>
                        <div>
                            <label className="app-switch">
                                <input type="checkbox" />
                                <span className="app-slider" />
                            </label>
                        </div>
                    </div>
                    <div className="rounded-bottom bg-light px-4 py-3 child-2-side" style={{ marginTop: '1px' }}>
                        <div className="value-color">
                            <img className="mr-1" src="https://ebank.tpb.vn/retail/vX/assets/icons/setting/pin-code.svg" alt="pin-code"/> Mã PIN </div>
                        <div className="text-secondary">
                            <i className="fas fa-check" style={{ fontSize: '20px' }}>
                            </i>
                        </div>
                    </div>
                    <div className="label-color mt-2"> Sử dụng cho các giao dịch giá trị dưới 1,000,000 VND </div>
                    <div className="bg-light px-4 py-3 mt-3 cursor-pointer text-secondary rounded" tabIndex={0}>
                        <a href="/.html"> Cài đặt lại mã PIN </a>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="auth-policy" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Hướng Dẫn Cách Lấy Mã</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="high-security__modal-scroll">
                                <div className="high-security__modal-content">
                                    <div className="auth-method-intro-content">
                                        <ul>
                                            <li>
                                                <p> Mã PIN Giao dịch / Touch ID / Face ID: </p>
                                                <p> - Mã PIN Giao dịch sẽ được Quý khách thiết lập ngay trên ứng
                                                    dụng eBank, cho phép xác thực nhanh các giao dịch giá trị thấp. </p>
                                                <p> - Tính năng Touch ID/ Face ID sử dụng cảm biến vân tay trên
                                                    điện thoại di động và máy tính bảng, giúp đăng nhập cũng như xác thực giao dịch thay
                                                    cho mật khẩu/mã PIN một cách tiện lợi và dễ dàng. </p>
                                            </li>
                                            <li>
                                                <p> SMS OTP / eToken/ Hard Token: </p>
                                                <p> - OTP-SMS: Mã OTP sẽ được gửi tới Quý khách thông qua tin nhắn
                                                    đến số điện thoại đã đăng ký với TPBank cho mỗi giao dịch được thực hiện. </p>
                                                <p> - eToken: Quý khách có thể nhận mã eToken thông qua ứng dụng
                                                    di động TPBank eToken. Mã eToken được đăng ký và sử dụng hoàn toàn miễn phí, mang
                                                    tính bảo mật cao và có thể xác thực giao dịch ngay cả khi ở nước ngoài. Để đăng ký
                                                    eToken, Quý khách vui lòng truy cập ứng dụng TPBank eBank và chọn Cài đặt Phương
                                                    thức bảo mật. </p>
                                                <p> - Hard Token: Là một thiết bị nhỏ gọn như chiếc USB có thể
                                                    mang đi mọi nơi, cung cấp mã xác thực mỗi khi Quý khách thực hiện một giao dịch </p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <span style={{ marginTop: '16px', marginBottom: '8px' }}> Download Ứng dụng eToken tại đây </span>
                                        <div className="wrap-link">
                                            <a href="/" target="_blank">
                                                <img src="https://ebank.tpb.vn/retail/vX/assets/images/download-ios.svg" style={{ marginRight: '16px' }} alt="download-ios"/></a>
                                            <a href="/" target="_blank">
                                                <img src="https://ebank.tpb.vn/retail/vX/assets/images/download-android.svg" alt="download-android"/>
                                            </a>
                                        </div>
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

export default SettingAuthMethodPage;