import React, { FC } from 'react';
import { hot } from 'react-hot-loader/root';

interface AppProps {
    name?: string;
}
export const App: FC<AppProps> = () => {
    return (
        <div>
            <h4>Lerna-Kol-App</h4>
        </div>
    );
};

export default hot(App);
