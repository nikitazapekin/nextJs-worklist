
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
//import TestApp from '../components/TestApp';
import OffersLeftSidePanel from './OffersLeftSidePanel';
 import useJwt from '../../hooks/useJwt';
//import NavBar from '../components/NavBar/NavBar';
//import useJwt from '../hooks/useJwt';
describe('TEST APP', () => {
/*
  jest.mock('../../hooks/useJwt', () => ({
    __esModule: true,
    default: jest.fn(() => ({ jwtToken: 'mockedToken' })),
  })); */
  test('renders learn react link', () => {

   render(<OffersLeftSidePanel />);
    const helloWorldElem = screen.getByText(/search/i)
   // const btn = screen.getByRole('button')
  //  const input = screen.getByPlaceholderText(/input value/i)
    expect(helloWorldElem).toBeInTheDocument();
   // expect(btn).toBeInTheDocument();
   // expect(input).toMatchSnapshot();
screen.debug()
  });
})
