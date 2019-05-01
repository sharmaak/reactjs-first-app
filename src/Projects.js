import React, {Component} from 'react';
import PROJECTS from './data/projects';

class Project extends Component {
    render() {
        // destructing syntax 
        const {title, description, image} = this.props.project;
        return (
            <div style={{ display: 'inline-block', width:300, height:200, margin: 10}}>
                <h3>{title}</h3>
                <img src={image} style={{width: 100, height: 100}}/>
                <p>{description}</p>
            </div>

        );
    }
}

class Projects extends Component {
    render() {
        return (
            <div>
                <h2>Highlighted Projects</h2>
                {PROJECTS.map(PROJECT => {
                    return <Project key = {PROJECT.id} project={PROJECT}/>
                    })}
            </div>
        )
    }
} 

export default Projects;

