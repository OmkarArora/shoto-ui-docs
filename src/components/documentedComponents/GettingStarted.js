import { useEffect } from "react";
import { useNav } from "../contexts/nav-context";
import { Avatar } from "shoto-ui";
import { Prism as SyntaxHighliter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { MdContentCopy } from "react-icons/md";
import copy from "copy-to-clipboard";
import "./docs-style.css";

export const GettingStarted = ({ showSnackbar }) => {
  const { setNavLink, setMobileNav } = useNav();
  useEffect(() => setNavLink("gettingstarted"), [setNavLink]);
  useEffect(() => setMobileNav(false), [setMobileNav]);

  const usageCodeString = `import React from "react";
import ReactDOM from "react-dom";
import { Avatar } from "shoto-ui";

function App() {
	return (
		<Avatar alt="John Doe" src="https://via.placeholder.com/150" />
	);
}

ReactDOM.render(<App />, document.querySelector('#app'));`;

  return (
    <div className="container-content">
      <h1>Installation</h1>
      <div className="subtext">
        Shoto UI is available as an{" "}
        <span className="text-highlight">
          <a
            href="https://www.npmjs.com/package/shoto-ui"
            target="_blank"
            rel="noreferrer"
          >
            npm package
          </a>
        </span>
      </div>
      <h2>npm</h2>
      <div className="container-code">
        <div
          className="container-btn-copy"
          onClick={() => {
            copy("npm install shoto-ui");
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
          npm install shoto-ui
        </SyntaxHighliter>
      </div>

      <h1>Usage</h1>
      <div className="subtext">
        Shoto UI works in isolation. They are self-supporting. You don't need to
        install any other libraries to work with Shoto UI.
      </div>

      <h2>Quick start</h2>

      <div className="container-output">
        <Avatar alt="John Doe" src="/image.png" />
      </div>

      <div className="container-code">
        <div
          className="container-btn-copy"
          onClick={() => {
            copy(usageCodeString);
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
          {usageCodeString}
        </SyntaxHighliter>
      </div>
    </div>
  );
};
