
import React from 'react';
import {shallow, mount} from 'enzyme';

import LoginPage from './loginpage';

describe('<LoginPage />', () => {
    it('Renders without crashing', () => {
        shallow(<LoginPage />);
    });
});