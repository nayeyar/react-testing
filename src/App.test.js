/** @jest-environment jsdom */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, getAllByRole } from '@testing-library/react';
import { App } from './App';

/**
 * Verify something should render
 */
test('App should render', () => {
  render(<App />);

  expect(screen.getByText('Welcome, party people!')).toBeInTheDocument();
});

test('Button should render', () => {
  // TODO: change the expect to actually test something 😉
  // expect('no test written').toBe('tested');
  render(<App />);
  const btns = screen.getAllByRole('button');
  btns.forEach(element => {
    expect(element).toBeInTheDocument();
    expect(element).toBeEnabled();
  });
});

/**
 * Verify clicking button should change theme
 * hint: use fireEvent.click(element) to trigger a click event on an element
 */
test('theme button should update button text', () => {
  // TODO: change the expect to actually test something 😉
  render(<App />);
  const btns = screen.getAllByRole('button');

  expect(btns[0]).toHaveTextContent('Current theme: light');
  fireEvent.click(btns[0]);
  expect(btns[0]).toHaveTextContent('Current theme: dark');

  expect(btns[1]).toHaveTextContent('Show hidden content');
  fireEvent.click(btns[1]);
  expect(btns[1]).toHaveTextContent('Hide hidden content');
});

// BONUS
// hint: there is a `.toHaveStyle` method.
// e.g.: expect(element).toHaveStyle('color: #FFF');
test('theme button should toggle styles', () => {
  // TODO: change the expect to actually test something 😉
  const bElm = render(<App />);
  const btns = screen.getAllByRole('button');
  expect(bElm.baseElement).toHaveStyle('color: #333');
  expect(bElm.baseElement).toHaveStyle('backgroundColor: #FFF');
  fireEvent.click(btns[0]);
  expect(bElm.baseElement).toHaveStyle('color: #FFF');
  expect(bElm.baseElement).toHaveStyle('backgroundColor: #333');
});

/**
 * Verify clicking button should toggle hidden content
 *
 * hint: you can check if something does not exist by using .not
 * e.g. expect(element).not.toBeInTheDocument()
 *
 * hint: use `queryByText` instead of `getByText` to check if something is _not_ rendered
 * (getByText will throw an error if it is not rendered)
 */
test('hidden button should toggle hidden content', () => {
  // TODO: change the expect to actually test something 😉
  render(<App />);
  const btns = screen.getAllByRole('button');
  // const hiddenText = screen.queryByText('this content is hidden by default');
  // expect(hiddenText).toBe(null);
  // expect(screen.getByText('this content is hidden by default')).toThrow();
  expect(screen.queryByText('this content is hidden by default')).not.toBeInTheDocument();
  fireEvent.click(btns[1]);
  expect(screen.getByText('this content is hidden by default')).toBeInTheDocument();

});


/**
 * Want more? Try these:
 *   - check for the presence of a specific element, like the paragraph containing the text "Click the button to toggle the theme"
 *   - check the for the class name .container on the surrounding div
 *   - after clicking the toggle hidden content button, check for the button text to update to "hide" instead of "show"
 */
