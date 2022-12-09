import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { DefaultTheme } from "../../../../theme/themes";
import TextIconBtn from "../../atoms/buttons/TextIconBtn";
import { Body } from "../../foundations/Typography";
import { Root, ListContainer, Item } from "./styles";

const ListView = (props) => {
  const { arrayList, width = 100, initialValue, getValue, getIdValue } = props;
  const [label, setLabel] = useState(initialValue);
  const [isListOpen, openList] = useState(false);
  const theme = useTheme() || DefaultTheme;
  const itemSelected = (value) => {
    setLabel(value.label);
    openList(!isListOpen);
    getValue(value.label);
    getIdValue(value.id);
  };

  useEffect(() => {
    setLabel(initialValue);
  }, [initialValue]);

  const renderItem = (i) => (
    <Item key={i.id} onClick={() => itemSelected(i)}>
      <Body>{i.label}</Body>
    </Item>
  );
  return (
    <Root width={width}>
      <TextIconBtn
        width={width}
        label={label}
        iconName="DownArrow"
        iconSize={theme.dimensions.icon.s}
        onClick={() => openList(!isListOpen)}
      />
      {isListOpen && (
        <ListContainer width={width}>
          {arrayList.map((val) => renderItem(val))}
        </ListContainer>
      )}
    </Root>
  );
};

export default ListView;
