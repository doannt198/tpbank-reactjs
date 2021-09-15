import './index.css';

function PeriodicPage() {
    return (
        <div className="content-wrap">
            <div className="periodic">
                <div className="tab-main">
                    <div className="nav-tab">
                        <div className="nav-tab-button active" id="billing_periodic_list_periodic"> Chuyển tiền định kỳ </div>
                        <div className="nav-tab-button" id="billing_periodic_list_billing" style={{ display: 'flex' }}> Lệnh định kỳ </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PeriodicPage;