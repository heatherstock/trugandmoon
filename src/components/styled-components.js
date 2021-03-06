import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"

export const Wrapper = styled.div`
@media (max-width: 599px) {
  column-gap: 18px;
}
  display: grid;
  column-gap: 31px;
  row-gap: 0;
  grid-template: auto/repeat(12,1fr);
  grid-auto-flow: row;
  overflow: hidden;
}
`;

export const Welcome = styled.div`
  grid-column: span 12;
`;

export const Section1 = styled.div`
@media (max-width: 599px) {
  column-gap: 18px;
}
  @media (max-width: 959px) {
    grid-column: span 12;
  }
  display: grid;
  column-gap: 31px;
  row-gap: 0;
  grid-template: auto/repeat(12,1fr);
  grid-auto-flow: row;
  grid-column: span 12;
`;

export const Subtitle = styled.h1`
  grid-column: 1 / -1;
  font-size: 30px;
  line-height: 36px;
  color: ${props => props.theme.accent};
  font-style: italic;
  padding: 8px 0;
  border-top: 5px solid ${props => props.theme.main};
  border-bottom: 1px solid ${props => props.theme.main};
`;

export const Subtitle2 = styled.h1`
  @media (min-width: 960px) and (max-width: 1279px) {
    grid-column: span 4;
    grid-template-columns: 1fr;
    margin-bottom: 0px;
  }
  grid-column: 1 / -1;
  font-size: 30px;
  line-height: 36px;
  color: ${props => props.theme.accent};
  font-style: italic;
  padding: 8px 0;
  border-top: 5px solid ${props => props.theme.main};
  border-bottom: 1px solid ${props => props.theme.main};
  
`;

export const Type1Container = styled.div`
  @media (max-width: 599px) {
    column-gap: 18px;
  }
  @media (max-width: 959px) {
    grid-column: span 12;
  }
  grid-area: auto/1/auto/-1;
  display: grid;
  column-gap: 30px;
  row-gap: 0;
  grid-template: auto/repeat(12,1fr);
  grid-auto-flow: row;
  grid-column: span 9;
`;

export const Type1Text = styled.div`
@media (max-width: 959px) {
  grid-area: 2/1/auto/-1;
}
  grid-column: span 4;
  grid-row-start: 1;
`;

export const Type1Image = styled(Img)`
  @media (max-width: 959px) {
    grid-area: 1/1/auto/-1;
  }
  grid-column: span 8;
  height: 375px;
  margin-bottom: 8px;
`;

export const Type2Container = styled.div`
  @media (max-width: 599px) {
    column-gap: 18px;
  }
  @media (max-width: 959px) {
    display: grid;
    grid-template: auto/repeat(12,1fr);
    grid-auto-flow: row;
    grid-area: auto/1/auto/-1;
    grid-column: span 12;
    padding-top: 15px;
    margin-top: -10px;
    border-top: 5px solid ${props => props.theme.main};
  }
  column-gap: 30px;
  row-gap: 0;
  grid-column: span 3;
  padding-left: 15px;
  margin-left: -15px;
  border-left: 1px solid ${props => props.theme.main};
`;

export const Type2Text = styled.div`
  @media (max-width: 599px) {
    grid-column: span 12;
  }
  @media (min-width: 600px) and (max-width: 959px) {
    grid-column: span 6;
    grid-area: 1/1/auto/-1;
    grid-column-start: 7;
  }
`;

export const Type2Image = styled(Img)`
  @media (max-width: 599px) {
    grid-column: span 12;
  }
  @media (min-width: 600px) and (max-width: 959px) {
    grid-column: span 6;
    grid-area: 1/1/auto/-1;
    grid-column-end: 7;
  }
  height: 150px;
  margin-bottom: 8px;
`;

export const Section2 = styled.div`
  @media (max-width: 599px) {
    column-gap: 18px;
  }
  @media (max-width: 959px) {
    grid-column: span 12;
  }
  @media (min-width: 960px) {
    grid-column: span 8;
  }
  @media (min-width: 1280px) {
    grid-column: span 12;
  }
  display: grid;
  column-gap: 31px;
  row-gap: 0;
  grid-template: auto/repeat(12,1fr);
  grid-auto-flow: row;
`;

export const Type4Container = styled.div`
@media (max-width: 599px) {
  column-gap: 18px;
}
@media (min-width: 960px) and (max-width: 1279px) {
  margin-bottom: 190px;
}
  @media (max-width: 1279px) {
    grid-column: span 12;
  }
  display: grid;
  column-gap: 30px;
  row-gap: 0;
  grid-auto-flow: row;
  grid-template: auto/repeat(12,1fr);
  grid-area: auto/1/auto/-1;
  grid-column: span 9;
`;

export const Type4Text = styled.div`
@media (max-width: 1279px) {
  grid-column: span 12;
  grid-area: 2/1/auto/-1;
}
  grid-column: span 4;
`;

export const Type4Image = styled(Img)`
@media (max-width: 1279px) {
  grid-column: span 12;
  grid-area: 1/1/auto/-1;
  height: 475px;
}
  grid-column: span 8;
  height: 375px;
  margin-bottom: 8px;
`;

