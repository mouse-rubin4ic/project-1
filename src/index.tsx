import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import Title from './Title'
import { Content } from './Content'

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

const App = () => {
    return (
        <>
            <Title title="App" />
            <Title title="React" num={2} />
            <Content
                text1={
                    'Loefro[serufpsuhfpdlrugpdv  udhpfizuh i igouyg uy  g y guuyg  igiugouygi '
                }
                text2={'Lorem fsggrd rgsdgdtfghfx txhthfj xtfhtx'}
            />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
