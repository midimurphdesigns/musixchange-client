
import React from 'react';
import {shallow, mount} from 'enzyme';

import AccountPage from './accountpage';

describe('<AccountPage />', () => {
    it('Renders without crashing', () => {
        shallow(<AccountPage />);
    });
});