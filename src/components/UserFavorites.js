import React, {Component} from "react"
import data from '../data/data'
import Flowercard from "./Flowercard"
import Favflower from '../components/Favflower'
import '../index.css'

class UserFavorite extends Component {
    render(){

        // toggle buttons for Location and BloomTime
        
        return(
            <div>
                <h1>Your Favorite Flowers</h1>
                <div className="cardWrapperFavorites">
                    {data.map( item => (<Flowercard item ={item} key={item.id}/>))}
                </div>
                <div className="data-buttons">
                    {/* Location
                    Bloom time */}
                </div>
                <div className="flowerLocation">
                    {/* world map with flower icon to show location of favorited flowers */}
                    </div>
                <div className="flowerTimeOfYear">
                    {/* world map with flower icon to show bloom time of year of favorited flowers */}
                </div>
            </div>
        )
    }
}
export default UserFavorite