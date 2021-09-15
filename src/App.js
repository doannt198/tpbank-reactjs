import './App.css';
import MenuComponent from "./components/menu/index";
import FooterComponent from "./components/footer/index";
import HeaderComponent from "./components/header/index";
import LoadingCompnent from "./components/loading/index";
import QuickLinkComponent from "./components/quick-link/index";
import TransferPage from "./pages/main/transfer/index";
import BillPage from "./pages/main/bill/index";
import AddBillRecurringPage from "./pages/main/bill-recurring/add-bill-recurring/index";
import BillElectricDetailPage from "./pages/main/bill/bill-electric-detail/index";
import BillRecurringPage from "./pages/main/bill-recurring/index";
import BillElectricPage from "./pages/main/bill/bill-electric/index";
import ChangeCardPinPage from "./pages/main/card/change-card-pin/index";
import CardPage from "./pages/main/card/index";
import LoanPage from "./pages/main/loan/index";
import LoyalPage from "./pages/main/loyal/index";
import LoyalGiftPage from "./pages/main/loyal/loyal-gift/index";
import MobilePage from "./pages/main/mobile/index";
import WalletPage from "./pages/main/wallet/index";
import AddLinkPage from "./pages/main/wallet/add-link/index";
import SavingPage from "./pages/main/saving/index";
import SavingAutorollSettingPage from "./pages/main/saving/autoroll-setting/index";
import SavingDetailPage from "./pages/main/saving/saving-detail/index";
import SavingCreatePackagePage from "./pages/main/saving/create-package/index";
import ChangePackageNamePage from "./pages/main/saving/change-package-name/index";
import NotFoundPage from "./pages/not-found/index";
import OverseasStudyPage from "./pages/main/overseas-study/index";
import InquiryMainPage from "./pages/inquiry/main/index";
import InquiryGeneralPage from "./pages/inquiry/general/index";
import InquiryPage from "./pages/inquiry/index";
import SettingPage from "./pages/setting/index";
import NotificationPage from "./pages/notification/index";
import MainPage from './pages/main/index';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// function generateRouter() {
//   const routes = [
//     { path: 'transfer', component: <TransferPage /> },
//     { path: 'bill', component: <BillPage /> },
//   ];
//   return (
//     <Switch>
//       {routes.map(route => (
//         <Route path={`/${route.path}`}> {route.copmonent} </Route>
//       ))}
//     </Switch>
//   );
// }


function App() {
  return (
    <Router>
      <div className="main-container" onDragStart={() => false} onDrop={() => false}>
        <MenuComponent/>
        <div className="right">
          <div className="main-head-body">
            <HeaderComponent/>
            <div className="page-body">
              <div className="left">
              <Switch>
                  <Route path="/notification"> <NotificationPage/> </Route>
                  <Route path="/transfer"> <TransferPage/> </Route>
                  <Route path="/bill/add-bill-recurring"> <AddBillRecurringPage/> </Route>
                  <Route path="/bill/bill-electric"> <BillElectricPage/> </Route>
                  <Route path="/bill/bill-recurring"> <BillRecurringPage/> </Route>
                  <Route path="/bill/bill-electric-detail"> <BillElectricDetailPage/> </Route>
                  <Route path="/bill"> <BillPage/> </Route>
                  <Route path="/mobile"> <MobilePage/> </Route>
                  <Route path="/saving/autoroll-setting"> <SavingAutorollSettingPage/> </Route>
                  <Route path="/saving/change-package-name"> <ChangePackageNamePage/> </Route>
                  <Route path="/saving/saving-detail"> <SavingDetailPage/> </Route>
                  <Route path="/saving/create-package"> <SavingCreatePackagePage/> </Route>
                  <Route path="/saving"> <SavingPage/> </Route>
                  <Route path="/card/change-card-pin"> <ChangeCardPinPage/> </Route>
                  <Route path="/card"> <CardPage/> </Route>
                  <Route path="/loan"> <LoanPage/> </Route>
                  <Route path="/loyalty/gift"> <LoyalGiftPage/> </Route>
                  <Route path="/loyalty"> <LoyalPage/> </Route>
                  <Route path="/wallet/add-link"> <AddLinkPage/> </Route>
                  <Route path="/wallet"> <WalletPage/> </Route>
                  <Route path="/overseas-study"> <OverseasStudyPage/> </Route>
                  <Route path="/inquiry/main"> <InquiryMainPage/> </Route>
                  <Route path="/inquiry/inquiry-general"> <InquiryGeneralPage/> </Route>
                  <Route path="/inquiry"> <InquiryPage/> </Route>
                  <Route path="/setting"> <SettingPage/> </Route>
                  <Route path="/main"> <MainPage/> </Route>
                  {/* <Route path="" exact> <MainPage/> </Route> */}
                  <Route> <NotFoundPage/> </Route>
                </Switch>
              </div>
              <div className="right">
                <QuickLinkComponent></QuickLinkComponent>
              </div>
            </div>
          </div>
          <FooterComponent/>
        </div>
      </div>
      <LoadingCompnent/>
    </Router>
  );
}

export default App;
