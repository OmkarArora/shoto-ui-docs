import { useState, useEffect } from "react";
import { useNav } from "../contexts/nav-context";
import { Snackbar, Alert, Button } from "shoto-ui";
import { Prism as SyntaxHighliter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { MdContentCopy } from "react-icons/md";
import copy from "copy-to-clipboard";
import "./docs-style.css";

export const Snackbars = ({ showSnackbar }) => {
  const [snackbarOpen, setSnackbar] = useState(false);

  const { setNavLink, setMobileNav } = useNav();
  useEffect(() => setNavLink("snackbars"), [setNavLink]);
  useEffect(() => setMobileNav(false), [setMobileNav]);

  const snackbarCodeString = `import React, {useState} from "react";
import { Snackbar, Alert, Button } from "shoto-ui";

function SnackbarCustom() {
	const [snackbarOpen, setSnackbar] = useState(false);
	return (
		<div>
          <Button rounded onClick={() => setSnackbar((state) => !state)}>
              {snackbarOpen ? "Close Snackbar" : "Open Snackbar"}
          </Button>
          <Snackbar
            onClose={() => setSnackbar(false)}
            open={snackbarOpen}
            autoHideDuration={2000}
          >
            <Alert severity="info" onClose={() => setSnackbar(false)}>
              Alerting information
            </Alert>
          </Snackbar>
	  </div>
	);
}`;

  return (
    <div className="container-content">
      <h1>Snackbar</h1>
      <div className="container-output container-snackbar-output">
        <Button rounded onClick={() => setSnackbar((state) => !state)}>
          {" "}
          {snackbarOpen ? "Close Snackbar" : "Open Snackbar"}
        </Button>
        <Snackbar
          onClose={() => setSnackbar(false)}
          open={snackbarOpen}
          autoHideDuration={2000}
        >
          <Alert severity="info" onClose={() => setSnackbar(false)}>
            Alerting information
          </Alert>
        </Snackbar>
      </div>
      <div className="container-code">
        <div
          className="container-btn-copy"
          onClick={() => {
            copy(snackbarCodeString);
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
          {snackbarCodeString}
        </SyntaxHighliter>
      </div>
    </div>
  );
};
