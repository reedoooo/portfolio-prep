import React from 'react';
import { render, screen, act, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Main from '../containers/Main';

describe('<Main />', () => {
  afterEach(cleanup);

  it('should render Splash component while loading', () => {
    jest.useFakeTimers();
    render(<Main onLogin={() => {}} />);
    expect(
      screen.getByText(/Loading text from Splash component/),
    ).toBeInTheDocument(); // Replace with actual text or element from Splash component
    jest.runAllTimers();
  });

  it('should render NavBar and routing after loading', async () => {
    jest.useFakeTimers();
    render(<Main onLogin={() => {}} />);
    act(() => {
      jest.runAllTimers();
    });
    expect(screen.getByText(/Text or element from NavBar/)).toBeInTheDocument(); // Replace with actual text or element from NavBar
  });

  // More tests can be added as necessary, for example, testing specific routes, or specific behaviors.
});
