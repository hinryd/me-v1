import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

const twitterUsername = process.env.TWITTER_USERNAME;

export default function Card({ user }) {
  return (
    <div className="flex flex-row h-40">
      <img className="shadow-2xl rounded-full mr-4" src={user.avatar_url} />

      <div className="my-auto">
        <h3 className="font-serif font-extrabold text-3xl">{user.name}</h3>
        <p className="text-md">{user.bio}</p>
        <a className="text-gray-500 text-3xl mr-2" href={user.html_url}>
          <FontAwesomeIcon className="animate-pulse" icon={faGithub} />
        </a>
        <a
          className="text-gray-500 text-3xl mr-2"
          href={`https://twitter.com/${twitterUsername}`}
        >
          <FontAwesomeIcon className="animate-pulse" icon={faTwitter} />
        </a>
      </div>
    </div>
  );
}
