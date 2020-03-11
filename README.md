# freeparkkiin
API for sharing free parking spot information. WIP

# Introduction

API for users to enter free and public parking spots, which can then be shown on map.

# REST-calls

## GET

Returns the database in JSON-format

## POST

Insert new spot in JSON-format.

example

```javascript
{
  “latitude”: 61.456 //required
  “longitude”: 25.5632 //required
  “hours”: 4
  “address”: “Tiekatu 4”
  “days”: “LA SU”
}
```
## PUT

Flag an existing, erroneous spot. ID required. Example:
```
/spots?id=3
```
