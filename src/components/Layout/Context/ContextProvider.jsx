import { useState } from "react";
import { Context } from "./Context";
function ContextProvider(props) {
  const [background, setBackground] = useState(false);
  const [hideTitle, setHideTitle] = useState(false);

  const handleSetBackground = () => {
    setBackground(true);
  };

  const handleSetHideTitle = () => {
    setHideTitle(true);
  };

  const data = {
    background,
    handleSetBackground,
    hideTitle,
    handleSetHideTitle,
  };

  return <Context.Provider value={data}>{props.children}</Context.Provider>;
}

export default ContextProvider;
