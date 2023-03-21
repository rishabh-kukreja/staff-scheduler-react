# Staff Scheduler

## Getting Started

### Prerequisites

- Node.js
- npm

### Getting Started

1. Clone the repo
   ```sh
   git clone https://github.com/rishabh-kukreja/staff-scheduler-react.git
   
2. Install NPM packages
  Navigate to the project directory and run the following command install the server as well as client dependencies
   ```js
   npm run install-deps
 
3. Build the react code
   ```js
   npm run build
   ```
4. Start the app
   ```js
   npm run start

5. Navigate to the url
   ```js
   http://localhost:5000/
   
### Features Added
```
  1. Self contained .zip file, or link to github code repository containing Javascript and package configuration files to start an ExpressJS server, which serves no content
  2. Server serves a ReactJS page which is static, but similar in shape to the above.Components are preferred a single render function building everything.
  3. ReactJS page where each X above is replaced with some HTML control allowing a staff member to be selected for a slot.
  4. ReactJS page displays all staff in the Load section, with their number of slots correct for each day, and the correct total for the week
  5. ReactJS page prevents – or displays warning – when a staff member is in consecutive lunch slots on the same day.
  6. ReactJS page prevents – or displays warning – when a staff member has more than 2 shifts per day 
  7. ReactJS page prevents – or displays warning – when a staff member has more than 7 shifts per week
  8. ReactJS page prevents – or displays warning – when a staff member is selected to be in two places at once. (eg: UpStairs and Parking Lot)
```
![image](https://user-images.githubusercontent.com/52663336/226506503-88a51347-80ac-425f-abf6-aac2758cd03d.png)

