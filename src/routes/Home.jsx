import Banner from "../components/banner/Banner"
import CategoryForU from "../components/categoryforu/CategoryForU"
import SelectedProducts from "../components/selectedproducts/SelectedProducts"


export default function Home() {
    
    return(
        <div>
            <Banner/>
            <CategoryForU/>
            <SelectedProducts/>
        </div>
    )
}