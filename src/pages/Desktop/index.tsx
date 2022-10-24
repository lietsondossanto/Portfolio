import React from 'react'

import { Wrapper } from './styles'
import { TaskBar, FileExplorer } from '../../components'

import Folder from './../../assets/icons/folder.png'
import Calculator from './../../assets/icons/calculator.png'
import IPaddress from './../../assets/icons/IPaddress.png'
import { Link } from 'react-router-dom'

const Desktop: React.FC = () => {
  return (
    <>
      <TaskBar />

      <Wrapper>
        <span className="desktopIcon">
          <img
            src={Folder}
            className="desktopIcon__icon"
            alt="Icon de uma pasta comum"
            title={'Data de Criação: 21/10/2022 14:50\nFolder empyt'}
          />
          <p className="desktopIcon__name">Folder</p>
        </span>

        <span className="desktopIcon">
          <a
            href="https://www.callculator.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={Calculator}
              className="desktopIcon__icon"
              alt="Icon de uma pasta comum"
              title="Calculator"
            />
            <p className="desktopIcon__name">Calculator</p>
          </a>
        </span>

        <span className="desktopIcon">
          <a
            href="https://www.callculator.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={IPaddress}
              className="desktopIcon__icon"
              alt="Icon do app IPaddress"
              title="IPaddress"
            />
            <p className="desktopIcon__name">IPaddress</p>
          </a>
        </span>

        {/* <FileExplorer /> */}
      </Wrapper>
    </>
  )
}

export default Desktop
