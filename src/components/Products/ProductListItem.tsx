import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import './ProductListItem.scss'
import { useState } from 'react'
import Quantity from 'components/Quantity/Quantity'

type Props = {
    id: number
    title: string
    decscription: string
    capacity: string
    type: string
    price: number
    image: string
    addProductToCart: (id: number, count: number) => void
}
const ProductListItem = ({
    id,
    title,
    decscription,
    capacity,
    type,
    price,
    image,
    addProductToCart,
}: Props) => {
    const [count, setCount] = useState<number>(1)

    const onIncrementClick = () => {
        setCount((prevState) => prevState + 1)
    }
    const onDecrementClick = () => {
        setCount((prevState) => prevState - 1)
    }

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
                <div className="product-price"></div>
                <Quantity
                    count={count}
                    onDecrementClick={onDecrementClick}
                    onIncrementClick={onIncrementClick}
                />
                <CardActions className="btn-wrap">
                    <Button
                        variant="outlined"
                        onClick={() => addProductToCart(id, count)}
                    >
                        Add to cart
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}
export default ProductListItem
