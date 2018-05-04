
import React from 'react';
import {shallow, mount} from 'enzyme';

import Ads from './ads';

describe('<Ads />', () => {
    it('Renders without crashing', () => {
        shallow(<Ads />);
    });
});