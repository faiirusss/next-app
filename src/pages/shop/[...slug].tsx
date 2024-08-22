import { useRouter } from "next/router"

const ShopPage = () => {

  const {query} = useRouter()
  console.log(query)
  return (
    <div>
      <h1>Page Shop</h1>
      <p>{query.slug[0]}</p>
      <p>{query.slug[1]}</p>
      <p>{query.slug[2]}</p>
    </div>
  )
}

export default ShopPage