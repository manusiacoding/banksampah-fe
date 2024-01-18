import React from 'react';

const RenderIF = ({ condition, children }) => {
    return condition ? (<>{children}</>) : null;
};

export default RenderIF;