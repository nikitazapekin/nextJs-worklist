import React from "react";

import {render, screen, fireEvent } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

import '@testing-library/jest-dom'
import SliderCarouselComponent from './SliderCarousel';
// import Navbar from "./Navbar";
// import {renderWithRouter} from "../../tests/helpers/renderWithRouter";


describe('USERS TEST', () => {
    test('test user link', async() => {
        render(<SliderCarouselComponent />);
       // render(renderWithRouter(<Navbar />));
        const usersLink = screen.getByTestId('users-link')
        const clickableElement = screen.getByTestId('clickable element 1')
        userEvent.click(usersLink);
        expect(screen.getByTestId('users-link')).toBeInTheDocument()
        expect(screen.getByTestId('clickable element 1')).toBeInTheDocument()
        expect(clickableElement.textContent).toEqual("");
    });
})
//  const usersLink = screen.getByTestId('users-link')