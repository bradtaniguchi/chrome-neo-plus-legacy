import { act, render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from './app';

describe('App', () => {
  const history = createMemoryHistory();
  beforeAll(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({}),
      })
    ) as Partial<typeof fetch> as typeof fetch;
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should render successfully', async () => {
    let baseElement: HTMLElement | undefined;
    await act(async () => {
      baseElement = render(
        <Router location={history.location} navigator={history}>
          <App />
        </Router>
      ).baseElement;
    });

    expect(baseElement).toBeTruthy();
  });
});
