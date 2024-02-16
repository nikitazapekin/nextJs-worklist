
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom'
import axios from 'axios';

import TestApp from '../components/TestApp';
import { App } from '../components/App';
import RegisterForm from '../components/registerForm/registerForm';
jest.mock('axios')
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


  let response;
  beforeEach(() => {
      response = {
          data: [
              {
                  "id": 1,
                  "name": "Leanne Graham",
              },
              {
                  "id": 2,
                  "name": "Ervin Howell",
              },
              {
                  "id": 3,
                  "name": "Clementine Bauch",
              },
          ]
      }
  })

  afterEach(() => {
      jest.clearAllMocks();
  })



  test('renders learn react link', async () => {
    // render(<App />);
    render(<TestApp />);

    axios.get.mockReturnValue(response);
    render(<Users />);
    const users = await screen.findAllByTestId('user-item');
    expect(users.length).toBe(3);
    expect(axios.get).toBeCalledTimes(1);
    screen.debug();
   /*  const helloWorldElem = screen.getByText(/hello world/i)
     const btn = screen.getByRole('button')
     const input = screen.getByPlaceholderText(/input value/i)
     expect(helloWorldElem).toBeInTheDocument();
     expect(btn).toBeInTheDocument();
     expect(input).toMatchSnapshot(); */
 
   });
}) 
// yarn add --dev @testing-library/jest-dom
// yarn add @types/testing-library__jest-dom
// yarn add --dev @testing-library/jest-dom
// yarn add --dev @babel/plugin-proposal-private-property-in-object





/* import React from 'react';
import { render } from '@testing-library/react';

//import App from './App';
import OffersLeftSidePanel from './OffersLeftSidePanel';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { store } from '../../store';
describe('With React Testing Library', () => {
    const initialState = { output: 10 };
    const mockStore = configureStore();
    let store;

    it('Shows "Hello world!"', () => {
     //   store = mockStore(initialState);
     // store={createStore(houseReducer, { house: defaultState })}
        const { getByText } = render(
            <Provider 
            //store={store}
            store={createStore(houseReducer, { house: defaultState })}
            >
                <OffersLeftSidePanel />
            </Provider>
        );
        const btn = screen.getByRole('button')
        expect(btn).toBeInTheDocument();
      //  expect(getByText('Hello World!')).toBeNull();
    });
});
//yarn add redux-mock-store --dev */









/* import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
//import TestApp from '../components/TestApp';
import OffersLeftSidePanel from './OffersLeftSidePanel';
 import useJwt from '../../hooks/useJwt';
//import NavBar from '../components/NavBar/NavBar';
//import useJwt from '../hooks/useJwt';
import { Provider } from 'react-redux';
describe('TEST APP', () => {

  jest.mock('react-redux', () => {
    const ActualReactRedux = jest.requireActual('react-redux');
    return {
        ...ActualReactRedux,
        useSelector: jest.fn().mockImplementation(() => {
            return mockState;
        }),
    };
})

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
 */
    /*
      jest.mock('../../hooks/useJwt', () => ({
        __esModule: true,
        default: jest.fn(() => ({ jwtToken: 'mockedToken' })),
      })); */



      /* //import {getCounterValue} from "./getCounterValue";
import getAmountOfOffersSlice from "../slices/getAmountOfOffers.slice"

describe('getCounterValue', () => {
    test('work with empty state', () => {
    //    expect(getAmountOfOffersSlice({data})).not.toBe(0)
    expect(getAmountOfOffersSlice({data})).isEmpty()
    })

 
}) */



/*
//import {getCounterValue} from "./getCounterValue";
import getAmountOfOffersSlice from "../slices/getAmountOfOffers.slice";

describe('getAmountOfOffersSlice', () => {
    test('work with empty state', () => {
        // Mocking an empty state with no data
        const emptyState = { data: [] };
        expect(getAmountOfOffersSlice(emptyState)).toHaveLength(0);
    });
});
 */

// import {getCounterValue} from "./getCounterValue";
// import getAmountOfOffersSlice from "../slices/getAmountOfOffers.slice";
// import getOffersSlice from "../slices/getOffers.slice";


/*
import { GetOffersSelector } from "./getOffers.selector";
describe('getAmountOfOffersSlice', () => {
    test('work with empty state', () => {
        // Mocking an empty state with no data
        const emptyState = { data: [] };
    //  expect(GetOffersSelector(state=>state.GetOffersSelector.da)).toHaveLength(0);
    expect(GetOffersSelector(emptyState.data)).not.toHaveLength(0);
    });
}); */