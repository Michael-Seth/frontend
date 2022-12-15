import React from "react";
import Link from "next/link";
import NextImage from "./image";

const Card = ({ article }) => {
  return (
    <Link href={`/article/${article.attributes.slug}`}>
      <a className="uk-link-reset">
        <div className="uk-card uk-card-muted">
          <div className="uk-card-media-top">
            <NextImage image={article.attributes.image} />
          </div>
          <div className="uk-card-body">
            <p id="category" className="uk-text-uppercase">
              {article.attributes.category.data.attributes.name}
            </p>
            <p id="title" className="uk-text-large">
              {article.attributes.title}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;

/**=======  NOTES  ===========
 
 * Just a simple component that will be used for displaying the article on the main page.
 * It uses the Image component we just created earlier. And we're done with the components.
 
*/
