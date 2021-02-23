import React from 'react';
import ReactDom from 'react-dom';

function Welcome()
    {
      return <h4>Welcome to Our Store</h4>;
    }

ReactDom.render(<Welcome/>,document.getElementById('root'));
