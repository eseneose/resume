import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl'

class Experience extends Component {
    render() {
        return ( <div style={{height: '10%', width: '95%'}}>
<Grid>
<Cell col={4}>
   <p>{this.props.startYear} - {this.props.endYear}</p>
</Cell>
<Cell col={8}>
    <h4 style={{marginTop:'0px'}}>{this.props.companyName}</h4>
    <h6 style={{marginTop:'5px'}}>{this.props.jobName}</h6>
    <p>{this.props.jobDescription}</p>
</Cell>
</Grid>
</div>
        )

    }
}
export default Experience;