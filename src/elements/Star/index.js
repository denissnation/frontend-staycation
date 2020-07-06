import React from 'react';
import propTypes from 'prop-types';
import './index.scss';

export default function Star({ className, value, height, width, spacing }) {
	const decimal = Number(value) % 1;

	const star = [];
	let leftPos = 0;
	for (let index = 0; index < 5 && index < value - decimal; index++) {
		leftPos = leftPos + width;
		star.push(
			<div
				className="star"
				key={`star-${index}`}
				style={{ left: index * width, height: height, width: width, marginRight: spacing }}
			/>
		);
	}
	if (decimal > 0 && value <= 5)
		star.push(
			<div
				className="star"
				key={`starWithDecimal`}
				style={{ left: leftPos, height: height, width: decimal * width - spacing }}
			/>
		);

	const starPlaceHolder = [];
	for (let index = 0; index < 5; index++) {
		starPlaceHolder.push(
			<div
				className="star placeholder"
				key={`starPlaceholder-${index}`}
				style={{
					left: index * width,
					height: height,
					width: width,
					marginRight: spacing
				}}
			/>
		);
	}
	return (
		<React.Fragment>
			<div className={[ 'stars', className ].join(' ')} style={{ height: height }}>
				{starPlaceHolder}
				{star}
			</div>
		</React.Fragment>
	);
}

Star.propTypes = {
	className: propTypes.string,
	value: propTypes.number,
	width: propTypes.number,
	height: propTypes.number,
	spacing: propTypes.number
};
