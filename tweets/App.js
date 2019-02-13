// Render the tweets using React!
const App = ({ tweets }) => (
    <div className="d-flex flex-column justify-content-start align-items-center mt-5">
        {tweets.map((tweet, i) => (
            <div className="bg-white p-2 m-2 w-50">
                <div className="d-flex align-items-center">
                    <img width="50" src={tweet.user.profilePic} />
                    <User user={tweet.user} />
                </div>
                <h3>{tweet.text}</h3>
                <hr />
                <Metrics replies={tweet.replies} retweets={tweet.retweets} likes={tweet.likes} />
            </div>
        ))}
    </div>
)

// CHALLENGE: Write a separate Tweet component for use in the App component
const Tweet = ({tweet}) => (
    <div className="bg-white p-2 m-2 w-50">
        <div className="d-flex align-items-center">
            <img width="50" src={tweet.user.profilePic} />
            <User user={tweet.user} />
        </div>
        <h3>{tweet.text}</h3>
        <hr />
        <Metrics replies={tweet.replies} retweets={tweet.retweets} likes={tweet.likes} />
    </div>
);

// CHALLENGE: Write a separate User component for use in the Tweet component
const User = ({user}) => (
    <div className="mt-4 ml-2">
        <b>{user.username}</b>
        {user.isVerified ? <img width="15" src="twitterIcons/check-circle.svg" /> : ''}
        <p>{user.handle}</p>
    </div>
);

// CHALLENGE: Write a separate Metrics component for use in the Tweet component (likes, retweets, replies)
const Metrics = ({replies, retweets, likes}) =>(
    <div className="d-flex text-secondary">
        <img style={{opacity: "0.62"}} src="twitterIcons/message-circle.svg" />
        <b className="mr-3 ml-1">{replies}</b>
        <img style={{opacity: "0.62"}} src="twitterIcons/repeat.svg" />
        <b className="mr-3 ml-1">{retweets}</b>
        <img style={{opacity: 0.62}} src="twitterIcons/heart.svg" />
        <b className="mr-3 ml-1">{likes}</b>
    </div>
);
// BONUS CHALLENGE - Delete your Tweet component code and rewrite the App component so that it uses User and Metrics directly

