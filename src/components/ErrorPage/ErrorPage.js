import React from 'react';

const ErrorPage = () => {

    const divStyle = {
        width: '100%',
        height: '0',
        paddingBottom: '56%',
        position: 'relative',
    };
    const gifStyle = {
        width: '100%',
        height: '100%',
        position: 'absolute',
    };

    return (
        <div>
            <p>Error: WINTER IS COMING!</p>

            <div style={divStyle}>
                <iframe 
                style={gifStyle}
                title="gif" 
                src="https://giphy.com/embed/3ohzdUi5U8LBb4GD4s" 
                allowFullScreen></iframe>
            </div>
        </div>
    );
};

export default ErrorPage;