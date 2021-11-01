import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from '../components/education';
import Experience from '../components/experience';
import Skills from '../components/skills';

class Resume extends Component {
    render() {
        return (
             <div className="resume-bg">
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign:'center'}}>
                            <img 
                           
                            src={require("../osagie.jpg")}
                            alt='avatar'
                            style={{height:'200px', borderRadius: '50%'}}
                            />
                        </div>

                        <h2 style={{paddingTop:'2em', textAlign:'center'}}>Esene Ose</h2>
                        <h4 style={{color: 'grey', textAlign:'center'}}>Programmer/Web Developer</h4>
                        <p>Self taught programmer, deeply passionate about web development</p>
                        <hr style={{borderTop:'3px solid #833fb2', width: '100%'}}/>
                        <h5>Address</h5>
                        <p>Ushafa District, Abuja </p>
                        <h5>Phone</h5>
                        <p>+(234) 9016654274, 9066150354</p>
                        <h5>Email</h5>
                        <p>lordra996@gmail.com</p>
                        <p>eseneose96@gmail.com</p>
                        <h5>Web</h5>
                        <p>---------</p>
                        <hr style={{borderTop:'3px solid #833fb2', width: '100%'}}/>


                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education </h2>


                        <Education 
                        startYear={2016}
                        endYear={2018}
                        schoolName="Institute Of Management And Technology(IMT), Enugu"
                        schoolDescription="Studied Chemical Engineering Technology for another 2 years to acquire a Higher National Diploma"
                        />

                        <Education 
                        startYear={2013}
                        endYear={2015}
                        schoolName="Federal Polytechnic Auchi, Auchi"
                        schoolDescription="lStudied Chemical Engineering Technology for 2 years to acquire a National Diploma"
                        />
                        <hr style={{borderTop:'3px solid #e22947'}}/>

                        <h2>Experience</h2>
                        <Experience
                        startYear={2021}
                        endYear={"Currently"}
                        companyName="Sapin Consolidated Group"
                        jobName="Web master/Social media manager"
                        jobDescription="Build and maintaing company's website and manage/advertise on social media and search engine"
                        
                        />
                        <Experience
                        startYear={2020}
                        endYear={2021}
                        companyName="Nigeria Army College of Environmental Science and Technology (NACEST)"
                        jobName="ICT Manager"
                        jobDescription="Maintaining/Updating the school's website and Portal"
                        />
                        <Experience
                        startYear={2019}
                        endYear={2020}
                        companyName="GrowthHaks Digital Solution"
                        jobName="Manager"
                        jobDescription="Acquiring clients organically and helping them promote their businesses on social media"
                        
                        />
                        

                        <hr style={{borderTop:'3px solid #e22947'}}/>

                        <h2>Skills</h2>
                        <Skills
                            skill="javaScript" progress={95}
                        />
                          <Skills
                            skill="html/CSS" progress={75}
                        />
                        <Skills
                            skill="nodeJS" progress={80}
                        /> 
                         <Skills
                            skill="django" progress={40}
                        /> 
                        <Skills
                        skill="react" progress={70}
                    />
                     <Skills
                            skill="python" progress={90}
                        />
                          <Skills
                            skill="Data Science" progress={60}
                        />
                          <Skills
                            skill="Machine Learning" progress={40}
                        />


                    </Cell>
                </Grid>
             </div>
        )
    }
}
export default Resume;