import { Alert } from "shoto-ui";
import { Prism as SyntaxHighliter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./docs-style.css";

export const Alerts = () => {
  const alertCodeString = `import React from "react";
import { Alert } from "shoto-ui";

function AlertComp() {
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
