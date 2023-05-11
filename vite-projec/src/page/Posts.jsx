import "../style/post.css"
import postsData from "../components/blog-data"
const Posts = () => {
  return (
    <div className="posts">
        <h2>Wissenswertes</h2>
        <p className="post_information">Integer massa urna, senectus maecenas in dapibus urna amet hendrerit. In ipsum, morbi amet aenean. Iaculis donec sem nullam nunc condimentum nisl non gravida in. </p>
        <h4 className="post_title">Unsere Letzten Beiträge</h4>

        <div className="blog_content">
        {
            postsData.map(postItem => (
                <div className="blog_box" key={postItem.id}>
                  <h3>{postItem.title}</h3>
                  <p className="blog_about">{postItem.description}</p>
                  <a className="blog_link"href={postItem.link}>{postItem.link}</a>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default Posts