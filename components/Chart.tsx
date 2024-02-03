"use client";

import { createChart, ColorType } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';

type Props = {
	data : ChartData[]
	colors : chartColors
}

export const ChartComponent = ({data , colors:{backgroundColor , textColor , lineColor , areaTopColor , areaBottomColor }}:Props) => {

	const chartContainerRef:any = useRef();

	useEffect(
		() => {
			const handleResize = () => {
				chart.applyOptions({ width: chartContainerRef.current.clientWidth });
			};

			const chart = createChart(chartContainerRef.current, {
				layout: {
					background: { type: ColorType.Solid, color: backgroundColor },
					textColor,
				},
				width: chartContainerRef.current.clientWidth,
				height: chartContainerRef.current.clientHeight,
			});
			chart.timeScale().fitContent();

			const newSeries = chart.addAreaSeries({ lineColor, topColor: areaTopColor, bottomColor: areaBottomColor });
			newSeries.setData(data);

			window.addEventListener('resize', handleResize);

			return () => {
				window.removeEventListener('resize', handleResize);

				chart.remove();
			};
		},
		[data, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]
	);

	return (
		<div className='w-full h-screen'
			ref={chartContainerRef}
		/>
	);
};
