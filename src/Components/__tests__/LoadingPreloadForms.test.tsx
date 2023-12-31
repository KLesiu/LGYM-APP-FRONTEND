import { render,cleanup } from '@testing-library/react';
import LoadingPreloadForms from '../LoadingPreloadForms';

beforeEach(() => {
  jest.clearAllMocks();
});
afterEach(() => {
  cleanup(); 
});

test('renders LoadingPreloadForms component', () => {
  const { getByText, getByTestId } = render(<LoadingPreloadForms />);
  const loadingTextElement = getByText('Loading...');
  expect(loadingTextElement).toBeInTheDocument();
  const iconElement = getByTestId('loadingPreloadFormsIcon');
  expect(iconElement).toHaveClass('animationRotateForms');
});
test('applies animation class to the icon after rendering', () => {
    const { getByTestId } = render(<LoadingPreloadForms />);
    const iconElement = getByTestId('loadingPreloadFormsIcon');
    expect(iconElement).toHaveClass('animationRotateForms');
  });
  
test('renders LoadingPreloadForms component with the correct structure', () => {
    const { getByTestId } = render(<LoadingPreloadForms />);
    const containerElement = getByTestId('loadingPreloadFormsDiv');
    expect(containerElement).toBeInTheDocument();
    const iconElement = getByTestId('loadingPreloadFormsIcon');
    expect(iconElement).toBeInTheDocument();
    const loadingTextElement = getByTestId('loadingPreloadFormsText');
    expect(loadingTextElement).toBeInTheDocument();
  });
  