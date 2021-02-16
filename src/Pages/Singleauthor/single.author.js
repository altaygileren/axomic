import React from "react";
import { useParams, Link } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";
import Loading from "../../Layout/loading";
import FadeIn from "react-fade-in";
import Singlepost from "../../Layout/single.post";

const GET_AUTHOR = gql`
  query GetAuthor($id: Int!) {
    user(userId: $id) {
      name
      posts {
        id
        title
        body
        comments {
          id
          body
          author {
            id
            name
          }
        }
        author {
          id
          name
        }
      }
    }
  }
`;

const Singleauthor = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_AUTHOR, {
    variables: { id: Number(id) },
  });
  if (loading) return <Loading />;
  if (error) return `Error! ${error}`;
  return data ? (
    <div>
      <div className="container">
        <div className="left-item center-info">
          <Link to="/">Back home</Link>
        </div>
        <div className="user-title">
          <h1>{data.user.name}</h1>
        </div>
      </div>
      <FadeIn>
        {data.user.posts.slice(0, 15).map((post) => (
          <div key={post.id}>
            <Singlepost post={post} />
          </div>
        ))}
      </FadeIn>
    </div>
  ) : (
    <Loading />
  );
};

export default Singleauthor;
