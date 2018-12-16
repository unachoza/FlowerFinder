import React, {Component} from "react"
import data from '../data/data'
import Favflower from '../components/Favflower'
import '../index.css'


const cardStyles = {
    padding: 25,
    "padding-bottom": 95, 
    height: 210,
    width: 290,
    border: "solid black 3px",
    margin: 10,
    "background-color": "lightpink",
    'font-style': 'bold'
    
}

const descriptionText= {
    "font-size": 10, 

}

class Flowercard extends Component {
    constructor(props) {
		super(props)
		this.state = {
			show: false
		}
		this.toggleFlower = this.toggleFlower.bind(this)
	}

	toggleFlower = () => {
        console.log('flower card was clicked')
		this.setState(prevState => ({
            show: !prevState.show
        }))
	}
    
    render(){
        const { item } = this.props
        // console.log(data[0])
        const imgStyle = {
            
            height: 210,
            width: 290,
        }
       
        /* must make state influence this 
        create a variable and an if statement , ... */
        return(
            <div className = "cardstyle" style= {cardStyles}>
                <div>
                    <div className ='titleText'>
                        {item.flowerName} 
                        <Favflower/>
                    </div> 
                {
                    !this.state.show &&
                    <img alt="flower card"
                        style = {imgStyle}
                        onClick ={this.toggleFlower}
                        src={item.imgUrl} />
                }
                </div>
                { this.state.show && 
                <div className = 'descriptionText'
                    onClick ={this.toggleFlower}>
                    <strong>Scientific Name:  </strong>{item.scientificName} <br/>
                    <strong>Interesting Fact:   </strong>{item.interestingFact} <br/>
                    <strong>Last Bloom:   </strong>{item.lastBloom} <br/>
                    <strong>Location:   </strong>{item.location} </div>
                }
           </div>
        )
    }
}

 class FlowerList extends Component {
     constructor (props){
         super (props)
         this.state = {
             data, 
         }
     }

     render(){
        const {data} = this.state
         return (
             <div 
             className="cardWrapper">
                 {data.map( item => (<Flowercard item ={item} key={item.id}/>))}
             </div>
         )
     }
 }

export default FlowerList;
// export default Flowercard
