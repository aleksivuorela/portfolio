import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import MailIcon from '@material-ui/icons/Mail'
import GithubIcon from 'mdi-material-ui/GithubCircle'
import LinkedinIcon from 'mdi-material-ui/Linkedin'

const iconComps = {
  email: MailIcon,
  github: GithubIcon,
  linkedin: LinkedinIcon
};

const Icon = ({ name }) => {
  if (typeof iconComps[name] === 'undefined') {
    return null;
  }
  const IconComponent = iconComps[name];
  return <IconComponent />;
};

const ContactRow = ({ address, icon }) => {
  const isEmail = address.includes('@');
  const addressDisplay = address.replace(/^http(s?):\/\//i, '');

  return (
    <div className="contact-row">
      <Avatar>
        <Icon name={icon} />
      </Avatar>
      <a
        href={isEmail ? `mailto:${address}` : address}
        target={isEmail ? '_self' : '_blank'}
      >
        {addressDisplay}
      </a>
    </div>
  )
};

const Contact = ({ title, contacts }) => {
  return (
    <section id="contact" className="section full-height">
      <h2 className="section-title">{title}</h2>
      <div className="section-content">
        {contacts.map((c, index) => (
          <ContactRow key={index} address={c.address} icon={c.icon} />
        ))}
      </div>
    </section>
  );
}

export default Contact
