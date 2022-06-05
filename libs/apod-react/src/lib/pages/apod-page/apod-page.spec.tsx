import { render } from '@testing-library/react';

import ApodPage from './apod-page';

describe('ApodPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ApodPage />);
    expect(baseElement).toBeTruthy();
  });
});
