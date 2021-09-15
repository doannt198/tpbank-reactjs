import './index.css';

function ChangePackageNamePage() {
    return (
        <div className="content-wrap">
            <div className="edit-new-name">
                <div className="input-new-name">
                    <span className="title-action">Đổi tên gói tiết kiệm</span>
                    <span className="description-action">Nhập tên mới cho gói tiết kiệm</span>
                    <div className="txtNewName" maxLength={100}>
                        <div className="position-relative">
                            <input className="form-control form-control-default fw-500" type="text" placeholder="Tên gói tiết kiệm" maxLength={100} style={{ paddingRight: '12px' }} />
                            <div className="right-content" />
                        </div>
                    </div>
                    <button className="btn-default btn btn-primary ml-3">Cập nhật</button>
                </div>
            </div>
        </div>
    );
}

export default ChangePackageNamePage;