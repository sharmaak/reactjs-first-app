import React, {Component} from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';

class SocialProfile extends Component {

    render() {
        const {icon, link, desc} = this.props.profile;
        return (
            <div style={{display: 'inline-block', margin: 5}} >
                <a href={link} target="_blank">
                    <img src={icon} alt={desc} style={{width:50, height:50}} />
                </a>
            </div>
        );
    }
}

class SocialProfiles extends Component {
    render() {
        return (
            <div>
                <h2>My Social Profiles</h2>
                { SOCIAL_PROFILES.map( PROFILE => 
                    <SocialProfile key={PROFILE.id} profile={PROFILE} />
                    ) 
                }
            </div>
        );
    }
}

export default SocialProfiles;