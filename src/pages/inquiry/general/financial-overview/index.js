import './index.css';

function FinancialOverviewPage() {
    return (
        <div className="content-wrap">
            <div className="overview">
                <div className="overview-item" id="financial_overview_balance">
                    <img alt="" src="https://ebank.tpb.vn/retail/vX/assets/icons/inquiry/ic_in_ge_available_balances.svg" />
                    <div className="overview-item-info">
                        <span className="lable">Số dư khả dụng TKTT</span>
                        <span className="amount">706,555 VND</span>
                    </div>
                </div>
                <div className="overview-item" id="financial_overview_loan">
                    <img alt="" src="https://ebank.tpb.vn/retail/vX/assets/icons/inquiry/ic_in_ge_loan.svg" />
                    <div className="overview-item-info">
                        <span className="lable">Khoản vay</span>
                        <span className="amount">0 VND</span>
                    </div>
                </div>
                <div className="overview-item" id="financial_overview_totalsaving">
                    <img alt="" src="https://ebank.tpb.vn/retail/vX/assets/icons/inquiry/ic_in_ge_total_saving.svg" />
                    <div className="overview-item-info">
                        <span className="lable">Tổng tiết kiệm</span>
                        <span className="amount">60,492 VND</span>
                    </div>
                </div>
                <div className="overview-item" id="financial_overview_card_balance">
                    <img alt="" src="https://ebank.tpb.vn/retail/vX/assets/icons/inquiry/ic_in_ge_debit.svg" />
                    <div className="overview-item-info">
                        <span className="lable">Dư nợ thẻ tín dụng</span>
                        <span className="amount">0 VND</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FinancialOverviewPage;