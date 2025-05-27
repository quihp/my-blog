import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import CustomLink from "src/components/Link/link"
import Seo from "src/components/seo"

const CreativePage = ({ data }) => {
  if (!data || !data.allSanityPost) {
    return <p>No posts found.</p>
  }
  const posts = data.allSanityPost.nodes
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Creative Posts</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => {
            const image = getImage(post.mainImage.asset.gatsbyImageData)
            return (
              <div key={post.id} className="bg-white p-4 shadow-md rounded-lg">
                {image && (
                  <GatsbyImage
                    image={image}
                    alt={post.title}
                    className="rounded-md"
                  />
                )}
                <h2 className="text-xl font-semibold mt-4">
                  <CustomLink to={`/creative/${post.slug.current}`}>
                    {post.title}
                  </CustomLink>
                </h2>
                <p className="text-gray-500 text-sm">{post.publishedAt}</p>
                <p className="mt-2 text-gray-700">{post.excerpt}</p>
                <CustomLink to={`/creative/${post.slug.current}`}>
                  Read More
                </CustomLink>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query {
    allSanityPost(
      filter: { categories: { elemMatch: { title: { eq: "Creative" } } } }
    ) {
      nodes {
        id
        title
        _rawBody
        body {
          _key
          _type
          style
          listItem
          level
          _rawChildren
        }
        slug {
          current
        }
        publishedAt(formatString: "MMMM D, YYYY")
        author {
          name
        }
        mainImage {
          asset {
            gatsbyImageData(width: 300, height: 200, placeholder: BLURRED)
          }
        }
      }
    }
  }
`
export const Head = () => <Seo title="Contact" />
export default CreativePage
