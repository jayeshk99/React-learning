import './Chart.css';
import { ChartBar } from './ChartBar.js';

export const Chart = (props) => {
  console.log('original data points in chart', props.dataPoints);
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...dataPointValues);
  console.log('totalMax:', totalMax);
  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMax}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};
