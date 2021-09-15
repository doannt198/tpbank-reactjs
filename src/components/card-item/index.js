import { Link } from 'react-router-dom';
function CartItemComponent(link, title, icon) {
    return (
        <div className="card-link-wrapper card-customize shadow-btn">
            <Link className="card-link" style={{ position: 'relative' }} to={link}>
                <div className="card-img">
                    <img alt="internal" src={icon || "/assets/images/icons/transfer/internal.png"} />
                </div>
                <div className="card-name card-color">{title}</div>
            </Link>
        </div>
    );
}

export default CartItemComponent;