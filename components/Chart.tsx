"use client";

import { createChart, ColorType } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';

type Props = {
	data : ChartData[]
	colors : chartColors
}

export const ChartComponent = ({data , colors:{backgroundColor , textColor , vertlines , horzlines }}:Props) => {

	const chartContainerRef:any = useRef();

	useEffect(
		() => {

			const handleResize = () => {
				chart.applyOptions({ width: chartContainerRef.current.clientWidth , height: chartContainerRef.current.clientHeight});
			};

			const chart = createChart(chartContainerRef.current, {
				layout: {
					background: { type: ColorType.Solid, color: backgroundColor },
					textColor,
				},
				grid : {
					vertLines:{color:vertlines},
					horzLines:{color:horzlines}
				},
				width: chartContainerRef.current.clientWidth,
				height: chartContainerRef.current.clientHeight,
			});

			chart.addCandlestickSeries().setData(data);

			window.addEventListener('resize', handleResize);

			return () => {
				window.removeEventListener('resize', handleResize);

				chart.remove();
			};

		},
		[data, backgroundColor, textColor,vertlines , horzlines]
	);

	return (
		<div className='w-full h-screen'
			ref={chartContainerRef}
		/>
	);
};
