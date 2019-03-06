import React from 'react'
import dayjs from 'dayjs'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import { MarkdownContent } from './content'
import Image from './image'

const School = ({name, degree, description, startDate, endDate, logo}) => {
  const startDateDisplay = startDate ? dayjs(startDate).format('YYYY') : '';
  const endDateDisplay = endDate ? dayjs(endDate).format('YYYY') : 'Present';

  return (
    <Card className="card">
      <CardHeader
        title={name}
        subheader={degree}
        avatar={<Image imageInfo={logo} style={{width: 60, height: 60}} />}
      />
      <CardContent className="card-content">
        <MarkdownContent content={description} />
      </CardContent>
      <div className="card-footer">
        {`${startDateDisplay} - ${endDateDisplay}`}
      </div>
    </Card>
  );
}

const Education = ({ title, schools }) => {
  return (
    <section id="education" className="section scrollspy">
      <h2 className="section-title">{title}</h2>
      <div className="section-content">
        {schools.map((s, index) => (
          <School 
            key={index}
            name={s.name}
            degree={s.degree}
            description={s.description}
            startDate={s.startdate}
            endDate={s.enddate}
            logo={s.logo}
          />
        ))}
      </div>
    </section>
  );
}

export default Education
