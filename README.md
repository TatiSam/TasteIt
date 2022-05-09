# Taste It is a Java Spring Boot and ReactJS Fullstack application

Web site: http://tasteit-tatisam.herokuapp.com

Server side description: https://github.com/TatiSam/TasteItAPI

## Features:
- Discover random country with its dishes from the Taste It API on the home page.
- Discover a list of countries from the Taste It API on the countries page and by clicking on button Read more discover a country details like image, article, rating, comments and dishes.
- Provides the ability to register and login on the Login|Register page.
- Provides the ability to add country or dish to preferences and view a list of countries and dishes on the my preferences page.
- Provides the ability to add rating to country by user's ip.
- Provides the ability to post/edit/delete comments for the country.
- Stores the JWT token received on the server during Login in local storage for 24 hours.
- Has two user levels: admin and user. User can post/edit/delete comment to country, add/delete country or dish to his preference list. Admin can add/edit/delete country to website, add/edit/delete dish to country.

## Architecture and Tech features Client Side
<ul>
  <li>Building with <a href="//https://ru.reactjs.org//">React JS</a></li>
  <li><a href="https://reactjs.org/docs/hooks-intro.html">React Hooks</a> for using state and other React features without writing a class component</li>
  <li><a href="https://reactrouter.com/">React Router Dom v6</a> for routing in application and for building single-page application that have many pages and components but the page is never refreshed</li>
  <li><a href="https://react-redux.js.org/">React Redux</a> for reading data from a Redux store, and dispatch actions to the store to update state</li>
  <li><a href="https://react-icons.github.io/react-icons/">React Icons</a></li>
  <li><a href="https://github.com/axios/axios">Axios</a> for asynchronous HTTP requests to REST API</li>
  <li><a href="https://heroku.com/">Heroku</a> for storage react app</li>
</ul>

## Architecture and Tech features Server Side
<ul>
  <li>Written in <a href="https://spring.io/projects/spring-boot">Java Spring Boot</a></li>
  <li><a href="https://spring.io/projects/spring-data-jpa">Spring Data JPA</a> for working with database</li>
  <li><a href="https://spring.io/projects/spring-security">Spring Security</a> for authentication and access-control</li>
  <li><a href="https://en.wikipedia.org/wiki/Bcrypt">BCrypt</a> password encoder for encode password</li>
  <li><a href="https://jwt.io/">JWT</a> Token for authentication</li>
  <li><a href="https://projectlombok.org/">Lombok</a> to avoid writing repetitive Java code and/or boilerplate code</li>
  <li>Spring Boot Validation to validate Data Access Objects in request</li>
  <li><a href="http://modelmapper.org/">ModelMapper</a> for Object mapping</li>
  <li><a href="https://maven.apache.org/">Maven</a> for dependency management and building project</li>
  <li><a href="https://www.h2database.com/">H2</a> database for testing mode</li>
  <li><a href="https://www.mysql.com/">MySQL</a> database for production mode</li>
  <li>Design Patterns: Singleton, Builder, Dependency Injection, Three Layer Architecture</li>
  <li>TDD with integration testing</li>
  <li><a href="https://aws.amazon.com/">Amazon Web Services</a> for storage database and server side API</li>
</ul>

## Author

Tatiana Samoilenko

tatismoilenko@gmail.com

Israel

## TODO
<ul>
  <li>Search bar</li>
  <li>Animation to drop down menu</li>
  <li>Infinite scrolling</li>
  <li>Admin page</li>
</ul>
