import './index.css';

function BillElectricDetailPage() {
    return (
        <div className="content-wrap">
            <div className="mx-auto" style={{ marginBottom: '18px', maxWidth: '496px' }}>
                <div className="debit-acc-selector">
                    <div className="label-color">Từ tài khoản</div>
                    <div className="fw-500 mt-2"> TRAN NGOC TAN </div>
                    <div className="fw-500"> 0210 5921 501 </div>
                    <div className="fw-500 mt-2" style={{ fontSize: '20px' }}> 5,283 VND </div>
                </div>
            </div>
            <div className="container-bill">
                <div className="content-input ng-pristine ng-touched ng-valid">
                    <div className="info-provider">
                        <div className="text-title">Thanh toán hoá đơn</div>
                        <div className="text-provider">
                            <img alt="" className="icon-logo" src="https://ebank.tpb.vn/gateway/api/contentservices/api/contentstream-id/contentRepository/6d549869-dca9-403d-927c-efe38216c51f?_=1554954768300" />
                            <span className="name-provider">Điện lực TP Hà Nội</span>
                        </div>
                    </div>
                    <div className="input-customer-code">
                        <div className="input-content">
                            <input formcontrolname="customer" maxLength={25} type="text" placeholder="Nhập mã khách hàng" className="ng-pristine ng-touched ng-valid" />
                            <div className="content-tooltip"> Cách lấy mã
                                <img alt="" className="icon-question" src="/assets/images/icons/bill/icons-question-fill.svg" />
                            </div>
                        </div>
                    </div>
                    <div className="btn-payment">
                        <button className="btn btn-primary btn-next-step" disabled>
                            <span>Thanh toán</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BillElectricDetailPage;