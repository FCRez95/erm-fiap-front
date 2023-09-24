import { ContainerTab, TabLink } from './styles'
import $ from 'jquery'

interface Props {
  text: string
  isSelected: boolean
  onClick: (tab: string) => void
}

const Tab = ({ text, isSelected, onClick }: Props) => {    
  const changeClass = () => {
    if (!isSelected) {
      const tabClass = $(`#${text}`).attr('class')?.split(' ')
  
      if (tabClass && tabClass[tabClass.length-1] === 'active') {
        $(`#${text}`).removeClass('active')
      } else {
        $(`#${text}`).addClass('active')
      }
      onClick(text)
    }
  }

  return (
    <ContainerTab onClick={changeClass}>
      <TabLink className={isSelected? 'active' : ''} id={text}>{text}</TabLink>
    </ContainerTab>
  )
}

export default Tab