import React from 'react';
import { screen } from '@testing-library/react';
import Card from './index';
import { renderWithTheme } from '../../utils/test-utils';
import restaurante from '../../assets/restaurante-fake.png';

const props = {
  title: 'Raio de Sol',
  photo: restaurante,
};

describe('Restaurant Card', () => {
  it('Shoud render ', () => {
    renderWithTheme(<Card {...props} />);
    expect(screen.getByText('Raio de Sol')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveStyle(`background-image: ${restaurante}`);
  });
});
