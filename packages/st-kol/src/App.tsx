import React, { FC } from 'react';
import { hot } from 'react-hot-loader/root';
import { MiniButton } from '@st/st-components';

interface AppProps {
    name?: string;
}
export const App: FC<AppProps> = () => {
    return (
        <div>
            <h4>Lerna-Kol-App--test</h4>
            <MiniButton />
        </div>
    );
};

export default hot(App);
