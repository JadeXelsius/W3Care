import React, { useEffect, useRef } from "react";

const WeDo = () => {
  const refOne = useRef(null);
  const refTwo = useRef(null);
  const refThree = useRef(null);
  const refFour = useRef(null);

  useEffect(() => {
    const refs = [refOne, refTwo, refThree, refFour];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the tile is visible
    );

    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);
  return (
    <div>
      <section className="what_wedo">
        <div className="text-content">
          <h1>ABOUT US</h1>
          <h2>What we do</h2>
          <p>
            We are process-driven organization and have applied our maturity,
            well honed project management skills and technical potential. We are
            a growing, active and dynamic organization focused on classic web
            design & development.
          </p>
        </div>
        <div className="services-container">
          <a href="#">
            <div className="service_blog" ref={refOne}>
              <div className="service_i">
                <i class="bx bxs-paint"></i>
              </div>
              <h4>WEB DESIGN</h4>
              <span>
                We have team of best designers who can create professional and
                great looking websites..
              </span>
              <p>READ MORE &gt;</p>
            </div>
          </a>
          <a href="#">
            <div className="service_blog" ref={refTwo}>
              <div className="service_i">
                <i class="bx bx-code-alt"></i>
              </div>
              <h4>WEB DEVELOPMENT</h4>
              <span>
                W3care ensure you that your company achieves an outstanding
                competitive advantage..
              </span>
              <p>READ MORE &gt;</p>
            </div>
          </a>
          <a href="#">
            <div className="service_blog" ref={refThree}>
              <div className="service_i">
                <i class="bx bx-mobile"></i>
              </div>
              <h4>MOBILE APP DEVELOPMENT</h4>
              <span>
                For great mobile user experience we encourage you to build a
                mobile app. Mobile native..
              </span>
              <p>READ MORE &gt;</p>
            </div>
          </a>
          <a href="#">
            <div className="service_blog" ref={refFour}>
              <div className="service_i">
                <i class="bx bx-color"></i>
              </div>
              <h4>SUPPORT</h4>
              <span>
                We have team of best designers who can create professional and
                great looking websites.
              </span>
              <p>READ MORE &gt;</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default WeDo;
