import { Link } from "gatsby"
import styled from "styled-components";
import React from "react"

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1240px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 4.5em;
  margin: 24px 0;
  flex: 1;
`;

const TitleLink = styled(Link)`
  color: palevioletred;
  text-decoration: none;
`;

const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const List = styled.ul`
  display: flex;
  flex: 1;
`;

const ListItem = styled.li`
  list-style-type: none;
  padding: 0 1rem;
  margin-top: 2rem;
`;

const Header = ({ siteTitle, menuLinks }) => (
  <header>
      <Wrapper>
        <Title>
          <TitleLink to="/">{siteTitle}</TitleLink>
        </Title>
        <div>
            <List>
              {menuLinks.map(link => (
                <ListItem key={link.name}>
                  <NavLink to={link.link}>{link.name}</NavLink>
                </ListItem>
              ))}
            </List>
        </div>
      </Wrapper>
  </header>
)

export default Header
