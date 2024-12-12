import { Icon } from "@iconify/react"
import { Product } from "../../../../Types"

interface SearchBarProps {
    products: Product[],
    setSearchResults: Function
}

const SearchBar = ({products, setSearchResults}: SearchBarProps) => {

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => e.preventDefault()
    const handleSearchResults = (e:React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.value) return setSearchResults(products)

        const searchValue = e.target.value.toLowerCase()
        
        const resultsArray = products.filter(post => 
            post.name.toLowerCase().includes(searchValue) ||
            post.description?.toLowerCase().includes(e.target.value) ||
            post.author?.toLowerCase().includes(e.target.value) ||
            post.book_condition?.includes(e.target.value) ||
            post.category?.toLowerCase().includes(e.target.value) ||
            post.product_condition?.toLowerCase().includes(e.target.value) ||
            post.sub_category?.toLowerCase().includes(e.target.value) ||
            post.summary?.toLowerCase().includes(e.target.value) ||
            post.type.toLowerCase().includes(e.target.value)
        )

        setSearchResults(resultsArray)
    }

    return (
        <article>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleSearchResults} />
                <button type="submit">
                    <Icon icon="mingcute:search-line"/>
                </button>
            </form>
        </article>
  )
}
export default SearchBar