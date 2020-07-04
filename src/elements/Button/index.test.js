import React from 'react';
import { render } from '@testing-library/react';
import Button from './index';
import { BrowserRouter as Router } from 'react-router-dom';

test('should not allowed click button if isDisabled is present', () => {
	const { container } = render(<Button isDisabled>test</Button>);
	expect(container.querySelector('span.disabled')).toBeInTheDocument();
});

test('should render loading/spinner', () => {
	const { container, getByText } = render(<Button isLoading>test</Button>);
	expect(getByText(/loading/i)).toBeInTheDocument();
});

test('should render <a> tag', () => {
	const { container } = render(
		<Button type="link" isExternal>
			test
		</Button>
	);
	expect(container.querySelector('a')).toBeInTheDocument();
});

test('should render Link Componet', () => {
	const { container } = render(
		<Router>
			<Button href="" type="link" isExternal>
				test
			</Button>
		</Router>
	);
	expect(container.querySelector('a')).toBeInTheDocument();
});
