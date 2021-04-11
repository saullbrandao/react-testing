import React from 'react'
import Counter from './Counter'
import { fireEvent, render } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

let getByTestId

beforeEach(() => {
    const component = render(<Counter />)
    getByTestId = component.getByTestId
})

test('header renders with correct text', () => {
    const headerEl = getByTestId('header')

    expect(headerEl.textContent).toBe("My Counter")
})

test('counter initially start with text of 0', () => {
    const counterEl = getByTestId('counter')

    expect(counterEl.textContent).toBe('0')
})

test('input contains initial value of 1', () => {
    const inputEl = getByTestId('input')

    expect(inputEl.value).toBe('1')
})

test('add button renders with +', () => {
    const addButton = getByTestId('add-btn')

    expect(addButton.textContent).toBe('+')
})

test('subtract button renders with -', () => {
    const subtractButton = getByTestId('subtract-btn')

    expect(subtractButton.textContent).toBe('-')
})

test('change value of input works correctly', () => {
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
    const addButton = getByTestId('add-btn')
    const counterEl = getByTestId('counter')

    expect(counterEl.textContent).toBe('0')
    fireEvent.click(addButton)
    expect(counterEl.textContent).toBe('1')
})

test('click on subtract button subtracts 1 from the counter', () => {
    const substractButton = getByTestId('subtract-btn')
    const counterEl = getByTestId('counter')

    expect(counterEl.textContent).toBe('0')
    fireEvent.click(substractButton)
    expect(counterEl.textContent).toBe('-1')
})

test('changing input value then clicking on add button works correctly', () => {
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

test('changing input value then clicking on subtract button works correctly', () => {
    const subtractButton = getByTestId('subtract-btn')
    const counterEl = getByTestId('counter')
    const inputEl = getByTestId('input')

    fireEvent.change(inputEl, {
        target: {
            value: 5
        }
    })

    fireEvent.click(subtractButton)
    expect(counterEl.textContent).toBe('-5')
})

test('counter contains correct className', () => {
    const counterEl = getByTestId('counter')
    const inputEl = getByTestId('input')
    const addButton = getByTestId('add-btn')
    const subtractButton = getByTestId('subtract-btn')


    expect(counterEl.className).toBe('')

    fireEvent.change(inputEl, {
        target: {
            value: '50'
        }
    })

    fireEvent.click(addButton)

    expect(counterEl.className).toBe('')

    fireEvent.click(addButton)

    expect(counterEl.className).toBe('green')

    fireEvent.click(addButton)

    expect(counterEl.className).toBe('green')

    fireEvent.click(subtractButton)
    fireEvent.click(subtractButton)

    expect(counterEl.className).toBe('')

    fireEvent.click(subtractButton)
    fireEvent.click(subtractButton)
    fireEvent.click(subtractButton)
    fireEvent.click(subtractButton)

    expect(counterEl.className).toBe('red')
})