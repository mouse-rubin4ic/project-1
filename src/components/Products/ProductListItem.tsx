import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductListItem.scss'

type Props = {
    title: string
    decscription: string
    capacity: string
    type: string
    price: number
}
const ProductListItem = ({
    title,
    decscription,
    capacity,
    type,
    price,
}: Props) => {
    return (
        <Card className="product" variant="outlined">
            <CardContent>
                <h4 className="product-title">{title}</h4>
                <div className="product-description">{decscription}</div>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Capasity: {capacity} Gb</div>
                <div className="product-price">Price: $ {price}</div>
                <CardActions className="btn-wrap">
                    <Button variant="outlined">Add to cart</Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}
export default ProductListItem
