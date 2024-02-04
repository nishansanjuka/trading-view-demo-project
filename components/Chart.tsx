"use client";

import { createChart, ColorType } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';

type Props = {
	data : ChartData[]
	colors : chartColors
}

export const ChartComponent = ({data , colors:{backgroundColor , textColor , lineColor , areaTopColor , areaBottomColor }}:Props) => {

	const chartContainerRef:any = useRef();

	const currentDate = new Date(data[data.length - 1].time);

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


			const interval = setInterval(() => {
				currentDate.setDate(currentDate.getDate() + 1);
				const next = {
					time: currentDate.toISOString().slice(0, 10),
					value: 53 - 2 * Math.random(),
				};
				newSeries.update(next);
			}, 1000);

			window.addEventListener('resize', handleResize);

			return () => {
				window.removeEventListener('resize', handleResize);
				clearInterval(interval);
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
