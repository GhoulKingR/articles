import styled from "styled-components";
import Avatar from "./assets/images/avatar-jessica.jpeg";

function App() {
  const links = [
    {name: "GitHub"},
    {name: "Frontend Mentor"},
    {name: "LinkedIn"},
    {name: "Twitter"},
    {name: "Instagram"},
  ];

  return (
    <Container>
      <div>
        <img src={Avatar} alt="avatar" />
        <h1>Jessica Randall</h1>
        <h2>London, United Kingdom</h2>
        <p>"Front-end developer and avid reader."</p>
        <nav>
          <ul>
            {
              links.map((v, i) => (
                <li key={i}>{v.name}</li>
              ))
            }
          </ul>
        </nav>
      </div>
    </Container>
  )
}

export default App;

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #141414;
  
  & > div {
    width: calc(100vw - 48px);
    max-width: calc(384px - 48px);
    display: flex;
    flex-direction: column;
    align-items: center; 
    padding: 24px;
    background-color: #1f1f1f;
    border-radius: 12px;

    & > img {
      width: 88px;
      height: 88px;
      border-radius: 44px;
      margin-bottom: 24px;
    }

    & > h1 {
      font-weight: semi-bold;
      line-height: 150%;
      font-size: 24px;
      letter-spacing: 0%;
      margin-bottom: 4px;
    }

    & > h2 {
      color: #C4F82A;
      font-weight: bold;
      font-size: 14px;
      line-height: 150%;
      letter-spacing: 0%;
      margin-bottom: 24px;
    }
    
    & > p {
      font-weight: normal;
      font-size: 14px;
      line-height: 150%;
      letter-spacing: 0%;
      margin-bottom: 24px;
    }

    & > nav {
      width: 100%;
      & > ul {
        list-style-type: none;
        width: 100%;
        margin-bottom: -16px;
  
        & > li {
          background-color: #333333;
          width: calc(inherit - 24px);
          text-align: center;
          padding: 12px;
          font-weight: bold;
          font-size: 14px;
          line-height: 150%;
          letter-spacing: 0%;
          margin-bottom: 16px;
          border-radius: 8px;
  
          &:hover {
            background-color: #C4F82A;
            cursor: pointer;
            color: #333333;
          }
        }
      }
    }
  }
`;