export const Type5Container = styled.div`
@media (max-width: 599px) {
  column-gap: 18px;
}
  @media (max-width: 1279px) {
    display: grid;
    grid-auto-flow: row;
    grid-template: auto/repeat(12,1fr);
    grid-column: span 12;
    padding-top: 15px;
    margin-top: -10px;
    border-top: 5px solid ${props => props.theme.main};
  }
  grid-column: span 3;
  column-gap: 30px;
  row-gap: 0;
  padding-left: 15px;
  margin-left: -15px;
  border-left: 1px solid ${props => props.theme.main};
  margin-bottom: 15px;
`;

export const Type5Text = styled.div`
@media (max-width: 599px) {
  grid-column: span 12;
}
@media (min-width: 600px) and (max-width: 959px) {
  grid-column: 7 / -1;
  grid-row-start: 1;
}
  @media (min-width: 960px) and (max-width: 1279px) {
    grid-column: 1 / 7;
    grid-row-start: 1;
  }
`;

export const Type5Image = styled(Img)`
@media (max-width: 599px) {
  grid-column: span 12;
}
@media (min-width: 600px) and (max-width: 959px) {
  grid-column: 1 / 7;
  grid-row-start: 1;
}
@media (min-width: 960px) and (max-width: 1279px) {
  grid-column: 7 / -1;
  grid-row-start: 1;
}
  height: 150px;
  margin-bottom: 8px;
`;

export const Section3 = styled.div`
  @media (max-width: 599px) {
    column-gap: 18px;
  }
  @media (max-width: 959px) {
    grid-column: span 12;
  }
  @media (min-width: 960px) and (max-width: 1279px) {
    grid-column: span 4;
    grid-template-columns: 1fr;
  }
  @media (min-width: 1280px) {
    grid-row-start: 2;
  }
  display: grid;
  column-gap: 30px;
  row-gap: 0;
  grid-auto-flow: row;
  grid-template: auto/repeat(12,1fr);
  grid-column: 1/-1;
`;

export const Type3aText = styled.div`
  @media (max-width: 599px) {
    grid-column: span 12;
    border-bottom: 1px solid ${props => props.theme.main};
  }
  @media (min-width: 600px) and (max-width: 959px) {
    border-top: 5px solid ${props => props.theme.main};
  }
  @media (min-width: 960px) and (max-width: 1279px) {
    grid-column: span 4;
    grid-template-columns: 1fr;
    padding: 5px 5px 0;
    border-bottom: 1px solid ${props => props.theme.main};
  }
  @media (min-width: 1280px) {
    grid-column: span 3;
    padding-left: 15px;
    margin-left: -10px;
    border-left: 1px solid ${props => props.theme.main};
  }
  grid-area: auto/1/auto/-1;
  grid-column: span 6;
`;

export const Type3bText = styled.div`
  @media (max-width: 599px) {
    grid-column: span 12;
    border-top: 5px solid ${props => props.theme.main};

  }
  @media (min-width: 600px) and (max-width: 959px) {
    grid-row-start: 2;
    grid-column: span 6;
  }
  @media (min-width: 960px) and (max-width: 1279px) {
    grid-column: span 4;
    grid-template-columns: 1fr;
    padding: 5px 5px 0;
    border-bottom: 1px solid ${props => props.theme.main};
    margin-bottom: -1px;

  }
  @media (min-width: 1280px) {
    grid-column: span 3;
    padding-left: 15px;
    margin-left: -10px;
    border-left: 1px solid ${props => props.theme.main};
  }
  grid-area: auto/1/auto/-1;
  grid-column: span 6;
`;

export const Edition = styled.h1`
@media (max-width: 599px) {
  font-size: 36px;
  line-height: 42px;
}
@media (min-width: 600px) {
  font-size: 48px;
  line-height: 60px;
}
margin: 16px auto;
color: ${props => props.theme.main};
`;

export const Article = styled.h2`
@media (max-width: 399px) {
  font-size: 30px;
  line-height: 36px;
}
  font-size: 36px;
  line-height: 42px;
  margin: 1px auto;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.main};
  &:hover {
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.accent};
  }
`;

export const Tag = styled.p`
  font-family: Work Sans, sans serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${props => props.theme.tag};
  margin: 0px auto 4px;
`;

export const Excerpt = styled.p`
  margin: 10px auto 15px;
  color: ${props => props.theme.main};
`;

export const UL = styled.ul`
list-style-type: none;
margin: 32px 0;
`;

export const ArchiveWrapper = styled.div`
  display: grid;
  column-gap: 31px;
  row-gap: 0;
  grid-template: auto/repeat(2,1fr);
  grid-auto-flow: row;
  overflow: hidden;
}
`;

export const ArchiveTitle = styled.h1`
@media (max-width: 599px) {
  font-size: 36px;
  line-height: 42px;
}
@media (min-width: 600px) {
  font-size: 36px;
  line-height: 42px;
}
margin: 32px auto;
color: ${props => props.theme.main};
`;

export const ArchiveTag = styled.h2`
@media (max-width: 399px) {
  font-size: 30px;
  line-height: 36px;
}
  font-size: 30px;
  line-height: 36px;
  margin: 1px auto;
`;