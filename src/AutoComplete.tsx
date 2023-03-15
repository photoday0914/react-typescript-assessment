import react, { ChangeEvent, FC, useState } from "react";
import styled from "styled-components";

import {
  AutoCompleteContainer,
  Input,
  AutoCompleteItem,
  AutoCompleteItemButton
} from "./styles";
const Root = styled.div`
  margin: auto;
  width: 320px;
`;

interface IData {
  name: string;
  code: string;
}
interface autoCompleteProps {
  inputStyle?: react.CSSProperties;
  optionsStyle?: react.CSSProperties;

  data: IData[];
}
export const AutoComplete: FC<autoCompleteProps> = ({
  inputStyle,
  optionsStyle,
  data
}) => {
  const [search, setSearch] = useState<any>({
    text: "",
    suggestions: []
  });
  const [isComponentVisible, setIsComponentVisible] = useState(true);
  const onTextChanged = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let suggestions:IData[] = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = data.sort().filter((v: IData) => regex.test(v.name));
    }
    setIsComponentVisible(true);
    setSearch({ suggestions, text: value });
  };

  const suggestionSelected = (value: IData) => {
    setIsComponentVisible(false);

    setSearch({
      text: value.name,
      suggestions: []
    });
  };

  const { suggestions, text } = search;

  return (
    <Root>
      <div
        onClick={() => setIsComponentVisible(false)}
        style={{
          display: isComponentVisible ? "block" : "none",
          width: "200vw",
          height: "200vh",
          backgroundColor: "transparent",
          position: "fixed",
          zIndex: 0,
          top: 0,
          left: 0
        }}
      />
      <div>
        <Input
          id="input"
          autoComplete="off"
          value={search.text}
          onChange={onTextChanged}
          type={"text"}
          style={inputStyle}
        />
      </div>
      {suggestions.length > 0 && isComponentVisible && (
        <AutoCompleteContainer style={optionsStyle}>
          {suggestions.map((item: IData) => (
            <AutoCompleteItem key={item.code}>
              <AutoCompleteItemButton
                key={item.code}
                onClick={() => suggestionSelected(item)}
              >
                <b>{item.name.slice(0, text.length)}</b>          
                {item.name.replace(new RegExp(text, 'i'), '')}
              </AutoCompleteItemButton>
            </AutoCompleteItem>
          ))}
        </AutoCompleteContainer>
      )}
    </Root>
  );
};
