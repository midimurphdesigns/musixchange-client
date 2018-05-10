
import React from 'react';
import {shallow, mount} from 'enzyme';

import Loginform from './loginform';

describe('<Loginform />', () => {
    it('Renders without crashing', () => {
        shallow(<Loginform />);
    });
});