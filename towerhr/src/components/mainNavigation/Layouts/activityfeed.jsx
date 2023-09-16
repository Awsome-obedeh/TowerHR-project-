import './activityfeed.css'

const feeds = [
  {
    id: 1,
    feed: "pushed to git hub",
    imgUrl:
      "https://res.cloudinary.com/dvl2juial/image/upload/v1689066096/cld-sample-5.jpg",
    timeAgo: "13 min ago",
  },
  {
    id: 2,
    feed: "Obed created  post",
    imgUrl:
      "https://res.cloudinary.com/dvl2juial/image/upload/v1689066096/cld-sample-5.jpg",
    timeAgo: "13 min ago",
  },
  {
    id: 3,
    feed: "Upcoming Event",
    imgUrl:
      "https://res.cloudinary.com/dvl2juial/image/upload/v1689066096/cld-sample-5.jpg",
    timeAgo: "13 min ago",
  },
  {
    id: 4,
    feed: "Day 3 of coding challenge",
    imgUrl:
      "https://res.cloudinary.com/dvl2juial/image/upload/v1689066096/cld-sample-5.jpg",
    timeAgo: "13 min ago",

    id: 5,
    feed: "Day 4 of coding challenge",
    imgUrl:
      "https://res.cloudinary.com/dvl2juial/image/upload/v1689066096/cld-sample-5.jpg",
    timeAgo: "13 min ago",
  },
];

export default function ActivityFeed() {
  return (
    <>
      <h1>Activity Feed</h1>
      {feeds.map((feed) => {
        return (
          <>
            <div className="feeds">
                <div className="feedImg-holder"></div>
               
                
              
              <h1 className="feed-title">{feed.feed}</h1>
              <small className="feed-time">{feed.timeAgo} </small>
              <Button />
            </div>
          </>
        );
      })}
    </>
  );
}

function Button() {
  return <button>view</button>;
}
