import React from 'react'
import { BsWindows, BsVolumeUp } from 'react-icons/bs'
import { VscSearch } from 'react-icons/vsc'
import { BiWifi, BiMessageAlt } from 'react-icons/bi'
import { MdOutlineKeyboardArrowUp } from 'react-icons/md'

import { Wrapper, ListRight, ListLeft } from './styles'
import Chrome from './../../assets/icons/chrome.svg'
import Cortana from './../../assets/icons/cortana.svg'
import File_Explorer from './../../assets/icons/file_explorer.png'
import Microsoft_Store from './../../assets/icons/microsoft_store_white.svg'
import Github from './../../assets/icons/github.png'

const TaskBar: React.FC = () => {
  const date = new Date()

  return (
    <Wrapper>
      <nav>
        <ListRight>
          <li className="list__item list__item--start">
            <BsWindows className="item__icon" title="Iniciar" />
          </li>

          <li className="list__item list__item--input">
            <label htmlFor="search">
              <VscSearch className="item__icon" title="Search" />
            </label>
            <input
              className="item__input"
              name="search"
              id="search"
              title="procurar"
              aria-autocomplete="none"
              placeholder="Escreva aqui para procurar"
            />
          </li>

          <li className="list__item list__item--app">
            <img
              src={Cortana}
              className="item__icon"
              alt="Cortana icon"
              title="Cortana"
            />
          </li>

          <li className="list__item list__item--app">
            <img
              src={Chrome}
              className="item__icon"
              alt="Google Chrome icon"
              title="Google Chrome"
            />
          </li>

          <li className="list__item list__item--app">
            <img
              src={File_Explorer}
              className="item__icon"
              alt="File Explorer icon"
              title="File Explorer"
            />
          </li>

          <li className="list__item list__item--app">
            <img
              src={Microsoft_Store}
              className="item__icon"
              alt="Microsoft Store icon"
              title="Microsoft Store"
            />
          </li>

          <li className="list__item list__item--app">
            <a
              href="https://github.com/lietsondossanto"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={Github}
                className="item__icon"
                alt="Github icon"
                title="Github"
              />
            </a>
          </li>
        </ListRight>

        <ListLeft>
          <li className="list__item list__item--icon">
            <MdOutlineKeyboardArrowUp className="item__icon" title="More" />
          </li>

          <li className="list__item list__item--icon">
            <BiWifi className="item__icon" title="wi-fi" />
          </li>

          <li className="list__item list__item--icon">
            <BsVolumeUp className="item__icon" title="Volume" />
          </li>

          <li className="list__item list__item--date">
            <span className="item__text--hours">
              {`${String(date.getHours()).padStart(2, '0')}:${String(
                date.getMinutes()
              ).padStart(2, '0')}`}
            </span>
            <span className="item__text--date">
              {`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}
            </span>
          </li>

          <li className="list__item list__item--icon list__item--message">
            <BiMessageAlt className="item__icon" title="Messages" />
          </li>

          <li className="list__item list__item--hide_all"></li>
        </ListLeft>
      </nav>
    </Wrapper>
  )
}

export default TaskBar
