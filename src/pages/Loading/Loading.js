import React from 'react';

const Loading = ({loading}) => {
    if (loading) {
        return (
            <div>
            <h1>
                Loading...
            </h1>
            </div>
        )
    } else {
        return null;
    }
}

export default Loading;