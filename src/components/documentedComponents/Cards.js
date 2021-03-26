import { Card } from "shoto-ui";
import { Prism as SyntaxHighliter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./docs-style.css";

export const Cards = () => {
  const heroCodeString = `import React from "react";
import { Card } from "shoto-ui";

function CardComp() {
	return (
		<div>
			<Card
				type="hero"
				heading="Cyberpunk 2077"
				subtext="$70"
				description="kmsaksmal samsalsm"
				tags={["PC", "Xbox"]}
				actionBtnText="Pre Order"
				performAction={() => console.log("Pre order")}
				bgImage="./cyberpunk.jpg"
			/>
		</div>
	);
}`;

const showcaseCodeString = `import React from "react";
import { Card } from "shoto-ui";

function CardComp() {
	return (
		<div>
			<Card
				type="showcase"
				colorTag="#FF0099"
				colorRating="#FF9529"
				heading="Crysis Remastered"
				subtext="$70"
				tags={["PC", "Xbox", "PS5"]}
				badge="New Release"
				isLiked={true}
				onClickLike={() => console.log("heart clicked")}
				rating={4}
				bgImage="./crysis.jpg"
			/>
		</div>
	);
}`;

  return (
    <div className="container-content">
      <h1>Card</h1>
      <div className="subtext">
	  Cards contain content and actions about a single subject.
      </div>
	  <h2>Hero Card</h2>
      <div className="container-output">
	  <Card
          type="hero"
          heading="Cyberpunk 2077"
          subtext="$70"
          description="kmsaksmal samsalsm"
          tags={["PC", "Xbox"]}
          actionBtnText="Pre Order"
          performAction={() => console.log("Pre order")}
          bgImage="https://c4.wallpaperflare.com/wallpaper/39/346/426/digital-art-men-city-futuristic-night-hd-wallpaper-preview.jpg"
        />
      </div>
	  <div className="container-code">
        <SyntaxHighliter
          language="javascript"
          style={vscDarkPlus}
          wrapLongLines={true}
        >
          {heroCodeString}
        </SyntaxHighliter>
      </div>

	  <h2>Showcase Card</h2>
      <div className="container-output">
	  <Card
          type="showcase"
          colorTag="#FF0099"
          colorRating="#FF9529"
          heading="Crysis Remastered"
          subtext="$70"
          tags={["PC", "Xbox", "PS5"]}
          badge="New Release"
          isLiked={true}
          onClickLike={() => console.log("heart clicked")}
          rating={4}
          bgImage="https://cdn1.epicgames.com/17a1f8585f9246808597b30780aaf4fb/offer/Epic_1200x1600_3-1200x1600-09e053727338431398657d372af1e62c.png?h=854&resize=1&w=640"
        />
      </div>
	  <div className="container-code">
        <SyntaxHighliter
          language="javascript"
          style={vscDarkPlus}
          wrapLongLines={true}
        >
          {showcaseCodeString}
        </SyntaxHighliter>
      </div>

    </div>
  );
};
