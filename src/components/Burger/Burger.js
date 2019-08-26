import React from 'react';

import BurgerIngridient from './BurgerIngridient/BurgerIngridient';
import classes from './Burger.css';

const burger = props => {
  
  const transformedIng = Object.keys(props.ingridients)
    .map(igKey => {
      return [...Array(props.ingridients[igKey])].map((_, i) => <BurgerIngridient key={igKey+i} type={igKey} />);
    })
  
  return (
    <div className={classes.Burger}>
      <BurgerIngridient type="bread-top" />
      {transformedIng}
      <BurgerIngridient type="bread-bottom" />
    </div>
  )
}

export default burger;