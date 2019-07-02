import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import Pet from '../src/components/Pet';

Enzyme.configure({ adapter: new Adapter() });

const MALE_DOG = {
  id: '9e7cc723-d7f5-440d-8ead-c311e68014ee',
  type: 'dog',
  gender: 'male',
  age: 8,
  weight: 6,
  name: 'Kennedy',
  isAdopted: false,
};

const FEMALE_CAT = {
  id: '86520b4b-7849-4462-b511-cddc7f416ad6',
  type: 'cat',
  gender: 'female',
  age: 7,
  weight: 6,
  name: 'Cuddles',
  isAdopted: false,
};

const GENDER_ICON_MALE = '♂';
const GENDER_ICON_FEMALE = '♀';

describe('<Pet />', () => {
  describe('Rendering props', () => {
    it('should render the name', () => {
      const wrapper = shallow(<Pet pet={MALE_DOG} />);
      expect(wrapper.text().includes(MALE_DOG.name)).to.be.true;
    });


    it('should render the pet type', () => {
      const wrapper = shallow(<Pet pet={FEMALE_CAT} />);
      expect(wrapper.text().includes(FEMALE_CAT.type)).to.be.true;
    });

    it('should render the pet age', () => {
      const wrapper = shallow(<Pet pet={FEMALE_CAT} />);
      expect(wrapper.text().includes(FEMALE_CAT.age)).to.be.true;
    });

    it('should render the pet weight', () => {
      const wrapper = shallow(<Pet pet={FEMALE_CAT} />);
      expect(wrapper.text().includes(FEMALE_CAT.weight)).to.be.true;
    });
  });


});
