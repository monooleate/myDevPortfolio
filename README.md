# Developer Portfolio Site

Welcome to my fully responsive developer portfolio site! This site is designed to showcase skills, projects, and experience as a web developer and/or software engineer.  
You can use it as template. 
Please contribute to make it better!

[![Netlify Status](https://api.netlify.com/api/v1/badges/59b51dc8-93af-4dd1-bab9-828ca55c95fa/deploy-status)](https://app.netlify.com/sites/jmeszaros/deploys)

This portfolio site is built using the following technologies:
Site genereated by **Vite**,
uses **React** library,
designed by **Tailwind CSS**,
deployed by **Netlify**.

## Table of Contents

1. [Layout](#layout)
2. [Configuration](#configuration)
3. [About Me](#about-me)
4. [Resume](#resume)
5. [Projects](#projects)
6. [Certifications](#certifications)
7. [Contact](#contact)

## Layout
The template has three different layout.
In tailwind config the basic xl breakpoint was modified to 1180px.

## Configuration

Personalisation
: For configuration of personal information you should modify the objects in personalConfig.js file.
   - Education: educationDetails
   - Experience: experienceDetails
   - Competencies: skills
   - Self-advertising: hireMeText
   - About-me Summary: aboutMeText
   - TypeWriter configuration: introSecDetails
   - Acquired certificates: certificates

Lookout
:For site configuration us the dataConfig.js file.
   - You can modify the lineParticles option which has effect on the 'Intro' component.
:Tailwind
   - There are color variables for different themes. Those variables can be changed to make the color set better. The basic modes are: **light** and **dark**.
   - I don't use Tailwind's ':dark' feature instead I used variables which changes with themes. So the **dark** is a theme. With this method you can define various themes without touching the Tailwind classes.  

## About Me

In this section, I will introduce myself and provide a brief background about my journey from a chemical engineer to a full-stack developer. I will highlight my passion for coding, problem-solving abilities, and my unique perspective in tackling technical challenges.

## Resume 

This section contains general CV elements.

### I. Education

In this section, you can list educational background, including:

- Degree(s) obtained
- Institution(s) attended
- Graduation year(s)

## II. Experience

Here, I will provide an overview of my professional experience. This will include:

- Job Title
- Company Name
- Duration
- Responsibilities and achievements
  
## III. Skills

Here, you can list the various technical skills you have acquired over the years. This can include:

- Front-end development: HTML, CSS, JavaScript, React
- Back-end development: Node.js, Express.js, MongoDB, SQL
- Microsoft Technologies: VBA, Office Script, Power Automate
- Tools and Platforms: Git, GitHub
- Others: Agile methodologies, problem-solving, analytical skills

## Projects

This section will showcase the projects you have worked on. Each project will include:

- Project Title
- Description
- Technologies Used
- Link to the live project or repository
- Screenshots or demo (if available)

## Certifications

Here, you will list any relevant certifications have earned, such as:

- Web Development Bootcamps
- Online Courses (Coursera, Udemy, etc.)
- Microsoft Certifications
- Any other relevant certifications

In the base template the certificate is a modal which jump up when click on a button in the Intro section.

## Contact

I provide my contact form to get in touch. 

Thank you for visiting my portfolio site! Stay tuned as I continue to update and enhance it with my latest projects and achievements.
