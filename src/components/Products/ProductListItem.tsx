import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductListItem.scss'

type Props = {
    title: string
    decscription: string
    capacity: string
    type: string
    price: number
}
const ProductListItem = (props: Props) => {
    return (
        <Card className="product" variant="outlined">
            <CardContent>
                <h4 className="product-title">{props.title}</h4>
                <div className="product-description">{props.decscription}</div>
                <div className="product-features">Type: {props.type}</div>
                <div className="product-features">
                    Capasity: {props.capacity} Gb
                </div>
                <div className="product-price">Price: $ {props.price}</div>
                <CardActions className="btn-wrap">
                    <Button variant="outlined">Add to cart</Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}
export default ProductListItem
