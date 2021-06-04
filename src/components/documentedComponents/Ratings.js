import { useEffect } from "react";
import { useNav } from "../contexts/nav-context";
import { StarRating } from "shoto-ui";
import { Prism as SyntaxHighliter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./docs-style.css";

export const Ratings = () => {
  const { setNavLink, setMobileNav } = useNav();
  useEffect(() => setNavLink("ratings"), [setNavLink]);
  useEffect(() => setMobileNav(false), [setMobileNav]);

  const ratingCodeString = `import React from "react";
import { StarRating } from "shoto-ui";

function RatingComp() {
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
