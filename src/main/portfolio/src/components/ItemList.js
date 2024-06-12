import Item from "./Item";
import { useNavigate } from 'react-router-dom';

const ItemList = () => {
    return (
        <>
            <div className="row mt-5">
                <div className="col">
                    itemList
                    <Item />
                </div>
            </div>
        </>
    )
}

export default ItemList;