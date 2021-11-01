import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>

                        <h2>Esene Ose</h2>
                        <img 
                        src="http://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png" 
                        alt="avatar"
                        style={{height: '250px'}}
                        />
                        <p  style={{width:'75%', margin:'auto', paddingTop: '1em'}}>lorem ipsum suudhj dhhjd skhdcvkhs idjbcdu uikvkj duhfjd xuucjba djjknbvcjvk
                            jhsdyuasg jghyasdhj....
                        </p>
                    </Cell>


                    <Cell col={6}> 
                    <h2>Contact Me</h2>
                    <hr></hr>
                    <div className="contact-list">
                    <List>
                        <ListItem>
                            <ListItemContent style={{fontSize:'30px', fontFamily: 'Anton'}}>
                                <i className="fa fa-phone-square" aria-hidden="true"/>
                               +(234) 9016654274, 8070866604
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                             <ListItemContent style={{fontSize:'30px', fontFamily: 'Anton'}}>
                                <i className="fa fa-whatsapp" aria-hidden="true"/>
                               +(234) 9016654274
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize:'30px', fontFamily: 'Anton'}}>
                                <i className="fa fa-envelope" aria-hidden="true"/>
                              eseneose96@gmail.com
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize:'30px', fontFamily: 'Anton'}}>
                                <i className="fa fa-skype" aria-hidden="true"/>
                              no skype for now
                            </ListItemContent>
                        </ListItem>
                        </List>
                    </div>

                    </Cell>

                </Grid>
            </div>
        )
    }
}
export default Contact;