"use client";

import { createChart, ColorType } from 'lightweight-charts';
import React, { useEffect, useRef, useState } from 'react';

type Props = {
	data : ChartData[]
	colors : chartColors
}


export const ChartComponent = ({data , colors:{backgroundColor , textColor , vertlines , horzlines }}:Props) => {

	const [candlestickData, setCandlestickData] = useState<ChartData[]>([]);

	const chartContainerRef:any = useRef();

	const currentDate = new Date(data[data.length - 1].time);


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

			chart.timeScale().fitContent();

			const series = chart.addCandlestickSeries();
			series.setData(data);

			const interval = setInterval(() => {
				currentDate.setDate(currentDate.getDate() + 1);
			
				const next = {
					time: currentDate.toISOString().slice(0, 10),
					open: getRandomValue(100, 120),
					high: getRandomValue(120, 130),
					low: getRandomValue(80, 100),  
					close: getRandomValue(90, 110),
				};
			
				series.update(next);
			}, 1000);
			
			function getRandomValue(min:number, max:number) {
				return min + Math.random() * (max - min);
			}
			

			

			window.addEventListener('resize', handleResize);

			return () => {
				window.removeEventListener('resize', handleResize);
				clearInterval(interval);
				chart.remove();
			};

		},
		[data, backgroundColor, textColor,vertlines , horzlines , candlestickData]
	);
	return (
		<div className='w-full h-screen'
			ref={chartContainerRef}
		/>
	);
};
