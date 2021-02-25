import { useEffect, useState } from 'react'

const fetchPosts = async () => {
  const posts = await fetch(
    'https://raw.githubusercontent.com/Segebre/json-placeholder/main/db.json'
  ).then((response) => response.json())

  return posts
}

const getProps = async () => {
  const posts = await fetchPosts()

  return {
    props: { posts },
  }
}

// export const getStaticProps = async (context) => await getProps()
// export const getServerSideProps = async (context) => await getProps()

const Dashboard = ({ posts: prefetchedPosts }) => {
  const [posts, setPosts] = useState(prefetchedPosts)

  useEffect(async () => {
    const updatedPosts = await fetchPosts()

    setPosts(updatedPosts)
  }, [])

  let Posts = <p>Loading...</p>
  if (posts) {
    Posts = posts.map((post) => (
      <div key={post.id}>
        <h2 style={{ fontSize: '14px' }}>{post.title}</h2>
        <p style={{ fontSize: '10px' }}>{post.body}</p>
      </div>
    ))
  }

  return (
    <div>
      <h1>Posts</h1>
      <p>A list of Posts</p>
      {Posts}
    </div>
  )
}

export default Dashboard
