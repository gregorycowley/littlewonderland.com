import Link from "next/link";
import ReactMarkdown from "react-markdown";

const BlogList = (props) => {

  function truncateSummary(content) {
    return content.slice(0, 200).trimEnd();
  }

  function reformatDate(fullDate) {
    const date = new Date(fullDate)
    return date.toDateString().slice(4);
  }

  return (
    <>
      <ul className="list">
        {props.allBlogs.length > 1 && props.allBlogs.map(post => (
          <Link
            key={post.slug}
            href={{ pathname: `/blog/${post.slug}` }}
          >
            <a>
            <li>
              <div className="hero_image">
                <img src={post.document.data.hero_image} alt={post.document.data.hero_image} />
              </div>
              <div className="blog__info">
                <h2>{post.document.data.title}</h2>
                <h3> {reformatDate(post.document.data.date)}</h3>
                <p>
                  <ReactMarkdown source={truncateSummary(post.document.content)} />
                </p>
              </div>
            </li>
            </a>
          </Link>
        ))}
      </ul>
     </>
  );
};

export default BlogList;
