import { faCalendar, faUser } from '@fortawesome/free-solid-svg-icons'
import { Resume } from '../views/Resume'
import { Timeline } from '../views/Timeline'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { ReactNode } from 'react'

export interface RouteConfig {
  path: string
  label: string
  icon: IconDefinition
  component: ReactNode
}

export const routes: RouteConfig[] = [
  {
    path: '/',
    label: 'Resume',
    icon: faUser,
    component: <Resume />,
  },
  {
    path: '/timeline',
    label: 'Timeline',
    icon: faCalendar,
    component: <Timeline />,
  },
]
