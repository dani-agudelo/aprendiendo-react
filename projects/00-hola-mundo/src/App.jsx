/**
 * Ejemplo de creación de un componente funcional en React
 */
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
export function App() {
    const format = (userName) => `@${userName}`
    return (
        <>
            <TwitterFollowCard
                formatUserName={format}
                userName='dani-agudelo'
                name='Daniela Agudelo'
                isFollowing
             />
            <TwitterFollowCard
                formatUserName={format}
                userName='Eternalsoull'
                name='Victory'
                isFollowing={false}
             />
        </>

    )
}