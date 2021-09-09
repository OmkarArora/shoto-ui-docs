import { useEffect } from "react";
import { useNav } from "../contexts/nav-context";
import { StarRating } from "shoto-ui";
import { Prism as SyntaxHighliter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { MdContentCopy } from "react-icons/md";
import copy from "copy-to-clipboard";
import "./docs-style.css";

export const Ratings = ({ showSnackbar }) => {
  const { setNavLink, setMobileNav } = useNav();
  useEffect(() => setNavLink("ratings"), [setNavLink]);
  useEffect(() => setMobileNav(false), [setMobileNav]);

  const ratingCodeString = `import React from "react";
import { StarRating } from "shoto-ui";

function Rating() {
	return (
      <div>
        <StarRating rating={3.5} color="red" />
        <StarRating rating={5} color="#FF9529"/>
      </div>
	);
}`;

  return (
    <div className="container-content">
      <h1>Rating</h1>
      <div className="subtext">
        Ratings provide insight regarding others’ opinions and experiences with
        a product.
      </div>
      <div className="container-output">
        <StarRating rating={3.5} color="red" />
        <StarRating rating={5} color="#FF9529" />
      </div>
      <div className="container-code">
        <div
          className="container-btn-copy"
          onClick={() => {
            copy(ratingCodeString);
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
          {ratingCodeString}
        </SyntaxHighliter>
      </div>
    </div>
  );
};
