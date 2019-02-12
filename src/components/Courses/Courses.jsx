import React, { Component } from "react";
import "./Courses.css";

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
              <a href='/src/data/courses/Project_Oriented.pdf'>
                Project oriented training
              </a>
            </td>
            <td>
              10 days
            </td>
          </tr>
          <tr>
            <td class="course-name">
              <a href='/../data/courses/Web.pdf'>
                Web concepts
              </a>
            </td>
            <td>
              2 days
            </td>
          </tr>
          <tr>
            <td class="course-name">
              <a href='/../../data/courses/SQL.pdf'>
                Structured Query Language (SQL)
              </a>
            </td>
            <td>
              2 days
            </td>
          </tr>
          <tr>
            <td class="course-name">
              <a href='/data/courses/Client_side.pdf'>
                Client-side programming
              </a>
            </td>
            <td>
              2 days
            </td>
          </tr>
          <tr>
            <td class="course-name">
              <a href='../../data/courses/Python.pdf'>
                Programming languages - Python
              </a>
            </td>
            <td>
              2 days
            </td>
          </tr>
          <tr>
            <td class="course-name">
              <a href='../../data/courses/Flask.pdf'>
                Web frameworks - Flask
              </a>
            </td>
            <td>
              2 days
            </td>
          </tr>
          <tr>
            <td class="course-name">
              <a href='../../data/courses/Agile.pdf'>
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
