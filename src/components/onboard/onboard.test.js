
import React from 'react';
import {shallow, mount} from 'enzyme';

import Onboard from './onboard';

describe('<Onboard />', () => {
    it('Renders without crashing', () => {
        shallow(<Onboard />);
    });
});