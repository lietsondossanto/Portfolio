import React from 'react'

import { CgMaximize } from 'react-icons/cg'
import { BsArrowUpShort } from 'react-icons/bs'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import { VscChromeMinimize, VscChromeClose } from 'react-icons/vsc'
import { MdOutlineKeyboardArrowDown, MdHelp } from 'react-icons/md'
import { AiFillCaretDown } from 'react-icons/ai'

import { Wrapper } from './styles'

const FileExplorer: React.FC = () => {
  return (
    <Wrapper>
      <header>
        <div className="top">
          <span className="top__leftSide">
            <span className="icons--middle">
              <span className="separator">&nbsp;|&nbsp;</span>
              <AiFillCaretDown className="icon icon--arrowD2202own" />
              <span className="separator">&nbsp;|&nbsp;</span>
            </span>
            <p>Este PC</p>
          </span>

          <span className="top__rightSide">
            <span className="rightSide__icons">
              <VscChromeMinimize
                className="icons icons--minimize"
                title="Minimize"
              />
            </span>
            <span className="rightSide__icons">
              <CgMaximize className="icons icons--maximize" title="Maximize" />
            </span>
            <span className="rightSide__icons">
              <VscChromeClose className="icons icons--Close" title="Close" />
            </span>
          </span>
        </div>

        <div className="tabs">
          <ul className="tabs__list">
            <li className="list__item list__item--active">Ficheiros</li>
            <li className="list__item">Computador</li>
            <li className="list__item">Ver</li>
          </ul>

          <span className="moreOptions">
            <MdOutlineKeyboardArrowDown className="icon icon--arrow" />
            <MdHelp className="icon icon--help" />
          </span>
        </div>

        <div className="searchBar">
          <span className="searchBar__historyIcons">
            <BiLeftArrowAlt className="icons historyIcons--leftArrow" />
            <BiRightArrowAlt className="icons historyIcons--rightArrow" />
            <MdOutlineKeyboardArrowDown className="icons historyIcons--arrowDown" />
            <BsArrowUpShort className="icons historyIcons--arrowUp" />
          </span>
        </div>
      </header>
    </Wrapper>
  )
}

export default FileExplorer
