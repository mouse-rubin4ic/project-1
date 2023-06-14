import { Container } from '@mui/material'
import Home from 'pages/Home'

type Props = {
    addProductToCart: (count: number, price: number) => void
}

const Main = ({ addProductToCart }: Props) => {
    return (
        <Container
            sx={{
                padding: '40px 0',
            }}
        >
            <Home addProductToCart={addProductToCart} />
        </Container>
    )
}

export default Main
