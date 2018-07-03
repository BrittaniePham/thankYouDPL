import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'

class NavBar extends Component {
  activeItem = (navPath) => {
    return navPath === this.props.location.pathname;
  }

  render() {
    return (
      <div>
        <Menu>
          <Link to='/'>
            <Menu.Item name='home' />
          </Link>
          <Link to='/dpl'>
            <Menu.Item name='Everyone' />
          </Link>
          <Link to='/ThankYou'>
            <Menu.Item name='ThankYou' />
          </Link>
        </Menu>
      </div>
    )
  }
}

export default withRouter(NavBar);