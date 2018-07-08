import React from 'react'
import styled from 'styled-components'

import Editor from '../Editor/'

export default class App extends React.Component {
  state = {
    value: '',
  }

  onChange = value => {
    this.setState({ value })
  }

  render() {
    return (
      <Wrapper>
        <Editor
          placeholder="入力してください"
          value={this.state.value}
          onChange={this.onChange}
        />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  padding: 20px;
`
