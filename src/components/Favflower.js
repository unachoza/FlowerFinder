import React, {Component} from 'react'
import { redBright } from 'ansi-colors';


class Favflower extends Component {

    handleClick (){
        console.log('I was clicked')
       
    }
    
    render(){
        const iconStyle ={
            
            height :40,
            width: 80,
            "padding-top": 2,
            
            
            
        }
        
        return (
            <div>
                <img alt="icon" 
                className ='icon'
                onClick={this.handleClick}
                style={iconStyle}
                src='https://res.cloudinary.com/dh41vh9dx/image/upload/ar_16:9,c_fill,g_auto,e_sharpen/v1539961460/flower-icon-1-614x460.png'
                 />
                
            </div>
        )
    }
}
export default Favflower