import React from 'react'
import dayjs from 'dayjs'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { MarkdownContent } from './content'
import Image from './image';

const getDiff = (startDate, endDate) => {
  const start = startDate ? dayjs(startDate) : dayjs();
  const end = endDate ? dayjs(endDate) : dayjs();
  const totalDays = end.diff(start, 'day');
  const years = Math.floor(totalDays / 365);
  const months = Math.floor(totalDays % 365 / 30);

  const yearsDisplay = years > 0 ? years + (years === 1 ? ' year ' : ' years ') : '';
  const monthsDisplay = months > 0 ? months + (months === 1 ? ' month' : ' months') : '';
  return yearsDisplay + monthsDisplay;
}

const Job = ({employer, description, logo, position, startDate, endDate}) => {
  const startDateDisplay = startDate ? dayjs(startDate).format('MMMM YYYY') : '';
  const endDateDisplay = endDate ? dayjs(endDate).format('MMMM YYYY') : 'Present';

  return (
    <Card className="card">
      <CardHeader
        title={employer}
        subheader={position}
        avatar={<Image imageInfo={logo} style={{width: 60, height: 60}} />}
      />
      <CardContent className="card-content">
        <MarkdownContent content={description} />
      </CardContent>
      <div className="card-footer">
        {`${startDateDisplay} - ${endDateDisplay} • ${getDiff(startDate, endDate)}`}
      </div>
    </Card>
  );
}

const Experience = ({ title, jobs }) => {
  return (
    <section id="experience" className="section scrollspy">
      <h2 className="section-title">{title}</h2>
      <div className="section-content">
        {jobs.map((j, index) => (
          <Job 
            key={index}
            employer={j.employer}
            description={j.description}
            logo={j.logo}
            position={j.position}
            startDate={j.startdate}
            endDate={j.enddate}
          />
        ))}
      </div>
    </section>
  );
}

export default Experience
