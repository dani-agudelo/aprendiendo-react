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
                userName='dani-agudelo'
                name='Daniela Agudelo'
                isFollowing
            />
            <TwitterFollowCard
                userName='Eternalsoull'
                isFollowing={false}
            >
                Victor Manuel 
                
            </TwitterFollowCard>
        </>

    )
}

/**
 * Notas: 
 * - En el caso de un prop que no se le pasa ningún valor, JSX lo interpreta como true.
 * - Las props deben ser inmutables, por buenas prácticas. Si se debe cambiar algo entonces crear una constante
 * - Existen props que son children, el componente los envuelve. Para usarlos, se le pasa el argumento y se usa {children}
 * - Las prop children pueden ser etiquetas también.
 * .....
 * .....
 * .....
 */