import { useEffect } from "react";
import { useNav } from "../contexts/nav-context";
import { Alert } from "shoto-ui";
import { Prism as SyntaxHighliter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { MdContentCopy } from "react-icons/md";
import copy from "copy-to-clipboard";
import "./docs-style.css";

export const Alerts = ({ showSnackbar }) => {
  const { setNavLink, setMobileNav } = useNav();
  useEffect(() => setNavLink("alerts"), [setNavLink]);
  useEffect(() => setMobileNav(false), [setMobileNav]);

  const alertCodeString = `import React from "react";
import { Alert } from "shoto-ui";

function Alerts() {
  return (
        <div>
          <Alert severity="warning">Warning</Alert>
          <Alert severity="error">Error</Alert>
          <Alert severity="info">Info</Alert>
          <Alert severity="success">Success</Alert>
        </div>
  );
}`;

  return (
    <div className="container-content">
      <h1>Alert</h1>
      <div className="subtext">
        An alert displays a short, important message in a way that attracts the
        user's attention without interrupting the user's task.
      </div>

      <div className="container-output">
        <div className="container-alert">
          <Alert severity="warning">Warning</Alert>
          <Alert severity="error">Error</Alert>
          <Alert severity="info">Info</Alert>
          <Alert severity="success">Success</Alert>
        </div>
      </div>

      <div className="container-code">
        <div
          className="container-btn-copy"
          onClick={() => {
            copy(alertCodeString);
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
          {alertCodeString}
        </SyntaxHighliter>
      </div>
    </div>
  );
};
