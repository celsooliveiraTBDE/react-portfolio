import React from "react";
export default class Resume extends React.Component {
  render() {
    return (
      <div className="section is-white">
          <div className="tile is-ancestor">
            <div className="tile is-vertical is-8">

              <div className="tile">
                <div className="tile is-parent is-vertical">

                  <article className="tile is-child notification is-primary">
                    <p className="title">                    
                      <i className="fas fa-file-invoice pr-2 pb-1" />
                      Resume
                      </p>
                    <p className="subtitle">A Graphic Snapshot</p>
                    <hr/>

                  </article>

                  <article className="tile is-child notification is-danger">
                    <p className="title">
                      <i className="fas fa-graduation-cap pr-2 pb-1" />
                      Education
                    </p>
                    <p className="subtitle">
                      Ohio State | Pepperdine MBA | UCLA
                    </p>
                    <hr id='light-line-break' />
                    After graduating with a degree in MIS from Ohio State, I
                    moved to CA to study Marketing and Entrepreneurship. <br />
                  </article>
                </div>

                <div className="tile is-parent">
                  <article className="tile is-child notification is-light-grey">
                    <p className="title pb-1">
                      {" "}
                      <i className="fas fa-briefcase pr-2 pb-1" />
                      Work Experience
                    </p>
                    <p className="subtitle">JPM | Disney | Wells Fargo</p>
                    <hr />I have 5+ years of experience managing client's
                    complex banking technology, primarily in the payments space.
                  </article>
                </div>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification is-grey-light">
                  <p className="title">
                    {" "}
                    <i className="fas fa-share-square pr-2 pb-1" />
                    Social Media + Content
                  </p>
                  <p className="subtitle">The Best Drink Ever</p>
                  <hr id='dark-line-break' />I have experience building brands and deploying new ideas that can ultimately become new revenue streams.
                  </article>

              </div>

            </div>

            <div className="tile is-parent">
              <article className="tile is-child notification is-danger">
                  <p className="title">
                  
                    <i className="fas fa-code-branch pr-2 pb-1" />
                    Full Stack Web Developer
                  </p>
                  <p className="subtitle">Mongo | Express | React | Node</p>
                  <hr/>
                    More recently, I took on the challenge of learning code again, since my career took me away from it and I haven't stopped coding ever since! <br />
                  
              </article>
            </div>
          </div>
      </div>
    );
  }
}
