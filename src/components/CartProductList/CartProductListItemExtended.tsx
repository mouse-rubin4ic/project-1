import { Button, Card, CardContent, Grid } from '@mui/material'
import { Product } from 'utils/productsArray'
import DeleteIcon from '@mui/icons-material/Delete'
import { useContext } from 'react'
import { AppContext } from 'Container/App/App'
import Quantity from 'components/Quantity/Quantity'
import { count } from 'console'

type Props = { product: Product; productCount: number }
const CartProductlistItemExtended = ({ product, productCount }: Props) => {
    const date = useContext(AppContext)

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card>
                <CardContent>
                    <div className="product-img">
                        <img src={product.image} alt="logo" />
                    </div>
                    <div className="prouct-title">{product.title}</div>
                    <div className="product-features">
                        Price for one item: {product.price}
                    </div>
                    <div className="product-features">
                        Count: {productCount}
                    </div>
                    <Quantity
                        count={productCount}
                        onDecrementClick={() =>
                            date?.chanegProductQuantity(
                                product.id,
                                productCount - 1
                            )
                        }
                        onIncrementClick={() =>
                            date?.chanegProductQuantity(
                                product.id,
                                productCount + 1
                            )
                        }
                    />
                    <Button
                        variant="outlined"
                        onClick={() => date?.removeProductFromCart(product.id)}
                    >
                        <DeleteIcon />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}
export default CartProductlistItemExtended
