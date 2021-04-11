import React from 'react'
import Counter from './Counter'
import { fireEvent, render } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

test('header renders with correct text', () => {
    const { getByTestId } = render(<Counter />)
    const headerEl = getByTestId('header')

    expect(headerEl.textContent).toBe("My Counter")
})

test('counter initially start with text of 0', () => {
    const { getByTestId } = render(<Counter />)
    const counterEl = getByTestId('counter')

    expect(counterEl.textContent).toBe('0')
})

test('input contains initial value of 1', () => {
    const { getByTestId } = render(<Counter />)
    const inputEl = getByTestId('input')

    expect(inputEl.value).toBe('1')
})

test('add button renders with +', () => {
    const { getByTestId } = render(<Counter />)
    const addButton = getByTestId('add-btn')

    expect(addButton.textContent).toBe('+')
})

test('subtract button renders with -', () => {
    const { getByTestId } = render(<Counter />)
    const subtractButton = getByTestId('subtract-btn')

    expect(subtractButton.textContent).toBe('-')
})

test('change value of input works correctly', () => {
    const { getByTestId } = render(<Counter />)
    const inputEl = getByTestId('input')

    expect(inputEl.value).toBe('1')

    fireEvent.change(inputEl, {
        target: {
            value: '5'
        }
    })

    expect(inputEl.value).toBe('5')

})

test('click on plus button adds 1 to counter', () => {
    const { getByTestId } = render(<Counter />)
    const addButton = getByTestId('add-btn')
    const counterEl = getByTestId('counter')

    expect(counterEl.textContent).toBe('0')
    fireEvent.click(addButton)
    expect(counterEl.textContent).toBe('1')
})

test('click on subtract button subtracts 1 from the counter', () => {
    const { getByTestId } = render(<Counter />)
    const substractButton = getByTestId('subtract-btn')
    const counterEl = getByTestId('counter')

    expect(counterEl.textContent).toBe('0')
    fireEvent.click(substractButton)
    expect(counterEl.textContent).toBe('-1')
})

test('changing input value then clicking on add button works correctly', () => {
    const { getByTestId } = render(<Counter />)
    const addButton = getByTestId('add-btn')
    const counterEl = getByTestId('counter')
    const inputEl = getByTestId('input')

    fireEvent.change(inputEl, {
        target: {
            value: 5
        }
    })

    fireEvent.click(addButton)
    expect(counterEl.textContent).toBe('5')
})