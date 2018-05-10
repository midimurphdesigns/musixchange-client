
import React from 'react';
import {shallow, mount} from 'enzyme';

import Postpage from './postpage';

describe('<Postpage />', () => {
    it('Renders without crashing', () => {
        shallow(<Postpage />);
    });
});