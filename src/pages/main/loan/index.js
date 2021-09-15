function LoanPage() {
    return (
        <div className="content-wrap">
            <div className="list-card-link">
                <div className="card-link-wrapper card-customize shadow-btn">
                    <a href="!#" className="card-link" style={{ position: 'relative' }}>
                        <div className="card-img">
                            <img alt="" src="./assets/images/icons/loan/overdraft.svg" />
                        </div>
                        <div className="card-name card-color">Ứng tiền từ sổ tiết kiệm</div>
                    </a>
                </div>
                <div className="card-link-wrapper card-customize shadow-btn">
                    <a href="!#" className="card-link" style={{ position: 'relative' }}>
                        <div className="card-img">
                            <img alt="" src="./assets/images/icons/loan/inquiry.svg" />
                        </div>
                        <div className="card-name card-color">Tra cứu khoản vay</div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default LoanPage;