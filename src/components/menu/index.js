import {
  Link, useRouteMatch
} from "react-router-dom";

function MyCustomLink({ label, to, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <Link className={match ? "menu-item active" : "menu-item"} to={to}>
      <div className="menu-icon" />
      <div className="menu-name">{label}</div>
    </Link>
  );
}

function MenuComponent() {
  return (
    <div className="left" id="main-menu">
      <div className="main-logo">
        <a href="https://tpb.vn" target="_blank"  rel="noreferrer">
          <img alt="" src="/assets/images/main/logo.png" />
        </a>
      </div>
      <div className="menu">
        <div className="menu-group">
          <Link className="menu-item parent active" to="/main">
            <div className="menu-icon">
              <img alt="" src="/assets/images/main/home-active.png" />
            </div>
            <div className="menu-name">Trang chủ</div>
            <i className="fas fa-chevron-up" />
          </Link>
          <div className="menu-item-list active">
            <MyCustomLink label="Chuyển khoản" to="/transfer" />
            <MyCustomLink label='Hoá đơn' to="/bill" />
            <MyCustomLink label="Nạp tiền điện thoại" to="/mobile" />
            <MyCustomLink label='Tiết kiệm' to="/saving" />
            <MyCustomLink label='Quản lý thẻ' to="/card" />
            <MyCustomLink label='Khoản vay' to="/loan" />
            <MyCustomLink label='Khách hàng thân thiết' to="/loyalty" />
            <MyCustomLink label='Ví điện tử' to="/wallet" />
            <MyCustomLink label='Chuyển Tiền Du Học' to="/overseas-study" />
          </div>
        </div>
        <div className="menu-group">
          <Link className="menu-item parent" to="/inquiry/main">
            <div className="menu-icon">
              <img alt="" src="/assets/images/main/inquiry-inactive.png" />
            </div>
            <div className="menu-name">Tra cứu</div>
            <i className="fas fa-chevron-down" />
          </Link>
          <div className="menu-item-list">
            <MyCustomLink label="Tài khoản" to="/inquiry/inquiry-account" />
            <MyCustomLink label="Tiết kiệm" to="/inquiry/inquiry-saving" />
            <MyCustomLink label="Khoản vay" to="/inquiry/inquiry-loan" />
            <MyCustomLink label="Thẻ tín dụng" to="/inquiry/inquiry-credit-card" />
            <MyCustomLink label="Lệnh chuyển tiền" to="/inquiry/inquiry-transfer" />
            <MyCustomLink label="Thông Tin Tổng Hợp" to="/inquiry/inquiry-general" />
            <MyCustomLink label="Hóa Đơn VAT" to="/inquiry/inquiry-vat" />
          </div>
        </div>
        <div className="menu-group">
          <Link className="menu-item parent" to="/setting">
            <div className="menu-icon">
              <img alt="" src="/assets/images/main/setting-inactive.png" />
            </div>
            <div className="menu-name">Cài Đặt</div>
            <i className="fas fa-chevron-down" />
          </Link>
          <div className="menu-item-list">
            <MyCustomLink label="Nâng cấp tài khoản" to="/setting/setting-upgrade" />
            <MyCustomLink label="Thông tin tài khoản" to="/setting/setting-user" />
            <MyCustomLink label="Đổi mật khẩu" to="/setting/setting-change-password" />
            <MyCustomLink label="Phương thức xác thực GD" to="/setting/setting-auth-method" />
            <MyCustomLink label="Tài khoản liên kết với SĐT" to="/setting/setting-default" />
            <MyCustomLink label="Quản lý thiết bị" to="/setting/setting-device-management" />
            <MyCustomLink label="Câu hỏi thường gặp" to="/setting/setting-faq" />
            <MyCustomLink label="Liên hệ hỗ trợ" to="/setting/setting-support" />
            <MyCustomLink label="Giới thiệu bạn bè" to="/setting/setting-referring" />
            <MyCustomLink label="Mở tài khoản số đẹp" to="/setting/nice-account" />
          </div>
        </div>
      </div>
      <div className="menu-logo">
        <img alt="" src="/assets/images/main/ic_menu_overlay.png" />
      </div>
    </div>
  );
}

export default MenuComponent;