function FooterComponent() {
    return (
        <app-footer>
            <div>
                <div className="footer-1 d-flex justify-content-between">
                    <div className="phone-col">
                        <div className="call-center-text">Tổng đài hỗ trợ</div>
                        <div className="phone-1">
                            <a href="!#">23423423</a>
                            <span className="c247">24/7</span>
                        </div>
                        <div>
                            <a href="!#">23423</a>
                        </div>
                    </div>
                    <div className="footer-column-2">
                        <div>
                            <a href="!#">Câu hỏi thường gặp</a>
                        </div>
                        <div className="mt-1">
                            <a href="!#" target="_blank" rel="noreferrer">Điều khoản sử dụng</a>
                        </div>
                        <div className="mt-1">
                            <a href="!#" target="_blank" rel="noreferrer">Bảo mật thông tin khách hàng</a>
                        </div>
                    </div>
                    <div className="footer-column-3">
                        <div>
                            <a href="!#" target="_blank" rel="noreferrer">Tìm điểm giao dịch</a>
                        </div>
                        <div className="mt-1">
                            <a href="!#" target="_blank" rel="noreferrer">Tìm kiếm vị trí livebank</a>
                        </div>
                    </div>
                    <div className="app-store-col">
                        <div className="download-desc">Tải và cài đặt ứng dụng TPBank eBank  lên thiết bị di động</div>
                        <a href="!#" target="_blank" rel="noreferrer">
                            <img alt="" src="/assets/images/main/download-ios.png" />
                        </a>
                        <a className="ml-4" href="!#" target="_blank" rel="noreferrer">
                            <img alt="" src="/assets/images/main/download-android.png" />
                        </a>
                    </div>
                </div>
                <div className="footer-2">
                    <div className="copyright-text"> © Tano 20121 </div>
                    <div className="social text-right">
                        <a href="!#" target="_blank">
                            <i className="fab fa-facebook-square" />
                        </a>
                        <a className="ml-3" href="!#" target="_blank" rel="noreferrer">
                            <i className="fab fa-youtube" />
                        </a>
                        <a className="ml-3" href="!#" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin" />
                        </a>
                    </div>
                </div>
            </div>
        </app-footer>
    );
}

export default FooterComponent;