import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { graphql } from "gatsby"
const BlogPage = ({ data }) => {
  if (!data || !data.allSanityPost) {
    return <p>No posts found.</p>
  }
  const posts = data.allSanityPost.nodes
  return (
    <Layout>
      <h1>Blog</h1>
      <p>Welcome to my blog!</p>
      {posts.map(post => (
        <article key={post.id} className="mb-6">
          <h2 className="text-2xl">
            <Link to={`/blog/${post.slug.current}`}>{post.title}</Link>
          </h2>
          <p className="text-gray-600">
            {new Date(post.publishedAt).toDateString()}
          </p>
        </article>
      ))}
    </Layout>
  )
}
export const query = graphql`
  query {
    allSanityPost {
      nodes {
        id
        title
        slug {
          current
        }
        publishedAt
        author {
          name
        }
        mainImage {
          asset {
            url
          }
        }
        categories {
          title
        }
        body {
          children {
            text
          }
        }
      }
    }
  }
`
export default BlogPage
