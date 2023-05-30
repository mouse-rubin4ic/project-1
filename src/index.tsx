import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

// React Element
// const title = React.createElement('h1', { id: 'title' }, 'Hello React')

// JSX
// const app = (
//     <div>
//         <h1 id="text">Hello App</h1>
//         <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolore
//             quisquam sunt dolores vel doloribus molestias fugit aliquam impedit.
//             Maxime ullam reprehenderit ea sapiente sequi id consequatur quod
//             magni deserunt!
//         </p>
//     </div>
// )

type  = TitleProps {
    title: string
}

const Title = (props: TitleProps) => {
    return <h1>Hello {props.title} component</h1>
}
const Content = () => {
    return (
        <div>
            <p className="red">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                minima voluptatem vero hic, in soluta distinctio accusantium
                sapiente cum vel autem debitis adipisci earum expedita neque
                modi molestias praesentium inventore.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                minima voluptatem vero hic, in soluta distinctio accusantium
                sapiente cum vel autem debitis adipisci earum expedita neque
                modi molestias praesentium inventore.
            </p>
        </div>
    )
}

const App = () => {
    return (
        <>
            <Title title="App" />
            <Title title="React" />
            <Content />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
