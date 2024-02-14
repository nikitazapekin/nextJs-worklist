
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import TestApp from '../components/TestApp';
import { App } from '../components/App';
import RegisterForm from '../components/registerForm/registerForm';
describe('TEST APP', () => {
  test('renders learn react link', () => {
   // render(<App />);
   render(<TestApp />);
    const helloWorldElem = screen.getByText(/hello world/i)
    const btn = screen.getByRole('button')
    const input = screen.getByPlaceholderText(/input value/i)
    expect(helloWorldElem).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toMatchSnapshot();

  });
}) 
//yarn add --dev @testing-library/jest-dom
//yarn add @types/testing-library__jest-dom
//yarn add --dev @testing-library/jest-dom
//yarn add --dev @babel/plugin-proposal-private-property-in-object

