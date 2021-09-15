import './index.css';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import GeneralDefaultPage from './default/index';
import FinancialOverviewPage from './financial-overview';
import PersonInfoPage from './person-info/index';
import EWalletPage from './ewallet/index';
import LimitPage from './limit/index';
import GeneralAppPage from './app/index';
import PeriodicPage from './periodic/index';

function InquiryGeneralPage() {
    let match = useRouteMatch();
    return (
        <Switch>
            <Route path={`${match.path}ewallet`}> <EWalletPage /> </Route>
            <Route path={`${match.path}limit`}> <LimitPage /> </Route>
            <Route path={`${match.path}app`}> <GeneralAppPage /> </Route>
            <Route path={`${match.path}periodic`}> <PeriodicPage /> </Route>
            <Route path={`${match.path}financial-overview`}> <FinancialOverviewPage /> </Route>
            <Route path={`${match.path}person-info`}> <PersonInfoPage /> </Route>
            <Route path={match.path} exact> <GeneralDefaultPage /> </Route>
        </Switch>
    );
}

export default InquiryGeneralPage;