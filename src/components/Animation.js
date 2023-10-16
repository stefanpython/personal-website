import React, { useEffect, useRef } from "react";
import anime from "animejs";
import Letterize from "letterizejs";
import "./Animation.css";

const Animation = () => {
  const containerRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    const letterize = new Letterize({
      targets: ".animate-me",
    });

    const animation = anime.timeline({
      targets: letterize.listAll,
      delay: anime.stagger(100, {
        grid: [letterize.list[0].length, letterize.list.length],
        from: "center",
      }),
      loop: true,
    });

    animation
      .add({
        scale: 0.5,
      })
      .add({
        letterSpacing: "10px",
      })
      .add({
        scale: 1,
      })
      .add({
        letterSpacing: "6px",
      });

    return () => {
      animation.pause();
    };
  }, []);

  // Show the arrow after 2 seconds
  useEffect(() => {
    const arrow = arrowRef.current;
    const showArrow = () => {
      arrow.style.opacity = 1;
    };

    const timeoutId = setTimeout(showArrow, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="intro-container">
      <div className="animate-container" ref={containerRef}>
        <div className="animate-me">
          <span className="success">Success</span>.Optimism.Courage
        </div>
        <div className="animate-me">
          <span className="peace">Peace</span>.Harmony.Hope
        </div>
        <div className="animate-me">
          Joy.Compassion.<span className="serinity">Serenity</span>
        </div>
        <div className="animate-me">
          Fulfillment.<span className="beloved">Beloved</span>
        </div>
        <div className="animate-me">
          <span className="positivity">Positivity</span>.Empowered
        </div>
        <div className="animate-me">
          Presence.<span className="empathy">Empathy</span>.Now
        </div>
        <div className="animate-me">
          Fulfillment.<span className="love">Love</span>.Wisdom
        </div>
        <div className="animate-me">
          Unity.<span className="growth">Growth</span>.Forgiveness
        </div>
      </div>
      <br />

      <div className="intro">
        <h1 className="first">
          Hi, I`m <span className="name">Stefan Andrei</span>!
        </h1>
        <h1 className="second">Full Stack Web Developer</h1>
      </div>

      <div className="scroll-down-arrow">
        <div className="arrow" ref={arrowRef}></div>
      </div>
    </div>
  );
};

export default Animation;
