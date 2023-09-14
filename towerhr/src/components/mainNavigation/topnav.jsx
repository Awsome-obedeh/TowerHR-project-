export default function Topnav(){
    return(
        <div className={classes.topNav}>
            <div className={searchItem}>
                <div className={classes.search}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" fill="#BCBCBC"/>
                    <path d="M21.3 22.0001C21.12 22.0001 20.94 21.9301 20.81 21.8001L18.95 19.9401C18.68 19.6701 18.68 19.2301 18.95 18.9501C19.22 18.6801 19.66 18.6801 19.94 18.9501L21.8 20.8101C22.07 21.0801 22.07 21.5201 21.8 21.8001C21.66 21.9301 21.48 22.0001 21.3 22.0001Z" fill="#BCBCBC"/>
                </svg>
                <small>Search For something</small>
                </div>
            </div>

            <div className={classes.userSection}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20.19 14.06L19.06 12.18C18.81 11.77 18.59 10.98 18.59 10.5V8.63005C18.59 5.00005 15.64 2.05005 12.02 2.05005C8.38999 2.06005 5.43999 5.00005 5.43999 8.63005V10.49C5.43999 10.97 5.21999 11.76 4.97999 12.17L3.84999 14.05C3.41999 14.78 3.31999 15.61 3.58999 16.33C3.85999 17.06 4.46999 17.64 5.26999 17.9C6.34999 18.26 7.43999 18.52 8.54999 18.71C8.65999 18.73 8.76999 18.74 8.87999 18.76C9.01999 18.7801 9.16999 18.8 9.31999 18.82C9.57999 18.8601 9.83999 18.89 10.11 18.91C10.74 18.97 11.38 19 12.02 19C12.65 19 13.28 18.97 13.9 18.91C14.13 18.89 14.36 18.8701 14.58 18.84C14.76 18.82 14.94 18.8001 15.12 18.7701C15.23 18.76 15.34 18.74 15.45 18.72C16.57 18.54 17.68 18.26 18.76 17.9C19.53 17.64 20.12 17.06 20.4 16.32C20.68 15.57 20.6 14.75 20.19 14.06ZM12.75 10C12.75 10.42 12.41 10.76 11.99 10.76C11.57 10.76 11.23 10.42 11.23 10V6.90005C11.23 6.48005 11.57 6.14005 11.99 6.14005C12.41 6.14005 12.75 6.48005 12.75 6.90005V10Z" fill="#303032"/>
                <path d="M14.83 20.01C14.41 21.17 13.3 22 12 22C11.21 22 10.43 21.68 9.87999 21.11C9.55999 20.81 9.31999 20.41 9.17999 20C9.30999 20.02 9.43999 20.03 9.57999 20.05C9.80999 20.08 10.05 20.11 10.29 20.13C10.86 20.18 11.44 20.21 12.02 20.21C12.59 20.21 13.16 20.18 13.72 20.13C13.93 20.11 14.14 20.1 14.34 20.07C14.5 20.05 14.66 20.03 14.83 20.01Z" fill="#303032"/>
            </svg>

            <div className={classes.userName}>
                <h4>Awsome Obed</h4>
                <p>Hr-Manager</p>
            </div>

            <div className={classes.imgHolder}>
                <img src="/vite.svg" alt="" />
            </div>
            </div>
        </div>
    )
}