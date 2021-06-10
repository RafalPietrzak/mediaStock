# CRON TASK:
## 1. getSources.cronTask
Delete old and get new source URL form external source. Source can be GET or REST
mode. GET - will be requested by cron. REST - will setup api end for it. 
It depends on two env variables:   

UPDATE_SOURCE_URL - url to api witch deliver api urls witch serve media track data. 

UPDATE_SOURCE_SCHEDULE - it is determine how often and when source is update.

## 2. getTrack.cronTask
Update price or add new track. During update it check album and artist exist.

UPDATE_TRACK_CHUNK - it is determine how many request is dane to external track data api each time.

UPDATE_TRACK_SCHEDULE - it is determine how often and when track data api is requested.

# FRONT END API:
## 1. Get artist count tracks:
```/frontend-api/artist/count-tracks/<artist name>```

## 2. Get all artists from given genre, sort them by name
```/frontend-api/artist/genre/<genre name>```

# BACK END API:
## 1. Api address to add track or update price. 
You have to send (POST) json object `{track:[<track1 data>, <track2 data> ... ]}`
```/backend-api/track/update```

## 2. checkIsAllowed is middleware to check authentication and authorization. 
(partially implanted)  

# MODEL AND DB:
I chose mongoDB to storage data. Given model was normalized. I denormalized it and add redundant data to speed up request from front-end.
To Artist mode I add trackCount. It is increase by 1 when new track is added.

# FAKE API
Additional express server for development. It delivers source and track data. 

# .env
Add environment variables for development.