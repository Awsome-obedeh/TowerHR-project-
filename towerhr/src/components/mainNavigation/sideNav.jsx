import { BrowserRouter, Link } from "react-router-dom";
import Iconholder from "../../navlinks/iconholder";
import classes from "./sideNav.module.css";
import logosvg from "../../assets/logo.svg";
import dashboardsvg from "../../assets/dashboard.svg";
import messagessvg from "../../assets/messages.svg";
import schedulesvg from "../../assets/schedule.svg";
import jobsvg from "../../assets/job.svg";
import recruitementsvg from "../../assets/recruitment.svg";


export default function SideNav() {
  return (
    <BrowserRouter>
      <div className={classes.navbar}>
        <Iconholder svg={logosvg} title="TowerHr" />

        <div className={classes.menu}>
          <small className={classes.title}>Menu</small>
          {/* <ul> */}

          <Iconholder svg={dashboardsvg} title="dashboard" />

          <Iconholder svg={messagessvg} title="Messages" />

          <Iconholder svg={schedulesvg} title="schedules" />
          <Iconholder svg={schedulesvg} title="payroll" />
        </div>

        <div className={classes.menu}>
          <small className={classes.title}>Recruitment</small>
          <Iconholder svg={jobsvg} title='Jobs' />

          
        </div>

        <div className={classes.menu}>
          <small className={classes.title}>Recruitment</small>
          {/* <ul> */}

          <Iconholder svg={recruitementsvg} title="Recruitment" />

          <li className={classes.linkHolder}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.0431 3.14504C18.0431 1.59337 19.3031 0.333374 20.8548 0.333374C22.4065 0.333374 23.6665 1.59337 23.6665 3.14504C23.6665 4.69671 22.4065 5.95671 20.8548 5.95671C19.3031 5.95671 18.0431 4.69671 18.0431 3.14504ZM13.5513 15.2192L16.923 10.8687L16.8763 10.8921C17.063 10.6354 17.098 10.3087 16.9697 10.0171C16.8425 9.72539 16.5613 9.52706 16.2592 9.50372C15.943 9.46872 15.6292 9.60872 15.4413 9.86539L12.6192 13.5171L9.38634 10.9737C9.18801 10.8221 8.95467 10.7626 8.72134 10.7871C8.48917 10.8221 8.27917 10.9492 8.13801 11.1359L4.68584 15.6287L4.61467 15.7337C4.41634 16.1059 4.50967 16.5842 4.85967 16.8421C5.02301 16.9471 5.19801 17.0171 5.39634 17.0171C5.66584 17.0287 5.92134 16.8876 6.08467 16.6671L9.01301 12.8976L12.338 15.3954L12.443 15.4642C12.8163 15.6626 13.283 15.5704 13.5513 15.2192ZM16.0247 2.41039C15.978 2.70206 15.9547 2.99372 15.9547 3.28539C15.9547 5.91039 18.078 8.03256 20.6913 8.03256C20.983 8.03256 21.263 7.99872 21.5547 7.95206V17.3659C21.5547 21.3221 19.2213 23.6671 15.2547 23.6671H6.63417C2.66634 23.6671 0.333008 21.3221 0.333008 17.3659V8.73372C0.333008 4.76706 2.66634 2.41039 6.63417 2.41039H16.0247Z"
                fill="#BCBCBC"
              />
            </svg>
            <p className={classes.menuLink}>Interviews</p>
          </li>
        </div>
      </div>
    </BrowserRouter>
  );
}
