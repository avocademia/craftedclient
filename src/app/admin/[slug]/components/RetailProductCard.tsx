import { Product } from "../../../../Types"

export interface ProductCardProps {
  product: Product
}

const RetailProductCard = ({product}: ProductCardProps) => {
    const {name,cost,sold_out,quantity} = product
  return (
    <div>
        <h3>{name}</h3>
        <h4>{cost}</h4>
        <button>{!sold_out?  `${quantity}`:'sold out' }</button>
    </div>
  )
}
export default RetailProductCard