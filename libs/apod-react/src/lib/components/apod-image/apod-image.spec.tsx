import { render } from '@testing-library/react';

import ApodImage from './apod-image';

describe('ApodImage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ApodImage />);
    expect(baseElement).toBeTruthy();
  });
});
