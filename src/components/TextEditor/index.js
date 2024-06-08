import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import './index.css'
import {
  Heading,
  ImageContainer,
  Image,
  EditorContainer,
  ButtonsContainer,
  BoldButton,
  ItalicButton,
  UnerlineButton,
  HorizontalLine,
  Text,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    isBold: false,
    isItalic: false,
    isUnderline: false,
  }

  onClickBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({isUnderline: !prevState.isUnderline}))
  }

  render() {
    const {isBold, isItalic, isUnderline} = this.state
    const boldTextColor = isBold === false ? '#f1f5f9' : '#faff00'
    const italicTextColor = isItalic === false ? '#f1f5f9' : '#faff00'
    const underlineTextColor = isUnderline === false ? '#f1f5f9' : '#faff00'
    const fontWeight = isBold === false ? 'normal' : 'bold'
    const fontStyle = isItalic === false ? 'normal' : 'italic'
    const textDecoration = isUnderline === false ? 'normal' : 'underline'

    return (
      <div className="main-container">
        <div className="container">
          <div className="image-container">
            <Heading>Text Editor</Heading>
            <ImageContainer>
              <Image
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
                alt="text editor"
              />
            </ImageContainer>
          </div>
          <EditorContainer>
            <ButtonsContainer>
              <li>
                <BoldButton
                  className="button"
                  type="button"
                  data-testid="bold"
                  color={boldTextColor}
                  onClick={this.onClickBold}
                  fontWeight={fontWeight}
                >
                  <VscBold size={25} />
                </BoldButton>
              </li>
              <li>
                <ItalicButton
                  className="button"
                  type="button"
                  data-testid="italic"
                  color={italicTextColor}
                  onClick={this.onClickItalic}
                  fontStyle={fontStyle}
                >
                  <GoItalic size={25} />
                </ItalicButton>
              </li>
              <li>
                <UnerlineButton
                  className="button"
                  type="button"
                  data-testid="underline"
                  color={underlineTextColor}
                  onClick={this.onClickUnderline}
                  textDecoration={textDecoration}
                >
                  <AiOutlineUnderline size={25} />
                </UnerlineButton>
              </li>
            </ButtonsContainer>
            <HorizontalLine />
            <Text
              fontWeight={fontWeight}
              fontStyle={fontStyle}
              textDecoration={textDecoration}
            />
          </EditorContainer>
        </div>
      </div>
    )
  }
}

export default TextEditor
