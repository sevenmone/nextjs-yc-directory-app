import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { StartupTypeCard } from "../types";

export default async function Home() {

  const posts = await client.fetch(STARTUPS_QUERY);

  return (
    <>
      <h1 className="text-2xl">Home</h1>
      <div>
        {posts.map((post: StartupTypeCard) => {

          return (
            <div key={post._id}>{post.title}</div>
          )
        })}
      </div>
    </>
  );
}
