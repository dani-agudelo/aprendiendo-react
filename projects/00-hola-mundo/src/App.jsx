import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'dani-agudelo',
    name: 'Daniela Agudelo',
    isFollowing: true
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false
  },
  {
    userName: 'mauromorales',
    name: 'Mauro Morales',
    isFollowing: false
  },
  {
    userName: 'santiagomorales',
    name: 'Santiago Morales',
    isFollowing: false
  },
  {
    userName: 'andreacastillo',
    name: 'Andrea Castillo',
    isFollowing: false
  }
]

export function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}

/**
 * Notas: 
 * - //*En el caso de un prop que no se le pasa ningún valor, JSX lo interpreta como true.
 * - Las props deben ser inmutables, por buenas prácticas. Si se debe cambiar algo entonces crear una constante
 * - Existen props que son children, el componente los envuelve. Para usarlos, se le pasa el argumento y se usa {children}
 *   Además, el componente debe tener un inicio y un final, como un div.
 * - //* Se pueden pasar funciones como props: formatUserName= {format}. En el componente TwitterFollowCard se le pasa el 
 *    userName como argumento al callback format.
 * - Se pueden pasar elementos JSX como props. formattedUserName={<strong>@{userName}</strong>}
 * 
 * Diferencia entre componente y elemento:
 * - Un componente es una función que retorna un elemento JSX, es una fabrica de elementos.
 * - Un elemento es una instancia de un componente 
 * 
 * Usar objetos como props:
 * - Se puede pasar un objeto como prop. En el componente se accede a las propiedades del objeto con la notación de punto.
 * - //* Se pone {...objeto} para pasar todas las propiedades del objeto como props.
 * 
 * Estados en React:
 * - Un estado es un objeto que contiene datos que pueden cambiar en el tiempo. 
 * - Para usar estados, se debe importar el hook useState de React.
 * - Vamos a usar useState para saber si el usuario está siguiendo a otro usuario.
 * - //* useState retorna un arreglo con dos elementos: el estado actual y una función que permite cambiar el estado.
 * 
 * Renderizado 
 * - El renderizado en React es muy eficiente, solo se renderizan los elementos que cambian.
 * - Si cambia un componente, React renderiza solo ese componente y sus hijos.
 */