import Image from "next/image";
import { FC } from "react";
import s from "./WhoAreWe.module.scss";

const WhoAreWe: FC = () => {
  return (
    <div className={`${s.container} who-we-are-main`} data-aos="who-we-are">
      <div className={s.team}>
        <div
          className={s.thumnailWrapper}
          data-aos="fade-in"
          data-aos-delay="0"
          data-aos-anchor=".who-we-are-main"
        >
          <Image
            src="/images/layout/team01.png"
            width={1300}
            height={770}
            objectFit="cover"
            alt=""
          />
        </div>
        <div className={`${s.titleWrapper} titleWrapper`}>
          {Array(4)
            .fill("WHO ARE WE")
            .map((item, i) => (
              <span className={`${s.title} title blockRevealer`} key={i}>
                {item}
              </span>
            ))}
        </div>
      </div>
      <div className="container">
        <div className={`${s.intro} who-are-we-intro`}>
          <span data-aos="fade-up" data-aos-anchor=".who-are-we-intro">
            {`We are everywhere.`}
          </span>
          <span
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-anchor=".who-are-we-intro"
          >
            We want to build a new world, with you in the middle.
            <br /> Self, Sovereign, Custodian.
          </span>
          <span
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-anchor=".who-are-we-intro"
          >
            {`Also, we speak satire, house & techno.`}
          </span>
        </div>
        <div className={s.details}>
          <div className="row">
            <div className="col-md-6">
              <p data-aos="fade-up">
              Crowd Chain is dedicated to building public infrastructure for the decentralized web. We believe technology should empower people to solve humanity's most pressing challenges. Instead of prioritizing profit, we aim to create efficient, trustless systems with open access, ensuring transparency and fairness. It’s time to shift the focus back to what truly matters—driving meaningful change.
              </p>
            </div>
            <div className="col-md-6" data-aos="fade-up">
              <span className={s.quote}>
                “The internet represents freedom, breaking the limitations of land.”
              </span>
              <p>
                Our Team Lava with 4 members who are : <br /> 1.Sadariya Nayan <br /> 2.Chavda Aditya <br /> 3.Shah Karan <br /> 4.Pathak Herly
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
