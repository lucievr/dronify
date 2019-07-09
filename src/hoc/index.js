import React from 'react';
import RestoServiceContext from '../contexts';

const WithRestoService = () => (Wrapped) => {
    return (props) => {
        return (
            <RestoServiceContext.Consumer>
                <Wrapped {...props} />
            </RestoServiceContext.Consumer>
        )
    }
};

export default WithRestoService;