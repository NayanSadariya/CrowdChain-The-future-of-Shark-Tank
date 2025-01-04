import { DontSendText } from "@components/ui/SVGElements";
import { gsap } from "gsap";
import { FC, useContext, useEffect, useRef, useState } from "react";
import ParticleEffectButton from "react-particle-effect-button";
import { MouseContext } from "src/context/mouse-context";
import s from "./PageLoader.module.scss";
interface Props {
  onLoaded?: any;
  audioRef?: any;
  audioControl?: any;
}

const PageLoader: FC<Props> = ({ onLoaded, audioRef, audioControl }) => {
  const [loading, setLoading] = useState(0);
  const { cursorChangeHandler } = useContext(MouseContext);
  let timer: number | null | undefined = null;

  const commonRef: any = useRef({});

  useEffect(() => {
    gsap.fromTo(
      commonRef.current["defaultScreen"],
      {
        opacity: 0,
      },
      { opacity: 1, scale: 1 }
    );
    return () => {
      if (!timer) {
        return;
      }
      window.clearInterval(timer);
    };
  }, []);

  const startTimer = () => {
    timer = window.setInterval(() => {
      setLoading((prevState) => {
        if (prevState >= 100) {
          return prevState;
        }
        return prevState + 1;
      });
    }, 18);
  };

  useEffect(() => {
    if (!loading) {
      return;
    }
    if (loading === 100) {
      setTimeout(() => {
        document.body.classList.add("page-loaded");
        onLoaded();
      }, 1400);
    }
  }, [loading]);

  const onAction = () => {
    setLoading(1);

    setTimeout(() => {
      initAnimation();
      startTimer();
    }, 1500);
  };

  const welcomeMessage = () => {
    const message = "Congratulations, now you are officially A CrowdChain Member.";
    return message.split("").map((item, i) => {
      return <span key={i}>{item}</span>;
    });
  };

  const initAnimation = () => {
    const tl = gsap.timeline();

    tl.from(commonRef.current["welcomeMessage"].children, {
      duration: 0.8,
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: "0% 50% -50",
      ease: "back",
      stagger: 0.01,
    }).fromTo(
      commonRef.current["brandLogo"],
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
      "-=.5"
    );
  };

  return (
    <div className={`${s.container} ${loading === 100 ? s.loaded : ""}`}>
      <div
        className={`${s.defaultScreen} ${loading !== 0 ? s.loaded : ""}`}
        ref={(el: any) => (commonRef.current["defaultScreen"] = el)}
      >
        <DontSendText className={`${s.bgText} desktop-only`} />
        <div className={`${s.bgText} ${s.mobile} mobile-only`} />
        <ParticleEffectButton color="#a9ff1c" hidden={loading === 1}>
          <div
            onClick={() => {
              onAction();
              audioControl();
            }}
            className={`p-btn ${s.startAction}`}
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            <span>Dont</span> Click here
          </div>
        </ParticleEffectButton>
      </div>

      <div className={`${s.loadingScreen} ${loading > 1 ? s.loaded : ""}`}>
        <div className={s.intro}>
          <span
            className={s.message}
            ref={(el: any) => (commonRef.current["welcomeMessage"] = el)}
          >
            {welcomeMessage()}
          </span>
          {/* Use your custom logo here */}
          <div
            className={s.logo}
            ref={(el: any) => (commonRef.current["brandLogo"] = el)}
          >
            {/* <img src="\public\images\layout\team01.png" alt="Team Logo" width={100} height={100} /> */}
          </div>
        </div>
        <div
          className={`${s.progress} ${loading > 2 ? s.loaded : ""}`}
        />
        <span className={s.progressPercent}>{loading}%</span>
      </div>
    </div>
  );
};

export default PageLoader;
