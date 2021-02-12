import { Link } from "gatsby"
import styled from "styled-components";
import PropTypes from 'prop-types'
import React from "react"

const Wrapper = styled.div`
@media (min-width: 988px) {
  display: flex;
}
  justify-content: space-between;
  align-items: center;
  border-bottom: 5px solid ${props => props.theme.main};
`;

const TitleLink = styled(Link)`
  font-size: 72px;
  line-height: 72px;
  font-family: Work Sans, sans serif;
  font-weight: 800;
  margin: 16px 0;
  flex: 1;
  color: ${props => props.theme.accent};
  text-decoration: none;
`;

const NavLink = styled(Link)`
@media (max-width: 399px) {
  padding-right: 24px;
}
@media (min-width: 400px) and (max-width: 987px) {
  padding-right: 30px;
}
@media (min-width: 988px) {
  padding-left: 30px;
}
  color: ${props => props.theme.main};
  text-decoration: none;
`;

const List = styled.ul`
@media (max-width: 987px) {
  padding-left: 0;
}
  display: flex;
  flex: 1;
`;

const ListItem = styled.li`
@media (min-width: 988px) {
  display: flex;
  margin-top: 36px;
}
  list-style-type: none;
`;

const Header = ({ siteTitle, menuLinks, theme }) => (
  <header>
      <Wrapper theme={theme}>
        <TitleLink to="/" theme={theme}>{siteTitle}</TitleLink>
        <div>
        <List>
          {menuLinks.map(link => (
            <ListItem key={link.name}>
              <NavLink to={link.link} theme={theme}>{link.name}</NavLink>
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
