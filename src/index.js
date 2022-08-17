import { navbar } from "./modules/components/navbar";
import { home } from "./modules/pages/home";

document.querySelector('#content').appendChild(navbar());
document.querySelector('#content').appendChild(home());