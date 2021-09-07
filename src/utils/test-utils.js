import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import theme from '../theme';

const customRender = (children) => render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

export { customRender as renderWithTheme };
