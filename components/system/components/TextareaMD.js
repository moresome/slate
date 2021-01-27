import * as React from "react";
import * as Constants from "~/common/constants";

import ReactMde from "react-mde";
import ReactDOM from "react-dom";
import "react-mde/lib/styles/css/react-mde-all.css";

import { css } from "@emotion/react";

import TextareaAutoSize from "~/vendor/react-textarea-autosize";

export function TextareaMde(props) {
  // debugger;
  const [value, setValue] = React.useState(props.value);
  const [selectedTab, setSelectedTab] = React.useState("write");

  return (
    <div className={props.className}>
      <ReactMde
        css={props.css}
        value={value}
        classes={props.classes}
        onChange={setValue}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        // generateMarkdownPreview={(markdown) => Promise.resolve(converter.makeHtml(markdown))}
        // loadSuggestions={loadSuggestions}
        childProps={{
          writeButton: {
            tabIndex: -1,
          },
        }}
      />
    </div>
  );
}

const STYLES_TEXTAREA = css`
  textarea {
    box-sizing: border-box;
    font-family: ${Constants.font.text};
    -webkit-appearance: none;
    width: 100%;
    min-height: 160px;
    max-width: 480px;
    resize: none;
    background: ${Constants.system.white};
    color: ${Constants.system.black};
    border-radius: 4px;
    display: flex;
    font-size: 14px;
    align-items: center;
    justify-content: flex-start;
    outline: 0;
    border: 0;
    transition: 200ms ease all;
    padding: 16px;
    box-shadow: 0 0 0 1px ${Constants.system.gray30} inset;
  }
  textarea::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${Constants.system.darkGray};
    opacity: 1; /* Firefox */
  }

  textarea:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${Constants.system.darkGray};
  }

  textarea::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${Constants.system.darkGray};
  }
`;

export class TextareaMD extends React.Component {
  render() {
    return (
      <TextareaMde
        css={STYLES_TEXTAREA}
        classes={{ textArea: STYLES_TEXTAREA }}
        style={this.props.style}
        onChange={this.props.onChange}
        placeholder={this.props.placeholder}
        name={this.props.name}
        value={this.props.value}
        readOnly={this.props.readOnly}
      />
    );
  }
}