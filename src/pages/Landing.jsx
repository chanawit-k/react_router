import { useLoaderData } from 'react-router-dom'
import axios from 'axios'

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
export const loader = async () => {
  const searchTerm = ''
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`)
  return { drinks: response.data.drinks, searchTerm }
}

const Landing = () => {
  const { searchTerm, drinks } = useLoaderData()
  return (
    <div>
      {drinks.map((drink) => {
        const { strGlass } = drink
        return <p>{strGlass}</p>
      })}
    </div>
  )
}
export default Landing
