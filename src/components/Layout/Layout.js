import React from 'react';

import Auxil from '../../hoc/Auxil/Auxil';
import classes from './Layout.module.css';

const layout = (props) => (
  <Auxil>
    <div>Toolbar, SideDraw, Backdrop 1</div>
    <main className={classes.Content}>
      {props.children}
    </main>
  </Auxil>
  
);

export default layout;