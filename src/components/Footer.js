import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
// import { _ } from '../../store/actions/';

import '../styles/components/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footerContainer" data-testid="footer">
        <Link to="/bebidas">
          <button
            type="button"
            data-testid="drinks-bottom-btn"
            className="footerButton"
            src={ drinkIcon }
          >
            <img src={ drinkIcon } alt="Menu de bebidas" />
          </button>
        </Link>

        <Link to="/explorar">
          <button
            type="button"
            data-testid="explore-bottom-btn"
            className="footerButton"
            src={ exploreIcon }
          >
            <img src={ exploreIcon } alt="Menu de exploração" />
          </button>
        </Link>

        <Link to="/comidas">
          <button
            type="button"
            data-testid="food-bottom-btn"
            className="footerButton"
            src={ mealIcon }
          >
            <img src={ mealIcon } alt="Menu de comidas" />
          </button>
        </Link>
      </div>
    );
  }
}

// _.propTypes = {
//   title: PropTypes.string.isRequired,
//   setToggle: PropTypes.func.isRequired,
//   showButton: PropTypes.bool.isRequired,
// };

// const mapStateToProps = (state) => ({
//   _: state,
// });

// const mapDispatchToProps = (dispatch) => ({
//   _: () => dispatch(_()),
// });

export default connect(null, null)(Footer);
