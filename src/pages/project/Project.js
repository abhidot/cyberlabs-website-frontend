import React, { Component } from "react";
import projects from "../../json-files/project.json";
import "./project.css";

class Project extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.title="Cyber Labs | Projects";
    document.querySelector("meta[name='keywords']").content="Projects, Cyber Labs, cyberlabs projects,ism projects,cyber labs projects";
    document.querySelector("meta[name='description']").content="Cyber Labs Projects";
  }
  renderArray(name) {
    return name.map(member => {
      return (
        <div className="by1 effect83">
          <i class="fa fa-user" aria-hidden="true" style={{ padding: "5px" }} />
          {member}
        </div>
      );
    });
  }
  renderProjects() {
    return projects.map(
      ({ name, description, images, links, project, legacy }, index) => {
        return (
          <div>
            {(links.github || legacy) && (
              <div className="box effect82">
                <div className="columns" style={{ height: "100%" }}>
                  <div className="column1">
                    <img
                      src={
                        images
                          ? `assets/img/project/${images}`
                          : "assets/img/project-placeholder.png"
                      }
                      style={{
                        borderRadius: "0",
                        margin: "0",
                        width: images ? "100%" : "50%"
                      }}
                      width="100%"
                      height="270px"
                      alt="Name of project"
                    />
                  </div>
                  <div className="column-2">
                    <div className="name">
                      <h1>{project}</h1>
                    </div>
                    <div className="about" />
                    <hr width="50%" />
                    <div className="url">
                      <div className="icon1">
                        <a
                          href={links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div>
                            <i class="fa fa-github" aria-hidden="true" />
                          </div>{" "}
                        </a>
                      </div>
                    </div> 
                    <div className="Description">
                      <p>{description}</p>
                    </div>
                    <div className="madeby">{this.renderArray(name)}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      }
    );
  }
  render() {
    return <div className="App2">{this.renderProjects()}</div>;
  }
}
export default Project;
