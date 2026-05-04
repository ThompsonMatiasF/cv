import { FC, useEffect } from 'react'
import {
  Avatar,
  Contact,
  ContactLink,
  Container,
  Description,
  Hero,
  Item,
  ItemSubtitle,
  ItemTitle,
  List,
  ListItem,
  PageBackground,
  Section,
  SectionTitle,
  Skill,
  SkillsGrid,
  Subtitle,
  Title,
} from '@ui/components/ResumeStyles'
import { appData } from '../config/appData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

type Props = {
  onRender?: () => void
  variant?: 'screen' | 'pdf'
}

export const Resume: FC<Props> = ({ onRender, variant = 'screen' }) => {
  const { hero, experience, previousExperience, projects, skills } =
    appData.resume

  useEffect(() => {
    onRender?.()
  }, [onRender])

  return (
    <PageBackground data-variant={variant}>
      <Container data-variant={variant}>
        <Hero data-variant={variant}>
          <div>
            <Title>{hero.name}</Title>
            <Subtitle>{hero.title}</Subtitle>
            <Description>{hero.description}</Description>

            <Contact>
              <ContactLink href={`mailto:${hero.contact.email}`}>
                <FontAwesomeIcon icon={faEnvelope} />
                {hero.contact.email}
              </ContactLink>

              <ContactLink
                href={`https://wa.me/${hero.contact.phone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faPhone} />
                {hero.contact.phone}
              </ContactLink>

              <ContactLink
                href={hero.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
                LinkedIn
              </ContactLink>

              <ContactLink
                href={hero.contact.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
                GitHub
              </ContactLink>
            </Contact>
          </div>

          <Avatar src={hero.avatar} alt={hero.name} />
        </Hero>

        <Section>
          <SectionTitle>Experiencia</SectionTitle>

          {experience.map((exp, index) => (
            <Item key={index}>
              <ItemTitle>{exp.title}</ItemTitle>
              {exp.subtitle && <ItemSubtitle>{exp.subtitle}</ItemSubtitle>}
              <List>
                {exp.items.map((item, i) => (
                  <ListItem key={i}>{item}</ListItem>
                ))}
              </List>
            </Item>
          ))}
        </Section>

        <Section>
          <SectionTitle>Experiencias previas</SectionTitle>

          <List>
            {previousExperience.map((item, index) => (
              <ListItem key={index}>{item}</ListItem>
            ))}
          </List>
        </Section>

        <Section>
          <SectionTitle>Proyectos</SectionTitle>

          {projects.map((project, index) => (
            <Item key={index}>
              <ItemTitle>{project.title}</ItemTitle>
              <List>
                {project.items.map((item, i) => (
                  <ListItem key={i}>{item}</ListItem>
                ))}
              </List>
            </Item>
          ))}
        </Section>

        <Section>
          <SectionTitle>Skills</SectionTitle>

          <SkillsGrid>
            {skills.map((skill) => (
              <Skill key={skill}>{skill}</Skill>
            ))}
          </SkillsGrid>
        </Section>
      </Container>
    </PageBackground>
  )
}
