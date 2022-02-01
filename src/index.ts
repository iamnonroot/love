import "./styles.scss"

import { RenderModule } from '@townland-project/dom'
import { AppModule } from './module'

RenderModule(AppModule).then(module => document.getElementById('root')?.appendChild(module!))