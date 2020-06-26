import { Link } from "gatsby"
import styled from "styled-components";
import PropTypes from 'prop-types'
import React from "react"

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1240px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleLink = styled(Link)`
  font-family: Work Sans, sans serif;
  font-weight: 800;
  font-size: 4.5em;
  margin: 24px 0;
  flex: 1;
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
        <TitleLink to="/">{siteTitle}</TitleLink>
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
