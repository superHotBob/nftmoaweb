import React, { useEffect } from 'react';
import styled from 'styles/theme';

export default (Component: React.FC<RouteComponentProps>) => (props: RouteComponentProps) => {
  // if (error?.message && cookie.get("id_token") && cookie.get("refresh_token")) {
  //   console.log(error?.message);
  //   error.message.indexOf("401") > 0 && auth.refreshToken(cookie.get("refresh_token"));
  // }

  useEffect(() => {}, []);

  return (
    <Layout>
      <Container>
        <Component {...props} />
      </Container>
    </Layout>
  );
};

const Layout = styled.div``;

const Container = styled.div``;
