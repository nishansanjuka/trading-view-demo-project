"use client";

import { ChartComponent } from '@/components/Chart'
import React from 'react'

export default function page() {

  const initialData = [
    { "time": "2022-01-01", "open": 100, "high": 120, "low": 90, "close": 110 },
  { "time": "2022-01-02", "open": 110, "high": 130, "low": 95, "close": 115 },
  { "time": "2022-01-03", "open": 115, "high": 125, "low": 100, "close": 105 },
  { "time": "2022-01-04", "open": 105, "high": 115, "low": 80, "close": 90 },
  { "time": "2022-01-05", "open": 95, "high": 105, "low": 85, "close": 100 },
  { "time": "2022-01-06", "open": 100, "high": 110, "low": 95, "close": 105 },
  { "time": "2022-01-07", "open": 105, "high": 125, "low": 100, "close": 120 },
  { "time": "2022-01-08", "open": 120, "high": 130, "low": 110, "close": 115 },
  { "time": "2022-01-09", "open": 115, "high": 125, "low": 100, "close": 110 },
  { "time": "2022-01-10", "open": 110, "high": 120, "low": 95, "close": 105 },
  { "time": "2022-01-11", "open": 105, "high": 115, "low": 90, "close": 100 },
  { "time": "2022-01-12", "open": 100, "high": 110, "low": 80, "close": 85 },
  { "time": "2022-01-13", "open": 85, "high": 100, "low": 75, "close": 95 },
  { "time": "2022-01-14", "open": 95, "high": 110, "low": 85, "close": 105 },
  { "time": "2022-01-15", "open": 105, "high": 120, "low": 100, "close": 115 },
  { "time": "2022-01-16", "open": 115, "high": 130, "low": 110, "close": 120 },
  { "time": "2022-01-17", "open": 120, "high": 125, "low": 100, "close": 110 },
  { "time": "2022-01-18", "open": 110, "high": 115, "low": 90, "close": 95 },
  { "time": "2022-01-19", "open": 95, "high": 105, "low": 80, "close": 90 },
  { "time": "2022-01-20", "open": 90, "high": 100, "low": 75, "close": 85 },
  { "time": "2022-01-21", "open": 85, "high": 95, "low": 70, "close": 80 },
  { "time": "2022-01-22", "open": 80, "high": 90, "low": 65, "close": 75 },
  { "time": "2022-01-23", "open": 75, "high": 85, "low": 60, "close": 80 },
  { "time": "2022-01-24", "open": 80, "high": 100, "low": 75, "close": 95 },
  { "time": "2022-01-25", "open": 95, "high": 110, "low": 85, "close": 105 },
  { "time": "2022-01-26", "open": 105, "high": 120, "low": 100, "close": 115 },
  { "time": "2022-01-27", "open": 115, "high": 130, "low": 110, "close": 120 },
  { "time": "2022-01-28", "open": 120, "high": 125, "low": 100, "close": 110 },
  { "time": "2022-01-29", "open": 110, "high": 115, "low": 90, "close": 95 },
  { "time": "2022-01-30", "open": 95, "high": 105, "low": 80, "close": 90 },
  { "time": "2022-01-31", "open": 90, "high": 100, "low": 75, "close": 85 },
  { "time": "2022-02-01", "open": 85, "high": 95, "low": 70, "close": 80 },
  { "time": "2022-02-02", "open": 80, "high": 90, "low": 65, "close": 75 },
  { "time": "2022-02-03", "open": 75, "high": 85, "low": 60, "close": 80 },
  { "time": "2022-02-04", "open": 80, "high": 100, "low": 75, "close": 95 },
  { "time": "2022-02-05", "open": 95, "high": 110, "low": 85, "close": 105 },
  { "time": "2022-02-06", "open": 105, "high": 120, "low": 100, "close": 115 },
  { "time": "2022-02-07", "open": 115, "high": 130, "low": 110, "close": 120 },
  { "time": "2022-02-08", "open": 120, "high": 125, "low": 100, "close": 110 },
  { "time": "2022-02-09", "open": 110, "high": 115, "low": 90, "close": 95 },
  ];

  const colors = {
    backgroundColor: '#222',
    textColor: '#DDD',
    vertlines: '#444', 
    horzlines: '#444',
  };

  return (
    <main>
      <ChartComponent data={initialData} colors={colors}/>
    </main>
  )
}
