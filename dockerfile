FROM node:16
WORKDIR /home/calendar-app
COPY account_service /home/calendar-app/
RUN npm install
CMD npm run start