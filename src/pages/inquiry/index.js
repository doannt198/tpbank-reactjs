import './index.css';
import { Switch, Route, Link, useRouteMatch} from 'react-router-dom';
import InquiryAccount from './account/index';
import InquirySavingPage from './saving/index';
import InquiryLoan from './loan/index';
import InquiryCreditCard from './credit-card/index';
import InquiryTransferPage from './transfer/index';
import InquiryVatPage from './vat/index';
import VatDetailPage from './vat/vat-detail/index';

function InquiryPage() {
    let match = useRouteMatch();
    return (
        <div className="content-wrap">
            <div className="tab-main" id="tab-enquiry">
                <div className="nav-tab">
                    <Link className="nav-tab-button" routerlinkactive="active" tabIndex={0} to={`${match.url}/inquiry-account`}>Tài khoản </Link>
                    <Link className="nav-tab-button" routerlinkactive="active" tabIndex={0} to={`${match.url}/inquiry-saving`}>Tiết kiệm </Link>
                    <Link className="nav-tab-button" routerlinkactive="active" tabIndex={0} to={`${match.url}/inquiry-credit-card`}>Thẻ tín dụng</Link>
                    <Link className="nav-tab-button" routerlinkactive="active" tabIndex={0} to={`${match.url}/inquiry-loan`}>Khoản vay </Link>
                    <Link className="nav-tab-button" routerlinkactive="active" tabIndex={0} to={`${match.url}/inquiry-transfern`}>Lệnh chuyển tiền</Link>
                </div>
                <Switch>
                    <Route path={`${match.path}/inquiry-account`}> <InquiryAccount /> </Route>
                    <Route path={`${match.path}/inquiry-saving`}> <InquirySavingPage /> </Route>
                    <Route path={`${match.path}/inquiry-loan`}> <InquiryLoan /> </Route>
                    <Route path={`${match.path}/inquiry-credit-card`}> <InquiryCreditCard /> </Route>
                    <Route path={`${match.path}/inquiry-transfer`}> <InquiryTransferPage /> </Route>=
                    <Route path={`${match.path}/inquiry-vat/vat-detail`}> <VatDetailPage /> </Route>
                    <Route path={`${match.path}/inquiry-vat`}> <InquiryVatPage /> </Route>
                </Switch>
            </div>

        </div>
    );
}

export default InquiryPage;