import React from "react";
import styled, { keyframes, css } from "styled-components";

function Skills() {
  const row1 = [
    "https://imgs.search.brave.com/tPkBLxelMecHbyoRXxviO9LYKmqg5HTnbQIs7tVUTMw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9xdWlu/dGFncm91cC5jb20v/Y21zL2pzL2pzLWlt/YWdlL3JlYWN0Lmpz/LWxvZ28ucG5nL0BA/aW1hZ2VzL2E5YmYy/MmJkLTM3M2EtNGZh/ZS1hOTAwLWMyMmZk/MTJjODdjNy5wbmc",
    "https://imgs.search.brave.com/8hVoxbWv_p2AwpexOk7MCiUDpCnsNXNMGkIOKcj5xY0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9icmFu/ZHNsb2dvcy5jb20v/d3AtY29udGVudC91/cGxvYWRzL2ltYWdl/cy9ub2RlanMtbG9n/by5wbmc",
    "https://imgs.search.brave.com/O40ax6Mk9P6Up4HX66X52xlrleW4AKwl0SWT7LUVrYI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzA4/L01vbmdvREItTG9n/by01MDB4MzEzLnBu/Zw",
    "https://imgs.search.brave.com/PtxQqdNuB1BB6jdn-RfWnmRseX6QH8y3kIsVBSqE8Hs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzY0L0V4cHJlc3Nq/cy5wbmc",
    "https://imgs.search.brave.com/drb9-MXkAI9hylF1v2Nf6hAsLVyVEmif2LT6i62Q3zg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvbXlzcWwvbXlz/cWxfUE5HMjkucG5n",
    "https://imgs.search.brave.com/XB1kjI1_oWNr_vXu1jpkqGqGK0HCoTDauykMRNXlm8w/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4z/ZC5pY29uc2NvdXQu/Y29tLzNkL2ZyZWUv/dGh1bWIvZnJlZS1q/YXZhc2NyaXB0LTNk/LWljb24tZG93bmxv/YWQtaW4tcG5nLWJs/ZW5kLWZieC1nbHRm/LWZpbGUtZm9ybWF0/cy0tbG9nby1sYW5n/dWFnZS1wcm9ncmFt/bWluZy1wYWNrLWxv/Z29zLWljb25zLTU0/NTMwMjIucG5nP2Y9/d2VicA",
  ];

  const row2 = [
    "https://imgs.search.brave.com/Q--MjQmzhJDTZDFvE-IIVOPn43ZvWusW1XgMpBKbYZ8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9icmFu/ZHNsb2dvcy5jb20v/d3AtY29udGVudC91/cGxvYWRzL2ltYWdl/cy9qYXZhLWxvZ28t/MS5wbmc",
    "https://imgs.search.brave.com/v5XDRujtlpFY8OPTZVtSW6uDxwl4QMboGCMW6qsoLSY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL1QvdGFpbHdp/bmQtY3NzLWxvZ28t/ODlFOTlENzE4MS1z/ZWVrbG9nby5jb20u/cG5n",
    "https://imgs.search.brave.com/QBeoi81FGNr1CqB2maDRgzdFb5kuQudZ8Lokf3D08Jc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MmE3NjQ5MmJkNzNh/NGFmNWM1ZDRmYjku/cG5n",
    "https://imgs.search.brave.com/6bNjSjxBAQfd0EmR4AslD2y04OmHU1svny0txdZGv90/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWZyYW1lci1sb2dv/LWljb24tZG93bmxv/YWQtaW4tc3ZnLXBu/Zy1naWYtZmlsZS1m/b3JtYXRzLS1zb2Np/YWwtbWVkaWEtcGFj/ay1sb2dvcy1pY29u/cy0xOTEyMDI3LnBu/Zz9mPXdlYnAmdz0y/NTY",
    "https://imgs.search.brave.com/zi4EFC3Ze94sTrvPrUNKSMS71oTGg9Q5FqzMa_u7Yfk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ3Zjk4ZmNlZjEw/MTRjMGI1ZTQ4YzAu/cG5n",
    "https://imgs.search.brave.com/iQ0qt32WlXIYKhnhAkSd4yAGq8hHH5cpyCDsvfiH0yY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LXJlZHV4LWxvZ28t/aWNvbi1kb3dubG9h/ZC1pbi1zdmctcG5n/LWdpZi1maWxlLWZv/cm1hdHMtLWNvbXBh/bnktYnJhbmQtd29y/bGQtbG9nb3Mtdm9s/LTEwLXBhY2staWNv/bnMtMjgzMDI0LnBu/Zz9mPXdlYnAmdz0y/NTY",
  ];

  return (
    <AppContainer>
      <Wrapper className="w-[100vw]">
        <Text>Skill Sets.</Text>
        <Note className="text-center lg:text-2xl text-blue-700 backdrop-blur-sm bg-stone-600/30 rounded-lg p-10 m-5">With a robust foundation in 
            both front-end and back-end development, I create dynamic, responsive,
             and visually engaging applications that provide seamless user experiences.
              </Note>
        <Marquee>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee>
          <MarqueeGroup2>
            {row2.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
        </Marquee>
      </Wrapper>
    </AppContainer>
  );
}

export default Skills;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: #000000;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #02203c;
`;

const Note = styled.div`
  font-size: 18px;
  font-weight: 200;
  margin-bottom: 40px;
  color: #7c8e9a;
`;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
