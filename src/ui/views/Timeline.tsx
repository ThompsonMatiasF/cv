import React from 'react'
import {
  Card,
  Container,
  Dot,
  Item,
  ItemTitle,
  Page,
  Subtitle,
  TimelineWrapper,
  Title,
  VerticalLine,
  Date,
  List,
  ListItem,
  Stage,
  StageHeader,
  StageDescription,
  StageTitle,
} from '@ui/components/TimelineStyles'
import { appData } from '../config/appData'

export const Timeline: React.FC = () => {
  const { timeline } = appData

  return (
    <Page>
      <Container>
        <Title>Timeline profesional</Title>

        <TimelineWrapper>
          <VerticalLine />

          {timeline.map((stage, index) => (
            <Stage key={index}>
              <StageHeader>
                <StageTitle>{stage.stage}</StageTitle>

                <StageDescription>{stage.description}</StageDescription>
              </StageHeader>

              {stage.items.map((item, i) => (
                <Item key={i}>
                  <Dot />

                  <Card>
                    <Date>
                      {item.from}

                      {item.to && ` — ${item.to}`}
                    </Date>

                    <ItemTitle>{item.title}</ItemTitle>

                    {item.subtitle && <Subtitle>{item.subtitle}</Subtitle>}

                    <List>
                      {item.description.map((desc, j) => (
                        <ListItem key={j}>{desc}</ListItem>
                      ))}
                    </List>
                  </Card>
                </Item>
              ))}
            </Stage>
          ))}
        </TimelineWrapper>
      </Container>
    </Page>
  )
}
