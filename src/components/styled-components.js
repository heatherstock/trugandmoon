import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"

export const Wrapper = styled.div`
@media (max-width: 599px) {
  column-gap: 18px;
}
  display: grid;
  column-gap: 30px;
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
  column-gap: 30px;
  row-gap: 0;
  grid-template: auto/repeat(12,1fr);
  grid-auto-flow: row;
  grid-column: span 12;
`;

export const Subtitle = styled.h1`
  grid-column: 1 / -1;
  font-size: 20px;
  color: palevioletred;
  font-style: italic;
  padding-top: 8px;
  border-top: 1px solid #cec6b9;
`;

export const Subtitle2 = styled.h1`
  @media (min-width: 960px) and (max-width: 1279px) {
    grid-column: span 4;
    grid-template-columns: 1fr;
  }
  grid-column: 1 / -1;
  font-size: 20px;
  color: palevioletred;
  font-style: italic;
  padding-top: 8px;
  border-top: 1px solid #cec6b9;
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
    border-top: 1px solid #cec6b9;
  }
  column-gap: 30px;
  row-gap: 0;
  grid-column: span 3;
  padding-left: 15px;
  margin-left: -10px;
  border-left: 1px solid #cec6b9;
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
  column-gap: 30px;
  row-gap: 0;
  grid-template: auto/repeat(12,1fr);
  grid-auto-flow: row;
`;

export const Type4Container = styled.div`
@media (max-width: 599px) {
  column-gap: 18px;
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
    border-top: 1px solid #cec6b9;
  }
  grid-column: span 3;
  column-gap: 30px;
  row-gap: 0;
  padding-left: 15px;
  margin-left: -10px;
  border-left: 1px solid #cec6b9;
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
    border-bottom: 1px solid #cec6b9;
  }
  @media (min-width: 600px) and (max-width: 959px) {
    border-top: 1px solid #cec6b9;
  }
  @media (min-width: 960px) and (max-width: 1279px) {
    grid-column: span 4;
    grid-template-columns: 1fr;
    border-bottom: 1px solid #cec6b9;
  }
  @media (min-width: 1280px) {
    grid-column: span 3;
  }
  grid-area: auto/1/auto/-1;
  grid-column: span 6;
  padding-left: 15px;
  margin-left: -10px;
  border-left: 1px solid #cec6b9;
`;

export const Type3bText = styled.div`
  @media (max-width: 599px) {
    grid-column: span 12;
    border-top: 1px solid #cec6b9;

  }
  @media (min-width: 600px) and (max-width: 959px) {
    grid-row-start: 2;
    grid-column: span 6;
  }
  @media (min-width: 960px) and (max-width: 1279px) {
    grid-column: span 4;
    grid-template-columns: 1fr;
        border-top: 1px solid #cec6b9;

  }
  @media (min-width: 1280px) {
    grid-column: span 3;
  }
  grid-area: auto/1/auto/-1;
  grid-column: span 6;
  padding-left: 15px;
  margin-left: -10px;
  border-left: 1px solid #cec6b9;
`;

export const Edition = styled.h1`
@media (max-width: 599px) {
  font-size: 32px;
}
@media (min-width: 600px) {
  font-size: 42px;
}
  color: darkOliveGreen;
`;

export const Article = styled.h2`
  font-size: 30px;
  margin-top: 12px;
  color: darkOliveGreen;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: darkOliveGreen;
  &:hover {
    text-decoration: underline;
  }
`;

export const tag = styled.p`
  font-family: Work Sans, sans serif;
  font-weight: 500;
  font-size: 14px;
  color: indianred;
  margin: 0px;
`;