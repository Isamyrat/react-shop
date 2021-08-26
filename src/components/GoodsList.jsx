import { GoodsItem } from "./GoodsItem";

function GoodsList(props){
    const {goods = [], addToBasket =Function.prototype} = props;
    

    if(!goods.length){
         return <h4>Nothing here</h4>
    }
    return ( <div className="items">
        {goods.map((item) => (
                <GoodsItem  key = {item.id} {...item} addToBasket = {addToBasket} />
        ))}
    </div>
    );
}

export {GoodsList};