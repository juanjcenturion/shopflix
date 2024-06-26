import Cart from "../routes/Cart"
import DetailsProduct from "../routes/DetailsProduct"
import Favorites from "../routes/Favorites"
import Home from "../routes/Home"
import Products from "../routes/Products"

export const routes = [
    {url:'', element: Home},
    {url:'details_product/:id', element: DetailsProduct},
    {url:'products', element: Products},
    {url:'cart', element: Cart},
    {url:'favorites', element: Favorites},
]