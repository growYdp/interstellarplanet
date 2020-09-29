import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Menu, { MenuProps } from './menu'
import MenuItem from './menuItem'

const testProps: MenuProps = {
  defaultIndex: 0,
  onSelect: jest.fn(),
  className: 'test'
}
const testVertical: MenuProps = {
  defaultIndex: 0,
  mode: 'vertical'
}

const defaultProps = {
  onClick: jest.fn()
}
const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem index={0}>active</MenuItem>
      <MenuItem index={1} disabled>disabled</MenuItem>
      <MenuItem index={2}>normal</MenuItem>
    </Menu>
  )
}
let wrapper: RenderResult,
    menuElement: HTMLElement,
    activeElement: HTMLElement,
    disabledElement: HTMLElement

describe('test Menu and MenuItem component', () => {
  beforeEach(() => {
    wrapper = render(generateMenu(testProps))
    menuElement = wrapper.getByTestId('test-menu')
    activeElement = wrapper.getByText('active')
    disabledElement = wrapper.getByText('disabled')
  })
  it('should render correct Menu and MenuItem based on default props', () => {
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass('viking-menu test')
    expect(disabledElement).toHaveClass('menu-item is-disabled')
    expect(activeElement).toHaveClass('menu-item is-active')
    expect(menuElement.getElementsByTagName('li').length).toEqual(3)
  })
  it('click items should change active and call the right callback', () => {
    const thirdItem = wrapper.getByText('normal')
    expect(thirdItem).toHaveClass('menu-item')
    userEvent.click(thirdItem)
    expect(thirdItem).toHaveClass('menu-item is-active')
  })
  it('should render vertical mode when mode is set to vertical', () => {

  })
})