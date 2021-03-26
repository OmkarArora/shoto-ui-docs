import { Badge, Avatar } from "shoto-ui";
import { Prism as SyntaxHighliter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { BsCheckCircle } from "react-icons/bs";
import "./docs-style.css";

export const Badges = () => {
  const badgeCodeString = `import React from "react";
import { Avatar } from "shoto-ui";
import { BsCheckCircle } from "react-icons/bs";

function BadgeComp() {
	return (
		<div>
			<Badge badgeContent={9999} bgColor="red" color="white">
				<BsCheckCircle />
			</Badge>
			<br />
			<Badge badgeContent={99} bgColor="yellow" color="black">
				<BsCheckCircle />
			</Badge>
			<br />
			<Badge badgeContent={99} bgColor="yellow" color="black">
				<Avatar alt="" src="/broken-image.jpg" bgColor="#ff0202" />
			</Badge>
		</div>
	);
}`;

  return (
    <div className="container-content">
      <h1>Badge</h1>
      <div className="subtext">
        Badge generates a small badge to the top-right of its child.
      </div>

      <div className="container-output">
        <Badge badgeContent={9999} bgColor="red" color="white">
          <BsCheckCircle />
        </Badge>
        <br />
        <Badge badgeContent={99} bgColor="yellow" color="black">
          <BsCheckCircle />
        </Badge>
        <br />
        <Badge badgeContent={99} bgColor="yellow" color="black">
          <Avatar alt="" src="/broken-image.jpg" bgColor="#ff0202" />
        </Badge>
      </div>

      <div className="container-code">
        <SyntaxHighliter
          language="javascript"
          style={vscDarkPlus}
          wrapLongLines={true}
        >
          {badgeCodeString}
        </SyntaxHighliter>
      </div>
    </div>
  );
};
