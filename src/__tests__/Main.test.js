import React from 'react';
import { render, screen, act, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Main from '../containers/Main';

describe('<Main />', () => {
  afterEach(cleanup);

  it('should render Splash component while loading', () => {
    let hasLoggedIn = false;
    jest.useFakeTimers();
    render(
      <Main
        onLogin={() => {
          hasLoggedIn = true;
        }}
      />,
    );
    expect(
      screen.getByText(/Loading text from Splash component/),
    ).toBeInTheDocument(); // Replace with actual text or element from Splash component
    jest.runAllTimers();
    expect(hasLoggedIn).toBe(true); // Make sure onLogin was called
  });

  it('should render NavBar and routing after loading', async () => {
    let hasLoggedIn = false;
    jest.useFakeTimers();
    render(
      <Main
        onLogin={() => {
          hasLoggedIn = true;
        }}
      />,
    );
    act(() => {
      jest.runAllTimers();
    });
    expect(screen.getByText(/Text or element from NavBar/)).toBeInTheDocument(); // Replace with actual text or element from NavBar
    expect(hasLoggedIn).toBe(true); // Make sure onLogin was called
  });
});
