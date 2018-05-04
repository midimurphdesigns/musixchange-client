
import React from 'react';
import {shallow, mount} from 'enzyme';

import SignupPage from './signuppage';

describe('<SignupPage />', () => {
    it('Renders without crashing', () => {
        shallow(<SignupPage />);
    });
});