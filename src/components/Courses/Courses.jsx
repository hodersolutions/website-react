import React, { Component } from "react";
import "./Courses.css";
import POPDF from '../../data/courses/Project_Oriented.pdf';
import WEBPDF from '../../data/courses/Web.pdf';
import SQLPDF from '../../data/courses/SQL.pdf';
import FLASKPDF from '../../data/courses/Flask.pdf';
import PYPDF from '../../data/courses/Python.pdf';
import CLIPDF from '../../data/courses/Client_side.pdf';
import AGPDF from '../../data/courses/Agile.pdf';

class Courses extends Component {
  render() {
    return (
      <div class="container">
      <div class="col-md mx-auto content">
      <div class="row">
        <div class="display-4">Courses offered</div>
      </div>
      <div class="row row-height">
        <table class="course-table">
          <tr>
            <th>&nbsp;&nbsp;&nbsp;Course</th><th>Duration</th>
          </tr>
          <tr>
            <td class="course-name">
              <a href={POPDF} target = "_blank">
                Project oriented training
              </a>
            </td>
            <td>
              10 days
            </td>
          </tr>
          <tr>
            <td class="course-name">
              <a href={WEBPDF} target = "_blank">
                Web concepts
              </a>
            </td>
            <td>
              2 days
            </td>
          </tr>
          <tr>
            <td class="course-name">
              <a href={SQLPDF} target = "_blank">
                Structured Query Language (SQL)
              </a>
            </td>
            <td>
              2 days
            </td>
          </tr>
          <tr>
            <td class="course-name">
              <a href={CLIPDF} target = "_blank">
                Client-side programming
              </a>
            </td>
            <td>
              2 days
            </td>
          </tr>
          <tr>
            <td class="course-name">
              <a href={PYPDF} target = "_blank">
                Programming languages - Python
              </a>
            </td>
            <td>
              2 days
            </td>
          </tr>
          <tr>
            <td class="course-name">
              <a href={FLASKPDF} target = "_blank">
                Web frameworks - Flask
              </a>
            </td>
            <td>
              2 days
            </td>
          </tr>
          <tr>
            <td class="course-name">
              <a href={AGPDF} target = "_blank">
                Software Development Life Cycle (SDLC) using AGILE Model
              </a>
            </td>
            <td>
              2 days
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
    );
  }
}

export default Courses;
