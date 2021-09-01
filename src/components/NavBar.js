import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  // return (
  // <nav>
  //   <a key={Home} href="home">home</a>
  //   <a key={About} href="about">about</a>
  //   <a key={Projects} href="projects">projects</a>
    {/* DRY and there is much easier way to get all of this instead of repeating it so many times! */}
  // </nav>;
  // )

   const allLinks = links.map((link) => (
      // console.log(link)
     <a key={link} href={"#" + link}>{link}</a>
   ))

   return <nav>{allLinks}</nav>
}

export default NavBar;
