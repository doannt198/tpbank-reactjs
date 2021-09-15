import './index.css';

function GeneralAppPage() {
    return (
        <div className="content-wrap">
            <div className="application">
                <div className="application-item">
                    <img alt="" src="/assets/images/icons/inquiry/app_ebank_tpbank.svg" />
                    <span className="app-name"> eBank TPBank </span>
                </div>
                <div className="application-item">
                    <img alt="" src="/assets/images/icons/inquiry/app_used_savy.svg" />
                    <span className="app-name"> Savy </span>
                </div>
                <div className="application-item">
                    <img alt="" src="/assets/images/icons/inquiry/app_used_quickpay.svg" />
                    <span className="app-name"> QuickPay </span>
                </div>
            </div>
        </div>
    );
}

export default GeneralAppPage;