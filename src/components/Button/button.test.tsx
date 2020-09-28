import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button, { ButtonProps, ButtonType, ButtonSize } from './button'
const defaultProps = {
  onClick: jest.fn()
}

const testProps: ButtonProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
  className: 'klass'
}

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn()
}

// first test
describe('test Button component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button {...defaultProps}>测试</Button>)
    const element = wrapper.getByText('测试') as HTMLButtonElement
    // 判断是否在文档中
    expect(element).toBeInTheDocument()
    // 判断 button tagName
    expect(element.tagName).toEqual('BUTTON')
    // 判断 class
    expect(element).toHaveClass('btn btn-default')
    expect(element.disabled).toBeFalsy()
    // 模拟事件 fireEvent
    userEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })
  it('should render the correct component based on different props', () => {
    const wrapper = render(<Button {...testProps}>测试1</Button>)
    const element = wrapper.getByText('测试1')
    expect(element).toHaveClass('btn-primary btn-lg klass')
  })
  it('should render a link when btnType equals link and href is provided', () => {
    const wrapper = render(<Button btnType={ButtonType.Link} href="http://baidu.com">测试2</Button>)
    const element = wrapper.getByText('测试2')
    expect(element.tagName).toEqual('A')
  })
  it('should render disabled button when disabled set to true', () => {
    const wrapper = render(<Button {...disabledProps}>测试3</Button>)
    const element = wrapper.getByText('测试3') as HTMLButtonElement
    expect(element.disabled).toBeTruthy()
    userEvent.click(element)
    expect(disabledProps.onClick).not.toHaveBeenCalled()
  })
})