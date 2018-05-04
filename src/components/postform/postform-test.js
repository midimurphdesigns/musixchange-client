
import React from 'react';
import {shallow, mount} from 'enzyme';

import Postform from './postform';

describe('<Postform />', () => {
    it('Renders without crashing', () => {
        shallow(<Postform />);
    });
});