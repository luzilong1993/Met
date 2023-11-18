import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from './index';

describe('Button', () => {
  test('renders Button', () => {
    render(<Button>点击</Button>);
    const linkElement = screen.getByText(/点击/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  test('renders normal Button', () => {
    const { container } = render(<Button>点击</Button>);

    expect(container.querySelector('.met-btn-normal')).toBeInTheDocument();
  });

  test('renders primary Button', () => {
    const { container } = render(<Button type="primary">点击</Button>);

    expect(container.querySelector('.met-btn-primary')).toBeInTheDocument();
  });

  test('size', () => {
    const { container } = render(<Button size="large">点击</Button>);

    expect(container.querySelector('.met-btn-large')).toBeInTheDocument();
  });

  test('should support click', () => {
    const onClick = jest.fn();
    const { container } = render(<Button onClick={onClick} type="primary">点击</Button>);
    const linkElement = screen.getByText(/点击/i);
    fireEvent.click(linkElement);
    expect(onClick).toBeCalled();
  });

  test('test support blur', () => {
    const onBlur = jest.fn();
    const { container } = render(<Button onBlur={onBlur} type="primary">点击</Button>);
    const linkElement = screen.getByText(/点击/i);
    fireEvent.click(linkElement);
    fireEvent.blur(linkElement);
    expect(onBlur).toBeCalled();
  });

  test('test support focus', () => {
    const onFocus = jest.fn();
    const { container } = render(<Button onFocus={onFocus} type="primary">点击</Button>);
    const linkElement = screen.getByText(/点击/i);
    fireEvent.focus(linkElement);
    expect(onFocus).toBeCalled();
  });
})


