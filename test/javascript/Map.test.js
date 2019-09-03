import MapContainer from '../../app/javascript/components/MapContainer.js'

describe('Map', () => {

  const locationA = {
    "results" : [
       {
          "address_components" : [
             {
                "long_name" : "1600",
                "short_name" : "1600",
                "types" : [ "street_number" ]
             },
             {
                "long_name" : "Amphitheatre Pkwy",
                "short_name" : "Amphitheatre Pkwy",
                "types" : [ "route" ]
             },
             {
                "long_name" : "Mountain View",
                "short_name" : "Mountain View",
                "types" : [ "locality", "political" ]
             },
             {
                "long_name" : "Santa Clara County",
                "short_name" : "Santa Clara County",
                "types" : [ "administrative_area_level_2", "political" ]
             },
             {
                "long_name" : "California",
                "short_name" : "CA",
                "types" : [ "administrative_area_level_1", "political" ]
             },
             {
                "long_name" : "United States",
                "short_name" : "US",
                "types" : [ "country", "political" ]
             },
             {
                "long_name" : "94043",
                "short_name" : "94043",
                "types" : [ "postal_code" ]
             }
          ],
          "formatted_address" : "1600 Amphitheatre Parkway, Mountain View, CA 94043, USA",
          "geometry" : {
             "location" : {
                "lat" : 35,
                "lng" : -120
             },
             "location_type" : "ROOFTOP",
             "viewport" : {
                "northeast" : {
                   "lat" : 35,
                   "lng" : -120
                },
                "southwest" : {
                   "lat" : 35,
                   "lng" : -120
                }
             }
          },
          "place_id" : "ChIJ2eUgeAK6j4ARbn5u_wAGqWA",
          "types" : [ "street_address" ]
       }
    ],
    "status" : "OK"
  }
  const locationB = {
    "results" : [
       {
          "address_components" : [
             {
                "long_name" : "1600",
                "short_name" : "1600",
                "types" : [ "street_number" ]
             },
             {
                "long_name" : "Amphitheatre Pkwy",
                "short_name" : "Amphitheatre Pkwy",
                "types" : [ "route" ]
             },
             {
                "long_name" : "Mountain View",
                "short_name" : "Mountain View",
                "types" : [ "locality", "political" ]
             },
             {
                "long_name" : "Santa Clara County",
                "short_name" : "Santa Clara County",
                "types" : [ "administrative_area_level_2", "political" ]
             },
             {
                "long_name" : "California",
                "short_name" : "CA",
                "types" : [ "administrative_area_level_1", "political" ]
             },
             {
                "long_name" : "United States",
                "short_name" : "US",
                "types" : [ "country", "political" ]
             },
             {
                "long_name" : "94043",
                "short_name" : "94043",
                "types" : [ "postal_code" ]
             }
          ],
          "formatted_address" : "1600 Amphitheatre Parkway, Mountain View, CA 94043, USA",
          "geometry" : {
             "location" : {
                "lat" : 40,
                "lng" : -130
             },
             "location_type" : "ROOFTOP",
             "viewport" : {
                "northeast" : {
                   "lat" : 40,
                   "lng" : -130
                },
                "southwest" : {
                   "lat" : 40,
                   "lng" : -130
                }
             }
          },
          "place_id" : "ChIJ2eUgeAK6j4ARbn5u_wAGqWA",
          "types" : [ "street_address" ]
       }
    ],
    "status" : "OK"
  }
  test('calculates the middle point between two locations', () => {
    findMiddle(locationA, locationB)
    expect(MapContainer.props().lat).toBe(37.5);
    expect(MapContainer.props().lng).toBe(-125);
  });
})
