import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import DashboardPage from './dashboard-page';

describe('DashboardPage', () => {
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
      baseElement = render(<DashboardPage />).baseElement;
    });
    expect(baseElement).toBeTruthy();
  });
});
