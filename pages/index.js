import React from "react";
import Articles from "../components/articles";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";

const Home = ({ articles, categories, homepage }) => {
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.attributes.seo} />
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{homepage.attributes.hero.title}</h1>
          <Articles articles={articles} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
    fetchAPI("/articles", { populate: ["image", "category"] }),
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
  ]);

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  };
}

export default Home;
/**============  NOTES  ====================

 (Explaining the homepage call)

By default on Strapi v4, the REST API is no longer populating components, relations, and dynamic zones for performance purposes (only fetching the minimum and specifying what you need).

If you want to fetch them, you'll need to use the populate param. Here we say: for the homepage single-type, we want to populate the hero component and get all its fields ("*") and the SEO component. You can see that you can specify it in different ways.

Imagine that the hero component has a component inside and that you want to fetch it also, you should write something like this:

 */
