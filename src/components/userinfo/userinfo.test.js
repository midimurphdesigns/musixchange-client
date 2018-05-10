
import React from 'react';
import {shallow, mount} from 'enzyme';

import UserInfo from './userinfo';

describe('<UserInfo />', () => {
    it('Renders without crashing', () => {
        shallow(<UserInfo />);
    });
});