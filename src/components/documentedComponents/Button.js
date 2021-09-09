import { useEffect } from "react";
import { useNav } from "../contexts/nav-context";
import { Button } from "shoto-ui";
import { Prism as SyntaxHighliter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { AiOutlinePlus } from "react-icons/ai";
import { MdContentCopy } from "react-icons/md";
import copy from "copy-to-clipboard";
import "./docs-style.css";

export const ButtonDoc = ({ showSnackbar }) => {
  const { setNavLink, setMobileNav } = useNav();
  useEffect(() => setNavLink("button"), [setNavLink]);
  useEffect(() => setMobileNav(false), [setMobileNav]);

  const defaultButtonCodeString = `import React from "react";
import { Button } from "shoto-ui";

function ButtonCustom() {
  return (
    <Button>Button</Button>
  );
}`;

  const sizesButtonCodeString = `import React from "react";
import { Button } from "shoto-ui";

function ButtonCustom() {
  return (
        <div>
			<Button size="small">Small</Button>
			<Button size="medium">Medium</Button>
			<Button size="large">Large</Button>
        </div>
  );
}`;

  const clickButtonCodeString = `import React from "react";
import { Button } from "shoto-ui";

function ButtonCustom() {
  return (
    <Button onClick={() => alert("Button Clicked")}>Click Me</Button>
  );
}`;

  const disabledButtonCodeString = `import React from "react";
import { Button } from "shoto-ui";

function ButtonCustom() {
  return (
    <Button disabled>DISABLED</Button>
  );
}`;

  const roundedButtonCodeString = `import React from "react";
import { Button } from "shoto-ui";

function ButtonCustom() {
  return (
    <Button rounded>Rounded Button</Button>
  );
}`;

  const elevatedButtonCodeString = `import React from "react";
import { Button } from "shoto-ui";

function ButtonCustom() {
  return (
    <Button elevated>Elevated Button</Button>
  );
}`;

  const colorsButtonCodeString = `import React from "react";
import { Button } from "shoto-ui";

function ButtonCustom() {
  return (
    <Button size="large" bgColor="rgb(29, 161, 242)" textColor="#fff" rounded>Custom colors</Button>
  );
}`;

  const iconButtonCodeString = `import React from "react";
import { Button } from "shoto-ui";
import { OutlinePlus } from "./assets/icons";

function ButtonCustom() {
  return (
    <Button size="large" type="icon"><OutlinePlus/></Button>
  );
}`;

  return (
    <div className="container-content">
      <h1>Button</h1>
      <div className="subtext">
        The Button component provides multiple customisations like colors,
        elevaion and size.
      </div>

      <h2>Default Button</h2>
      <div className="container-output">
        <Button>Button</Button>
      </div>

      <div className="container-code">
        <div
          className="container-btn-copy"
          onClick={() => {
            copy(defaultButtonCodeString);
            showSnackbar("Source code copied to clipboard", "success");
          }}
        >
          <MdContentCopy />
        </div>
        <SyntaxHighliter
          language="javascript"
          style={vscDarkPlus}
          wrapLongLines={true}
        >
          {defaultButtonCodeString}
        </SyntaxHighliter>
      </div>

      <h2>Sizes</h2>
      <div className="subtext">
        You can choose from three sizes - small, mediem, large. Medium is the
        default size.
      </div>
      <div className="container-output">
        <div className="container-button-sizes">
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
        </div>
      </div>

      <div className="container-code">
        <div
          className="container-btn-copy"
          onClick={() => {
            copy(sizesButtonCodeString);
            showSnackbar("Source code copied to clipboard", "success");
          }}
        >
          <MdContentCopy />
        </div>
        <SyntaxHighliter
          language="javascript"
          style={vscDarkPlus}
          wrapLongLines={true}
        >
          {sizesButtonCodeString}
        </SyntaxHighliter>
      </div>

      <h2>Button onClick</h2>
      <div className="subtext">Button onClick works as in a normal button.</div>
      <div className="container-output">
        <Button onClick={() => alert("Button Clicked")}>Click Me</Button>
      </div>

      <div className="container-code">
        <div
          className="container-btn-copy"
          onClick={() => {
            copy(clickButtonCodeString);
            showSnackbar("Source code copied to clipboard", "success");
          }}
        >
          <MdContentCopy />
        </div>
        <SyntaxHighliter
          language="javascript"
          style={vscDarkPlus}
          wrapLongLines={true}
        >
          {clickButtonCodeString}
        </SyntaxHighliter>
      </div>

      <h2>Disabled Button</h2>
      <div className="container-output">
        <Button disabled>DISABLED</Button>
      </div>

      <div className="container-code">
        <div
          className="container-btn-copy"
          onClick={() => {
            copy(disabledButtonCodeString);
            showSnackbar("Source code copied to clipboard", "success");
          }}
        >
          <MdContentCopy />
        </div>
        <SyntaxHighliter
          language="javascript"
          style={vscDarkPlus}
          wrapLongLines={true}
        >
          {disabledButtonCodeString}
        </SyntaxHighliter>
      </div>

      <h2>Rounded Button</h2>
      <div className="container-output">
        <Button rounded>Rounded Button</Button>
      </div>

      <div className="container-code">
        <div
          className="container-btn-copy"
          onClick={() => {
            copy(roundedButtonCodeString);
            showSnackbar("Source code copied to clipboard", "success");
          }}
        >
          <MdContentCopy />
        </div>
        <SyntaxHighliter
          language="javascript"
          style={vscDarkPlus}
          wrapLongLines={true}
        >
          {roundedButtonCodeString}
        </SyntaxHighliter>
      </div>

      <h2>Elevated Button</h2>
      <div className="container-output">
        <Button elevated>Elevated Button</Button>
      </div>

      <div className="container-code">
        <div
          className="container-btn-copy"
          onClick={() => {
            copy(elevatedButtonCodeString);
            showSnackbar("Source code copied to clipboard", "success");
          }}
        >
          <MdContentCopy />
        </div>
        <SyntaxHighliter
          language="javascript"
          style={vscDarkPlus}
          wrapLongLines={true}
        >
          {elevatedButtonCodeString}
        </SyntaxHighliter>
      </div>

      <h2>Customising Colors</h2>
      <div className="subtext">
        Both text and background colors are customisable through props.
      </div>
      <div className="container-output">
        <Button
          size="large"
          bgColor="rgb(29, 161, 242)"
          textColor="#fff"
          rounded
        >
          Custom colors
        </Button>
      </div>

      <div className="container-code">
        <div
          className="container-btn-copy"
          onClick={() => {
            copy(colorsButtonCodeString);
            showSnackbar("Source code copied to clipboard", "success");
          }}
        >
          <MdContentCopy />
        </div>
        <SyntaxHighliter
          language="javascript"
          style={vscDarkPlus}
          wrapLongLines={true}
        >
          {colorsButtonCodeString}
        </SyntaxHighliter>
      </div>

      <h2>Icon Button</h2>
      <div className="container-output">
        <Button size="large" type="icon">
          <AiOutlinePlus />
        </Button>
      </div>

      <div className="container-code">
        <div
          className="container-btn-copy"
          onClick={() => {
            copy(iconButtonCodeString);
            showSnackbar("Source code copied to clipboard", "success");
          }}
        >
          <MdContentCopy />
        </div>
        <SyntaxHighliter
          language="javascript"
          style={vscDarkPlus}
          wrapLongLines={true}
        >
          {iconButtonCodeString}
        </SyntaxHighliter>
      </div>
    </div>
  );
};
