import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import './ProductListItem.scss'

type Props = {
    title: string
    decscription: string
    capacity: string
    type: string
    price: number
    image: string
}
const ProductListItem = ({
    title,
    decscription,
    capacity,
    type,
    price,
    image,
}: Props) => {
    return (
        <Card className="product" variant="outlined">
            <CardContent>
                <div className="product-img">
                    <img src={image} alt="logo" />
                </div>
                <h4 className="product-title">{title}</h4>
                <div className="product-description">{decscription}</div>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Capasity: {capacity} Gb</div>
                <div className="product-price">Price: $ {price}</div>
                <div className="product-quantity">
                    <Button variant="outlined">-</Button>
                    <TextField value="1" size="small" />
                    <Button variant="outlined">+</Button>
                </div>
                <CardActions className="btn-wrap">
                    <Button variant="outlined">Add to cart</Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}
export default ProductListItem
