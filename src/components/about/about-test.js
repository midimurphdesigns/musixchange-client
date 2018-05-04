
import React from 'react';
import {shallow, mount} from 'enzyme';

import About from './about';

describe('<About />', () => {
    it('Renders without crashing', () => {
        shallow(<About />);
    });
});