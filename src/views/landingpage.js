import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';



class Landing extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
<Grid className="landing-grid"> 
    <Cell col={12}>
        <img
        src={require("../osagie.jpg")} alt="avatar" className="avatar-image"
        />

        <div className="banner-text"> <h1>Full Stack Web Developer</h1> 
        
        <hr/>

        <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJs | Express | mySQL</p>
        <div className="social-links"> 

        {/* linkedin */}
        <a href="https://www.linkedin.com/in/esene-ose-8b6a2b1aa/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square"  aria-hidden="true" />
        </a>

           {/* Github */}
           <a href="https://github.com/eseneose" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square"  aria-hidden="true" />
        </a>

           {/* freecodecamp */}
           <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-free-code-camp"  aria-hidden="true" />
        </a>

           {/* youtube */}
           <a href="http://google.com" rel="noopener noreferrer" target="_blank" >
            <i className="fa fa-youtube-square"  aria-hidden="true" />
        </a>

        </div>
        </div>
    </Cell>
</Grid>

            </div>
        )
    }
}
export default Landing;