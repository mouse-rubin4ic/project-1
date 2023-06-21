import { Product } from 'utils/productsArray'

type Props = { product: Product; productCount: number }
const CartProductlistItem = ({ product, productCount }: Props) => {
    return (
        <div>
            {product.title}:{productCount}
        </div>
    )
}
export default CartProductlistItem
