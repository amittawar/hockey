"use client";
import React, { useEffect, useState } from "react";
import Headers from "../../components/headers";
import { RiLoader2Line } from "react-icons/ri";

// ✅ Add a proper type for your posts
interface Post {
  id: number;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  link: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
  };
}

function Blog() {
  // ✅ Tell TypeScript: this state will hold an array of Post objects
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const res = await fetch(
          "https://thehockeytournamentresource.com/wp-json/wp/v2/posts?per_page=100&_embed&orderby=date&order=desc"
        );

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const data: Post[] = await res.json();
        console.log("API response:", data);

        if (Array.isArray(data) && data.length > 0) {
          setPosts(data);
        } else {
          setPosts([]);
        }
      } catch (err) {
        console.error("Error fetching posts:", err);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAllPosts();
  }, []);

  return (
    <>
      <Headers />

      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">All Blog Posts</h1>

        {loading ? (
          <div className="flex items-center gap-2">
            <RiLoader2Line className="animate-spin" size={24} />
            Loading posts...
          </div>
        ) : posts.length > 0 ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post) => (
              <li
                key={post.id}
                className="border p-4 rounded shadow bg-white hover:shadow-md transition"
              >
                {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                  <img
                    src={post._embedded["wp:featuredmedia"][0].source_url}
                    alt={post.title?.rendered}
                    className="w-full h-auto mb-4 rounded"
                  />
                )}
                <h2
                  className="text-xl font-semibold mb-2"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                ></h2>
                <p className="text-sm text-gray-500 mb-2">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <div
                  className="text-gray-700 mb-2"
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                ></div>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Read More →
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No posts found.</p>
        )}
      </div>
    </>
  );
}

export default Blog;
