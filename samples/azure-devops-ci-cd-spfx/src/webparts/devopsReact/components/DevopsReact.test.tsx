import React from "react";
import 'jest';
import toJson from "enzyme-to-json";
import { shallow } from "enzyme";
import DevopsReact from './DevopsReact';
import { IDevopsReactProps } from "./IDevopsReactProps";
import { IUser } from "../services/IUser";

describe('component renders properly', () => {
  const addClickCallback = jest.fn();
  const props = {
    user: {
      FirstName: 'Jane',
      LastName: 'Smith',
      Email: 'Jane.Smith@contoso.com',
      Photo: '',
      JobTitle: 'General Manager',
    } as IUser,
    addNumbers: addClickCallback as any,
    mathValue: 10,
  } as IDevopsReactProps;
  const wrapper = shallow(<DevopsReact {...props} />);
  wrapper.find('button').at(0).simulate('click');
  test('add button is clicked', () => {
    expect(addClickCallback).toHaveBeenCalledTimes(1);
  });
  test('snapshot should match', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
