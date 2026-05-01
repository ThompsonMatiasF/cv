import { FC } from 'react'
import { ThemeToggle } from '@ui/components/ThemeToggle'
import { DownloadButton } from '@ui/components/DownloadButton'
import {
  Wrapper,
  Container,
  Sidebar,
  Content,
  Header,
  Name,
  Role,
  Subtitle,
  SidebarSection,
  SidebarTitle,
  SidebarList,
  SidebarItem,
  Section,
  Title,
  SubTitle,
  Text,
  Small,
  List,
  ListItem,
  Article,
  FloatingControls,
  Avatar,
  StyledLink,
} from '@ui/components/ResumeStyles'

export const Resume: FC = () => {
  return (
    <Wrapper>
      <FloatingControls>
        <DownloadButton
          elementId="resume-container"
          fileName="Matias-Thompson-CV.pdf"
        />
        <ThemeToggle />
      </FloatingControls>

      <Container id="resume-container">
        <Sidebar>
          <Header>
            <Avatar src="/matias-thompson.jpeg" alt="Matías Thompson" />
            <Name>Matías Federico Thompson</Name>
            <Role>Senior Frontend Engineer</Role>
            <Subtitle>React · Arquitectura Escalable</Subtitle>
          </Header>

          <SidebarSection>
            <SidebarTitle>Contacto</SidebarTitle>
            <SidebarList>
              <SidebarItem>📍 Buenos Aires, Argentina</SidebarItem>
              <SidebarItem>
                📞{' '}
                <StyledLink
                  href="tel:+541133030041"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +54 11 3303-0041
                </StyledLink>
              </SidebarItem>
              <SidebarItem>
                ✉️{' '}
                <StyledLink
                  href="mailto:thompson.matiasf@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  thompson.matiasf@gmail.com
                </StyledLink>
              </SidebarItem>
              <SidebarItem>
                🔗{' '}
                <StyledLink
                  href="https://linkedin.com/in/matias-federico-thompson-147a6858"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/matias-federico-thompson-147a6858
                </StyledLink>
              </SidebarItem>
            </SidebarList>
          </SidebarSection>

          <SidebarSection>
            <SidebarTitle>Stack</SidebarTitle>
            <SidebarList>
              <SidebarItem>
                <strong>Frontend:</strong> React, Angular, HTML, CSS
              </SidebarItem>
              <SidebarItem>
                <strong>Lenguajes:</strong> JavaScript, TypeScript
              </SidebarItem>
              <SidebarItem>
                <strong>Testing:</strong> Vitest, React Testing Library
              </SidebarItem>
              <SidebarItem>
                <strong>APIs:</strong> REST, GraphQL
              </SidebarItem>
              <SidebarItem>
                <strong>Herramientas:</strong> Git, Docker, Linux
              </SidebarItem>
              <SidebarItem>
                <strong>Diseño:</strong> Figma
              </SidebarItem>
            </SidebarList>
          </SidebarSection>

          <SidebarSection>
            <SidebarTitle>Idiomas</SidebarTitle>
            <SidebarList>
              <SidebarItem>Español — Nativo</SidebarItem>
              <SidebarItem>Inglés — Básico</SidebarItem>
            </SidebarList>
          </SidebarSection>
        </Sidebar>

        <Content>
          <Section>
            <Title>Perfil</Title>
            <Text>
              Frontend Engineer con más de 10 años de experiencia en IT,
              especializado en desarrollo de aplicaciones web con React y
              TypeScript.
            </Text>
            <Text>
              Fuerte enfoque en arquitectura frontend, aplicando principios como
              SOLID y Clean Architecture para construir soluciones mantenibles,
              desacopladas y testeables.
            </Text>
            <Text>
              Experiencia trabajando en equipos Agile, colaborando con diseño y
              producto para transformar prototipos en soluciones funcionales de
              calidad.
            </Text>
          </Section>

          <Section>
            <Title>Especialización</Title>
            <List>
              <ListItem>
                Arquitectura frontend desacoplada (UI / Controllers / dominio)
              </ListItem>
              <ListItem>Aplicación de principios SOLID</ListItem>
              <ListItem>Context API + inyección de dependencias</ListItem>
              <ListItem>Código mantenible y testeable</ListItem>
              <ListItem>Implementación de diseños desde Figma</ListItem>
            </List>
          </Section>

          <Section>
            <Title>Experiencia</Title>

            <Article>
              <SubTitle>Veritran — Frontend Engineer</SubTitle>
              <Small>2021 – Actualidad</Small>
              <List>
                <ListItem>Desarrollo de aplicaciones React escalables</ListItem>
                <ListItem>Mejora de arquitectura y mantenibilidad</ListItem>
                <ListItem>Trabajo en equipos Agile</ListItem>
              </List>
            </Article>

            <Article>
              <SubTitle>iúnigo — Frontend Engineer</SubTitle>
              <Small>2020 – 2021</Small>
              <List>
                <ListItem>Desarrollo de interfaces con React</ListItem>
                <ListItem>Integración con APIs y mejoras UI</ListItem>
              </List>
            </Article>

            <Article>
              <SubTitle>Despegar — Software Engineer</SubTitle>
              <Small>2016 – 2020</Small>
              <List>
                <ListItem>Desarrollo de SPAs y herramientas internas</ListItem>
                <ListItem>Optimización de performance</ListItem>
              </List>
            </Article>

            <Article>
              <SubTitle>Carrefour Argentina — Junior Analyst</SubTitle>
              <Small>2012 – 2016</Small>
              <List>
                <ListItem>Desarrollo de reportes internos</ListItem>
                <ListItem>Visualización de datos</ListItem>
              </List>
            </Article>
          </Section>

          <Section>
            <Title>Educación</Title>
            <List>
              <ListItem>Da Vinci — Desarrollador Web (2015 – 2017)</ListItem>
              <ListItem>
                Escuela Técnica Raggio — Técnico Electromecánico
              </ListItem>
            </List>
          </Section>
        </Content>
      </Container>
    </Wrapper>
  )
}
