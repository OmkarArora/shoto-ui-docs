import { useState, useEffect } from "react";
import { useNav } from "../contexts/nav-context";
import { Snackbar, Alert } from "shoto-ui";
import { Prism as SyntaxHighliter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./docs-style.css";

export const Snackbars = () => {
  const [snackbarOpen, setSnackbar] = useState(false);

  const { setNavLink } = useNav();
  useEffect(() => setNavLink("snackbars"), [setNavLink]);

  const snackbarCodeString = `import React, {useState} from "react";
import { Snackbar, Alert } from "shoto-ui";

function SnackbarComp() {
	const [snackbarOpen, setSnackbar] = useState(false);
	return (
		<div>
          <button onClick={() => setSnackbar((state) => !state)}>
              {snackbarOpen ? "Close Snackbar" : "Open Snackbar"}
          </button>
          <Snackbar
            onClose={() => setSnackbar(false)}
            open={snackbarOpen}
            autoHideDuration={5000}
          >
            <Alert severity="error" onClose={() => setSnackbar(false)}>
              An error occurred
            </Alert>
          </Snackbar>
	  </div>
	);
}`;

  return (
    <div className="container-content">
      <h1>Snackbar</h1>
      <div className="container-output">
        <button onClick={() => setSnackbar((state) => !state)}>
          {snackbarOpen ? "Close Snackbar" : "Open Snackbar"}
        </button>
        <Snackbar
          onClose={() => setSnackbar(false)}
          open={snackbarOpen}
          autoHideDuration={5000}
        >
          <Alert severity="info" onClose={() => setSnackbar(false)}>
            Snackbar open
          </Alert>
        </Snackbar>
      </div>
      <div className="container-code">
        <SyntaxHighliter
          language="javascript"
          style={vscDarkPlus}
          wrapLongLines={true}
        >
          {snackbarCodeString}
        </SyntaxHighliter>
      </div>
    </div>
  );
};
