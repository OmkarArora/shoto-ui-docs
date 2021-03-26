import { Avatar } from "shoto-ui";
import { Prism as SyntaxHighliter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { AiOutlineGithub } from "react-icons/ai";
import "./docs-style.css";

export const Avatars = () => {
  const imageCodeString = `import React from "react";
import { Avatar } from "shoto-ui;
	
function AvatarComp() {
	return (
		<Avatar alt="John Doe" src="https://via.placeholder.com/150/FF0000/FFF" />
	);
}`;

  const letterCodeString = `import React from "react";
import ReactDOM from "react-dom";
import { Avatar } from "shoto-ui;
	
function App() {
	return (
		<div>
			<Avatar bgColor="yellow">J</Avatar>
			<Avatar bgColor="#33F7FF">O</Avatar>
		</div>
	);
}`;

  const sizeCodeString = `import React from "react";
import ReactDOM from "react-dom";
import { Avatar } from "shoto-ui;
	
function App() {
	return (
		<div>
			<Avatar
				alt="John Doe"
				src="https://randomuser.me/api/portraits/men/75.jpg"
				height="30px" 
				width="30px"
			/>
			// default size
			<Avatar
				alt="John Doe"
				src="https://randomuser.me/api/portraits/men/75.jpg"
			/>
			<Avatar
				alt="John Doe"
				src="https://randomuser.me/api/portraits/men/75.jpg"
				height="60px" 
				width="60px"
			/>
		</div>
	);
}`;

  const iconCodeString = `import React from "react";
import ReactDOM from "react-dom";
import { Avatar } from "shoto-ui;
import { AiOutlineGithub } from "react-icons/ai";

function App() {
	return (
		<div>
          <Avatar><AiOutlineGithub/></Avatar>
          <Avatar alt="User" bgColor="black">
            <img src="./folder.svg" />
          </Avatar>
		</div>
	);
}`;

  const fallbackCodeString = `import React from "react";
import ReactDOM from "react-dom";
import { Avatar } from "shoto-ui;

function App() {
	return (
		<div>
          <Avatar src="./broken-image.png"/>
          <Avatar alt="John Doe" bgColor="red" src="./broken-image.jpg"/>
		</div>
	);
}`;

  return (
    <div className="container-content">
      <h1>Avatar</h1>
      <h2>Image Avatars</h2>
      <div className="container-output">
        <Avatar
          alt="Susan"
          src="https://randomuser.me/api/portraits/women/48.jpg"
        />
      </div>
      <div className="container-code">
        <SyntaxHighliter
          language="javascript"
          style={vscDarkPlus}
          wrapLongLines={true}
        >
          {imageCodeString}
        </SyntaxHighliter>
      </div>

      <h2>Letter Avatars</h2>
      <div className="container-output">
        <Avatar bgColor="yellow">J</Avatar>
        <Avatar bgColor="#33F7FF">O</Avatar>
      </div>
      <div className="container-code">
        <SyntaxHighliter
          language="javascript"
          style={vscDarkPlus}
          wrapLongLines={true}
        >
          {letterCodeString}
        </SyntaxHighliter>
      </div>

      <h2>Sizes</h2>
      <div className="subtext">
        You can change avatar sizes using the{" "}
        <span className="text-highlight">height</span> and{" "}
        <span className="text-highlight">width</span> attributes
      </div>
      <div className="container-output">
        <Avatar
          alt="John Doe"
          src="https://randomuser.me/api/portraits/men/75.jpg"
          height="30px"
          width="30px"
        />
        <Avatar
          alt="John Doe"
          src="https://randomuser.me/api/portraits/men/75.jpg"
        />
        <Avatar
          alt="John Doe"
          src="https://randomuser.me/api/portraits/men/75.jpg"
          height="60px"
          width="60px"
        />
      </div>
      <div className="container-code">
        <SyntaxHighliter
          language="javascript"
          style={vscDarkPlus}
          wrapLongLines={true}
        >
          {sizeCodeString}
        </SyntaxHighliter>
      </div>

      <h2>Icon Avatars</h2>
      <div className="subtext">
        Icon avatars are created by passing an icon as{" "}
        <span className="text-highlight">children</span>.
      </div>
      <div className="container-output">
        <Avatar>
          <AiOutlineGithub />
        </Avatar>
        <Avatar alt="User" bgColor="black">
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 468.293 468.293"
            style={{ enableBackground: "new 0 0 468.293 468.293" }}
          >
            <path
              style={{ fill: "#F6C358" }}
              d="M29.525,50.447h111.996c7.335,0,14.11,3.918,17.77,10.274l18.433,25.181
	c3.66,6.356,10.436,10.274,17.77,10.274h272.798v287.495c0,15.099-12.241,27.34-27.34,27.34H27.34
	C12.241,411.011,0,398.77,0,383.671V128.068c0-21.133,3.265-42.14,9.68-62.276l0,0C12.03,56.755,20.188,50.447,29.525,50.447z"
            />
            <rect
              x="42.615"
              y="91.473"
              style={{ fill: "#EBF0F3" }}
              width="359.961"
              height="152.058"
            />
            <path
              style={{ fill: "#FCD462" }}
              d="M447.788,64.117H334.927c-8.026,0-15.315,4.683-18.65,11.983l-19.313,42.267
	c-3.336,7.3-10.624,11.983-18.65,11.983H0v260.155c0,15.099,12.241,27.34,27.34,27.34h413.613c15.099,0,27.34-12.241,27.34-27.34
	V84.622C468.293,73.298,459.112,64.117,447.788,64.117z"
            />
          </svg>
        </Avatar>
      </div>
      <div className="container-code">
        <SyntaxHighliter
          language="javascript"
          style={vscDarkPlus}
          wrapLongLines={true}
        >
          {iconCodeString}
        </SyntaxHighliter>
      </div>

      <h2>Fallbacks</h2>
      <div className="subtext">
        If there is an error loading the avatar image, the component falls back
        to take the first character of the{" "}
        <span className="text-highlight">alt</span> attribute, or the character
        'Z' if it is not passed.
      </div>
      <div className="container-output">
        <Avatar src="./broken-image.png" />
        <Avatar alt="John Doe" bgColor="red" src="./broken-image.jpg" />
      </div>
      <div className="container-code">
        <SyntaxHighliter
          language="javascript"
          style={vscDarkPlus}
          wrapLongLines={true}
        >
          {fallbackCodeString}
        </SyntaxHighliter>
      </div>
    </div>
  );
};
