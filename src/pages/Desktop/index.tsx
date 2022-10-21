import React from 'react'

import { Wrapper } from './styles'
import TaskBar from '../../components/Taskbar/index'

import Folder from './../../assets/icons/folder.png'

const Desktop: React.FC = () => {
  return (
    <>
      <TaskBar />

      <Wrapper>
        <span className="folder">
          <img
            src={Folder}
            className="folder__icon"
            alt="Icon de uma pasta comum"
            title={'Data de Criação: 21/10/2022 14:50\nFolder empyt'}
          />
          <p className="folder__name">Folder</p>
        </span>
      </Wrapper>
    </>
  )
}

export default Desktop
