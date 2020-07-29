import {setScrollMagicInit} from "../scroll.js"
import { jobEduTab } from './../experience.js';
import { navAll } from "../navbar.js";

import 'bootstrap/dist/css/bootstrap.min.css';

import "../css/global.css";
import "../css/about.css";
import "../css/burger.css";
import "../css/contact.css";
import "../css/experience.css";
import "../css/getmycv.css";
import "../css/intro.css";
import "../css/navbar.css";
import "../css/projects.css"; //-> need an image loader for the png used in the background

navAll();
jobEduTab();
setScrollMagicInit();