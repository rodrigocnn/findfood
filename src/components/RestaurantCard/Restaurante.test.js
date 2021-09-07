import React from 'react';
import { screen } from '@testing-library/react';
import RestaurantCard from './index';
import { renderWithTheme } from '../../utils/test-utils';

const props = {
  title: 'Raio de Sol',
  address: 'Rua João Macedo',
};

describe('Restaurant Card', () => {
  it('Shoud render ', () => {
    renderWithTheme(<RestaurantCard {...props} />);
    expect(screen.getByRole('heading', { name: /Raio de Sol/i })).toBeInTheDocument();
    expect(screen.getByText('Rua João Macedo')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(
      screen.getByLabelText('add rating by typing an integer from 0 to 5 or pressing arrow keys')
    ).toBeInTheDocument();
  });
});
