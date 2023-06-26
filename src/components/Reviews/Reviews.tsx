import {
    Button,
    Card,
    CardContent,
    TextField,
    TextareaAutosize,
    Typography,
} from '@mui/material'
import { useState } from 'react'
import { text } from 'stream/consumers'

type Props = {}

type Reviews = {
    name: string
    text: string
}

const Reviews = (props: Props) => {
    const arrReviews: Reviews[] = [
        {
            name: 'Володимир Лисенко',
            text: 'Хороший ноут за свою ціну. В характеристиках написано оперативка 8Гб, а насправді 6.',
        },
        {
            name: 'Антоніна',
            text: 'Так і не можу звикнути до цього екрану, хоча працюю за ноутбуками все життя. Одразу починає боліти голова і виникає ефект захитування. Підігнала під себе всі налаштування, але нічого не допомогло, працювати неможливо, головний біль не проходить ще добу після роботи. Користуюся старим і дуже шкодую про цю покупку. Мабуть, сучасні екрани мають якусь іншу підсвітку, яка так навантажує зір, вперше стикаюся з такою проблемою.',
        },
        {
            name: 'Андрій Феклістов',
            text: 'Чудовий ноутбук, але у мене виникло дві проблеми перша з оновлення м windows 11 виникає помилка 0x80073701 засіб усунення неполадок windows Update нічим нажаль не допоміг , А також в перед установленій програмі Lenovo Vantege',
        },
        {
            name: 'Александр ',
            text: 'Отличный магазин. Оперативно отправили заказ.',
        },
    ]

    const [review, setReviews] = useState<Reviews[]>(arrReviews)

    const [newReview, setNewReview] = useState<Reviews>({
        name: '',
        text: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReview.name === '') {
            alert('All field are required')
        } else {
            setReviews((prevState) => {
                return [...prevState, newReview]
            })

            setNewReview({
                name: '',
                text: '',
            })
        }
    }

    return (
        <div>
            <Typography variant="h4" component={'h2'}>
                Reviews
            </Typography>
            {review.map(({ name, text }, i) => (
                <Card
                    variant="outlined"
                    sx={{
                        margin: '30px 0',
                    }}
                    key={i}
                >
                    <CardContent>
                        <div>{name}:</div>
                        <div>{text}</div>
                    </CardContent>
                </Card>
            ))}
            <form onSubmit={onSend}>
                <h3>Please leave a review</h3>
                <div>
                    <TextField
                        size="small"
                        placeholder="You name"
                        value={newReview.name}
                        onChange={handleName}
                    />
                </div>
                <br />
                <div>
                    <TextareaAutosize
                        minRows={5}
                        placeholder="Your text"
                        value={newReview.text}
                        onChange={handleText}
                    />
                </div>
                <Button variant="outlined" type="submit">
                    Send
                </Button>
            </form>
        </div>
    )
}
export default Reviews
