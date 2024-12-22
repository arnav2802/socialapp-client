import {Link} from "react-router-dom";

export default function Post({_id,title,summary,aiSummary,cover,content,createdAt,author}) {

    return (
        <div className="post">
            <div className="image">
                <Link to={`/post/${_id}`}>
                    <img src={'http://localhost:4000/'+cover} alt=""/>
                </Link>
            </div>
            <div className="texts">
                <Link to={`/post/${_id}`}>
                    <h2>{title}</h2>
                </Link>
                <p className="info">
                    <a className="author">{author.username}</a>

                </p>
                <div className="summaries">
                    <div className="user-summary">
                        <h4>User Summary:</h4>
                        <p>{summary}</p>
                    </div>
                    {aiSummary && (
                        <div className="ai-summary">
                            <h4>AI Summary:</h4>
                            <p>{aiSummary}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}