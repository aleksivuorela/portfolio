import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { MarkdownContent } from './content'

const Job = ({employer, description}) => (
  <Card className="job-card">
    <CardHeader title={employer} />
    <CardContent>
      <MarkdownContent content={description} />
    </CardContent>
  </Card>
);

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
          />
        ))}
      </div>
    </section>
  );
}

export default Experience
