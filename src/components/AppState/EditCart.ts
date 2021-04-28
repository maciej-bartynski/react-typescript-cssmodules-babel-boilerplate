import { addToCart, removeFromCart } from "./actions/cart";
import { useAppStateMethods } from "./AppState.provider";
import { ICartItem } from "./interfaces/cartItem.interface";

export type T_ManipulateCartItem = (data: ICartItem) => void;
type T_RenderProps = { addToCart: T_ManipulateCartItem, removeFromCart: T_ManipulateCartItem };
type T_RenPopHandleCart = React.FC<{ children: (data: T_RenderProps) => JSX.Element }>;

const EditCart: T_RenPopHandleCart = ({ children }) => {

    const dispatch = useAppStateMethods();

    const handleAddToCart: T_ManipulateCartItem = (payload) => {
        dispatch(addToCart(payload));
    }

    const handleRemoveFromCart: T_ManipulateCartItem = (payload) => {
        dispatch(removeFromCart(payload));
    }

    return children({
        addToCart: handleAddToCart,
        removeFromCart: handleRemoveFromCart
    });
}

export default EditCart;