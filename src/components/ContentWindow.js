import React from 'react';
import '../css/ContentWindow.css'

function ContentWindow() {
  return (
    <div className='ContentWindow'>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/section1">
          <Section1 />
        </Route>
        <Route path="/section2">
          <Section2 />
        </Route>
        <Route path="/section3">
          <Section3 />
        </Route>
      </Switch>
    </div>
  );
}

export default ContentWindow;