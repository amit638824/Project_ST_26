import React from "react";

const TalentSection = () => {
  return (
    <>
      <div className="row py-5 article">
        <div className="col-sm-10 mx-auto">

          <div className="webheading text-center">
            Top <b className="text-color1">Talents</b>
          </div>

          <hr className="w-25 mx-auto text-color1" />

          <div className="row g-4 mt-3">

            {/* Card 1 */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="talent-card">
                <img
                  src="/images/team-01.webp"
                  className="img-fluid talent-img"
                  alt="Jane Seymour"
                />
                <h4 className="text-center mt-3">Jane Seymour</h4>
                <h6 className="text-center text-secondary">
                  UI Designer
                </h6>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="talent-card">
                <img
                  src="/images/team-02.webp"
                  className="img-fluid talent-img"
                  alt="Edward Norton"
                />
                <h4 className="text-center mt-3">Edward Norton</h4>
                <h6 className="text-center text-secondary">
                  Web Developer
                </h6>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="talent-card">
                <img
                  src="/images/team-03.webp"
                  className="img-fluid talent-img"
                  alt="Penelope Cruz"
                />
                <h4 className="text-center mt-3">Penelope Cruz</h4>
                <h6 className="text-center text-secondary">
                  Digital Marketer
                </h6>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="talent-card">
                <img
                  src="/images/team-04.webp"
                  className="img-fluid talent-img"
                  alt="John Travolta"
                />
                <h4 className="text-center mt-3">John Travolta</h4>
                <h6 className="text-center text-secondary">
                  WordPress Expert
                </h6>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default TalentSection;