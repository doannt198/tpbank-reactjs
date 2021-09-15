import './index.css';
function InquiryAccountPage() {
    return (
        <div className="account-list-content">
            <a className="account-card shadow-btn" href="/retail/vX/main/inquiry/account/transaction?id=02105921501">
                <div className="account-card-left">
                    <img alt="" height={60} src="https://ebank.tpb.vn/retail/vX/assets/images/account-logo.png" width={60} />
                </div>
                <div className="account-card-right">
                    <div className="name">TANO</div>
                    <div className="bban">124234234</div>
                    <div className="money"> 706,555 VND</div>
                </div>
            </a>
        </div>
    );
}

export default InquiryAccountPage;