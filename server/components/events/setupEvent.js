function setupEvent(req, res){
  // handles POST requests to chyp.ca/api/events
  // create new event in setup_events DB table

  const mysql = require('mysql');

  const db = require('../connectDB.js');
  const con = db.connect();

	con.connect(function(err) {
	  if (err) throw err;
	  console.log("Connected!");
	  var sql = "INSERT INTO setup_events (admin_id, fb_event_id, description, e_name, loc_city, loc_country, loc_latitude, loc_longitude, loc_state, loc_street, loc_pc, start_time, cover) VALUES ?";
	  var values = [
            			[
                    req.body.user_id,
                    req.body.event.id,
                    req.body.event.description,
                    req.body.event.name,
                    req.body.event.place.city,
                    req.body.event.place.country,
                    req.body.event.place.latitude,
                    req.body.event.place.longitude,
                    req.body.event.place.state,
                    req.body.event.place.street,
                    req.body.event.place.zip,
                    req.body.event.start_time,
                    req.body.event.cover.source
                  ]
            		];
	  con.query(sql, [values], function (err, result) {
		if (err) throw err;
		console.log("Number of records inserted: " + result.affectedRows);
	  });
	});

}

/* ///// EXPECTED FORMAT FOR REQUEST BODY
{
  "id": "10204239598902151",
  "event": {
        "is_viewer_admin": false,
        "start_time": "2020-03-30T18:00:00-0600",
        "place": {
          "name": "Clement Park",
          "location": {
            "city": "Littleton",
            "country": "United States",
            "latitude": 39.606964057561,
            "longitude": -105.08054762497,
            "state": "CO",
            "street": "7306 W Bowles Ave",
            "zip": "80123"
          },
          "id": "168997749816194"
        },
        "cover": {
          "offset_x": 0,
          "offset_y": 54,
          "source": "https://scontent.xx.fbcdn.net/v/t34.0-0/p180x540/22883255_1545877815458212_759398618_n.jpg?oh=969ad0dada6556bf485747e3c4074612&oe=5A10823B",
          "id": "837794152922994"
        },
        "description": "text",
        "name": "I'll get an event notification in 5 years & be like whats this?",
        "id": "1466704096953408"
      },
}
*/
