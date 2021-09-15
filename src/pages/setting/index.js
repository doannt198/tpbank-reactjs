import './index.css';
import { Switch, Route, useRouteMatch } from "react-router-dom";
import SettingNiceAccountPage from './nice-account/index';
import SettingUpgradePage from './upgrade/index';
import SettingUserPage from './user/index';
import SettingChangePasswordPage from './change-password/index';
import SettingAuthMethodPage from './auth-method/index';
import SettingDefaultPage from './default/index';
import SettingDeviceManagementPage from './device-management/index';
import SettingFaqPage from './faq/index';
import SettingSupportPage from './support/index';
import SettingReferringPage from './referring/index';
import MainPage from './main/index';
function SettingPage() {

    let match = useRouteMatch();

    return (
        <Switch>
            <Route path={`${match.path}/nice-account`}> <SettingNiceAccountPage /> </Route>
            <Route path={`${match.path}/setting-upgrade`}> <SettingUpgradePage /> </Route>
            <Route path={`${match.path}/setting-user`}> <SettingUserPage /> </Route>
            <Route path={`${match.path}/setting-change-password`}> <SettingChangePasswordPage /> </Route>
            <Route path={`${match.path}/setting-auth-method`}> <SettingAuthMethodPage /> </Route>
            <Route path={`${match.path}/setting-default`}> <SettingDefaultPage /> </Route>
            <Route path={`${match.path}/setting-device-management`}> <SettingDeviceManagementPage /> </Route>
            <Route path={`${match.path}/setting-faq`}> <SettingFaqPage /> </Route>
            <Route path={`${match.path}/setting-support`}> <SettingSupportPage /> </Route>
            <Route path={`${match.path}/setting-referring`}> <SettingReferringPage /> </Route>
            <Route path={`${match.path}/`} exact> <MainPage /> </Route>
        </Switch>

    );
}

export default SettingPage;