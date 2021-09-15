import './index.css';
function SettingFaqPage() {
    return (
        <div className="content-wrap">
            <div className="faq-content">
                <div className="faq-item expand">
                    <div className="question"> 1. Dịch vụ TPBank eBank có những tính năng gì?
                    </div>
                    <div className="answer">
                        <p> Quý khách có thể sử dụng TPBank eBank để giao dịch với Ngân hàng
                            24/7, mọi lúc mọi nơi (cả trong và ngoài nước), bao gồm các dịch vụ: </p>
                        <ul>
                            <li>Tra cứu thông tin, xem và in sao kê tài khoản</li>
                            <li>Mở tiết kiệm trực tuyến, tra cứu, thay đổi thông tin và tất
                                toán</li>
                            <li>Tra cứu thông tin khoản vay, ứng sổ tiết kiệm</li>
                            <li>Giao dịch chuyển tiền</li>
                            <li>Thanh toán hóa đơn</li>
                            <li>Tra cứu thông tin, thanh toán dư nợ thẻ, khoá và mở khóa thẻ.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="faq-item">
                    <div className="question"> 2. Truy cập TPBank eBank như thế nào? </div>
                    <div className="answer">
                        <p> Quý khách có thể thực hiện giao dịch trên eBank sử dụng mạng
                            Internet thông qua 2 kênh truy cập sau: </p>
                        <ul>
                            <li>Website: <a href="https://ebank.tpb.vn">https://ebank.tpb.vn</a></li>
                            <li>Ứng dụng di động TPBank Mobile: Tải ứng dụng tại <a href="https://itunes.apple.com/vn/app/tpbank-mobile/id450464147?mt=8">iOS</a>&nbsp;<a href="https://play.google.com/store/apps/details?id=com.tpb.mb.gprsandroid&hl=en">Android</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="faq-item">
                    <div className="question"> 3. Đăng ký và nâng cấp tài khoản TPBank eBank như
                        thế nào? </div>
                    <div className="answer">
                        <p> Quý khách có thể đăng ký sử dụng eBank bằng một trong các cách sau
                            đây: </p>
                        <ul>
                            <li>
                                <p> Mang CMND/CCCD/Hộ chiếu tới điểm giao dịch gần nhất của
                                    TPBank <a href="https://tpb.vn/lien-he/tim-diem-giao-dich">tại đây</a> để được hỗ trợ
                                    hoàn thiện thủ tục. </p>
                            </li>
                            <li>
                                <p> Chọn “Đăng ký” trên màn hình chính của ứng dụng điện thoại
                                    và hoàn thiện thủ tục theo các bước được hướng dẫn. </p>
                                <p> TPBank eBank có các loại tài khoản tương ứng với các hạn
                                    mức giao dịch khác nhau. Loại tài khoản của Quý khách được xác định dựa trên
                                    trạng thái hoàn thiện thông tin với ngân hàng. Nếu Quý khách đã có tài khoản
                                    eBank nhưng chưa hoàn thiện xác thực thông tin, vui lòng tới các điểm giao dịch
                                    của TPBank để được hỗ trợ và nâng cấp tài khoản. </p>
                            </li>
                        </ul>
                        <p> TPBank eBank có 3 cấp tài khoản tương ứng với các hạn mức giao
                            dịch khác nhau. Nếu Quý khách đã có tài khoản eBank (cấp 1 hoặc cấp 2) và muốn nâng cấp
                            tài khoản, vui lòng tới các điểm giao dịch của TPBank để được hỗ trợ thêm. </p>
                    </div>
                </div>
                <div className="faq-item">
                    <div className="question"> 4. TPBank eBank có an toàn và bảo mật không? </div>
                    <div className="answer">
                        <p> TPBank eBank kết hợp nhiều lớp bảo mật để đảm bảo an toàn thông
                            tin cho Quý khách trong quá trình sử dụng: </p>
                        <ul>
                            <li> Sử dụng kết hợp giữa lớp bảo mật tĩnh (Tên và mật khẩu đăng
                                nhập) và lớp bảo mật động (các phương thức xác thực khác như OTP, eToken) </li>
                            <li> Thiết lập hạn mức giao dịch tối đa cho một lần và một ngày
                                giao dịch tương ứng với từng cấp tài khoản, phương thức xác thực và loại giao dịch.
                            </li>
                            <li> Thực hiện cảnh báo tới số điện thoại và email của Quý khách
                                trước mỗi giao dịch đáng ngờ, yêu cầu thay đổi thông tin cá nhân hay đăng nhập từ
                                một thiết bị lạ. </li>
                        </ul>
                    </div>
                </div>
                <div className="faq-item">
                    <div className="question"> 5. Các phương thức xác thực trên dịch vụ eBank là
                        gì? </div>
                    <div className="answer">
                        <p> Quý khách sẽ được lựa chọn sử dụng một trong các phương thức xác
                            thực giao dịch sau đây: </p>
                        <ul>
                            <li>
                                <p> Mã PIN Giao dịch / Touch ID / Face ID: xác thực các giao
                                    dịch giá trị dưới 1,000,000 VND </p>
                                <p> - Mã PIN Giao dịch sẽ được Quý khách thiết lập ngay trên
                                    ứng dụng eBank, cho phép xác thực nhanh các giao dịch giá trị thấp. </p>
                                <p> - Tính năng Touch ID/ Face ID sử dụng cảm biến vân tay
                                    trên điện thoại di động và máy tính bảng, giúp đăng nhập cũng như xác thực giao
                                    dịch thay cho mật khẩu/mã PIN một cách tiện lợi và dễ dàng. </p>
                            </li>
                            <li>
                                <p> SMS OTP / eToken/ Hard Token: xác thực các giao dịch giá
                                    trị từ 1,000,000 VND trở lên. </p>
                                <p> - OTP-SMS: Mã OTP sẽ được gửi tới Quý khách thông qua tin
                                    nhắn đến số điện thoại đã đăng ký với TPBank cho mỗi giao dịch được thực hiện.
                                </p>
                                <p> - eToken: Quý khách có thể nhận mã eToken thông qua ứng
                                    dụng di động TPBank eToken. Mã eToken được đăng ký và sử dụng hoàn toàn miễn
                                    phí, mang tính bảo mật cao và có thể xác thực giao dịch ngay cả khi ở nước
                                    ngoài. Để đăng ký eToken, Quý khách vui lòng truy cập ứng dụng TPBank eBank và
                                    chọn Cài đặt Phương thức bảo mật. </p>
                                <p> - Hard Token: Là một thiết bị nhỏ gọn như chiếc USB có thể
                                    mang đi mọi nơi, cung cấp mã xác thực mỗi khi Quý khách thực hiện một giao dịch
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="faq-item">
                    <div className="question"> 6. Hạn mức giao dịch là gì? </div>
                    <div className="answer">
                        <ul style={{ listStyleType: 'lower-alpha' }}>
                            <li>
                                <p> Hạn mức theo loại tài khoản </p>
                                <p> TPBank eBank quy định các hạn mức giao dịch khác nhau
                                    tương ứng với từng loại tài khoản. Loại tài khoản của Quý khách được xác định
                                    dựa trên trạng thái hoàn thiện thông tin với ngân hàng. </p>
                                <p> Đối với tài khoản đã hoàn thiện thông tin (cấp tài khoản
                                    cao nhất), Quý khách sẽ được giao dịch với hạn mức tối đa tương ứng với Phương
                                    thức bảo mật được sử dụng và Loại giao dịch đang thực hiện. </p>
                            </li>
                            <li>
                                <p> Hạn mức theo phương thức xác thực </p>
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td />
                                                <td>Hạn mức theo lần</td>
                                                <td>Hạn mức theo ngày</td>
                                            </tr>
                                            <tr>
                                                <td>SMS OTP</td>
                                                <td>50,000,000</td>
                                                <td>100,000,000</td>
                                            </tr>
                                            <tr>
                                                <td>eToken</td>
                                                <td>50,000,000</td>
                                                <td>100,000,000</td>
                                            </tr>
                                            <tr>
                                                <td>eToken nâng cao</td>
                                                <td>300,000,000</td>
                                                <td>1,500,000,000</td>
                                            </tr>
                                            <tr>
                                                <td>Hard Token</td>
                                                <td>100,000,000</td>
                                                <td>100,000,000</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </li>
                            <li>
                                <p> Hạn mức theo loại giao dịch </p>
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td />
                                                <td>Hạn mức theo lần</td>
                                                <td>Hạn mức theo ngày</td>
                                            </tr>
                                            <tr>
                                                <td>Chuyển tiền trong TPBank</td>
                                                <td>50,000,000</td>
                                                <td>100,000,000</td>
                                            </tr>
                                            <tr>
                                                <td>Chuyển tiền liên ngân hàng</td>
                                                <td>50,000,000</td>
                                                <td>100,000,000</td>
                                            </tr>
                                            <tr>
                                                <td>Thanh toán hóa đơn</td>
                                                <td>50,000,000</td>
                                                <td>100,000,000</td>
                                            </tr>
                                            <tr>
                                                <td>Chuyển tiền chứng khoán</td>
                                                <td>50,000,000</td>
                                                <td>100,000,000</td>
                                            </tr>
                                            <tr>
                                                <td>Chuyển khoản quốc tế</td>
                                                <td>50,000,000</td>
                                                <td>N/A</td>
                                            </tr>
                                            <tr>
                                                <td>Nạp tiền</td>
                                                <td>50,000,000</td>
                                                <td>100,000,000</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="faq-item">
                    <div className="question"> 7. Dịch vụ eBank thu những phí gì? </div>
                    <div className="answer">
                        <p> TPBank eBank miễn phí hoàn toàn cho Quý khách đối với những giao
                            dịch sau: </p>
                        <ul>
                            <li> Đăng ký dịch vụ TPBank eBank </li>
                            <li> Chuyển tiền trong TPBank và chuyển tiền liên ngân hàng </li>
                            <li> Nạp tiền vào tài khoản TPBank từ các ngân hàng nội địa </li>
                        </ul>
                        <p> Quý khách vui lòng tham khảo chi tiết biểu phí dịch vụ <a href="https://tpb.vn/wps/wcm/connect/71613539-d820-4f65-aaf6-ebb53c372ab1/bieu+phi+eBank-+up+web.pdf?MOD=AJPERES&CONVERT_TO=url&CACHEID=ROOTWORKSPACE-71613539-d820-4f65-aaf6-ebb53c372ab1-miIhWeM">tại
                            đây</a>. </p>
                    </div>
                </div>
                <div className="faq-item">
                    <div className="question"> 8. Làm thế nào để yêu cầu hỗ trợ tra soát và khiếu
                        nại </div>
                    <div className="answer">
                        <p> Trong trường hợp gặp khó khăn trong quá trình sử dụng TPBank eBank
                            hoặc cần tra soát giao dịch không thành công, Quý khách vui lòng liên hệ với TPBank
                            thông qua: </p>
                        <ul>
                            <li> Điểm giao dịch của TPBank gần nhất tại đây </li>
                            <li> Liên hệ tới Hotline 1900 585885 </li>
                            <li> Gửi email tới địa chỉ <a href="mailto:dichvu_khachhang@tpb.com.vn">dichvu_khachhang@tpb.com.vn</a></li>
                        </ul>
                        <p> TPBank cam kết sẽ hỗ trợ Quý khách trong thời gian sớm nhất có
                            thể, trong vòng từ 3-15 ngày làm việc phụ thuộc vào thời gian xử lý của các đối
                            tác/trung gian thanh toán. </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SettingFaqPage;