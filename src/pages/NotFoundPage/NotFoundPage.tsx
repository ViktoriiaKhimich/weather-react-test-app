import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export const PageNotFound: FC = () => (
    <div style={{ textAlign: 'center' }}>
        <h1>404 - Not Found!</h1>
        <Link to='/' style={{ color: 'blue', textDecoration: 'underline' }}>
            Go to see the weather in your city
        </Link>
    </div>
);