import React, { useState, useEffect } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";
import Loading from "../../Layout/loading";
import Styles from "./Home.module.css";
import Singlepost from "../../Layout/single.post";
import Buttonsection from "../../Layout/button.section";
import FadeIn from "react-fade-in";
import Selectinput from "../../Layout/select.input";

const GET_POSTS = gql`
  query GetPosts($limit: Int!, $page: Int!) {
    posts(pagination: { limit: $limit, page: $page }) {
      count
      currentPage
      totalPages
      data {
        id
        author {
          id
          name
        }
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
      }
    }
  }
`;

const Home = () => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const { loading, error, data } = useQuery(GET_POSTS, {
    variables: { limit, page },
  });

  useEffect(() => {
    if (data?.posts?.totalPages == null) return;
    setPage((currentPage) => {
      if (currentPage > data?.posts?.totalPages) return data?.posts?.totalPages;
      return currentPage;
    });
  }, [data?.posts?.totalPages]);
  if (loading) return <Loading />;
  if (error) return `Error! ${error}`;

  const changeInput = (e) => {
    setLimit(Number(e));
  };
  return (
    <div className={Styles.home}>
      <Selectinput limit={limit} changeInput={changeInput} />
      <br />
      <Buttonsection
        totalPages={data.posts.totalPages}
        currentPage={data?.posts?.currentPage}
        setPage={setPage}
      />
      <h1>Posts</h1>
      <h3>Total pages: {data?.posts?.totalPages}</h3>
      <FadeIn>
        {data?.posts?.data.map((item) => (
          <div key={item.id}>
            <Singlepost post={item} />
          </div>
        ))}
      </FadeIn>
    </div>
  );
};

export default Home;
