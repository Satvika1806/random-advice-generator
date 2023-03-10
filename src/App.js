import React from 'react';
import axios from 'axios';

import './style.css';


class App extends React.Component {

    state = {id:'',advice: ''};

    componentDidMount(){
        // axios.get();  //console.log('COMPONENT DID MOUNT');
        this.fetchAdvice(); //calling method

    }

    //METHOD : A func that belongs to a class

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        // axios.get('https://api.adviceslip.com/advice/{slip_id}')

            .then((response) => {
                const {advice} = response.data.slip;
                const {id} = response.data.slip;
                // console.log(id);
                this.setState({advice : advice});
                this.setState({id: id});
            })

            .catch((error) => {
                console.log(error);
            }); 
    }

    render(){  

        return(
                
            <div className = "app">

                
                {/* <h1 className= 'headline'> Random Advice Generator </h1> */}
                <h1 className = 'headline'>  Need Random Advice? <br></br>Click on generate button.</h1>
                
                <div className = "card">

                    <p className = "card_title">
                        <span id = "adviceid">
                            {this.state.id}
                        </span>
                    </p> 

                    <div className = "card_content">
                        <p id="title">
                            "{this.state.advice}"
                        </p>
                    </div> 

                    <div className = 'button'>
                        <button id='click' onClick={this.fetchAdvice}>
                            <span> Generate </span>
                        </button>
                    </div>     

                </div>

                <div className = 'footline'>
                    Executed by 
                        <u>
                           <a href = "https://github.com/Satvika1806 "> Satvika</a>
                        </u>
                </div>

            </div>  

        );
    }
}


export default App;