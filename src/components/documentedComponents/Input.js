import { useEffect } from "react";
import { useNav } from "../contexts/nav-context";
import { Input } from "shoto-ui";
import { Prism as SyntaxHighliter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./docs-style.css";

export const InputDoc = () => {
  const { setNavLink, setMobileNav } = useNav();
  useEffect(() => setNavLink("input"), [setNavLink]);
  useEffect(() => setMobileNav(false), [setMobileNav]);

  const defaultInputCodeString = `import React from "react";
import { Input } from "shoto-ui";

function InputComp() {
  return (
        <div>
			<Input label="Name" type="text" required/>
        </div>
  );
}`;

  const customInputCodeString = `import React from "react";
import { Input } from "shoto-ui";

function InputComp() {
  return (
        <div>
			<Input label="Name" type="text" required activeColor="#db2777" textColor="blue" restingColor="green"/>
        </div>
  );
}`;

  return (
    <div className="container-content">
      <h1>Input</h1>
      <div className="subtext">
        Shoto-ui provides an animated input, with support for all native input
        props.
      </div>

      <h2>Default Input</h2>
      <div className="container-output">
        <Input label="Name" type="text" required />
      </div>

      <div className="container-code">
        <SyntaxHighliter
          language="javascript"
          style={vscDarkPlus}
          wrapLongLines={true}
        >
          {defaultInputCodeString}
        </SyntaxHighliter>
      </div>

      <h2>Customised Input</h2>
      <div className="container-output">
        <Input
          label="Name"
          type="text"
          required
          activeColor="#db2777"
          textColor="blue"
          restingColor="green"
        />
      </div>

      <div className="container-code">
        <SyntaxHighliter
          language="javascript"
          style={vscDarkPlus}
          wrapLongLines={true}
        >
          {customInputCodeString}
        </SyntaxHighliter>
      </div>
    </div>
  );
};
