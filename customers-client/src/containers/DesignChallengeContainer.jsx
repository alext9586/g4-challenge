import React, { Component } from 'react';

class DesignChallengeContainer extends Component {
  componentDidMount() {
    document.title = "Customers Dashboard";
  }

  render() {
    return(
      <div className="container-fluid">
        <div className="dashboard-header">
          <h1>Ally Gent</h1>
          <div className="dashboard-profileimage">
            <h1>
              <a href="/profile"><span role="img" aria-label="Profile Image">✈️</span></a>
            </h1>
          </div>
        </div>

        <div className="row dashboard-body">
          <div className="col dashboard-sidebar--left">
            <ul className="dashboard-sidebarmenu">
              <li><a className="dashboard-profile--link" href="/profile">Edit Profile</a></li>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>

          <div className="col-10 dashboard-content">
            <p>
              Creating a pretty website without the help of a graphic designer is not in my wheelhouse, but I'm trying my best.
              Imagine the following text are graphs and statistics.
            </p>

            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et ex nec purus porttitor egestas. Etiam sagittis sapien quis magna feugiat, et interdum sem pretium. Sed luctus imperdiet tempor. Maecenas eleifend convallis vestibulum. Nullam metus mauris, dictum vel sem quis, mattis tempus ex. Praesent augue elit, euismod vitae varius sit amet, mattis vitae tortor. Sed eu rhoncus metus, ut interdum nibh.
            </p>
          
            <p>
            Phasellus mollis dictum purus non hendrerit. Duis iaculis, ipsum in pharetra malesuada, lectus ligula condimentum purus, vel varius ligula libero ut odio. Nunc sit amet tortor in tortor iaculis semper dignissim in est. Nunc dignissim gravida justo, ac laoreet turpis imperdiet in. Vestibulum interdum ex non felis aliquam, quis rutrum velit vehicula. Pellentesque eleifend tincidunt nisl a cursus. Aliquam sed eleifend metus. Donec commodo sollicitudin sagittis. Cras eu erat facilisis, ultricies ante vel, ullamcorper arcu. Duis blandit condimentum gravida. Proin eu quam sem. In hac habitasse platea dictumst.
            </p>

          </div>
        </div>

        <div className="dashboard-footer">
            Copyright 2019 - Lorem Ipsum Enterprises
          </div>      
      </div>
    );
  }
}

export default DesignChallengeContainer;