import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';

const Tech = ({title, logo}) => (
  <div className="tech">
    <img src={`${logo.image.publicURL}`} alt={logo.alt} />
    {title}
  </div>
)

const Area = ({title, techs}) => (
  <Card className="card">
    <CardHeader title={title} className="area-header" />
    <CardContent>
      <Grid container spacing={24}>
        {techs.map((t, index) => (
          <Grid key={index} item xs={6} sm={4} md={2}>
            <Tech
              title={t.title}
              logo={t.logo}
            />
          </Grid>
        ))}
      </Grid>
    </CardContent>
  </Card>
)

const Skills = ({ title, areas }) => (
  <section id="skills" className="section">
    <h2 className="section-title">{title}</h2>
    <div className="section-content">
      {areas.map((a, index) => (
        <Area 
          key={index}
          title={a.title}
          techs={a.techs}
        />
      ))}
    </div>
  </section>
)

export default Skills;