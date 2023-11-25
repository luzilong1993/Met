import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Tag from './index';

describe('Tag', () => {
  test('renders Tag', () => {
    render(<Tag>点击</Tag>);
    const linkElement = screen.getByText(/点击/i);
    expect(linkElement).toBeInTheDocument();
  });

  // test('render Icon', () => {
  //   const { container } = render(<Icon type="fixed" className="custom"/>);

  //   expect(container.querySelector('.custom')).toBeInTheDocument();
  // });

  test('should support onClose', () => {
    const onClose = jest.fn();
    const { container } = render(<Tag closable onClose={onClose}>tag</Tag>);
    
    const linkElement = container.querySelector('svg') as SVGSVGElement;
    fireEvent.click(linkElement);

    expect(onClose).toBeCalled();
  });
})


