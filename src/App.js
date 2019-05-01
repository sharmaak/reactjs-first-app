import React, {Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profilePic from './assets/profile-pic.png';
import './index.css'


class App extends Component {

  state = { toggleTextFlag: false};
  toggleText = () => {
    this.setState({toggleTextFlag: !this.state.toggleTextFlag});
    //console.log("toggleTextFlag =", this.state.toggleTextFlag);
  }

  /* Saved for reference purpose. Moving to Class properties and initializers way of doing things. */
  // constructor() {
  //   super();
  //   this.state = { toggleTextFlag: false };
  //   /* 
  //     Bind `this' with a particular method to ensure `this' is available
  //     in scope of that method. 
  //   */
  //   this.toggleText = this.toggleText.bind(this);
  // }

 

  render() {
    return (
      <div>
        <img src={profilePic} alt='My Pic' className='profile'/>
        <h1>Lorem Ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        
        {
          /* A code-block is always wrapped in curly-brackets {}. This is just like <% %> in JSP. */
          this.state.toggleTextFlag ? ( /* logically bind stuff together using () */
            /* Also, a JSX expression must have a parent tag */
            <div>
              <h3>Where does it come from?</h3>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots 
                in a piece of classical Latin literature from 45 BC, making it over 2000 years 
                old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, 
                looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, 
                and going through the cites of the word in classical literature, discovered the 
                undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de 
                Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by 
                Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very 
                popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum 
                dolor sit amet..", comes from a line in section 1.10.32.
              </p>
              <button onClick={this.toggleText}>Read Less</button>
            </div>
          ) : (
            <div>
              <button onClick={this.toggleText}>Read More</button>
            </div>
          )
        }
        <hr/>
        <Projects/>
        <hr/>
        <SocialProfiles/>
      </div>
    )
  }
}

export default App;