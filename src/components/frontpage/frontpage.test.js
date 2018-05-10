
import React from 'react';
import {shallow, mount} from 'enzyme';

import Frontpage from './frontpage';

describe('<Frontpage />', () => {
    it('Renders without crashing', () => {
        shallow(<Frontpage />);
    });
});