# Project Description

Paws Reunite is an APP aiming to make happy reunions for pets owners and their furry friends. It provides a platform where pets owners can post lost pets report and share found pets information. It allows users to search for pets found recently and share the lost/found pets posts to other social media platforms, which will boost up the chance of reuniting pets with their families.

According to 2020 Pet Population Survey, 58% of Canadian own at least one dog or cat. Sadly, the research also shows that round 16% of dogs and 18% of cats are likely to go missing at least once in five years. Losing their furry friends will be such a tragedy to all pets owners and the traditional ways to find pets are less efficient. With Paws Reunite, pets owners can easily post the info the lost pet, share it on different social media platform and with the help of other pet owners, boost up the chance of finding their lost pets.

This App is primarily targeted on pet owners in Canada who lost their pets and also pet lovers who are willing to help reunite pets with their families.

# Tech stack used

JavaScript, React, HTML, Sass, Firebase
Libraries: React-boostrap, google-map-react, react-geocode, moment, react-icons, react-share, dotenv

# Features and usage instructions

As a Paws Reunite user, you will be able to:

- Post lost report for a lost pet, with information of last-seen locations, breed, photos and contact info;
- Post found report for a fount pet, with information of found locations, breed, photos and contact info;
- Search for lost/found pets found based on location, bread, colours or other criteria;
- Share the lost/found pet post to other social media platforms.

# Installation on developer and production environments

The web app is deployed through Firebase.
Web App Link: https://paws-reunite.web.app
Recommended Browser: Chrome

# API references

Google Map API,Google Places API, Geocoding API

# Screenshots

![Alt text](./src/assets/image/HomePage-Screenshot.jpg?raw=true "Screenshot")

# Lessons learned & next step

The most difficult part of the app is the customized search map. I found one library for diplaying and customizing the google map, one for geocoding, they work fine separately but when put together, the app crashed. I debugged for almost a day only to find that the reason it didn't work is that these two libraries have conflicts with each other. So I need to abandon one and find another replacement. So my biggest lesson learned here is that though react libraries are powerful, they do have their limitations so we should always be careful when using two or more libraries against the same API.

New features expected in phase 2:

- User registeration and log-in
- Comments section under each report

New features expected in phase 3:

- Community section where users can share happy reunions posts
- Community section where users can see pet adoptiong information
