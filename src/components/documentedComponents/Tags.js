import { useEffect } from "react";
import { useNav } from "../contexts/nav-context";
import { Tag } from "shoto-ui";
import { Prism as SyntaxHighliter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { MdContentCopy } from "react-icons/md";
import copy from "copy-to-clipboard";
import "./docs-style.css";

export const Tags = ({ showSnackbar }) => {
  const { setNavLink, setMobileNav } = useNav();
  useEffect(() => setNavLink("tags"), [setNavLink]);
  useEffect(() => setMobileNav(false), [setMobileNav]);

  const tagCodeString = `import React from "react";
import { Tag } from "shoto-ui";

function Tags() {
	return (
		<div>
			<Tag color="red" borderColor="green">
				Apple
			</Tag>
			<Tag color="red" borderColor="black">
				<div style={{ display: "inline-block" }}>
					<h4>Hey</h4>
					<p>Sub text</p>
				</div>
			</Tag>
		</div>
	);
}`;

  return (
    <div className="container-content">
      <h1>Tag</h1>
      <div className="container-output">
        <Tag color="red" borderColor="green">
          Apple
        </Tag>
        <Tag color="red" borderColor="black">
          <div style={{ display: "inline-block" }}>
            <h4>Hey</h4>
            <p>Sub text</p>
          </div>
        </Tag>
      </div>
      <div className="container-code">
        <div
          className="container-btn-copy"
          onClick={() => {
            copy(tagCodeString);
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
          {tagCodeString}
        </SyntaxHighliter>
      </div>
    </div>
  );
};
