import React from 'react'
import styled from 'styled-components'
import FaBold from 'react-icons/lib/fa/bold'

export default class Editor extends React.Component {
  state = {
    value: this.props.value,
  }

  onClickToolBarButton = type => {
    window.console.log(type)
  }

  render() {
    const { value } = this.state
    const { placeholder } = this.props

    return (
      <Wrapper>
        <Toolbar>
          <Button
            onClick={() => {
              this.onClickToolBarButton('bold')
            }}
          >
            <FaBold size={14} />
          </Button>
        </Toolbar>
        <Content>
          {value ? (
            <ContentInner>{value}</ContentInner>
          ) : (
            <React.Fragment>
              <Placeholder>{placeholder || 'Type something'}</Placeholder>
              <ContentInner />
            </React.Fragment>
          )}
        </Content>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 1px 1px rgba(0, 0, 0, 0.16);
`

const Toolbar = styled.div`
  border-radius: 3px 3px 0 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);
`
const Content = styled.div`
  position: relative;
  padding: 20px;
  border-radius: 0 0 3px 3px;
`
const ContentInner = styled.div`
  position: relative;
  min-height: 160px;
  cursor: text;

  font-size: 10px;
  line-height: 1;
  p {
    margin: 0;
  }
`
const Placeholder = styled.p`
  position: absolute;
  top: 20px;
  left: 0;
  width: 100%;
  margin: 0;
  color: #c1c0c0;
  font-size: 14px;
  text-align: center;
`
const Button = styled.button`
  width: 38px;
  height: 38px;
  padding: 0;
  border: 0;
  background-color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #ebebeb;
  }
`
