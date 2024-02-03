import React, { useEffect, useRef } from "react";
import styled from "styled-components";
// @ts-ignore
import gear_1 from "../images/gears/d1.svg";
import gear_2 from "../images/gears/d2.svg";
import gear_3 from "../images/gears/d3.svg";
import gear_4 from "../images/gears/d4.svg";
import gear_5 from "../images/gears/d5.svg";
import gear_6 from "../images/gears/d6.svg";
import gear_7 from "../images/gears/d7.svg";
import gear_8 from "../images/gears/d8.svg";
import gear_9 from "../images/gears/d9.svg";
import gear_10 from "../images/gears/d10.svg";
import gear_11 from "../images/gears/d11.svg";
import gear_12 from "../images/gears/d12.svg";
import gear_13 from "../images/gears/d13.svg";
import gear_14 from "../images/gears/d14.svg";
import gear_15 from "../images/gears/d15.svg";
import gear_16 from "../images/gears/d16.svg";
import gear_17 from "../images/gears/d17.svg";
import gear_18 from "../images/gears/d18.svg";
import gear_19 from "../images/gears/d19.svg";
import gear_20 from "../images/gears/d20.svg";
import gear_21 from "../images/gears/d21.svg";
import gear_22 from "../images/gears/d22.svg";
import gear_23 from "../images/gears/d23.svg";
import gear_24 from "../images/gears/d24.svg";


const Container = styled.div`

  background-color:black;
  position: relative;
  display: grid;

  width: 60%;
  height: 100vh;

  margin: 0 auto;
  margin-top: 200px;
`;

const Gear = styled.img`
  position: absolute;
  object-fit: contain;
  background-position: center;
  background-size: contain;
//   background-color:yellow;
  background-repeat: no-repeat;
  transition: 0.65s ease-out;
`;

const Gear1 = styled(Gear)`
  width: 12vw;
  height: 16vh;
  top: -6%;
  bottom: 0;
  left: 69%;
  right: 0;
`;

const Gear2 = styled(Gear)`
  width: 24vw;
  height: 32vh;
  top: 1.5%;
  bottom: 0;
  left: 44%;
  right: 0;
`;

const Gear3 = styled(Gear)`
  width: 36vw;
  height: 44vh;
  top: 19%;
  bottom: 0;
  left: 58%;
  right: 0;
`;

// const rotateGearOnScroll = () => {
//     const gear1 = document.querySelector('#gear1')?.style;

//     if (gear1) {
//         gear1.transform = `rotate(${window.scrollY * 0.8}deg)`;
//     }
// };

const gearIds = Array.from({ length: 24 }, (_, index) => `#gear${index + 1}`);
const rotationDirections = Array.from({ length: 24 }, (_, index) => (index % 2 === 0 ? 1 : -1));

const rotateGearOnScroll = () => {
  gearIds.forEach((gearId, index) => {
    const gear = document.querySelector(gearId)?.style;

    if (gear) {
      const rotationFactor = 0.15;
      const rotationDirection = rotationDirections[index];
      gear.transform = `rotate(${window.scrollY * rotationFactor * rotationDirection}deg)`;
    }
  });
};

const Gears: React.FC = () => {
    useEffect(() => {
        window.addEventListener('scroll', rotateGearOnScroll);

        return () => {
            window.removeEventListener('scroll', rotateGearOnScroll);
        };
    }, []);
    return (
        <>
            <Container>
                {/* <Gear1 id="gear1" /> */}
                <Gear1 src={gear_1} id="gear1" />
                <Gear2 src={gear_2} id="gear2" />
                <Gear3 src={gear_3} id="gear3" />


                {/* <Gear2 id="gear2" /> */}

            </Container>
        </>
    )
}

export default Gears;