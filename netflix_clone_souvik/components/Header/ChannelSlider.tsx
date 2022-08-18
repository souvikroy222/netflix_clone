import styled from "styled-components";

function ChannelSlider() {
  return (
    <Container>
      <Feather_div>
        <Wrap>
          <img src="/images/disnep_img.webp" />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src="./images/disnep.mp4" type="video/mp4" />
          </video>
        </Wrap>
      </Feather_div>
      <Feather_div>

      <Wrap>
        <img src="/images/marvel_img.webp" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source type="video/mp4" src="./images/marvel.mp4" />
        </video>
      </Wrap>
      </Feather_div>
      <Feather_div>
      <Wrap>
        <img src="/images/natgeo_img.webp" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="./images/natgeo.mp4" type="video/mp4" />
        </video>
      </Wrap>
      </Feather_div>
      <Feather_div>
      <Wrap>
        <img src="/images/pixar_img.webp" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="./images/pixar.mp4" type="video/mp4" />
        </video>
      </Wrap>
      </Feather_div>
      <Feather_div>
      <Wrap>
        <img src="/images/starwars_img.webp" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="./images/starwars.mp4" type="video/mp4" />
        </video>
      </Wrap>
      </Feather_div>
    </Container>
  );
}
const Container = styled.div`
  margin-top: 3rem;
  display: grid;
  padding-top: 3rem;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 1rem;
  justify-content: center;
  align-items: center;

  width: 95%;
  margin: auto;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Feather_div = styled.div`
  overflow: hidden;
  border-radius: 6px;
  transition: all 0.4s ease;
  &:hover {
    transform: scale(1.08) translateZ(0);

    transition: all 0.4s ease;
  }
`;

const Wrap = styled.div`
  position: relative;
  transition: transform 0.25s cubic-bezier(0.33, 0.04, 0.63, 0.93),
    -webkit-transform 0.25s cubic-bezier(0.33, 0.04, 0.63, 0.93),
    -o-transform 0.25s cubic-bezier(0.33, 0.04, 0.63, 0.93);
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  transform: scale(1) translateZ(0);

  /* transition-property: transform;
  transition-duration: 4s; */

  &:hover {
    cursor: pointer;
    img {
      /* display: none; */
      /* transform: scale(1.08) translateZ(0); */
      opacity: 0;
      /* transition: all 0.4s ease; */
    }
    video {
      /* display: inline; */
      /* transform: scale(1.08) translateZ(0);
      transition: all 0.4s ease; */
      opacity: 1;
     
    }
  }
  img {
    /* position: absolute; */
    transition: opacity 0.4s ease-in;
    border-radius: 5px;
    opacity: 1;
    transition: all 0.4s ease-in;
    transform: scale(1) translateZ(0);
  }

  video {
    position: absolute;
    transform: scale(1) translateZ(0);
    top: 0;
    left: 0;
    border-radius: 5px;
    opacity: 0;
    transition: all 0.4s ease-in;
    display: inline-block;
    object-fit: fill;
  }
`;

export default ChannelSlider;
