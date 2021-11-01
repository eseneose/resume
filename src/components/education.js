import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl'

class Education extends Component {
    render() {
        return ( <div style={{height: '10%', width: '95%'}}>
<Grid>
<Cell col={4}>
   <p>{this.props.startYear} - {this.props.endYear}</p>
</Cell>
<Cell col={8}>
    <h4 style={{marginTop:'0px'}}>{this.props.schoolName}</h4>
    <p>{this.props.schoolDescription}</p>
</Cell>
</Grid>
</div>
        )

    }
}
export default Education;