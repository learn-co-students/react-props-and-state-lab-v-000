import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import { getAll } from '../src/data/pets';
import Pet from '../src/components/Pet';
import PetBrowser from '../src/components/PetBrowser';

Enzyme.configure({ adapter: new Adapter() });

const ALL_PETS = getAll();

describe('<PetBrowser />', () => {

});
