import React from "react"
import { graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"
import Layout from "../components/layout"

const BlogPost = ({ data }) => {
  // data.sanityPost contains the detailed post info
  const { title, publishedAt, body, author, mainImage } = data.sanityPost

  return (
    <Layout>
      <main className="max-w-3xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-gray-600 mb-4">
          {new Date(publishedAt).toDateString()}{" "}
          {author && author.name && `| by ${author.name}`}
        </p>
        {mainImage && mainImage.asset && mainImage.asset.url && (
          <img
            src={mainImage.asset.url}
            alt={title}
            className="mb-6 w-full object-cover"
          />
        )}
        <div className="prose">
          <BlockContent blocks={body} />
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String!) {
    sanityPost(id: { eq: $id }) {
      title
      publishedAt
      body {
        children {
          text
        }
      }
      author {
        name
      }
      mainImage {
        asset {
          url
        }
      }
    }
  }
`

export default BlogPost
