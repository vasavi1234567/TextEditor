import styled from 'styled-components'

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  margin-top: 20px;
  color: #f1f5f9;
`
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50vh;
`
export const Image = styled.img`
  height: 15vh;
  margin-top: 20px;
  margin-right: 10px;
`
export const EditorContainer = styled.div`
  background-color: #25262c;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  margin: 10px;
`
export const ButtonsContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  padding-left: 15px;
  margin: 10px;
`
export const BoldButton = styled.button`
  background-color: trasparent;
  color: ${props => props.color};
  border: none;
  outline: none;
`
export const ItalicButton = styled.button`
  background-color: trasparent;
  color: ${props => props.color};
  border: none;
  outline: none;
`
export const UnerlineButton = styled.button`
  background-color: trasparent;
  color: ${props => props.color};
  border: none;
  outline: none;
`
export const HorizontalLine = styled.hr`
  color: #cbd5e1;
  width: 100%;
`
export const Text = styled.textarea`
  font-weight: ${props => props.fontWeight}
  font-style: ${props => props.fontStyle}
  text-decoration: ${props => props.textDecoration};
  background-color: transparent;
  color: #f1f5f9;
  border: none;
  outline: none;
  padding-left: 15px;
`
