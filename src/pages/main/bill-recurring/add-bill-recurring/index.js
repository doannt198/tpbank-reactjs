import './index.css';
function AddBillRecurringPage() {
    return (
        <div className="content-wrap">
            <div style={{ textAlign: 'center' }}>Chọn dịch vụ cần thanh toán</div>
            <div className="mt-2 mb-3" style={{ borderBottom: '1px solid #E6E9EE' }} />
            <div style={{ width: '50%', marginBottom: '20px' }}>
                <div className="search-input">
                    <input className="form-control" type="text" placeholder="Tìm kiếm dịch vụ" style={{backgroundImage: "url('/assets/images/icons/bill/bill-add-bill/search_normal.3841bb54b2df9a8bde6c.svg')"}}/>
                </div>
            </div>
            <div className="list-card-link">
                <div className="card-link-wrapper card-customize shadow-btn">
                    <a href="!#" className="card-link" style={{ position: 'relative' }}>
                        <div className="card-img">
                            <img alt="electricity" src="/assets/images/icons/bill/bill-add-bill/electricity.svg" />
                        </div>
                        <div className="card-name card-color">Điện</div>
                    </a>
                </div>
                <div className="card-link-wrapper card-customize">
                    <a href="!#" className="card-link shadow-btn" style={{ position: 'relative' }}>
                        <div className="card-img">
                            <img alt="water" src="/assets/images/icons/bill/bill-add-bill/water.svg" />
                        </div>
                        <div className="card-name card-color">Nước</div>
                    </a>
                </div>
                <div className="card-link-wrapper card-customize">
                    <a href="!#" className="card-link shadow-btn" style={{ position: 'relative' }}>
                        <div className="card-img">
                            <img alt="landline-phone" src="/assets/images/icons/bill/bill-add-bill/landline-phone.svg" />
                        </div>
                        <div className="card-name card-color">Điện thoại cố định</div>
                    </a>
                </div>
                <div className="card-link-wrapper card-customize">
                    <a href="!#" className="card-link shadow-btn" style={{ position: 'relative' }}>
                        <div className="card-img">
                            <img alt="phone-bill" src="/assets/images/icons/bill/bill-add-bill/phone-bill.svg" />
                        </div>
                        <div className="card-name card-color">Điện thoại di động trả sau</div>
                    </a>
                </div>
                <div className="card-link-wrapper card-customize">
                    <a href="!#" className="card-link shadow-btn" style={{ position: 'relative' }}>
                        <div className="card-img">
                            <img alt="adsl-internet" src="/assets/images/icons/bill/bill-add-bill/adsl-internet.svg" />
                        </div>
                        <div className="card-name card-color">Cước Internet ADSL</div>
                    </a>
                </div>
                <div className="card-link-wrapper card-customize">
                    <a href="!#" className="card-link shadow-btn" style={{ position: 'relative' }}>
                        <div className="card-img">
                            <img alt="cable-tv" src="/assets/images/icons/bill/bill-add-bill/cable-tv.svg" />
                        </div>
                        <div className="card-name card-color">Cước Truyền hình</div>
                    </a>
                </div>
                <div className="card-link-wrapper card-customize">
                    <a href="!#" className="card-link shadow-btn" style={{ position: 'relative' }}>
                        <div className="card-img">
                            <img alt="tuition" src="/assets/images/icons/bill/bill-add-bill/tuition.svg" />
                        </div>
                        <div className="card-name card-color">Học phí</div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default AddBillRecurringPage;