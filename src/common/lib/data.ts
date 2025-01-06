import React from 'react';


import Placement from '@/../public/images/placement.png';
import Bmi from '@/../public/images/bmi.jpg';
import awt from '@/../public/images/awt.jpg';
import contact from '@/../public/images/contact.png';
import {
  BookIcon,
  BriefcaseBusinessIcon,
  LaptopMinimalIcon,
} from 'lucide-react';

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Education',
    id: 'education',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Congnifyz Technologies',
    location: 'Remote',
    description: `I completed a four-week UI/UX internship with Cognifyz Technologies, focusing on creating seamless and engaging user experiences. This internship allowed me to refine my skills in design principles, user-centered approaches, and interface responsiveness.`,
    icon: React.createElement(LaptopMinimalIcon),
    date: 'Sep 2024',
  },
  {
    title: 'CodSoft',
    location: 'Remote',
    description: `I completed a four-week virtual internship with CodSoft, enhancing my web development skills by working on practical projects. This experience strengthened my expertise in creating responsive and user-friendly web interfaces using modern technologies.`,
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'July 2024',
  },
  
  
] as const;

export const educationData = [
  {
    title: 'Under Graduate',
    location: 'Erode',
    description: `Currently pursuing a Bachelor of Technology in Information Technology at Kongu Engineering College, with a CGPA of 7.97 till the 5th semester.`,
    icon: React.createElement(LaptopMinimalIcon),
    date: 'Nov 2022 - Present',
  },
  {
    title: 'HSC',
    location: 'Cuddalore',
    description: `Completed at Government Higher Secondary School with an aggregate score of 83.5%.`,
    icon: React.createElement(BookIcon),
    date: 'March 2022',
  },
  {
    
    title: 'SSLC',
    location: 'Vriddhachalam',
    description: `Completed  at Government Boys Higher Secondary School with an aggregate score of 80.2%.`,
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'May 2020',
  },
] as const;

export const images = {
  
};

export const projectsData = [
  {
    title: 'Contact Manager',
    description:
      'A contact manager is a software application designed to efficiently store, organize, and manage contact information, enabling users to maintain detailed records of professional contacts.',
    tags: [
      'React',
      'Node js',
      'Express js','MongoDB'
    ],
    imageUrl: contact,
    link: 'https://github.com/dineshkumarvelmurugan/CONTACT_MANAGER',
  },
  {
    title: 'Placement Management System',
    description: `
A placement management system helps manage student profiles, job opportunities, and interview schedules, making the recruitment process easier for students and companies.`,
    tags: [
      'Angular',
      'TypeScript',
      'Node js',
      'Express js',
      'MongoDB'
    ],
    imageUrl: Placement,
    link: 'https://github.com/dineshkumarvelmurugan/Placement_Management_System',
  },
  {
    title: 'BMI CALCULATOR - FLUTTER',
    description: `A BMI calculator is an application that calculates and categorizes a user's body mass index based on their weight and height.`,
    tags: [
      'Dart',
      'C++',
      
    ],
    imageUrl: Bmi,
    link: 'https://github.com/dineshkumarvelmurugan/bmi_using_flutter',
  },
  {
    title: 'DOCTOR APPOINTMENT SYSTEM',
    description:
      'A doctor appointment system is a software application that allows patients to schedule, manage, and track appointments with healthcare providers, while enabling doctors and staff to organize and update appointment schedules efficiently.',
    tags: [
      'java',
      'awt'
    ],
    imageUrl: awt,
    link: 'https://github.com/dineshkumarvelmurugan/java_project',
  },
  
] as const;

export const skillsData = [
  ['C','/svgs/c.svg'],
  ['Java', '/svgs/java.svg'],
  ['Python', '/svgs/python.svg'],
  ['JavaScript', '/svgs/javascript-js.svg'],
  ['TypeScript', '/svgs/typescript-icon.svg'],
  ['Node.js', '/svgs/node-js.svg'],
  ['Express', '/svgs/express-original.svg'],
  ['React', '/svgs/react.svg'],
  ['Angular', '/svgs/angular.svg'],
  ['MongoDB', '/svgs/mongodb-original.svg'],
  ['MySQL', '/svgs/MySQL.svg'],
  ['Spring', '/svgs/spring.svg'],
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  ['Git', '/svgs/git.svg'],
  ['GitHub', '/svgs/github.svg'],

] as const;
