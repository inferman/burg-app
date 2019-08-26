import React, { Component } from 'react';

import Auxil from '../../hoc/Auxil/Auxil'
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  state = {
    ingridients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
    }
  };

  render() {
    return (
      <Auxil>
        <Burger ingridients={this.state.ingridients} />
        <div>Build Controls</div>
      </Auxil>
    )
  }
}

export default BurgerBuilder;