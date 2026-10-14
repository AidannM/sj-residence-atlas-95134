/* ==========================================================================
   SAN JOSE RESIDENCE FINDER — APPLICATION ENGINE
   - Zero-API-Key MapLibre GL 3D Vector Map (with CARTO Voyager/Dark fallback)
   - Live Priority Weight Scorer (0-100% Personal Match)
   - Direct Links: Google Maps Location, Driving Directions to 3625 Cisco Way,
     Apartments.com Listing Search, and Official Property Site
   - Light / Dark Theme Toggle (persisted)
   - Automatic LocalStorage Persistence for Favorites, Notes, Priorities & Edits
   ========================================================================== */

const CISCO_HQ = {
  name: "Cisco HQ — Building 14",
  address: "3625 Cisco Way, San Jose, CA 95134",
  lat: 37.40716,
  lng: -121.92889,
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=3625+Cisco+Way,+San+Jose,+CA+95134"
};

const DEFAULT_APARTMENTS = [
  {
    "id": "north-park",
    "name": "North Park Apartment Village",
    "subarea": "North San Jose (River Oaks / Tasman)",
    "region": "North San Jose",
    "address": "3500 Palmilla Dr, San Jose, CA 95134",
    "city": "San Jose",
    "zip": "95134",
    "lat": 37.4078,
    "lng": -121.9385,
    "distanceMiles": 0.8,
    "driveMins": 3,
    "transitMode": "14 min walk / 3 min bike to Cisco",
    "studioMin": 2750,
    "studioMax": 2980,
    "studioSqFt": "490–550",
    "oneBedMin": 2915,
    "oneBedMax": 3350,
    "oneBedSqFt": "620–830",
    "bestStartingRent": 2750,
    "recommendedUnit": "Studio ($2,750) or 1BR ($2,915)",
    "parkingFee": 0,
    "parkingNote": "1 assigned underground garage stall included in base rent",
    "utilityProvider": "PG&E (~$0.44/kWh)",
    "estUtilitiesAndFees": 225,
    "trueMonthlyMin": 2975,
    "trueMonthly1BR": 3140,
    "inUnitLaundry": true,
    "centralAC": true,
    "poolAndGym": true,
    "meetsAllCriteria": true,
    "under3000Option": true,
    "tier": "Top Pick",
    "management": "Irvine Company",
    "legitimacy": "Verified Institutional REIT (Irvine Co.)",
    "rating": 3.9,
    "reviewSource": "Google (3.9) / Apartments.com (4.0)",
    "amenitiesHighlight": "10 pools & spas, indoor full basketball court, multiple gyms, 5-acre private Moitozo Park, on-site Starbucks & market",
    "praise": "True village atmosphere with private 5-acre park and Starbucks on-site; easy 12–15 min walk to Cisco Building 14; both Studios ($2,750) and entry 1BRs ($2,915) dip under $3,000; fast Irvine Co. maintenance.",
    "complaints": "Massive complex footprint (walking to trash chute or exit can take time); occasional garage tailgating break-ins; weak cell reception inside some ground-floor courtyards.",
    "website": "https://www.irvinecompanyapartments.com/locations/northern-california/san-jose/north-park.html",
    "highlightTag": "Best Walk-to-Cisco Under $3,000",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=North+Park+Apartment+Village%2C+3500+Palmilla+Dr%2C+San+Jose%2C+CA+95134",
    "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&origin=3500+Palmilla+Dr%2C+San+Jose%2C+CA+95134&destination=3625+Cisco+Way%2C+San+Jose%2C+CA+95134&travelmode=driving",
    "listingUrl": "https://www.apartments.com/search/?query=North%20Park%20Apartment%20Village%20San%20Jose",
    "zillowUrl": "https://www.zillow.com/homes/3500%20Palmilla%20Dr%2C%20San%20Jose%2C%20CA%2095134_rb/",
    "userStatus": "shortlist",
    "userNotes": ""
  },
  {
    "id": "crescent-village",
    "name": "Crescent Village Apartment Homes",
    "subarea": "North San Jose (Right Across from Cisco)",
    "region": "North San Jose",
    "address": "3200 Zanker Rd, San Jose, CA 95134",
    "city": "San Jose",
    "zip": "95134",
    "lat": 37.4045,
    "lng": -121.9328,
    "distanceMiles": 0.4,
    "driveMins": 2,
    "transitMode": "8 min walk / 2 min bike across Zanker Rd",
    "studioMin": 2855,
    "studioMax": 3100,
    "studioSqFt": "574–640",
    "oneBedMin": 3250,
    "oneBedMax": 3650,
    "oneBedSqFt": "704–880",
    "bestStartingRent": 2855,
    "recommendedUnit": "Studio ($2,855, 574 sq ft) or 1BR ($3,250)",
    "parkingFee": 0,
    "parkingNote": "1 assigned subterranean garage stall included",
    "utilityProvider": "PG&E (~$0.44/kWh)",
    "estUtilitiesAndFees": 230,
    "trueMonthlyMin": 3085,
    "trueMonthly1BR": 3480,
    "inUnitLaundry": true,
    "centralAC": true,
    "poolAndGym": true,
    "meetsAllCriteria": true,
    "under3000Option": true,
    "tier": "Top Pick",
    "management": "Irvine Company",
    "legitimacy": "Verified Institutional REIT (Irvine Co.)",
    "rating": 3.8,
    "reviewSource": "Apartments.com (3.8) / Google (3.7)",
    "amenitiesHighlight": "7 heated resort pools & spas, 4 fitness centers, spin/movement studios, screening room, adjacent to River Oaks retail",
    "praise": "Closest possible commute to 3625 Cisco Way (0.4 miles — roll out of bed and walk in 8 mins); resort-grade pools and landscaping; very spacious 574–640 sq ft studios under $3,000.",
    "complaints": "Periodic false fire alarms in certain buildings; strict move-out cleaning deductions; PG&E summer cooling costs.",
    "website": "https://www.irvinecompanyapartments.com/locations/northern-california/san-jose/crescent-village.html",
    "highlightTag": "Closest Walk to Cisco (0.4 mi)",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Crescent+Village+Apartment+Homes%2C+3200+Zanker+Rd%2C+San+Jose%2C+CA+95134",
    "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&origin=3200+Zanker+Rd%2C+San+Jose%2C+CA+95134&destination=3625+Cisco+Way%2C+San+Jose%2C+CA+95134&travelmode=driving",
    "listingUrl": "https://www.apartments.com/search/?query=Crescent%20Village%20Apartment%20Homes%20San%20Jose",
    "zillowUrl": "https://www.zillow.com/homes/3200%20Zanker%20Rd%2C%20San%20Jose%2C%20CA%2095134_rb/",
    "userStatus": "shortlist",
    "userNotes": ""
  },
  {
    "id": "enso",
    "name": "Enso Apartments",
    "subarea": "North San Jose (Baypointe VTA)",
    "region": "North San Jose",
    "address": "175 Baypointe Pkwy, San Jose, CA 95134",
    "city": "San Jose",
    "zip": "95134",
    "lat": 37.4128,
    "lng": -121.9372,
    "distanceMiles": 1.0,
    "driveMins": 3,
    "transitMode": "18 min walk / 1 stop on VTA Orange Line",
    "studioMin": 2950,
    "studioMax": 3100,
    "studioSqFt": "598",
    "oneBedMin": 3100,
    "oneBedMax": 3450,
    "oneBedSqFt": "792–889",
    "bestStartingRent": 2950,
    "recommendedUnit": "Large 1BR ($3,100, 792–889 sq ft) or Studio ($2,950)",
    "parkingFee": 0,
    "parkingNote": "1 assigned garage space included in base rent",
    "utilityProvider": "PG&E (~$0.44/kWh)",
    "estUtilitiesAndFees": 225,
    "trueMonthlyMin": 3175,
    "trueMonthly1BR": 3325,
    "inUnitLaundry": true,
    "centralAC": true,
    "poolAndGym": true,
    "meetsAllCriteria": true,
    "under3000Option": true,
    "tier": "Top Pick",
    "management": "Essex Property Trust",
    "legitimacy": "Verified S&P 500 REIT (Essex)",
    "rating": 3.8,
    "reviewSource": "Apartments.com (3.8) / Google (3.7)",
    "amenitiesHighlight": "Courtyard pool & spa, 24-hr gym, bocce & badminton courts, EV chargers, gas cooking ranges",
    "praise": "Huge 1BR floor plans (792–889 sq ft) with real gas stoves; steps from Baypointe VTA light rail (1 stop to Cisco Way); 1st parking space included.",
    "complaints": "Package locker overflow during holidays; occasional elevator downtime; Essex renewal increases after year 1.",
    "website": "https://www.essexapartmenthomes.com/apartments/san-jose/enso",
    "highlightTag": "Largest 1BRs Near Cisco (889 sq ft)",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Enso+Apartments%2C+175+Baypointe+Pkwy%2C+San+Jose%2C+CA+95134",
    "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&origin=175+Baypointe+Pkwy%2C+San+Jose%2C+CA+95134&destination=3625+Cisco+Way%2C+San+Jose%2C+CA+95134&travelmode=driving",
    "listingUrl": "https://www.apartments.com/search/?query=Enso%20Apartments%20San%20Jose",
    "zillowUrl": "https://www.zillow.com/homes/175%20Baypointe%20Pkwy%2C%20San%20Jose%2C%20CA%2095134_rb/",
    "userStatus": "shortlist",
    "userNotes": ""
  },
  {
    "id": "aire",
    "name": "Aire Apartments",
    "subarea": "North San Jose (Tasman / Iron Point)",
    "region": "North San Jose",
    "address": "3401 Iron Point Dr, San Jose, CA 95134",
    "city": "San Jose",
    "zip": "95134",
    "lat": 37.4095,
    "lng": -121.942,
    "distanceMiles": 1.1,
    "driveMins": 4,
    "transitMode": "5 min bike / 20 min walk down Tasman Dr",
    "studioMin": 2850,
    "studioMax": 2950,
    "studioSqFt": "564–600",
    "oneBedMin": 3350,
    "oneBedMax": 3550,
    "oneBedSqFt": "682–747",
    "bestStartingRent": 2850,
    "recommendedUnit": "Studio ($2,850, 564–600 sq ft)",
    "parkingFee": 0,
    "parkingNote": "1 assigned garage space included (strict waitlist for 2nd car)",
    "utilityProvider": "PG&E (~$0.44/kWh)",
    "estUtilitiesAndFees": 240,
    "trueMonthlyMin": 3090,
    "trueMonthly1BR": 3590,
    "inUnitLaundry": true,
    "centralAC": true,
    "poolAndGym": true,
    "meetsAllCriteria": true,
    "under3000Option": true,
    "tier": "Strong Contender",
    "management": "Berkshire Residential",
    "legitimacy": "Verified National Operator (Berkshire)",
    "rating": 3.9,
    "reviewSource": "Apartments.com (3.9) / Google (3.8)",
    "amenitiesHighlight": "Boutique hotel pool & spa, skydeck rooftop with fire pits, 24/7 fitness club with Pilates/yoga, floor-to-ceiling glass",
    "praise": "Sleek architectural interiors with floor-to-ceiling windows, high-gloss European cabinets, and Nest thermostats; studios consistently stay under $2,950.",
    "complaints": "Mandatory ~$30/mo valet trash; quiet office-park surroundings on weekends; move-out cleaning deductions.",
    "website": "https://www.aireliving.com/",
    "highlightTag": "Best Modern Architecture Studio <$2,950",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Aire+Apartments%2C+3401+Iron+Point+Dr%2C+San+Jose%2C+CA+95134",
    "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&origin=3401+Iron+Point+Dr%2C+San+Jose%2C+CA+95134&destination=3625+Cisco+Way%2C+San+Jose%2C+CA+95134&travelmode=driving",
    "listingUrl": "https://www.apartments.com/search/?query=Aire%20Apartments%20San%20Jose",
    "zillowUrl": "https://www.zillow.com/homes/3401%20Iron%20Point%20Dr%2C%20San%20Jose%2C%20CA%2095134_rb/",
    "userStatus": "considering",
    "userNotes": ""
  },
  {
    "id": "the-verdant",
    "name": "The Verdant Apartments",
    "subarea": "North San Jose (N. First & Tasman)",
    "region": "North San Jose",
    "address": "3700 Casa Verde St, San Jose, CA 95134",
    "city": "San Jose",
    "zip": "95134",
    "lat": 37.414,
    "lng": -121.944,
    "distanceMiles": 1.3,
    "driveMins": 4,
    "transitMode": "6 min bike / VTA light rail at N. First & Tasman",
    "studioMin": null,
    "studioMax": null,
    "studioSqFt": "N/A",
    "oneBedMin": 3180,
    "oneBedMax": 3450,
    "oneBedSqFt": "681–830",
    "bestStartingRent": 3180,
    "recommendedUnit": "1BR ($3,180, 681–830 sq ft)",
    "parkingFee": 0,
    "parkingNote": "1 gated garage space included",
    "utilityProvider": "PG&E (~$0.44/kWh)",
    "estUtilitiesAndFees": 220,
    "trueMonthlyMin": 3400,
    "trueMonthly1BR": 3400,
    "inUnitLaundry": true,
    "centralAC": true,
    "poolAndGym": true,
    "meetsAllCriteria": true,
    "under3000Option": false,
    "tier": "Strong Contender",
    "management": "Fairfield Residential",
    "legitimacy": "Verified National Operator (Fairfield)",
    "rating": 3.8,
    "reviewSource": "Apartments.com (3.9) / Google (3.7)",
    "amenitiesHighlight": "Heated pool with cabanas, multi-level 24-hr gym, direct Coyote Creek Trail access across street",
    "praise": "Tall 9-to-12-foot ceilings with crown molding; direct access to Coyote Creek running/biking trail; included garage spot.",
    "complaints": "Do not leave bikes on ground-floor patios or unlocked racks; leasing office can be slow on minor non-urgent tickets.",
    "website": "https://www.fairfieldresidential.com/property/the-verdant-apartments/",
    "highlightTag": "High Ceilings + Trail Access",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=The+Verdant+Apartments%2C+3700+Casa+Verde+St%2C+San+Jose%2C+CA+95134",
    "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&origin=3700+Casa+Verde+St%2C+San+Jose%2C+CA+95134&destination=3625+Cisco+Way%2C+San+Jose%2C+CA+95134&travelmode=driving",
    "listingUrl": "https://www.apartments.com/search/?query=The%20Verdant%20Apartments%20San%20Jose",
    "zillowUrl": "https://www.zillow.com/homes/3700%20Casa%20Verde%20St%2C%20San%20Jose%2C%20CA%2095134_rb/",
    "userStatus": "considering",
    "userNotes": ""
  },
  {
    "id": "epic",
    "name": "Epic Apartments",
    "subarea": "North San Jose (River Oaks)",
    "region": "North San Jose",
    "address": "600 Epic Way, San Jose, CA 95134",
    "city": "San Jose",
    "zip": "95134",
    "lat": 37.3995,
    "lng": -121.9305,
    "distanceMiles": 1.0,
    "driveMins": 3,
    "transitMode": "4 min bike / 18 min walk via Zanker Rd",
    "studioMin": 3037,
    "studioMax": 3220,
    "studioSqFt": "565",
    "oneBedMin": 3237,
    "oneBedMax": 3500,
    "oneBedSqFt": "722–803",
    "bestStartingRent": 3037,
    "recommendedUnit": "Studio ($3,037) or 1BR ($3,237)",
    "parkingFee": 0,
    "parkingNote": "1 garage space typically included ($0–$50 promo)",
    "utilityProvider": "PG&E (~$0.44/kWh)",
    "estUtilitiesAndFees": 240,
    "trueMonthlyMin": 3277,
    "trueMonthly1BR": 3477,
    "inUnitLaundry": true,
    "centralAC": true,
    "poolAndGym": true,
    "meetsAllCriteria": true,
    "under3000Option": false,
    "tier": "Strong Contender",
    "management": "Essex Property Trust",
    "legitimacy": "Verified S&P 500 REIT (Essex)",
    "rating": 3.7,
    "reviewSource": "Google (3.7) / Apartments.com (3.8)",
    "amenitiesHighlight": "Resort pool with cabanas, putting green, private movie theater lounge, modern fitness center",
    "praise": "High ceilings, granite countertops, great movie lounge and pool deck, 3-minute drive straight up Zanker Rd to Cisco.",
    "complaints": "Mandatory ~$70 community tech/Wi-Fi bundle on select leases; aggressive lease renewal hikes from Essex.",
    "website": "https://www.essexapartmenthomes.com/apartments/san-jose/epic",
    "highlightTag": "Resort Pool & Putting Green",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Epic+Apartments%2C+600+Epic+Way%2C+San+Jose%2C+CA+95134",
    "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&origin=600+Epic+Way%2C+San+Jose%2C+CA+95134&destination=3625+Cisco+Way%2C+San+Jose%2C+CA+95134&travelmode=driving",
    "listingUrl": "https://www.apartments.com/search/?query=Epic%20Apartments%20San%20Jose",
    "zillowUrl": "https://www.zillow.com/homes/600%20Epic%20Way%2C%20San%20Jose%2C%20CA%2095134_rb/",
    "userStatus": "considering",
    "userNotes": ""
  },
  {
    "id": "elan-river-oaks",
    "name": "Élan at River Oaks",
    "subarea": "North San Jose (River Oaks Plaza)",
    "region": "North San Jose",
    "address": "345 Village Center Dr, San Jose, CA 95134",
    "city": "San Jose",
    "zip": "95134",
    "lat": 37.4001,
    "lng": -121.936,
    "distanceMiles": 1.1,
    "driveMins": 4,
    "transitMode": "5 min bike / 20 min walk",
    "studioMin": 3050,
    "studioMax": 3200,
    "studioSqFt": "532",
    "oneBedMin": 3380,
    "oneBedMax": 3650,
    "oneBedSqFt": "760–780",
    "bestStartingRent": 3050,
    "recommendedUnit": "Studio ($3,050) or 1BR ($3,380)",
    "parkingFee": 0,
    "parkingNote": "Gated garage permit included; much easier guest parking",
    "utilityProvider": "PG&E (~$0.44/kWh)",
    "estUtilitiesAndFees": 215,
    "trueMonthlyMin": 3265,
    "trueMonthly1BR": 3595,
    "inUnitLaundry": true,
    "centralAC": true,
    "poolAndGym": true,
    "meetsAllCriteria": true,
    "under3000Option": false,
    "tier": "Strong Contender",
    "management": "Shea Properties",
    "legitimacy": "Verified Institutional Operator (Shea)",
    "rating": 4.0,
    "reviewSource": "Google (4.0) / Apartments.com (4.1)",
    "amenitiesHighlight": "2 pools & spas, lighted tennis courts, updated gym, lush waterscapes & duck ponds, next to River Oaks Plaza",
    "praise": "Highest resident satisfaction in River Oaks (4.0+); tranquil garden courtyards with trees and fountains; right next to Starbucks & dining; easy guest parking.",
    "complaints": "Slightly older building vintage than brand-new high-rises (though interiors are renovated); occasional water shutoffs for plumbing maintenance.",
    "website": "https://www.sheaapartments.com/apartments/elan-at-river-oaks/",
    "highlightTag": "Highest Rated in River Oaks (4.0★)",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C3%89lan+at+River+Oaks%2C+345+Village+Center+Dr%2C+San+Jose%2C+CA+95134",
    "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&origin=345+Village+Center+Dr%2C+San+Jose%2C+CA+95134&destination=3625+Cisco+Way%2C+San+Jose%2C+CA+95134&travelmode=driving",
    "listingUrl": "https://www.apartments.com/search/?query=%C3%89lan%20at%20River%20Oaks%20San%20Jose",
    "zillowUrl": "https://www.zillow.com/homes/345%20Village%20Center%20Dr%2C%20San%20Jose%2C%20CA%2095134_rb/",
    "userStatus": "considering",
    "userNotes": ""
  },
  {
    "id": "river-view",
    "name": "River View Apartment Homes",
    "subarea": "North San Jose (River Oaks VTA)",
    "region": "North San Jose",
    "address": "350 River Oaks Pkwy, San Jose, CA 95134",
    "city": "San Jose",
    "zip": "95134",
    "lat": 37.4005,
    "lng": -121.9332,
    "distanceMiles": 0.9,
    "driveMins": 3,
    "transitMode": "4 min bike / River Oaks VTA Station at entrance",
    "studioMin": 3185,
    "studioMax": 3360,
    "studioSqFt": "468–620",
    "oneBedMin": 3450,
    "oneBedMax": 3800,
    "oneBedSqFt": "710–875",
    "bestStartingRent": 3185,
    "recommendedUnit": "Studio ($3,185) or Promo 1BR ($3,450)",
    "parkingFee": 0,
    "parkingNote": "1 assigned garage space included",
    "utilityProvider": "PG&E (~$0.44/kWh)",
    "estUtilitiesAndFees": 235,
    "trueMonthlyMin": 3420,
    "trueMonthly1BR": 3685,
    "inUnitLaundry": true,
    "centralAC": true,
    "poolAndGym": true,
    "meetsAllCriteria": true,
    "under3000Option": false,
    "tier": "Strong Contender",
    "management": "Irvine Company",
    "legitimacy": "Verified Institutional REIT (Irvine Co.)",
    "rating": 3.8,
    "reviewSource": "Apartments.com (3.9) / Google (3.8)",
    "amenitiesHighlight": "Junior Olympic pools, hydrotherapy spas, spin & yoga studios, direct Guadalupe River Trail gate",
    "praise": "Steps onto Guadalupe River Trail and River Oaks VTA station; pristine Irvine Co. landscaping and junior Olympic lap pools.",
    "complaints": "Pricier than North Park and Crescent Village right up the street; intermittent false fire alarms.",
    "website": "https://www.irvinecompanyapartments.com/locations/northern-california/san-jose/river-view.html",
    "highlightTag": "Direct River Trail & VTA Access",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=River+View+Apartment+Homes%2C+350+River+Oaks+Pkwy%2C+San+Jose%2C+CA+95134",
    "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&origin=350+River+Oaks+Pkwy%2C+San+Jose%2C+CA+95134&destination=3625+Cisco+Way%2C+San+Jose%2C+CA+95134&travelmode=driving",
    "listingUrl": "https://www.apartments.com/search/?query=River%20View%20Apartment%20Homes%20San%20Jose",
    "zillowUrl": "https://www.zillow.com/homes/350%20River%20Oaks%20Pkwy%2C%20San%20Jose%2C%20CA%2095134_rb/",
    "userStatus": "considering",
    "userNotes": ""
  },
  {
    "id": "vista-99",
    "name": "Vista 99 Apartments",
    "subarea": "North San Jose (Tasman / Vista Montana)",
    "region": "North San Jose",
    "address": "99 Vista Montana, San Jose, CA 95134",
    "city": "San Jose",
    "zip": "95134",
    "lat": 37.4105,
    "lng": -121.939,
    "distanceMiles": 1.2,
    "driveMins": 4,
    "transitMode": "5 min bike / 4 min drive to Cisco",
    "studioMin": null,
    "studioMax": null,
    "studioSqFt": "N/A",
    "oneBedMin": 3225,
    "oneBedMax": 3450,
    "oneBedSqFt": "740–775",
    "bestStartingRent": 3225,
    "recommendedUnit": "1BR ($3,225, 740 sq ft)",
    "parkingFee": 0,
    "parkingNote": "1 garage space included ($100/mo extra car)",
    "utilityProvider": "PG&E (~$0.44/kWh)",
    "estUtilitiesAndFees": 265,
    "trueMonthlyMin": 3490,
    "trueMonthly1BR": 3490,
    "inUnitLaundry": true,
    "centralAC": true,
    "poolAndGym": true,
    "meetsAllCriteria": true,
    "under3000Option": false,
    "tier": "Caution / Mixed Reviews",
    "management": "Vivmark / FPI Management",
    "legitimacy": "Legitimate Building — Low Resident Rating (2.3★)",
    "rating": 2.3,
    "reviewSource": "Yelp / ApartmentRatings (2.3)",
    "amenitiesHighlight": "2nd-story gym & yoga studio, pool deck with cabanas, gas stoves",
    "praise": "Very close to Cisco (1.2 mi), modern interiors with gas cooking stoves.",
    "complaints": "CAUTION: Low 2.3★ rating due to frequent garage gate outages, vehicle break-ins, false fire alarms, and mandatory $53/mo valet trash fee.",
    "website": "https://www.apartments.com/vista-99-san-jose-ca/w00sz1l/",
    "highlightTag": "Caution: High Fees & 2.3★ Rating",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Vista+99+Apartments%2C+99+Vista+Montana%2C+San+Jose%2C+CA+95134",
    "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&origin=99+Vista+Montana%2C+San+Jose%2C+CA+95134&destination=3625+Cisco+Way%2C+San+Jose%2C+CA+95134&travelmode=driving",
    "listingUrl": "https://www.apartments.com/search/?query=Vista%2099%20Apartments%20San%20Jose",
    "zillowUrl": "https://www.zillow.com/homes/99%20Vista%20Montana%2C%20San%20Jose%2C%20CA%2095134_rb/",
    "userStatus": "considering",
    "userNotes": ""
  },
  {
    "id": "passero",
    "name": "Passero Apartments",
    "subarea": "North Santa Clara (Tasman / Calle Del Mundo)",
    "region": "Santa Clara (SVP Utility)",
    "address": "2230 Calle Del Mundo, Santa Clara, CA 95054",
    "city": "Santa Clara",
    "zip": "95054",
    "lat": 37.4085,
    "lng": -121.9675,
    "distanceMiles": 2.4,
    "driveMins": 6,
    "transitMode": "6 min drive east on Tasman Dr / VTA Orange Line",
    "studioMin": 2895,
    "studioMax": 2995,
    "studioSqFt": "331–350",
    "oneBedMin": 3300,
    "oneBedMax": 3650,
    "oneBedSqFt": "526–750",
    "bestStartingRent": 2895,
    "recommendedUnit": "Studio ($2,895) or 1BR ($3,300)",
    "parkingFee": 100,
    "parkingNote": "Gated garage (~$100/mo); EV chargers available",
    "utilityProvider": "Silicon Valley Power (~$0.18/kWh — 60% cheaper!)",
    "estUtilitiesAndFees": 165,
    "trueMonthlyMin": 3160,
    "trueMonthly1BR": 3565,
    "inUnitLaundry": true,
    "centralAC": true,
    "poolAndGym": true,
    "meetsAllCriteria": true,
    "under3000Option": true,
    "tier": "Top Pick",
    "management": "Greystar",
    "legitimacy": "Verified 2023 Class-A Build (Greystar)",
    "rating": 4.7,
    "reviewSource": "Google / ApartmentRatings (4.7)",
    "amenitiesHighlight": "Resort pool, rooftop skydeck, wellness gym, golf simulator, private coworking pods",
    "praise": "4.7★ rating! Brand-new 2023 build; gets cheap Santa Clara Silicon Valley Power ($0.18/kWh) so running A/C costs ~$50/mo instead of $180/mo; 6 mins straight down Tasman to Cisco.",
    "complaints": "Sub-$3,000 studios are micro-sized (331–350 sq ft); parking is unbundled (~$100/mo).",
    "website": "https://www.greystar.com",
    "highlightTag": "4.7★ New Build + Cheap SVP Electric",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Passero+Apartments%2C+2230+Calle+Del+Mundo%2C+Santa+Clara%2C+CA+95054",
    "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&origin=2230+Calle+Del+Mundo%2C+Santa+Clara%2C+CA+95054&destination=3625+Cisco+Way%2C+San+Jose%2C+CA+95134&travelmode=driving",
    "listingUrl": "https://www.apartments.com/search/?query=Passero%20Apartments%20Santa%20Clara",
    "zillowUrl": "https://www.zillow.com/homes/2230%20Calle%20Del%20Mundo%2C%20Santa%20Clara%2C%20CA%2095054_rb/",
    "userStatus": "shortlist",
    "userNotes": ""
  },
  {
    "id": "estancia-santa-clara",
    "name": "Estancia at Santa Clara",
    "subarea": "North Santa Clara (Rivermark / Hope Dr)",
    "region": "Santa Clara (SVP Utility)",
    "address": "1650 Hope Dr, Santa Clara, CA 95054",
    "city": "Santa Clara",
    "zip": "95054",
    "lat": 37.4042,
    "lng": -121.9587,
    "distanceMiles": 1.9,
    "driveMins": 6,
    "transitMode": "6 min drive / 8 min bike via Guadalupe River Trail",
    "studioMin": null,
    "studioMax": null,
    "studioSqFt": "N/A",
    "oneBedMin": 3210,
    "oneBedMax": 3450,
    "oneBedSqFt": "790",
    "bestStartingRent": 3210,
    "recommendedUnit": "Large 1BR ($3,210, 790 sq ft)",
    "parkingFee": 0,
    "parkingNote": "1 assigned gated garage space included",
    "utilityProvider": "Silicon Valley Power (~$0.18/kWh — 60% cheaper!)",
    "estUtilitiesAndFees": 160,
    "trueMonthlyMin": 3370,
    "trueMonthly1BR": 3370,
    "inUnitLaundry": true,
    "centralAC": true,
    "poolAndGym": true,
    "meetsAllCriteria": true,
    "under3000Option": false,
    "tier": "Top Pick",
    "management": "Equity Residential",
    "legitimacy": "Verified S&P 500 REIT (Equity Residential)",
    "rating": 3.6,
    "reviewSource": "Google / ApartmentRatings (3.6)",
    "amenitiesHighlight": "2 resort pools, multiple hot tubs, fitness studio, private gate to Guadalupe River Trail, walkable to Rivermark Safeway",
    "praise": "Sweet-spot 1BR near Cisco: 1.9 miles away, 1 free garage spot, spacious 790 sq ft layout, walkable to Rivermark Village groceries/dining, and saves ~$120/mo on summer A/C via Santa Clara SVP power!",
    "complaints": "Visitor parking is tight; Equity Residential pushes noticeable renewal increases after year 1.",
    "website": "https://www.equityapartments.com/san-francisco-bay-area/santa-clara/estancia-at-santa-clara-apartments",
    "highlightTag": "Best 1BR Overall Value (SVP + Free Parking)",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Estancia+at+Santa+Clara%2C+1650+Hope+Dr%2C+Santa+Clara%2C+CA+95054",
    "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&origin=1650+Hope+Dr%2C+Santa+Clara%2C+CA+95054&destination=3625+Cisco+Way%2C+San+Jose%2C+CA+95134&travelmode=driving",
    "listingUrl": "https://www.apartments.com/search/?query=Estancia%20at%20Santa%20Clara%20Santa%20Clara",
    "zillowUrl": "https://www.zillow.com/homes/1650%20Hope%20Dr%2C%20Santa%20Clara%2C%20CA%2095054_rb/",
    "userStatus": "shortlist",
    "userNotes": ""
  },
  {
    "id": "river-terrace",
    "name": "River Terrace Apartment Homes",
    "subarea": "North Santa Clara (Agnew / Rivermark)",
    "region": "Santa Clara (SVP Utility)",
    "address": "730 Agnew Rd, Santa Clara, CA 95054",
    "city": "Santa Clara",
    "zip": "95054",
    "lat": 37.398,
    "lng": -121.9542,
    "distanceMiles": 2.1,
    "driveMins": 6,
    "transitMode": "6 min drive / 9 min bike to Cisco",
    "studioMin": null,
    "studioMax": null,
    "studioSqFt": "N/A",
    "oneBedMin": 3200,
    "oneBedMax": 3450,
    "oneBedSqFt": "700–850",
    "bestStartingRent": 3200,
    "recommendedUnit": "1BR ($3,200, 700–850 sq ft)",
    "parkingFee": 80,
    "parkingNote": "Multi-level garage (~$75–$90/mo)",
    "utilityProvider": "Silicon Valley Power (~$0.18/kWh — 60% cheaper!)",
    "estUtilitiesAndFees": 170,
    "trueMonthlyMin": 3450,
    "trueMonthly1BR": 3450,
    "inUnitLaundry": true,
    "centralAC": true,
    "poolAndGym": true,
    "meetsAllCriteria": true,
    "under3000Option": false,
    "tier": "Strong Contender",
    "management": "UDR",
    "legitimacy": "Verified S&P 500 REIT (UDR)",
    "rating": 3.1,
    "reviewSource": "Google / ApartmentRatings (2.8–3.3)",
    "amenitiesHighlight": "Mediterranean courtyard pool & spa, 24/7 gym, steps from Rivermark Village Plaza",
    "praise": "Walk across the street to Rivermark Safeway, Peet's Coffee, and restaurants; cheap Santa Clara SVP electricity; true central A/C; 6 mins to Cisco.",
    "complaints": "UDR relies on centralized/automated resident support; package locker fees ($10–$15/mo) and strict move-out charges.",
    "website": "https://www.udr.com/san-francisco-bay-area-apartments/santa-clara/river-terrace/",
    "highlightTag": "Walk to Rivermark + SVP Power",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=River+Terrace+Apartment+Homes%2C+730+Agnew+Rd%2C+Santa+Clara%2C+CA+95054",
    "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&origin=730+Agnew+Rd%2C+Santa+Clara%2C+CA+95054&destination=3625+Cisco+Way%2C+San+Jose%2C+CA+95134&travelmode=driving",
    "listingUrl": "https://www.apartments.com/search/?query=River%20Terrace%20Apartment%20Homes%20Santa%20Clara",
    "zillowUrl": "https://www.zillow.com/homes/730%20Agnew%20Rd%2C%20Santa%20Clara%2C%20CA%2095054_rb/",
    "userStatus": "considering",
    "userNotes": ""
  },
  {
    "id": "prado-nuevo",
    "name": "Prado Apartments (Nuevo)",
    "subarea": "Santa Clara (Lawrence Station / Nuevo)",
    "region": "Santa Clara (SVP Utility)",
    "address": "3560 Rambla Pl, Santa Clara, CA 95051",
    "city": "Santa Clara",
    "zip": "95051",
    "lat": 37.3698,
    "lng": -121.9962,
    "distanceMiles": 5.8,
    "driveMins": 13,
    "transitMode": "13 min drive via US-101/237; next to Lawrence Caltrain",
    "studioMin": null,
    "studioMax": null,
    "studioSqFt": "N/A",
    "oneBedMin": 3350,
    "oneBedMax": 3650,
    "oneBedSqFt": "753–834",
    "bestStartingRent": 3350,
    "recommendedUnit": "1BR ($3,350, 753 sq ft)",
    "parkingFee": 0,
    "parkingNote": "1 assigned garage space included (EV stalls available)",
    "utilityProvider": "Silicon Valley Power (~$0.18/kWh — 60% cheaper!)",
    "estUtilitiesAndFees": 180,
    "trueMonthlyMin": 3530,
    "trueMonthly1BR": 3530,
    "inUnitLaundry": true,
    "centralAC": true,
    "poolAndGym": true,
    "meetsAllCriteria": true,
    "under3000Option": false,
    "tier": "Strong Contender",
    "management": "Greystar",
    "legitimacy": "Verified Master-Planned Build (Greystar)",
    "rating": 3.8,
    "reviewSource": "ApartmentRatings / Google (3.8)",
    "amenitiesHighlight": "Prado Workout fitness center, resort pool courtyard, 24,000 sq ft of Nuevo parks, LATCH smart access",
    "praise": "Brand-new Nuevo master-planned neighborhood with parks, cheap SVP electricity, and 1 included garage space.",
    "complaints": "Mandatory ~$25 LATCH smart-lock tech fee; strict guest parking enforcement.",
    "website": "https://www.liveprado.com",
    "highlightTag": "New Master-Planned Community + SVP",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Prado+Apartments+%28Nuevo%29%2C+3560+Rambla+Pl%2C+Santa+Clara%2C+CA+95051",
    "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&origin=3560+Rambla+Pl%2C+Santa+Clara%2C+CA+95051&destination=3625+Cisco+Way%2C+San+Jose%2C+CA+95134&travelmode=driving",
    "listingUrl": "https://www.apartments.com/search/?query=Prado%20Apartments%20%28Nuevo%29%20Santa%20Clara",
    "zillowUrl": "https://www.zillow.com/homes/3560%20Rambla%20Pl%2C%20Santa%20Clara%2C%20CA%2095051_rb/",
    "userStatus": "considering",
    "userNotes": ""
  },
  {
    "id": "villas-on-the-boulevard",
    "name": "Villas on the Boulevard",
    "subarea": "Santa Clara (El Camino / San Tomas)",
    "region": "Santa Clara (SVP Utility)",
    "address": "2615 El Camino Real, Santa Clara, CA 95051",
    "city": "Santa Clara",
    "zip": "95051",
    "lat": 37.3524,
    "lng": -121.9682,
    "distanceMiles": 5.2,
    "driveMins": 13,
    "transitMode": "13 min drive straight up San Tomas / Montague Expy",
    "studioMin": null,
    "studioMax": null,
    "studioSqFt": "N/A",
    "oneBedMin": 3450,
    "oneBedMax": 3750,
    "oneBedSqFt": "758–840",
    "bestStartingRent": 3450,
    "recommendedUnit": "1BR ($3,450, 758 sq ft)",
    "parkingFee": 0,
    "parkingNote": "1 underground garage spot included",
    "utilityProvider": "Silicon Valley Power (~$0.18/kWh — 60% cheaper!)",
    "estUtilitiesAndFees": 175,
    "trueMonthlyMin": 3625,
    "trueMonthly1BR": 3625,
    "inUnitLaundry": true,
    "centralAC": true,
    "poolAndGym": true,
    "meetsAllCriteria": true,
    "under3000Option": false,
    "tier": "Strong Contender",
    "management": "SummerHill / Pinnacle",
    "legitimacy": "Verified Regional Developer (SummerHill)",
    "rating": 3.9,
    "reviewSource": "RentCafe / Google (3.9)",
    "amenitiesHighlight": "Heated pool & spa, 24-hr gym, rooftop terraces, gas ranges & kitchen islands",
    "praise": "Secure underground garage, gourmet gas stoves, cheap Santa Clara SVP power, surrounded by Korean BBQ and grocery plazas on El Camino.",
    "complaints": "Sits right at the $3,450 top of your budget ceiling; avoid units facing directly onto El Camino Real traffic.",
    "website": "https://www.villasontheboulevard.com",
    "highlightTag": "Gourmet Gas Kitchens + SVP Power",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Villas+on+the+Boulevard%2C+2615+El+Camino+Real%2C+Santa+Clara%2C+CA+95051",
    "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&origin=2615+El+Camino+Real%2C+Santa+Clara%2C+CA+95051&destination=3625+Cisco+Way%2C+San+Jose%2C+CA+95134&travelmode=driving",
    "listingUrl": "https://www.apartments.com/search/?query=Villas%20on%20the%20Boulevard%20Santa%20Clara",
    "zillowUrl": "https://www.zillow.com/homes/2615%20El%20Camino%20Real%2C%20Santa%20Clara%2C%20CA%2095051_rb/",
    "userStatus": "considering",
    "userNotes": ""
  },
  {
    "id": "mansion-grove",
    "name": "Mansion Grove Apartments (NO CENTRAL A/C)",
    "subarea": "North Santa Clara (Agnew / Mansion Park)",
    "region": "Santa Clara (SVP Utility)",
    "address": "410 Mansion Park Dr, Santa Clara, CA 95054",
    "city": "Santa Clara",
    "zip": "95054",
    "lat": 37.3965,
    "lng": -121.953,
    "distanceMiles": 2.3,
    "driveMins": 7,
    "transitMode": "7 min drive across Lafayette St to Cisco",
    "studioMin": null,
    "studioMax": null,
    "studioSqFt": "N/A",
    "oneBedMin": 3475,
    "oneBedMax": 3810,
    "oneBedSqFt": "700",
    "bestStartingRent": 3475,
    "recommendedUnit": "Eliminated — Lacks Central A/C",
    "parkingFee": 0,
    "parkingNote": "Carport/garage assigned (extra spot ~$125)",
    "utilityProvider": "Silicon Valley Power (~$0.18/kWh)",
    "estUtilitiesAndFees": 175,
    "trueMonthlyMin": 3650,
    "trueMonthly1BR": 3650,
    "inUnitLaundry": true,
    "centralAC": false,
    "poolAndGym": true,
    "meetsAllCriteria": false,
    "under3000Option": false,
    "tier": "Eliminated / Warning",
    "management": "Prometheus Real Estate Group",
    "legitimacy": "Legitimate — Flagged for NO Central A/C",
    "rating": 3.8,
    "reviewSource": "Google (3.8)",
    "amenitiesHighlight": "Redwood arboretum grounds, multiple pools, tennis & basketball courts, gym",
    "praise": "Beautiful redwood trees and friendly Prometheus maintenance staff right across from Cisco.",
    "complaints": "CRITICAL FLAG: Lacks Central A/C (only wall unit or ceiling fan), gets hot in summer, and 1BR pricing ($3,475+) is higher than River Terrace & Estancia next door which DO have central A/C.",
    "website": "https://www.prometheusapartments.com/santa-clara-ca/mansion-grove/",
    "highlightTag": "Warning: No Central A/C",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Mansion+Grove+Apartments+%28NO+CENTRAL+A%2FC%29%2C+410+Mansion+Park+Dr%2C+Santa+Clara%2C+CA+95054",
    "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&origin=410+Mansion+Park+Dr%2C+Santa+Clara%2C+CA+95054&destination=3625+Cisco+Way%2C+San+Jose%2C+CA+95134&travelmode=driving",
    "listingUrl": "https://www.apartments.com/search/?query=Mansion%20Grove%20Apartments%20%28NO%20CENTRAL%20A/C%29%20Santa%20Clara",
    "zillowUrl": "https://www.zillow.com/homes/410%20Mansion%20Park%20Dr%2C%20Santa%20Clara%2C%20CA%2095054_rb/",
    "userStatus": "considering",
    "userNotes": ""
  },
  {
    "id": "anton-aspire",
    "name": "Anton Aspire",
    "subarea": "Milpitas Transit Center (BART / VTA)",
    "region": "Milpitas Corridor",
    "address": "1828 S Milpitas Blvd, Milpitas, CA 95035",
    "city": "Milpitas",
    "zip": "95035",
    "lat": 37.4116,
    "lng": -121.8905,
    "distanceMiles": 3.5,
    "driveMins": 9,
    "transitMode": "7 min direct VTA Orange Line to Cisco Way Station",
    "studioMin": 2380,
    "studioMax": 2550,
    "studioSqFt": "521–563",
    "oneBedMin": 2800,
    "oneBedMax": 3150,
    "oneBedSqFt": "647–839",
    "bestStartingRent": 2380,
    "recommendedUnit": "1BR ($2,800–$2,875) or Studio ($2,380)",
    "parkingFee": 150,
    "parkingNote": "Structured gated garage (~$150/mo) + EV chargers",
    "utilityProvider": "PG&E (~$0.44/kWh)",
    "estUtilitiesAndFees": 215,
    "trueMonthlyMin": 2745,
    "trueMonthly1BR": 3165,
    "inUnitLaundry": true,
    "centralAC": true,
    "poolAndGym": true,
    "meetsAllCriteria": true,
    "under3000Option": true,
    "tier": "Top Pick",
    "management": "Anton Dev / Anton Living",
    "legitimacy": "Verified 2021 Class-A Build (Anton)",
    "rating": 4.0,
    "reviewSource": "Google / RentCafe (4.0)",
    "amenitiesHighlight": "Panoramic rooftop pool & spa terrace, 24/7 fitness club, coworking pods, gas stoves, across from BART & VTA",
    "praise": "Hands-down best sub-$3,000 luxury value: Studios at ~$2,380 and 1BRs at ~$2,800–$2,875; walk across the street to VTA Orange Line and ride 4 stops (7 mins) straight to Cisco Way!",
    "complaints": "Parking is unbundled (~$150/mo); mandatory ~$30/mo valet trash fee; keep windows closed on BART-facing side.",
    "website": "https://www.antonaspire.com",
    "highlightTag": "Best Sub-$2,900 Luxury 1BR + 7-Min Train",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Anton+Aspire%2C+1828+S+Milpitas+Blvd%2C+Milpitas%2C+CA+95035",
    "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&origin=1828+S+Milpitas+Blvd%2C+Milpitas%2C+CA+95035&destination=3625+Cisco+Way%2C+San+Jose%2C+CA+95134&travelmode=driving",
    "listingUrl": "https://www.apartments.com/search/?query=Anton%20Aspire%20Milpitas",
    "zillowUrl": "https://www.zillow.com/homes/1828%20S%20Milpitas%20Blvd%2C%20Milpitas%2C%20CA%2095035_rb/",
    "userStatus": "shortlist",
    "userNotes": ""
  },
  {
    "id": "centria",
    "name": "Centria Condominiums (Private Rentals)",
    "subarea": "Milpitas (Great Mall / S. Main St)",
    "region": "Milpitas Corridor",
    "address": "1101 S Main St, Milpitas, CA 95035",
    "city": "Milpitas",
    "zip": "95035",
    "lat": 37.4182,
    "lng": -121.9054,
    "distanceMiles": 2.3,
    "driveMins": 7,
    "transitMode": "7 min drive / 2 stops on VTA Orange Line from Great Mall",
    "studioMin": 2300,
    "studioMax": 2500,
    "studioSqFt": "550–620",
    "oneBedMin": 2350,
    "oneBedMax": 2900,
    "oneBedSqFt": "619–926",
    "bestStartingRent": 2350,
    "recommendedUnit": "1BR Condo ($2,350–$2,800, 710+ sq ft)",
    "parkingFee": 0,
    "parkingNote": "1 gated assigned garage stall included free by condo owners",
    "utilityProvider": "PG&E (Water & Trash usually FREE via HOA!)",
    "estUtilitiesAndFees": 95,
    "trueMonthlyMin": 2445,
    "trueMonthly1BR": 2645,
    "inUnitLaundry": true,
    "centralAC": true,
    "poolAndGym": true,
    "meetsAllCriteria": true,
    "under3000Option": true,
    "tier": "Top Pick",
    "management": "Individual Condo Owners / Centria HOA",
    "legitimacy": "Verified Condo Community (Lease via Zillow/Apartments.com)",
    "rating": 3.8,
    "reviewSource": "Google / Zillow Community (3.8)",
    "amenitiesHighlight": "Courtyard heated pool & hot tub, fitness room, clubhouse, secure Texas-wrap garage, across from Great Mall",
    "praise": "Lowest true monthly cost in the entire search (~$2,450–$2,700 all-in for a 1BR) because private condo landlords include 1 garage spot, water, and trash in rent!",
    "complaints": "Must rent from an individual condo owner (verify landlord deed on Zillow); strict HOA moving hours and limited visitor parking.",
    "website": "https://www.centriaowners.com",
    "highlightTag": "Lowest True Cost ($2,450–$2,700 All-In)",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Centria+Condominiums+%28Private+Rentals%29%2C+1101+S+Main+St%2C+Milpitas%2C+CA+95035",
    "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&origin=1101+S+Main+St%2C+Milpitas%2C+CA+95035&destination=3625+Cisco+Way%2C+San+Jose%2C+CA+95134&travelmode=driving",
    "listingUrl": "https://www.apartments.com/search/?query=Centria%20Condominiums%20%28Private%20Rentals%29%20Milpitas",
    "zillowUrl": "https://www.zillow.com/homes/1101%20S%20Main%20St%2C%20Milpitas%2C%20CA%2095035_rb/",
    "userStatus": "shortlist",
    "userNotes": ""
  },
  {
    "id": "apex-milpitas",
    "name": "Apex Apartments",
    "subarea": "Milpitas (Abel St / Great Mall)",
    "region": "Milpitas Corridor",
    "address": "1102 S Abel St, Milpitas, CA 95035",
    "city": "Milpitas",
    "zip": "95035",
    "lat": 37.4206,
    "lng": -121.9075,
    "distanceMiles": 2.5,
    "driveMins": 8,
    "transitMode": "8 min drive via Tasman Dr / 2 VTA stops from Great Mall",
    "studioMin": 2650,
    "studioMax": 2850,
    "studioSqFt": "581",
    "oneBedMin": 2920,
    "oneBedMax": 3150,
    "oneBedSqFt": "717–762",
    "bestStartingRent": 2650,
    "recommendedUnit": "Studio ($2,650) or 1BR ($2,920)",
    "parkingFee": 0,
    "parkingNote": "1 gated garage space typically included ($0–$50)",
    "utilityProvider": "PG&E (~$0.44/kWh)",
    "estUtilitiesAndFees": 215,
    "trueMonthlyMin": 2865,
    "trueMonthly1BR": 3135,
    "inUnitLaundry": true,
    "centralAC": true,
    "poolAndGym": true,
    "meetsAllCriteria": true,
    "under3000Option": true,
    "tier": "Strong Contender",
    "management": "Essex Property Trust",
    "legitimacy": "Verified S&P 500 REIT (Essex)",
    "rating": 3.7,
    "reviewSource": "Google / RentCafe (3.7)",
    "amenitiesHighlight": "Resort pool & heated spa, fire pit lounges, multi-room gym, parcel lockers, EV chargers",
    "praise": "Both Studios ($2,650) and 1BRs ($2,920) start under $3,000; clean modern floor plans; 8-minute straight shot down Great Mall Pkwy & Tasman Dr to Cisco.",
    "complaints": "Tight corners in parking structure; standard Essex RUBS utility pass-throughs.",
    "website": "https://www.essexapartmenthomes.com/apartments/milpitas/apex",
    "highlightTag": "Sub-$3,000 1BR + 8-Min Drive",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Apex+Apartments%2C+1102+S+Abel+St%2C+Milpitas%2C+CA+95035",
    "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&origin=1102+S+Abel+St%2C+Milpitas%2C+CA+95035&destination=3625+Cisco+Way%2C+San+Jose%2C+CA+95134&travelmode=driving",
    "listingUrl": "https://www.apartments.com/search/?query=Apex%20Apartments%20Milpitas",
    "zillowUrl": "https://www.zillow.com/homes/1102%20S%20Abel%20St%2C%20Milpitas%2C%20CA%2095035_rb/",
    "userStatus": "considering",
    "userNotes": ""
  },
  {
    "id": "crossing-at-montague",
    "name": "The Crossing at Montague",
    "subarea": "Milpitas (Montague VTA Station)",
    "region": "Milpitas Corridor",
    "address": "755 E Capitol Ave, Milpitas, CA 95035",
    "city": "Milpitas",
    "zip": "95035",
    "lat": 37.4098,
    "lng": -121.895,
    "distanceMiles": 3.2,
    "driveMins": 8,
    "transitMode": "8 min drive / 3 stops on VTA Orange Line",
    "studioMin": null,
    "studioMax": null,
    "studioSqFt": "N/A",
    "oneBedMin": 2750,
    "oneBedMax": 2995,
    "oneBedSqFt": "643–715",
    "bestStartingRent": 2750,
    "recommendedUnit": "1BR ($2,750, 643–715 sq ft)",
    "parkingFee": 0,
    "parkingNote": "1 covered space included (detached garage ~$125 extra)",
    "utilityProvider": "PG&E (~$0.44/kWh)",
    "estUtilitiesAndFees": 210,
    "trueMonthlyMin": 2960,
    "trueMonthly1BR": 2960,
    "inUnitLaundry": true,
    "centralAC": true,
    "poolAndGym": true,
    "meetsAllCriteria": true,
    "under3000Option": true,
    "tier": "Strong Contender",
    "management": "RPM Living",
    "legitimacy": "Verified National Manager (RPM Living)",
    "rating": 3.3,
    "reviewSource": "ApartmentRatings / Google (3.3)",
    "amenitiesHighlight": "Pool, spa, fitness studio, media screening room, BBQ cabanas, steps from Montague VTA",
    "praise": "True 1-Bedroom under $2,800 with included parking right next to Montague Light Rail station.",
    "complaints": "Older construction vintage than Anton Aspire or Turing next door; older HVAC units draw more electricity in summer.",
    "website": "https://www.milpitascrossing.com",
    "highlightTag": "Budget 1BR Under $2,800",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=The+Crossing+at+Montague%2C+755+E+Capitol+Ave%2C+Milpitas%2C+CA+95035",
    "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&origin=755+E+Capitol+Ave%2C+Milpitas%2C+CA+95035&destination=3625+Cisco+Way%2C+San+Jose%2C+CA+95134&travelmode=driving",
    "listingUrl": "https://www.apartments.com/search/?query=The%20Crossing%20at%20Montague%20Milpitas",
    "zillowUrl": "https://www.zillow.com/homes/755%20E%20Capitol%20Ave%2C%20Milpitas%2C%20CA%2095035_rb/",
    "userStatus": "considering",
    "userNotes": ""
  },
  {
    "id": "amalfi-milpitas",
    "name": "Amalfi Apartments",
    "subarea": "Milpitas (Merry Loop / Great Mall)",
    "region": "Milpitas Corridor",
    "address": "1251 Merry Loop, Milpitas, CA 95035",
    "city": "Milpitas",
    "zip": "95035",
    "lat": 37.414,
    "lng": -121.903,
    "distanceMiles": 2.5,
    "driveMins": 7,
    "transitMode": "7 min drive / 2 stops on VTA Orange Line",
    "studioMin": null,
    "studioMax": null,
    "studioSqFt": "N/A",
    "oneBedMin": 2980,
    "oneBedMax": 3250,
    "oneBedSqFt": "583–708",
    "bestStartingRent": 2980,
    "recommendedUnit": "1BR ($2,980, 583–708 sq ft)",
    "parkingFee": 0,
    "parkingNote": "1 assigned gated garage space included",
    "utilityProvider": "PG&E (~$0.44/kWh)",
    "estUtilitiesAndFees": 160,
    "trueMonthlyMin": 3140,
    "trueMonthly1BR": 3140,
    "inUnitLaundry": true,
    "centralAC": true,
    "poolAndGym": true,
    "meetsAllCriteria": true,
    "under3000Option": true,
    "tier": "Strong Contender",
    "management": "Legacy Partners",
    "legitimacy": "Verified Regional Operator (Legacy Partners)",
    "rating": 3.5,
    "reviewSource": "Google (3.5, 160+ reviews)",
    "amenitiesHighlight": "Large resort pool & spa, on-site tennis court, fitness center, quiet residential loop",
    "praise": "Low sewer/trash pass-through fees (~$55/mo), included garage parking, quiet loop with a full tennis court.",
    "complaints": "Limited visitor parking outside gates; entry 1BR (583 sq ft) is on the cozy side.",
    "website": "https://www.amalfimilpitas.com",
    "highlightTag": "Quiet Loop + Tennis Court",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Amalfi+Apartments%2C+1251+Merry+Loop%2C+Milpitas%2C+CA+95035",
    "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&origin=1251+Merry+Loop%2C+Milpitas%2C+CA+95035&destination=3625+Cisco+Way%2C+San+Jose%2C+CA+95134&travelmode=driving",
    "listingUrl": "https://www.apartments.com/search/?query=Amalfi%20Apartments%20Milpitas",
    "zillowUrl": "https://www.zillow.com/homes/1251%20Merry%20Loop%2C%20Milpitas%2C%20CA%2095035_rb/",
    "userStatus": "considering",
    "userNotes": ""
  },
  {
    "id": "turing-the-fields",
    "name": "Turing at The Fields",
    "subarea": "Milpitas (McCandless / Trader Joe's)",
    "region": "Milpitas Corridor",
    "address": "1355 McCandless Dr, Milpitas, CA 95035",
    "city": "Milpitas",
    "zip": "95035",
    "lat": 37.4085,
    "lng": -121.8988,
    "distanceMiles": 1.8,
    "driveMins": 6,
    "transitMode": "6 min drive / 2 stops on VTA Orange Line",
    "studioMin": 2980,
    "studioMax": 3150,
    "studioSqFt": "563",
    "oneBedMin": 3300,
    "oneBedMax": 3600,
    "oneBedSqFt": "702–783",
    "bestStartingRent": 2980,
    "recommendedUnit": "Studio ($2,980, 563 sq ft) or 1BR ($3,300)",
    "parkingFee": 75,
    "parkingNote": "Structured garage (included on select promos or ~$75–$100/mo)",
    "utilityProvider": "PG&E (~$0.44/kWh)",
    "estUtilitiesAndFees": 235,
    "trueMonthlyMin": 3290,
    "trueMonthly1BR": 3610,
    "inUnitLaundry": true,
    "centralAC": true,
    "poolAndGym": true,
    "meetsAllCriteria": true,
    "under3000Option": true,
    "tier": "Strong Contender",
    "management": "Lyon Living",
    "legitimacy": "Verified Luxury Mixed-Use (Lyon Living)",
    "rating": 3.4,
    "reviewSource": "Google / Apartments.com (3.2–3.5)",
    "amenitiesHighlight": "Trader Joe's, Starbucks & Orangetheory downstairs! Tri-level gym, rooftop pool & cabanas",
    "praise": "Elevator straight down to Trader Joe's and Starbucks; 3-story fitness club is one of the best in the South Bay; only 1.8 miles to Cisco.",
    "complaints": "High common-area utility allocations (~$140+/mo); steep renewal increases.",
    "website": "https://www.livethefields.com/turing",
    "highlightTag": "Trader Joe's Downstairs + 3-Story Gym",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Turing+at+The+Fields%2C+1355+McCandless+Dr%2C+Milpitas%2C+CA+95035",
    "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&origin=1355+McCandless+Dr%2C+Milpitas%2C+CA+95035&destination=3625+Cisco+Way%2C+San+Jose%2C+CA+95134&travelmode=driving",
    "listingUrl": "https://www.apartments.com/search/?query=Turing%20at%20The%20Fields%20Milpitas",
    "zillowUrl": "https://www.zillow.com/homes/1355%20McCandless%20Dr%2C%20Milpitas%2C%20CA%2095035_rb/",
    "userStatus": "considering",
    "userNotes": ""
  },
  {
    "id": "sixth-and-jackson",
    "name": "Sixth and Jackson",
    "subarea": "Japantown (6th & Jackson)",
    "region": "Japantown & Downtown",
    "address": "620 N 6th St, San Jose, CA 95112",
    "city": "San Jose",
    "zip": "95112",
    "lat": 37.3512,
    "lng": -121.8906,
    "distanceMiles": 5.4,
    "driveMins": 12,
    "transitMode": "12 min reverse drive / VTA Blue-to-Orange Line",
    "studioMin": 2750,
    "studioMax": 2950,
    "studioSqFt": "450–650",
    "oneBedMin": 3150,
    "oneBedMax": 3350,
    "oneBedSqFt": "650–810",
    "bestStartingRent": 2750,
    "recommendedUnit": "Studio ($2,750) or 1BR ($3,150)",
    "parkingFee": 125,
    "parkingNote": "Gated garage (~$100–$150/mo for 1st car; EV stalls)",
    "utilityProvider": "PG&E (~$0.44/kWh)",
    "estUtilitiesAndFees": 210,
    "trueMonthlyMin": 3085,
    "trueMonthly1BR": 3485,
    "inUnitLaundry": true,
    "centralAC": true,
    "poolAndGym": true,
    "meetsAllCriteria": true,
    "under3000Option": true,
    "tier": "Top Pick",
    "management": "Shea Properties",
    "legitimacy": "Verified Top-1% ORA National Award Winner (Shea)",
    "rating": 4.8,
    "reviewSource": "Google (4.8★, 80+ reviews) / RentCafe (4.5)",
    "amenitiesHighlight": "Resort pool & cabanas, outdoor movie wall, 24-hr gym & spin studio, panoramic hill-view skydecks in walkable Japantown",
    "praise": "Highest-rated apartment in San Jose (4.8★); brand-new luxury right in walkable, safe Japantown (sushi, bakeries, farmers market); 12-min reverse commute up N. 1st or 880 to Cisco.",
    "complaints": "Parking is unbundled (~$125/mo); strict 1-car policy on smaller units.",
    "website": "https://sheaproperties.com/apartments/northern-california/sixth-jackson-apartments/",
    "highlightTag": "4.8★ Highest Rated + Walkable Japantown",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Sixth+and+Jackson%2C+620+N+6th+St%2C+San+Jose%2C+CA+95112",
    "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&origin=620+N+6th+St%2C+San+Jose%2C+CA+95112&destination=3625+Cisco+Way%2C+San+Jose%2C+CA+95134&travelmode=driving",
    "listingUrl": "https://www.apartments.com/search/?query=Sixth%20and%20Jackson%20San%20Jose",
    "zillowUrl": "https://www.zillow.com/homes/620%20N%206th%20St%2C%20San%20Jose%2C%20CA%2095112_rb/",
    "userStatus": "shortlist",
    "userNotes": ""
  },
  {
    "id": "the-esplanade",
    "name": "The Esplanade Apartment Homes",
    "subarea": "Japantown (Historic Cannery)",
    "region": "Japantown & Downtown",
    "address": "350 E Taylor St, San Jose, CA 95112",
    "city": "San Jose",
    "zip": "95112",
    "lat": 37.3524,
    "lng": -121.8887,
    "distanceMiles": 5.3,
    "driveMins": 12,
    "transitMode": "12 min drive / 6 min walk to Japantown/Ayer VTA",
    "studioMin": 2550,
    "studioMax": 2800,
    "studioSqFt": "550–700",
    "oneBedMin": 2750,
    "oneBedMax": 3150,
    "oneBedSqFt": "700–850",
    "bestStartingRent": 2550,
    "recommendedUnit": "1BR ($2,750) or Cannery Loft Studio ($2,550)",
    "parkingFee": 75,
    "parkingNote": "Gated garage (often bundled or ~$75–$100/mo)",
    "utilityProvider": "PG&E (~$0.44/kWh)",
    "estUtilitiesAndFees": 200,
    "trueMonthlyMin": 2825,
    "trueMonthly1BR": 3025,
    "inUnitLaundry": true,
    "centralAC": true,
    "poolAndGym": true,
    "meetsAllCriteria": true,
    "under3000Option": true,
    "tier": "Top Pick",
    "management": "Essex Property Trust",
    "legitimacy": "Verified S&P 500 REIT (Essex)",
    "rating": 3.9,
    "reviewSource": "Google (3.9, 100+ reviews)",
    "amenitiesHighlight": "Historic cannery architecture, high-ceiling lofts, swimming pool & spa, gym, BBQ courtyards",
    "praise": "Converted cannery lofts with high ceilings and character; walkable to Japantown; both Studios ($2,550) and 1BRs ($2,750) easily beat the $3,000 goal.",
    "complaints": "Avoid units facing the eastern Union Pacific rail tracks (train horn noise at night); pick an interior courtyard unit.",
    "website": "https://www.essexapartmenthomes.com/apartments/san-jose/the-esplanade",
    "highlightTag": "Sub-$2,800 Japantown Lofts",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=The+Esplanade+Apartment+Homes%2C+350+E+Taylor+St%2C+San+Jose%2C+CA+95112",
    "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&origin=350+E+Taylor+St%2C+San+Jose%2C+CA+95112&destination=3625+Cisco+Way%2C+San+Jose%2C+CA+95134&travelmode=driving",
    "listingUrl": "https://www.apartments.com/search/?query=The%20Esplanade%20Apartment%20Homes%20San%20Jose",
    "zillowUrl": "https://www.zillow.com/homes/350%20E%20Taylor%20St%2C%20San%20Jose%2C%20CA%2095112_rb/",
    "userStatus": "shortlist",
    "userNotes": ""
  },
  {
    "id": "the-julian",
    "name": "The Julian",
    "subarea": "Downtown Fringe / North San Pedro",
    "region": "Japantown & Downtown",
    "address": "171 W Julian St, San Jose, CA 95110",
    "city": "San Jose",
    "zip": "95110",
    "lat": 37.3385,
    "lng": -121.8982,
    "distanceMiles": 6.4,
    "driveMins": 14,
    "transitMode": "14 min reverse commute via Hwy 87 N -> 101 N",
    "studioMin": 2780,
    "studioMax": 2920,
    "studioSqFt": "497–552",
    "oneBedMin": 3180,
    "oneBedMax": 3400,
    "oneBedSqFt": "550–777",
    "bestStartingRent": 2780,
    "recommendedUnit": "Studio ($2,780) or 1BR ($3,180)",
    "parkingFee": 135,
    "parkingNote": "Gated underground garage (~$125–$150/mo) + EV",
    "utilityProvider": "PG&E (~$0.44/kWh)",
    "estUtilitiesAndFees": 210,
    "trueMonthlyMin": 3125,
    "trueMonthly1BR": 3525,
    "inUnitLaundry": true,
    "centralAC": true,
    "poolAndGym": true,
    "meetsAllCriteria": true,
    "under3000Option": true,
    "tier": "Strong Contender",
    "management": "Cushman & Wakefield / Pinnacle",
    "legitimacy": "Verified 2021 Mid-Rise (Cushman & Wakefield)",
    "rating": 3.8,
    "reviewSource": "Google (3.8)",
    "amenitiesHighlight": "Courtyard pool & spa, indoor/outdoor gym, rooftop bar & Pac-Man arcade lounge, coworking rooms",
    "praise": "Fun social building for recent SJSU grads; 5-minute walk to San Pedro Square Market bars/dining without being directly above loud nightclubs; instant Hwy 87 on-ramp access.",
    "complaints": "Unbundled downtown garage fee (~$135/mo); occasional elevator maintenance waits.",
    "website": "https://livethejulian.com/",
    "highlightTag": "Best Social Vibe Near San Pedro Sq",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=The+Julian%2C+171+W+Julian+St%2C+San+Jose%2C+CA+95110",
    "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&origin=171+W+Julian+St%2C+San+Jose%2C+CA+95110&destination=3625+Cisco+Way%2C+San+Jose%2C+CA+95134&travelmode=driving",
    "listingUrl": "https://www.apartments.com/search/?query=The%20Julian%20San%20Jose",
    "zillowUrl": "https://www.zillow.com/homes/171%20W%20Julian%20St%2C%20San%20Jose%2C%20CA%2095110_rb/",
    "userStatus": "considering",
    "userNotes": ""
  },
  {
    "id": "one-south-market",
    "name": "One South Market",
    "subarea": "Downtown San Jose (San Pedro Square)",
    "region": "Japantown & Downtown",
    "address": "1 S Market St, San Jose, CA 95113",
    "city": "San Jose",
    "zip": "95113",
    "lat": 37.3347,
    "lng": -121.8913,
    "distanceMiles": 6.7,
    "driveMins": 15,
    "transitMode": "15 min drive via Hwy 87 N / 1 block to VTA Blue Line",
    "studioMin": 2800,
    "studioMax": 2980,
    "studioSqFt": "510–603",
    "oneBedMin": 3050,
    "oneBedMax": 3350,
    "oneBedSqFt": "752–885",
    "bestStartingRent": 2800,
    "recommendedUnit": "Jr 1BR/Studio ($2,800) or High-Rise 1BR ($3,050)",
    "parkingFee": 150,
    "parkingNote": "Structured garage (~$150/mo)",
    "utilityProvider": "PG&E (~$0.44/kWh)",
    "estUtilitiesAndFees": 220,
    "trueMonthlyMin": 3170,
    "trueMonthly1BR": 3420,
    "inUnitLaundry": true,
    "centralAC": true,
    "poolAndGym": true,
    "meetsAllCriteria": true,
    "under3000Option": true,
    "tier": "Strong Contender",
    "management": "Essex Property Trust",
    "legitimacy": "Verified 23-Story High-Rise (Essex)",
    "rating": 3.6,
    "reviewSource": "RentCafe (4.0) / Google (3.3)",
    "amenitiesHighlight": "3rd-floor heated terrace pool & cabanas, full gym, rooftop skyline lounge, floor-to-ceiling high-rise windows",
    "praise": "True high-rise living with floor-to-ceiling glass views, spacious 752–885 sq ft 1BRs starting near $3,050, steps from San Pedro Square.",
    "complaints": "Weekend street/nightlife noise on lower floors; $150/mo parking fee.",
    "website": "https://www.essexapartmenthomes.com/apartments/san-jose/one-south-market",
    "highlightTag": "High-Rise Views Under $3,100",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=One+South+Market%2C+1+S+Market+St%2C+San+Jose%2C+CA+95113",
    "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&origin=1+S+Market+St%2C+San+Jose%2C+CA+95113&destination=3625+Cisco+Way%2C+San+Jose%2C+CA+95134&travelmode=driving",
    "listingUrl": "https://www.apartments.com/search/?query=One%20South%20Market%20San%20Jose",
    "zillowUrl": "https://www.zillow.com/homes/1%20S%20Market%20St%2C%20San%20Jose%2C%20CA%2095113_rb/",
    "userStatus": "considering",
    "userNotes": ""
  },
  {
    "id": "marquis",
    "name": "Marquis Apartments",
    "subarea": "Japantown / North 10th",
    "region": "Japantown & Downtown",
    "address": "817 N 10th St, San Jose, CA 95112",
    "city": "San Jose",
    "zip": "95112",
    "lat": 37.3562,
    "lng": -121.8893,
    "distanceMiles": 5.1,
    "driveMins": 11,
    "transitMode": "11 min drive via I-880 N / N. 1st St",
    "studioMin": 2650,
    "studioMax": 2850,
    "studioSqFt": "530–554",
    "oneBedMin": 2900,
    "oneBedMax": 3150,
    "oneBedSqFt": "710–733",
    "bestStartingRent": 2650,
    "recommendedUnit": "Studio ($2,650) or 1BR ($2,900)",
    "parkingFee": 110,
    "parkingNote": "Gated garage (~$100–$125/mo)",
    "utilityProvider": "PG&E (~$0.44/kWh)",
    "estUtilitiesAndFees": 210,
    "trueMonthlyMin": 2970,
    "trueMonthly1BR": 3220,
    "inUnitLaundry": true,
    "centralAC": true,
    "poolAndGym": true,
    "meetsAllCriteria": true,
    "under3000Option": true,
    "tier": "Strong Contender",
    "management": "Essex Property Trust",
    "legitimacy": "Verified S&P 500 REIT (Essex)",
    "rating": 3.2,
    "reviewSource": "ApartmentRatings (3.3) / Google (3.1)",
    "amenitiesHighlight": "Outdoor pool & spa, 24-hr gym, rooftop fire pit terrace, bike kitchen",
    "praise": "Quieter residential Japantown pocket; both Studios ($2,650) and 1BRs ($2,900) start under $3,000.",
    "complaints": "Wood-frame construction can transmit footsteps from upstairs neighbors (choose a top-floor unit).",
    "website": "https://www.essexapartmenthomes.com/apartments/san-jose/marquis",
    "highlightTag": "Sub-$2,900 1BR in Japantown",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Marquis+Apartments%2C+817+N+10th+St%2C+San+Jose%2C+CA+95112",
    "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&origin=817+N+10th+St%2C+San+Jose%2C+CA+95112&destination=3625+Cisco+Way%2C+San+Jose%2C+CA+95134&travelmode=driving",
    "listingUrl": "https://www.apartments.com/search/?query=Marquis%20Apartments%20San%20Jose",
    "zillowUrl": "https://www.zillow.com/homes/817%20N%2010th%20St%2C%20San%20Jose%2C%20CA%2095112_rb/",
    "userStatus": "considering",
    "userNotes": ""
  },
  {
    "id": "patina-midtown",
    "name": "Patina at Midtown",
    "subarea": "Midtown (Del Monte Park / Sunol)",
    "region": "Midtown & West SJ",
    "address": "355 Sunol St, San Jose, CA 95126",
    "city": "San Jose",
    "zip": "95126",
    "lat": 37.3245,
    "lng": -121.9056,
    "distanceMiles": 10.2,
    "driveMins": 18,
    "transitMode": "18 min drive via I-880 N or Hwy 87 N",
    "studioMin": 2850,
    "studioMax": 3050,
    "studioSqFt": "540–672",
    "oneBedMin": 2995,
    "oneBedMax": 3350,
    "oneBedSqFt": "672–850",
    "bestStartingRent": 2850,
    "recommendedUnit": "Studio ($2,850) or 1BR ($2,995)",
    "parkingFee": 75,
    "parkingNote": "Assigned garage space (~$75/mo single, ~$150 tandem)",
    "utilityProvider": "PG&E (~$0.44/kWh)",
    "estUtilitiesAndFees": 215,
    "trueMonthlyMin": 3140,
    "trueMonthly1BR": 3285,
    "inUnitLaundry": true,
    "centralAC": true,
    "poolAndGym": true,
    "meetsAllCriteria": true,
    "under3000Option": true,
    "tier": "Top Pick",
    "management": "Essex Property Trust",
    "legitimacy": "Verified S&P 500 REIT (Essex)",
    "rating": 4.0,
    "reviewSource": "Google / Apartments.com (4.0)",
    "amenitiesHighlight": "Two-story fitness studio, heated pool & hot tub, rooftop skydeck with mountain views, borders Del Monte Park",
    "praise": "Sits directly next to green Del Monte Park; walkable to Midtown Safeway; hits the <=$3,000 target for both Studios ($2,850) and entry 1BRs ($2,995) with reasonable $75 parking.",
    "complaints": "Limited street guest parking; RUBS utility billing adds ~$140–$150/mo.",
    "website": "https://www.essexapartmenthomes.com/apartments/san-jose/patina-at-midtown",
    "highlightTag": "Best Midtown Value Under $3,000",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Patina+at+Midtown%2C+355+Sunol+St%2C+San+Jose%2C+CA+95126",
    "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&origin=355+Sunol+St%2C+San+Jose%2C+CA+95126&destination=3625+Cisco+Way%2C+San+Jose%2C+CA+95134&travelmode=driving",
    "listingUrl": "https://www.apartments.com/search/?query=Patina%20at%20Midtown%20San%20Jose",
    "zillowUrl": "https://www.zillow.com/homes/355%20Sunol%20St%2C%20San%20Jose%2C%20CA%2095126_rb/",
    "userStatus": "shortlist",
    "userNotes": ""
  },
  {
    "id": "avalon-the-alameda",
    "name": "Avalon on The Alameda",
    "subarea": "Garden Alameda (Whole Foods / Rose Garden)",
    "region": "Midtown & West SJ",
    "address": "1300 The Alameda, San Jose, CA 95126",
    "city": "San Jose",
    "zip": "95126",
    "lat": 37.3346,
    "lng": -121.9142,
    "distanceMiles": 9.5,
    "driveMins": 16,
    "transitMode": "16 min drive via I-880 N / Walk to Diridon Caltrain",
    "studioMin": null,
    "studioMax": null,
    "studioSqFt": "N/A",
    "oneBedMin": 3098,
    "oneBedMax": 3350,
    "oneBedSqFt": "735–804",
    "bestStartingRent": 3098,
    "recommendedUnit": "1BR ($3,098, 735–804 sq ft)",
    "parkingFee": 0,
    "parkingNote": "Gated underground garage (1 space typically included or ~$75/mo)",
    "utilityProvider": "PG&E (~$0.44/kWh)",
    "estUtilitiesAndFees": 210,
    "trueMonthlyMin": 3308,
    "trueMonthly1BR": 3308,
    "inUnitLaundry": true,
    "centralAC": true,
    "poolAndGym": true,
    "meetsAllCriteria": true,
    "under3000Option": false,
    "tier": "Top Pick",
    "management": "AvalonBay Communities",
    "legitimacy": "Verified S&P 500 REIT (AvalonBay)",
    "rating": 4.1,
    "reviewSource": "Apartments.com / Google (4.1)",
    "amenitiesHighlight": "Resort pool, spa, fitness center + dry sauna, ground-floor Starbucks, 2 blocks from Whole Foods",
    "praise": "4.1★ rating in historic tree-lined Garden Alameda; Starbucks downstairs and Whole Foods/Crema Coffee a 5-min walk away; responsive AvalonBay maintenance.",
    "complaints": "Request an interior courtyard-facing unit rather than one facing The Alameda bus corridor.",
    "website": "https://www.avaloncommunities.com/california/san-jose-apartments/avalon-on-the-alameda/",
    "highlightTag": "4.1★ Walkable Whole Foods / Alameda Lifestyle",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Avalon+on+The+Alameda%2C+1300+The+Alameda%2C+San+Jose%2C+CA+95126",
    "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&origin=1300+The+Alameda%2C+San+Jose%2C+CA+95126&destination=3625+Cisco+Way%2C+San+Jose%2C+CA+95134&travelmode=driving",
    "listingUrl": "https://www.apartments.com/search/?query=Avalon%20on%20The%20Alameda%20San%20Jose",
    "zillowUrl": "https://www.zillow.com/homes/1300%20The%20Alameda%2C%20San%20Jose%2C%20CA%2095126_rb/",
    "userStatus": "shortlist",
    "userNotes": ""
  },
  {
    "id": "lynhaven",
    "name": "Lynhaven Apartments (Santana Row Strip)",
    "subarea": "West San Jose / Santana Row Border",
    "region": "Midtown & West SJ",
    "address": "919 S Winchester Blvd, San Jose, CA 95128",
    "city": "San Jose",
    "zip": "95128",
    "lat": 37.3168,
    "lng": -121.9515,
    "distanceMiles": 11.2,
    "driveMins": 19,
    "transitMode": "19 min drive via I-880 N or San Tomas Expy",
    "studioMin": null,
    "studioMax": null,
    "studioSqFt": "N/A",
    "oneBedMin": 3150,
    "oneBedMax": 3650,
    "oneBedSqFt": "687–854",
    "bestStartingRent": 3150,
    "recommendedUnit": "1BR ($3,150, 687 sq ft)",
    "parkingFee": 110,
    "parkingNote": "Multi-level resident garage (~$100–$125/mo)",
    "utilityProvider": "PG&E (~$0.44/kWh)",
    "estUtilitiesAndFees": 225,
    "trueMonthlyMin": 3485,
    "trueMonthly1BR": 3485,
    "inUnitLaundry": true,
    "centralAC": true,
    "poolAndGym": true,
    "meetsAllCriteria": true,
    "under3000Option": false,
    "tier": "Strong Contender",
    "management": "Greystar",
    "legitimacy": "Verified New Redevelopment of Reserve Site (Greystar)",
    "rating": 4.1,
    "reviewSource": "RentCafe / Apartments.com (4.1)",
    "amenitiesHighlight": "Pool & sundeck, dual rooftop terraces, 24-hr gym & yoga studio, GE gas ranges, 3 mins from Santana Row",
    "praise": "Brand-new redevelopment right down the block from Santana Row & Valley Fair for ~$1,000/mo less than leasing on Santana Row itself; real gas ranges.",
    "complaints": "Winchester Blvd traffic around holiday shopping seasons; unbundled garage parking (~$110/mo).",
    "website": "https://www.livelynhaven.com/",
    "highlightTag": "Santana Row Lifestyle for $1,000/mo Less",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Lynhaven+Apartments+%28Santana+Row+Strip%29%2C+919+S+Winchester+Blvd%2C+San+Jose%2C+CA+95128",
    "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&origin=919+S+Winchester+Blvd%2C+San+Jose%2C+CA+95128&destination=3625+Cisco+Way%2C+San+Jose%2C+CA+95134&travelmode=driving",
    "listingUrl": "https://www.apartments.com/search/?query=Lynhaven%20Apartments%20%28Santana%20Row%20Strip%29%20San%20Jose",
    "zillowUrl": "https://www.zillow.com/homes/919%20S%20Winchester%20Blvd%2C%20San%20Jose%2C%20CA%2095128_rb/",
    "userStatus": "considering",
    "userNotes": ""
  },
  {
    "id": "vespaio",
    "name": "Vespaio",
    "subarea": "The Alameda / Diridon Station",
    "region": "Midtown & West SJ",
    "address": "130 Stockton Ave, San Jose, CA 95126",
    "city": "San Jose",
    "zip": "95126",
    "lat": 37.334,
    "lng": -121.9037,
    "distanceMiles": 9.8,
    "driveMins": 17,
    "transitMode": "17 min drive via I-880 N / 5 min walk to Diridon",
    "studioMin": 2985,
    "studioMax": 3188,
    "studioSqFt": "530",
    "oneBedMin": 3290,
    "oneBedMax": 3650,
    "oneBedSqFt": "835",
    "bestStartingRent": 2985,
    "recommendedUnit": "Studio ($2,985) or Large 1BR ($3,290, 835 sq ft)",
    "parkingFee": 135,
    "parkingNote": "Gated subterranean garage (~$125–$150/mo) + EV",
    "utilityProvider": "PG&E (~$0.44/kWh)",
    "estUtilitiesAndFees": 215,
    "trueMonthlyMin": 3335,
    "trueMonthly1BR": 3640,
    "inUnitLaundry": true,
    "centralAC": true,
    "poolAndGym": true,
    "meetsAllCriteria": true,
    "under3000Option": true,
    "tier": "Strong Contender",
    "management": "Mill Creek Residential",
    "legitimacy": "Verified National Developer (Mill Creek)",
    "rating": 3.9,
    "reviewSource": "Google / Yelp (3.9)",
    "amenitiesHighlight": "Rooftop swimming pool with skyline views, cabanas, 24-hr gym, coworking pods, 1 block from Whole Foods",
    "praise": "Steps from Whole Foods, SAP Center, and Diridon Station; upscale quartz countertops and rooftop pool.",
    "complaints": "SAP Center concert/hockey nights create 1-hour traffic surges on Stockton Ave.",
    "website": "https://www.vespaio.com/",
    "highlightTag": "Rooftop Pool + Next to Whole Foods",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Vespaio%2C+130+Stockton+Ave%2C+San+Jose%2C+CA+95126",
    "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&origin=130+Stockton+Ave%2C+San+Jose%2C+CA+95126&destination=3625+Cisco+Way%2C+San+Jose%2C+CA+95134&travelmode=driving",
    "listingUrl": "https://www.apartments.com/search/?query=Vespaio%20San%20Jose",
    "zillowUrl": "https://www.zillow.com/homes/130%20Stockton%20Ave%2C%20San%20Jose%2C%20CA%2095126_rb/",
    "userStatus": "considering",
    "userNotes": ""
  }
];

const STORAGE_KEY_DATA = "sj_residence_data_v2";
const STORAGE_KEY_PREFS = "sj_residence_prefs_v2";

const state = {
  apartments: [],
  filtered: [],
  theme: "light",
  pricingMode: "base", // "base" | "true"
  preset: "all",
  search: "",
  region: "ALL",
  maxBudget: 3500,
  unitType: "ANY",
  sortBy: "priority-score",
  strictCriteria: true,
  svpOnly: false,
  freeParkingOnly: false,
  weights: {
    budget: 9,
    commute: 8,
    rating: 8,
    utility: 7,
    space: 6
  },
  favorites: new Set(["north-park", "crescent-village", "estancia-santa-clara", "anton-aspire", "sixth-and-jackson"]),
  selectedId: "north-park",
  compareIds: new Set(),
  is3DPitched: true,
  showArcs: true
};

let map = null;
let domMarkers = [];

function announce(msg) {
  const el = document.getElementById("a11y-announcer");
  if (el) {
    el.textContent = "";
    setTimeout(() => { el.textContent = msg; }, 30);
  }
}

function showSavedNotice(label = "All changes saved") {
  const el = document.getElementById("save-status-text");
  const badge = document.getElementById("sheet-sync-badge");
  const timeStr = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  if (el) el.textContent = `${label} (${timeStr})`;
  if (badge) badge.textContent = `Saved locally at ${timeStr}`;
}

function formatMoney(val) {
  if (val === null || val === undefined || val === "" || isNaN(Number(val))) return "N/A";
  return "$" + Number(val).toLocaleString("en-US");
}

function escapeHtml(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildLinksForApt(apt) {
  const qLoc = encodeURIComponent(`${apt.name}, ${apt.address}`);
  const qOrigin = encodeURIComponent(apt.address);
  const qDest = encodeURIComponent(CISCO_HQ.address);
  const qList = encodeURIComponent(`${apt.name} ${apt.city || "San Jose"} CA`);

  if (!apt.googleMapsUrl) {
    apt.googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${qLoc}`;
  }
  if (!apt.googleDirectionsUrl) {
    apt.googleDirectionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${qOrigin}&destination=${qDest}&travelmode=driving`;
  }
  if (!apt.listingUrl) {
    apt.listingUrl = `https://www.apartments.com/search/?query=${qList}`;
  }
  return apt;
}

// --- Load & Save State ---
function loadPersistedState() {
  try {
    const rawPrefs = localStorage.getItem(STORAGE_KEY_PREFS);
    if (rawPrefs) {
      const p = JSON.parse(rawPrefs);
      if (p.theme) state.theme = p.theme;
      if (p.pricingMode) state.pricingMode = p.pricingMode;
      if (p.weights) state.weights = { ...state.weights, ...p.weights };
      if (Array.isArray(p.favorites)) state.favorites = new Set(p.favorites);
    }
  } catch (e) {
    console.warn("Prefs load note:", e);
  }

  try {
    const rawData = localStorage.getItem(STORAGE_KEY_DATA);
    if (rawData) {
      const parsed = JSON.parse(rawData);
      if (Array.isArray(parsed) && parsed.length > 0) {
        state.apartments = parsed.map(buildLinksForApt);
        showSavedNotice(`Loaded ${state.apartments.length} saved listings`);
        return;
      }
    }
  } catch (e) {
    console.warn("Data load note:", e);
  }

  state.apartments = JSON.parse(JSON.stringify(DEFAULT_APARTMENTS)).map(buildLinksForApt);
}

function saveAllToStorage(reason = "Saved") {
  try {
    localStorage.setItem(STORAGE_KEY_DATA, JSON.stringify(state.apartments));
    localStorage.setItem(STORAGE_KEY_PREFS, JSON.stringify({
      theme: state.theme,
      pricingMode: state.pricingMode,
      weights: state.weights,
      favorites: Array.from(state.favorites)
    }));
    showSavedNotice(reason);
  } catch (e) {
    console.warn("Storage write error:", e);
  }
}

// --- Personal Priority Match Score Calculator (0 - 100%) ---
function computePriorityScore(apt) {
  const w = state.weights;
  const totalWeight = (w.budget + w.commute + w.rating + w.utility + w.space) || 1;

  // 1. Budget score (100 at <=$2,450, 85 at $2,950, 60 at $3,350, 20 at $3,800+)
  const price = state.pricingMode === "true" ? (apt.trueMonthlyMin || 3400) : (apt.bestStartingRent || 3200);
  const budgetScore = Math.max(0, Math.min(100, ((3900 - price) / (3900 - 2350)) * 100));

  // 2. Commute score (100 at <=0.8 mi / 3 min, 85 at 6 min, 65 at 12 min, 40 at 20 min)
  const commuteScore = Math.max(10, Math.min(100, 105 - (apt.driveMins || 10) * 3.4));

  // 3. Rating score (100 at 4.8★, 75 at 3.9★, 30 at 2.5★)
  const ratingScore = Math.max(10, Math.min(100, (((apt.rating || 3.5) - 2.0) / 2.8) * 100));

  // 4. Utility & Parking efficiency (SVP power + $0 parking = 100)
  const isSVP = String(apt.utilityProvider).includes("Silicon Valley Power") || String(apt.utilityProvider).includes("FREE");
  const freePark = Number(apt.parkingFee) === 0;
  let utilityScore = 50;
  if (isSVP) utilityScore += 30;
  if (freePark) utilityScore += 20;

  // 5. Space score (extract max sq ft from 1BR or Studio)
  const sqNums = String(apt.oneBedSqFt !== "N/A" ? apt.oneBedSqFt : apt.studioSqFt).match(/\d+/g);
  const maxSq = sqNums ? Math.max(...sqNums.map(Number)) : 650;
  const spaceScore = Math.max(25, Math.min(100, ((maxSq - 330) / (900 - 330)) * 100));

  let weighted = (
    budgetScore * w.budget +
    commuteScore * w.commute +
    ratingScore * w.rating +
    utilityScore * w.utility +
    spaceScore * w.space
  ) / totalWeight;

  // Penalty if missing Central A/C or Pool or over budget
  if (!apt.meetsAllCriteria) weighted = Math.min(weighted, 48);

  return Math.round(weighted);
}

// --- Filter & Sort Pipeline ---
function runFilterAndRender() {
  const q = state.search.trim().toLowerCase();

  state.apartments.forEach((apt) => {
    apt.matchScore = computePriorityScore(apt);
  });

  state.filtered = state.apartments.filter((apt) => {
    // Quick Presets
    if (state.preset === "under3000" && !apt.under3000Option) return false;
    if (state.preset === "favorites" && !state.favorites.has(apt.id)) return false;
    if (state.preset === "walk-to-cisco" && apt.distanceMiles > 1.35) return false;
    if (state.preset === "svp-power" && !String(apt.utilityProvider).includes("Silicon Valley Power")) return false;
    if (state.preset === "free-parking" && Number(apt.parkingFee) > 0) return false;
    if (state.preset === "warnings" && apt.meetsAllCriteria) return false;

    // Checkboxes
    if (state.strictCriteria && state.preset !== "warnings" && !apt.meetsAllCriteria) return false;
    if (state.svpOnly && !String(apt.utilityProvider).includes("Silicon Valley Power")) return false;
    if (state.freeParkingOnly && Number(apt.parkingFee) > 0) return false;

    // Dropdowns
    if (state.region !== "ALL" && apt.region !== state.region) return false;

    const evaluatedPrice = state.pricingMode === "true" ? apt.trueMonthlyMin : apt.bestStartingRent;
    if (state.maxBudget < 9000 && evaluatedPrice > state.maxBudget) return false;

    if (state.unitType === "STUDIO" && !apt.studioMin) return false;
    if (state.unitType === "1BR_UNDER_3K" && (!apt.oneBedMin || apt.oneBedMin > 3000)) return false;
    if (state.unitType === "1BR_UNDER_3500" && (!apt.oneBedMin || apt.oneBedMin > 3500)) return false;

    if (q) {
      const hay = [
        apt.name, apt.subarea, apt.region, apt.address,
        apt.highlightTag, apt.amenitiesHighlight, apt.praise,
        apt.complaints, apt.management, apt.utilityProvider,
        apt.transitMode, apt.userNotes
      ].join(" ").toLowerCase();
      if (!hay.includes(q)) return false;
    }

    return true;
  });

  state.filtered.sort((a, b) => {
    if (state.sortBy === "rent-asc") return (a.bestStartingRent || 9999) - (b.bestStartingRent || 9999);
    if (state.sortBy === "true-asc") return (a.trueMonthlyMin || 9999) - (b.trueMonthlyMin || 9999);
    if (state.sortBy === "commute-asc") return (a.distanceMiles || 99) - (b.distanceMiles || 99);
    if (state.sortBy === "rating-desc") return (b.rating || 0) - (a.rating || 0);
    return (b.matchScore || 0) - (a.matchScore || 0);
  });

  const counterEl = document.getElementById("results-counter");
  const shownEl = document.getElementById("shown-count-label");
  if (counterEl) counterEl.textContent = String(state.filtered.length);
  if (shownEl) shownEl.textContent = `(${state.filtered.length} shown)`;

  renderCards();
  renderSpreadsheet();
  updateMapMarkersAndArcs();

  const currentSelected = state.filtered.find((a) => a.id === state.selectedId) || state.filtered[0] || state.apartments[0];
  if (currentSelected) {
    state.selectedId = currentSelected.id;
    renderMapInspector(currentSelected);
  }
}

// --- Render Residence Cards (with Google Maps, Directions, Listing & Site Links) ---
function renderCards() {
  const container = document.getElementById("cards-container");
  if (!container) return;

  if (state.filtered.length === 0) {
    container.innerHTML = `
      <div class="residence-card" style="grid-column: 1 / -1; text-align: center; padding: 36px;">
        <h3>No apartments match these exact filters</h3>
        <p class="card-address-line">Try raising the Max Monthly Budget or clicking "All Qualified" above.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = state.filtered.map((apt) => {
    const isFav = state.favorites.has(apt.id);
    const isCompared = state.compareIds.has(apt.id);
    const isSVP = String(apt.utilityProvider).includes("Silicon Valley Power");

    const studioPrice = state.pricingMode === "true"
      ? (apt.studioMin ? formatMoney(apt.studioMin + apt.parkingFee + apt.estUtilitiesAndFees) : "N/A")
      : (apt.studioMin ? formatMoney(apt.studioMin) : "N/A");

    const oneBedPrice = state.pricingMode === "true"
      ? (apt.oneBedMin ? formatMoney(apt.trueMonthly1BR) : "N/A")
      : (apt.oneBedMin ? formatMoney(apt.oneBedMin) : "N/A");

    const priceCaption = state.pricingMode === "true" ? "True all-in/mo" : "Base rent/mo";

    return `
      <article class="residence-card ${!apt.meetsAllCriteria ? "is-warn-card" : ""}" role="listitem" data-apt-id="${escapeHtml(apt.id)}">
        <div>
          <div class="card-top-row">
            <div class="tag-row">
              <span class="tag tag-match">${apt.matchScore}% Match</span>
              ${apt.under3000Option && apt.meetsAllCriteria ? `<span class="tag tag-match">≤ $3,000 Option</span>` : ""}
              ${isSVP ? `<span class="tag tag-svp">⚡ Santa Clara SVP Power</span>` : ""}
              ${!apt.meetsAllCriteria ? `<span class="tag tag-warn">⚠ ${escapeHtml(apt.highlightTag)}</span>` : ""}
            </div>
            <button type="button" class="fav-btn ${isFav ? "is-fav" : ""}" data-action="toggle-fav" data-id="${escapeHtml(apt.id)}" aria-pressed="${isFav}" title="Save to favorites">
              ${isFav ? "★ Saved" : "☆ Save"}
            </button>
          </div>

          <div class="card-title-group">
            <h3>${escapeHtml(apt.name)}</h3>
            <p class="card-address-line">${escapeHtml(apt.address)} &middot; <strong>${Number(apt.rating).toFixed(1)} ★</strong></p>
          </div>
        </div>

        <div class="card-metrics-row">
          <div class="metric-box">
            <span class="metric-caption">Studio</span>
            <span class="metric-number ${apt.studioMin && apt.studioMin <= 3000 ? "good" : ""}">${studioPrice}</span>
            <span class="metric-subtext">${escapeHtml(apt.studioSqFt)} sq ft &middot; ${priceCaption}</span>
          </div>
          <div class="metric-box">
            <span class="metric-caption">1-Bedroom</span>
            <span class="metric-number ${apt.oneBedMin && apt.oneBedMin <= 3000 ? "good" : ""}">${oneBedPrice}</span>
            <span class="metric-subtext">${escapeHtml(apt.oneBedSqFt)} sq ft &middot; ${priceCaption}</span>
          </div>
          <div class="metric-box">
            <span class="metric-caption">To 3625 Cisco</span>
            <span class="metric-number">${apt.distanceMiles} mi</span>
            <span class="metric-subtext">${apt.driveMins} min drive</span>
          </div>
        </div>

        <div class="amenities-row">
          <span class="amenity-pill">${apt.inUnitLaundry ? "✓ In-Unit W/D" : "✕ No W/D"}</span>
          <span class="amenity-pill ${!apt.centralAC ? "missing" : ""}">${apt.centralAC ? "✓ Central A/C" : "✕ NO Central A/C"}</span>
          <span class="amenity-pill ${!apt.poolAndGym ? "missing" : ""}">${apt.poolAndGym ? "✓ Pool & Gym" : "✕ No Pool"}</span>
          <span class="amenity-pill">${apt.parkingFee === 0 ? "✓ $0 Garage Incl." : "$" + apt.parkingFee + "/mo Garage"}</span>
        </div>

        <div class="review-summary-block">
          <p class="review-line"><strong>Praise:</strong> ${escapeHtml(apt.praise)}</p>
          <p class="review-line"><strong>Watch-out:</strong> ${escapeHtml(apt.complaints)}</p>
        </div>

        <!-- Direct Links: Google Maps, Cisco Route, Listing Search, Property Website -->
        <div class="external-links-strip" aria-label="Direct location and listing links">
          <a href="${escapeHtml(apt.googleMapsUrl)}" target="_blank" rel="noopener" class="ext-link" title="Open exact address on Google Maps">
            📍 Google Maps
          </a>
          <a href="${escapeHtml(apt.googleDirectionsUrl)}" target="_blank" rel="noopener" class="ext-link" title="View driving route to 3625 Cisco Way on Google Maps">
            🚗 Route to Cisco
          </a>
          <a href="${escapeHtml(apt.listingUrl)}" target="_blank" rel="noopener" class="ext-link" title="View floor plans & reviews on Apartments.com">
            🏢 Apartments.com
          </a>
          <a href="${escapeHtml(apt.website)}" target="_blank" rel="noopener" class="ext-link" title="Open official property leasing site">
            🌐 Official Site ↗
          </a>
        </div>

        <!-- Auto-Saving Personal Notes Field -->
        <div class="card-note-box">
          <input
            type="text"
            class="card-note-input"
            data-note-id="${escapeHtml(apt.id)}"
            value="${escapeHtml(apt.userNotes || "")}"
            placeholder="Add your tour notes or pros/cons (auto-saves)..."
            aria-label="Personal notes for ${escapeHtml(apt.name)}"
          />
        </div>

        <div class="card-footer-btns">
          <button type="button" class="btn btn-primary" data-action="inspect" data-id="${escapeHtml(apt.id)}">Full Dossier</button>
          <button type="button" class="btn btn-secondary" data-action="focus-map" data-id="${escapeHtml(apt.id)}">Show on 3D Map</button>
          <button type="button" class="btn btn-secondary ${isCompared ? "active" : ""}" data-action="compare" data-id="${escapeHtml(apt.id)}" aria-pressed="${isCompared}">
            ${isCompared ? "✓ Comparing" : "+ Compare"}
          </button>
        </div>
      </article>
    `;
  }).join("");
}

// --- Zero-API-Key MapLibre GL 3D Map (ArcGIS Public Basemap Tiles) ---
function buildRasterStyle(theme) {
  if (theme === "dark") {
    return {
      version: 8,
      sources: {
        "arcgis-dark-base": {
          type: "raster",
          tiles: [
            "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}"
          ],
          tileSize: 256,
          attribution: "Tiles &copy; Esri"
        },
        "arcgis-dark-labels": {
          type: "raster",
          tiles: [
            "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}"
          ],
          tileSize: 256
        }
      },
      layers: [
        {
          id: "arcgis-dark-base-layer",
          type: "raster",
          source: "arcgis-dark-base",
          minzoom: 0,
          maxzoom: 19
        },
        {
          id: "arcgis-dark-labels-layer",
          type: "raster",
          source: "arcgis-dark-labels",
          minzoom: 0,
          maxzoom: 19
        }
      ]
    };
  }

  return {
    version: 8,
    sources: {
      "arcgis-topo": {
        type: "raster",
        tiles: [
          "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
        ],
        tileSize: 256,
        attribution: "Tiles &copy; Esri &mdash; Esri, HERE, Garmin, USGS"
      }
    },
    layers: [
      {
        id: "arcgis-topo-layer",
        type: "raster",
        source: "arcgis-topo",
        minzoom: 0,
        maxzoom: 19
      }
    ]
  };
}

function init3DMap() {
  const container = document.getElementById("maplibre-canvas");
  if (!container || typeof maplibregl === "undefined") return;

  map = new maplibregl.Map({
    container: "maplibre-canvas",
    style: buildRasterStyle(state.theme),
    center: [-121.92889, 37.392],
    zoom: 11.7,
    pitch: state.is3DPitched ? 50 : 0,
    bearing: state.is3DPitched ? -12 : 0,
    antialias: true
  });

  map.addControl(new maplibregl.NavigationControl({ visualizePitch: true }), "top-right");

  map.on("load", () => {
    setupCommuteArcsLayer();
    updateMapMarkersAndArcs();
  });
}

function setupCommuteArcsLayer() {
  if (!map) return;
  if (!map.getSource("commute-arcs")) {
    map.addSource("commute-arcs", {
      type: "geojson",
      data: { type: "FeatureCollection", features: [] }
    });
  }
  if (!map.getLayer("commute-arcs-line")) {
    map.addLayer({
      id: "commute-arcs-line",
      type: "line",
      source: "commute-arcs",
      layout: {
        "line-cap": "round",
        "line-join": "round",
        "visibility": state.showArcs ? "visible" : "none"
      },
      paint: {
        "line-color": ["get", "color"],
        "line-width": ["get", "width"],
        "line-opacity": ["get", "opacity"],
        "line-dasharray": [2, 2]
      }
    });
  }
}

function computeGeoJSONCurve(startLngLat, endLngLat, steps = 28) {
  const [lng1, lat1] = startLngLat;
  const [lng2, lat2] = endLngLat;
  const midLng = (lng1 + lng2) / 2;
  const midLat = (lat1 + lat2) / 2;
  const dLng = lng2 - lng1;
  const dLat = lat2 - lat1;
  const ctrlLng = midLng - dLat * 0.16;
  const ctrlLat = midLat + dLng * 0.16;

  const coords = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const u = 1 - t;
    const lng = u * u * lng1 + 2 * u * t * ctrlLng + t * t * lng2;
    const lat = u * u * lat1 + 2 * u * t * ctrlLat + t * t * lat2;
    coords.push([lng, lat]);
  }
  return coords;
}

function updateMapMarkersAndArcs() {
  if (!map) return;

  // Clear old DOM markers
  domMarkers.forEach((m) => m.remove());
  domMarkers = [];

  // 1. Add Cisco HQ Anchor Marker
  const ciscoEl = document.createElement("div");
  ciscoEl.className = "map-cisco-marker";
  ciscoEl.innerHTML = "🏢 3625 Cisco Way (HQ)";
  ciscoEl.title = "Click to center on 3625 Cisco Way, San Jose";
  ciscoEl.addEventListener("click", () => {
    map.flyTo({ center: [CISCO_HQ.lng, CISCO_HQ.lat], zoom: 13.8, pitch: state.is3DPitched ? 52 : 0 });
  });
  const ciscoMarker = new maplibregl.Marker({ element: ciscoEl, anchor: "center" })
    .setLngLat([CISCO_HQ.lng, CISCO_HQ.lat])
    .addTo(map);
  domMarkers.push(ciscoMarker);

  // 2. Add Apartment Price Markers & Build Commute Arcs GeoJSON
  const features = [];

  state.filtered.forEach((apt) => {
    if (!apt.lat || !apt.lng) return;

    const isSVP = String(apt.utilityProvider).includes("Silicon Valley Power");
    const price = state.pricingMode === "true" ? apt.trueMonthlyMin : apt.bestStartingRent;

    const el = document.createElement("button");
    el.type = "button";
    let cls = "map-price-marker";
    if (!apt.meetsAllCriteria) cls += " is-warn";
    else if (apt.under3000Option) cls += " is-under3k";
    if (isSVP) cls += " is-svp";
    if (apt.id === state.selectedId) cls += " is-selected";
    el.className = cls;
    el.textContent = formatMoney(price);
    el.setAttribute("aria-label", `${apt.name}, ${formatMoney(price)}`);

    el.addEventListener("click", () => {
      state.selectedId = apt.id;
      renderMapInspector(apt);
      updateMapMarkersAndArcs();
    });

    const marker = new maplibregl.Marker({ element: el, anchor: "center" })
      .setLngLat([apt.lng, apt.lat])
      .addTo(map);
    domMarkers.push(marker);

    // Commute curve feature
    const isSel = apt.id === state.selectedId;
    features.push({
      type: "Feature",
      properties: {
        color: !apt.meetsAllCriteria ? "#b91c1c" : (isSel ? "#b85435" : "#1b5e49"),
        width: isSel ? 3.5 : 1.75,
        opacity: isSel ? 0.95 : 0.45
      },
      geometry: {
        type: "LineString",
        coordinates: computeGeoJSONCurve([apt.lng, apt.lat], [CISCO_HQ.lng, CISCO_HQ.lat])
      }
    });
  });

  const src = map.getSource("commute-arcs");
  if (src) {
    src.setData({ type: "FeatureCollection", features });
  }
  if (map.getLayer("commute-arcs-line")) {
    map.setLayoutProperty("commute-arcs-line", "visibility", state.showArcs ? "visible" : "none");
  }
}

function renderMapInspector(apt) {
  const box = document.getElementById("map-inspector");
  if (!box || !apt) return;

  const isSVP = String(apt.utilityProvider).includes("Silicon Valley Power");

  box.innerHTML = `
    <div>
      <div class="tag-row" style="margin-bottom:8px;">
        <span class="tag tag-match">${apt.matchScore}% Priority Match</span>
        <span class="tag tag-route">${apt.distanceMiles} mi &middot; ${apt.driveMins} min to Cisco</span>
      </div>

      <h3 style="margin:0 0 4px; font-size:1.2rem;">${escapeHtml(apt.name)}</h3>
      <p class="card-address-line" style="margin-bottom:10px;">${escapeHtml(apt.address)}</p>

      <div class="card-metrics-row" style="margin-bottom:12px;">
        <div class="metric-box">
          <span class="metric-caption">Studio</span>
          <span class="metric-number">${apt.studioMin ? formatMoney(apt.studioMin) : "N/A"}</span>
          <span class="metric-subtext">${escapeHtml(apt.studioSqFt)} sq ft</span>
        </div>
        <div class="metric-box">
          <span class="metric-caption">1-Bedroom</span>
          <span class="metric-number">${apt.oneBedMin ? formatMoney(apt.oneBedMin) : "N/A"}</span>
          <span class="metric-subtext">${escapeHtml(apt.oneBedSqFt)} sq ft</span>
        </div>
        <div class="metric-box">
          <span class="metric-caption">True Total</span>
          <span class="metric-number good">${formatMoney(apt.trueMonthlyMin)}</span>
          <span class="metric-subtext">With utils/park</span>
        </div>
      </div>

      <p style="font-size:0.8rem; color:var(--text-secondary); margin:0 0 10px;">
        <strong>Commute:</strong> ${escapeHtml(apt.transitMode)}<br>
        <strong>Electric Utility:</strong> ${escapeHtml(apt.utilityProvider)}<br>
        <strong>Parking:</strong> ${escapeHtml(apt.parkingNote)}
      </p>

      <div class="review-summary-block" style="margin-bottom:12px;">
        <p class="review-line"><strong>Praise:</strong> ${escapeHtml(apt.praise)}</p>
        <p class="review-line"><strong>Watch-out:</strong> ${escapeHtml(apt.complaints)}</p>
      </div>

      <div class="external-links-strip" style="margin-bottom:12px;">
        <a href="${escapeHtml(apt.googleMapsUrl)}" target="_blank" rel="noopener" class="ext-link">📍 Google Maps</a>
        <a href="${escapeHtml(apt.googleDirectionsUrl)}" target="_blank" rel="noopener" class="ext-link">🚗 Route to Cisco</a>
        <a href="${escapeHtml(apt.listingUrl)}" target="_blank" rel="noopener" class="ext-link">🏢 Apartments.com</a>
        <a href="${escapeHtml(apt.website)}" target="_blank" rel="noopener" class="ext-link">🌐 Official Site ↗</a>
      </div>
    </div>

    <button type="button" class="btn btn-primary" data-action="inspect" data-id="${escapeHtml(apt.id)}" style="width:100%;">
      Open Complete Review &amp; Cost Dossier
    </button>
  `;
}

// --- Render Live Editable Comparison Sheet ---
function renderSpreadsheet() {
  const tbody = document.getElementById("sheet-tbody");
  if (!tbody) return;

  tbody.innerHTML = state.filtered.map((apt) => {
    const isFav = state.favorites.has(apt.id);
    const isSVP = String(apt.utilityProvider).includes("Silicon Valley Power");

    return `
      <tr>
        <td class="tabular-num"><strong>${apt.matchScore}%</strong></td>
        <td>
          <button type="button" class="fav-btn ${isFav ? "is-fav" : ""}" data-action="toggle-fav" data-id="${escapeHtml(apt.id)}">
            ${isFav ? "★" : "☆"}
          </button>
        </td>
        <td>
          <strong>${escapeHtml(apt.name)}</strong><br>
          <span style="font-size:0.74rem; color:var(--text-muted);">${escapeHtml(apt.address)}</span>
        </td>
        <td>${escapeHtml(apt.region)}</td>
        <td class="tabular-num" style="white-space:nowrap;">${apt.distanceMiles} mi (${apt.driveMins}m)</td>
        <td class="cell-editable tabular-num" contenteditable="true" data-edit-field="studioMin" data-id="${escapeHtml(apt.id)}" title="Click to edit Studio rent">
          ${apt.studioMin ? formatMoney(apt.studioMin) : "N/A"}
        </td>
        <td class="cell-editable tabular-num" contenteditable="true" data-edit-field="oneBedMin" data-id="${escapeHtml(apt.id)}" title="Click to edit 1BR rent">
          ${apt.oneBedMin ? formatMoney(apt.oneBedMin) : "N/A"}
        </td>
        <td class="tabular-num">${apt.parkingFee === 0 ? "$0 Incl." : formatMoney(apt.parkingFee)}</td>
        <td>${isSVP ? "⚡ Santa Clara SVP" : "PG&E"}</td>
        <td class="tabular-num"><strong>${formatMoney(apt.trueMonthlyMin)}</strong></td>
        <td class="tabular-num">${Number(apt.rating).toFixed(1)} ★</td>
        <td class="cell-editable" contenteditable="true" data-edit-field="userNotes" data-id="${escapeHtml(apt.id)}" title="Click to type your personal notes (saves automatically)">
          ${escapeHtml(apt.userNotes || apt.highlightTag)}
        </td>
        <td style="white-space:nowrap;">
          <a href="${escapeHtml(apt.googleMapsUrl)}" target="_blank" rel="noopener" class="ext-link" title="Google Maps">📍 Map</a>
          <a href="${escapeHtml(apt.listingUrl)}" target="_blank" rel="noopener" class="ext-link" title="Apartments.com Listing">🏢 Listing</a>
          <a href="${escapeHtml(apt.website)}" target="_blank" rel="noopener" class="ext-link" title="Official Website">🌐 Site ↗</a>
        </td>
      </tr>
    `;
  }).join("");
}

// --- Detail Modal & Compare Modal ---
function openDetailModal(aptId) {
  const apt = state.apartments.find((a) => a.id === aptId);
  const dlg = document.getElementById("detail-dialog");
  const body = document.getElementById("detail-modal-body");
  if (!apt || !dlg || !body) return;

  body.innerHTML = `
    <div class="modal-header">
      <div>
        <span class="tag tag-match">${apt.matchScore}% Priority Match &middot; ${escapeHtml(apt.tier)}</span>
        <h2 id="detail-modal-title" class="modal-title" style="margin-top:6px;">${escapeHtml(apt.name)}</h2>
        <p class="card-address-line">${escapeHtml(apt.address)} &middot; Managed by <strong>${escapeHtml(apt.management)}</strong> (${escapeHtml(apt.legitimacy)})</p>
      </div>
      <button type="button" class="btn btn-icon" data-close-modal="detail-dialog" aria-label="Close detail dialog">✕</button>
    </div>

    <div class="card-metrics-row" style="grid-template-columns: repeat(4, 1fr); margin-bottom:16px;">
      <div class="metric-box">
        <span class="metric-caption">Studio Base Rent</span>
        <span class="metric-number">${apt.studioMin ? formatMoney(apt.studioMin) : "N/A"}</span>
        <span class="metric-subtext">${escapeHtml(apt.studioSqFt)} sq ft</span>
      </div>
      <div class="metric-box">
        <span class="metric-caption">1-Bedroom Base Rent</span>
        <span class="metric-number">${apt.oneBedMin ? formatMoney(apt.oneBedMin) : "N/A"}</span>
        <span class="metric-subtext">${escapeHtml(apt.oneBedSqFt)} sq ft</span>
      </div>
      <div class="metric-box">
        <span class="metric-caption">True All-In Monthly</span>
        <span class="metric-number good">${formatMoney(apt.trueMonthlyMin)}</span>
        <span class="metric-subtext">Rent + Park + Est. Utils</span>
      </div>
      <div class="metric-box">
        <span class="metric-caption">Commute to Cisco</span>
        <span class="metric-number">${apt.distanceMiles} mi (${apt.driveMins}m)</span>
        <span class="metric-subtext">${escapeHtml(apt.transitMode)}</span>
      </div>
    </div>

    <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-bottom:16px;">
      <div class="metric-box">
        <span class="metric-caption" style="color:var(--accent-primary);">RESIDENT PRAISE &amp; PROS (${Number(apt.rating).toFixed(1)} ★)</span>
        <p style="margin:6px 0 0; font-size:0.875rem;">${escapeHtml(apt.praise)}</p>
      </div>
      <div class="metric-box">
        <span class="metric-caption" style="color:var(--accent-route);">RESIDENT COMPLAINTS &amp; WATCH-OUTS</span>
        <p style="margin:6px 0 0; font-size:0.875rem;">${escapeHtml(apt.complaints)}</p>
      </div>
    </div>

    <div class="metric-box" style="margin-bottom:16px;">
      <span class="metric-caption">AMENITIES, PARKING &amp; UTILITY BREAKDOWN</span>
      <p style="margin:6px 0 0; font-size:0.85rem; color:var(--text-secondary);">
        <strong>On-Site Amenities:</strong> ${escapeHtml(apt.amenitiesHighlight)}<br>
        <strong>Parking Details:</strong> ${escapeHtml(apt.parkingNote)} (${apt.parkingFee === 0 ? "$0 Included" : "$" + apt.parkingFee + "/mo"})<br>
        <strong>Electricity Provider:</strong> ${escapeHtml(apt.utilityProvider)} &middot; Est. RUBS/Trash/Electricity: ~${formatMoney(apt.estUtilitiesAndFees)}/mo
      </p>
    </div>

    <div class="external-links-strip" style="padding:12px 0; border-bottom:1px solid var(--border-color);">
      <a href="${escapeHtml(apt.googleMapsUrl)}" target="_blank" rel="noopener" class="btn btn-secondary">📍 Open Google Maps Location</a>
      <a href="${escapeHtml(apt.googleDirectionsUrl)}" target="_blank" rel="noopener" class="btn btn-secondary">🚗 Driving Route to 3625 Cisco Way</a>
      <a href="${escapeHtml(apt.listingUrl)}" target="_blank" rel="noopener" class="btn btn-secondary">🏢 View on Apartments.com</a>
      <a href="${escapeHtml(apt.website)}" target="_blank" rel="noopener" class="btn btn-primary">🌐 Official Property Website ↗</a>
    </div>
  `;

  dlg.showModal();
}

function setupDialogLightDismiss() {
  document.querySelectorAll("dialog.modal-dialog").forEach((dialog) => {
    if (!("closedBy" in HTMLDialogElement.prototype)) {
      dialog.addEventListener("click", (event) => {
        if (event.target !== dialog) return;
        const rect = dialog.getBoundingClientRect();
        const inside = (
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width
        );
        if (!inside) dialog.close();
      });
    }
  });

  document.addEventListener("click", (e) => {
    const closeBtn = e.target.closest("[data-close-modal]");
    if (closeBtn) {
      const id = closeBtn.getAttribute("data-close-modal");
      document.getElementById(id)?.close();
    }
  });
}

// --- Theme Switcher (Light / Dark) ---
function applyTheme(theme) {
  state.theme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  const sun = document.getElementById("theme-icon-sun");
  const moon = document.getElementById("theme-icon-moon");
  const label = document.getElementById("theme-toggle-text");
  if (theme === "dark") {
    sun?.removeAttribute("hidden");
    moon?.setAttribute("hidden", "");
    if (label) label.textContent = "Light";
  } else {
    moon?.removeAttribute("hidden");
    sun?.setAttribute("hidden", "");
    if (label) label.textContent = "Dark";
  }

  if (map && map.isStyleLoaded()) {
    map.setStyle(buildRasterStyle(theme));
    map.once("styledata", () => {
      setupCommuteArcsLayer();
      updateMapMarkersAndArcs();
    });
  }
}

// --- Compare Bar ---
function toggleCompare(aptId) {
  if (state.compareIds.has(aptId)) {
    state.compareIds.delete(aptId);
  } else {
    if (state.compareIds.size >= 4) {
      announce("Maximum 4 apartments can be compared at once.");
      return;
    }
    state.compareIds.add(aptId);
  }
  renderCompareBar();
  renderCards();
}

function renderCompareBar() {
  const bar = document.getElementById("compare-bar");
  const counter = document.getElementById("compare-counter");
  const pills = document.getElementById("compare-pills");
  if (!bar || !counter || !pills) return;

  if (state.compareIds.size === 0) {
    bar.hidden = true;
    return;
  }
  bar.hidden = false;
  counter.textContent = `${state.compareIds.size} selected`;
  pills.innerHTML = Array.from(state.compareIds).map((id) => {
    const apt = state.apartments.find((a) => a.id === id);
    return apt ? `<span class="chip">${escapeHtml(apt.name)}</span>` : "";
  }).join("");
}

function openCompareModal() {
  const dlg = document.getElementById("compare-dialog");
  const grid = document.getElementById("compare-grid");
  if (!dlg || !grid) return;

  const list = Array.from(state.compareIds).map((id) => state.apartments.find((a) => a.id === id)).filter(Boolean);
  grid.innerHTML = list.map((apt) => `
    <div class="compare-column">
      <span class="tag tag-match">${apt.matchScore}% Match</span>
      <h3 style="margin:6px 0 4px;">${escapeHtml(apt.name)}</h3>
      <p class="card-address-line">${escapeHtml(apt.region)} &middot; ${Number(apt.rating).toFixed(1)} ★</p>
      <hr style="border:none; border-top:1px solid var(--border-color); margin:10px 0;">
      <p style="font-size:0.82rem; margin:5px 0;"><strong>Commute:</strong> ${apt.distanceMiles} mi (${apt.driveMins} min)</p>
      <p style="font-size:0.82rem; margin:5px 0;"><strong>Studio:</strong> ${apt.studioMin ? formatMoney(apt.studioMin) : "N/A"}</p>
      <p style="font-size:0.82rem; margin:5px 0;"><strong>1-Bedroom:</strong> ${apt.oneBedMin ? formatMoney(apt.oneBedMin) : "N/A"}</p>
      <p style="font-size:0.82rem; margin:5px 0;"><strong>Parking:</strong> ${apt.parkingFee === 0 ? "$0 Included" : "$" + apt.parkingFee + "/mo"}</p>
      <p style="font-size:0.82rem; margin:5px 0;"><strong>Utility:</strong> ${escapeHtml(apt.utilityProvider)}</p>
      <p style="font-size:0.88rem; margin:8px 0; color:var(--accent-primary);"><strong>True Total: ${formatMoney(apt.trueMonthlyMin)}/mo</strong></p>
      <p style="font-size:0.78rem; color:var(--text-secondary);"><strong>Praise:</strong> ${escapeHtml(apt.praise)}</p>
      <p style="font-size:0.78rem; color:var(--text-secondary);"><strong>Watch-out:</strong> ${escapeHtml(apt.complaints)}</p>
      <div class="external-links-strip" style="margin-top:10px;">
        <a href="${escapeHtml(apt.googleMapsUrl)}" target="_blank" rel="noopener" class="ext-link">📍 Map</a>
        <a href="${escapeHtml(apt.website)}" target="_blank" rel="noopener" class="ext-link">🌐 Site ↗</a>
      </div>
    </div>
  `).join("");

  dlg.showModal();
}

// --- Export Saved CSV ---
function exportCSV() {
  const fields = [
    "id", "name", "tier", "region", "subarea", "address", "city", "zip",
    "distanceMiles", "driveMins", "transitMode",
    "studioMin", "studioSqFt", "oneBedMin", "oneBedSqFt",
    "bestStartingRent", "parkingFee", "utilityProvider", "estUtilitiesAndFees",
    "trueMonthlyMin", "trueMonthly1BR", "rating", "management",
    "highlightTag", "userNotes", "praise", "complaints",
    "googleMapsUrl", "googleDirectionsUrl", "listingUrl", "website"
  ];
  const lines = [fields.join(",")];
  state.apartments.forEach((apt) => {
    const row = fields.map((f) => `"${String(apt[f] ?? "").replace(/"/g, '""')}"`);
    lines.push(row.join(","));
  });
  const blob = new Blob([lines.join("\r\n")], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "san_jose_apartments_saved.csv";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// --- Initialize Workbench ---
document.addEventListener("DOMContentLoaded", () => {
  loadPersistedState();
  applyTheme(state.theme);
  setupDialogLightDismiss();

  // Sync slider UI with loaded weights
  ["budget", "commute", "rating", "utility", "space"].forEach((key) => {
    const slider = document.getElementById(`weight-${key}`);
    const valSpan = document.getElementById(`val-${key}`);
    if (slider) slider.value = String(state.weights[key]);
    if (valSpan) valSpan.textContent = `${state.weights[key]} / 10`;

    slider?.addEventListener("input", (e) => {
      state.weights[key] = Number(e.target.value);
      if (valSpan) valSpan.textContent = `${state.weights[key]} / 10`;
      saveAllToStorage("Priority weights saved");
      runFilterAndRender();
    });
  });

  document.getElementById("reset-weights-btn")?.addEventListener("click", () => {
    state.weights = { budget: 9, commute: 8, rating: 8, utility: 7, space: 6 };
    ["budget", "commute", "rating", "utility", "space"].forEach((key) => {
      const s = document.getElementById(`weight-${key}`);
      const v = document.getElementById(`val-${key}`);
      if (s) s.value = String(state.weights[key]);
      if (v) v.textContent = `${state.weights[key]} / 10`;
    });
    saveAllToStorage("Priority weights reset");
    runFilterAndRender();
  });

  init3DMap();
  runFilterAndRender();

  // Theme Toggle
  document.getElementById("theme-toggle-btn")?.addEventListener("click", () => {
    const next = state.theme === "light" ? "dark" : "light";
    applyTheme(next);
    saveAllToStorage(`${next === "dark" ? "Dark" : "Light"} mode saved`);
  });

  // Cost Mode Toggle
  const costBtn = document.getElementById("cost-mode-btn");
  const costLabel = document.getElementById("cost-mode-label");
  costBtn?.addEventListener("click", () => {
    state.pricingMode = state.pricingMode === "base" ? "true" : "base";
    const isTrue = state.pricingMode === "true";
    costBtn.setAttribute("aria-pressed", String(isTrue));
    if (costLabel) {
      costLabel.innerHTML = isTrue ? `Showing: <strong>True All-In Cost</strong>` : `Showing: <strong>Base Rent</strong>`;
    }
    saveAllToStorage("Cost mode saved");
    runFilterAndRender();
  });

  // Search & Filter Inputs
  const searchInput = document.getElementById("search-input");
  searchInput?.addEventListener("input", (e) => {
    state.search = e.target.value;
    runFilterAndRender();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== searchInput && !["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)) {
      e.preventDefault();
      searchInput?.focus();
    }
  });

  document.getElementById("region-filter")?.addEventListener("change", (e) => {
    state.region = e.target.value;
    runFilterAndRender();
  });
  document.getElementById("budget-filter")?.addEventListener("change", (e) => {
    state.maxBudget = Number(e.target.value);
    runFilterAndRender();
  });
  document.getElementById("unit-filter")?.addEventListener("change", (e) => {
    state.unitType = e.target.value;
    runFilterAndRender();
  });
  document.getElementById("sort-select")?.addEventListener("change", (e) => {
    state.sortBy = e.target.value;
    runFilterAndRender();
  });
  document.getElementById("filter-strict")?.addEventListener("change", (e) => {
    state.strictCriteria = e.target.checked;
    runFilterAndRender();
  });
  document.getElementById("filter-svp-only")?.addEventListener("change", (e) => {
    state.svpOnly = e.target.checked;
    runFilterAndRender();
  });
  document.getElementById("filter-free-parking")?.addEventListener("change", (e) => {
    state.freeParkingOnly = e.target.checked;
    runFilterAndRender();
  });

  // Preset Pills
  document.querySelectorAll(".chip[data-preset]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".chip[data-preset]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      state.preset = btn.getAttribute("data-preset") || "all";
      if (state.preset === "warnings") {
        state.maxBudget = 9999;
        const bf = document.getElementById("budget-filter");
        if (bf) bf.value = "9999";
      }
      runFilterAndRender();
    });
  });

  // Map Controls
  const pitchBtn = document.getElementById("toggle-3d-pitch-btn");
  pitchBtn?.addEventListener("click", () => {
    state.is3DPitched = !state.is3DPitched;
    pitchBtn.classList.toggle("active", state.is3DPitched);
    pitchBtn.setAttribute("aria-pressed", String(state.is3DPitched));
    map?.easeTo({
      pitch: state.is3DPitched ? 50 : 0,
      bearing: state.is3DPitched ? -12 : 0,
      duration: 600
    });
  });

  const arcsBtn = document.getElementById("toggle-arcs-btn");
  arcsBtn?.addEventListener("click", () => {
    state.showArcs = !state.showArcs;
    arcsBtn.classList.toggle("active", state.showArcs);
    arcsBtn.setAttribute("aria-pressed", String(state.showArcs));
    updateMapMarkersAndArcs();
  });

  document.getElementById("center-cisco-btn")?.addEventListener("click", () => {
    map?.flyTo({
      center: [CISCO_HQ.lng, CISCO_HQ.lat],
      zoom: 13.4,
      pitch: state.is3DPitched ? 50 : 0,
      duration: 700
    });
  });

  // Delegated Card & Table Actions
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action]");
    if (!btn) return;
    const action = btn.getAttribute("data-action");
    const id = btn.getAttribute("data-id");
    if (!id) return;

    if (action === "inspect") {
      openDetailModal(id);
    } else if (action === "focus-map") {
      const apt = state.apartments.find((a) => a.id === id);
      if (apt && map) {
        state.selectedId = apt.id;
        renderMapInspector(apt);
        updateMapMarkersAndArcs();
        document.getElementById("maplibre-canvas")?.scrollIntoView({ behavior: "smooth", block: "center" });
        map.flyTo({ center: [apt.lng, apt.lat], zoom: 14.2, pitch: state.is3DPitched ? 52 : 0, duration: 750 });
      }
    } else if (action === "toggle-fav") {
      if (state.favorites.has(id)) state.favorites.delete(id);
      else state.favorites.add(id);
      saveAllToStorage("Favorites saved");
      runFilterAndRender();
    } else if (action === "compare") {
      toggleCompare(id);
    }
  });

  // Auto-save Personal Notes on Cards
  document.addEventListener("input", (e) => {
    const noteInput = e.target.closest("[data-note-id]");
    if (!noteInput) return;
    const id = noteInput.getAttribute("data-note-id");
    const apt = state.apartments.find((a) => a.id === id);
    if (apt) {
      apt.userNotes = noteInput.value;
      saveAllToStorage(`Saved note for ${apt.name}`);
      renderSpreadsheet();
    }
  });

  // Auto-save Inline Spreadsheet Cell Edits
  document.getElementById("sheet-tbody")?.addEventListener("blur", (e) => {
    const cell = e.target.closest("[data-edit-field]");
    if (!cell) return;
    const id = cell.getAttribute("data-id");
    const field = cell.getAttribute("data-edit-field");
    const apt = state.apartments.find((a) => a.id === id);
    if (!apt || !field) return;

    const raw = cell.textContent.trim();
    if (field === "studioMin" || field === "oneBedMin") {
      const num = Number(raw.replace(/[^0-9.]/g, ""));
      if (!isNaN(num) && num > 0) {
        apt[field] = num;
        apt.bestStartingRent = apt.studioMin ? Math.min(apt.studioMin, apt.oneBedMin || 9999) : apt.oneBedMin;
        apt.trueMonthlyMin = apt.bestStartingRent + apt.parkingFee + apt.estUtilitiesAndFees;
        apt.trueMonthly1BR = (apt.oneBedMin || apt.bestStartingRent) + apt.parkingFee + apt.estUtilitiesAndFees;
        apt.under3000Option = apt.bestStartingRent <= 3000;
      }
    } else {
      apt[field] = raw;
    }

    saveAllToStorage(`Saved edit to ${apt.name}`);
    runFilterAndRender();
  }, true);

  // Add New Listing Form
  document.getElementById("open-add-btn")?.addEventListener("click", () => {
    document.getElementById("add-dialog")?.showModal();
  });

  document.getElementById("add-listing-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const studioMin = fd.get("studioMin") ? Number(fd.get("studioMin")) : null;
    const oneBedMin = Number(fd.get("oneBedMin")) || 2950;
    const parkingFee = Number(fd.get("parkingFee")) || 0;
    const estUtils = Number(fd.get("estUtilitiesAndFees")) || 200;
    const bestBase = studioMin ? Math.min(studioMin, oneBedMin) : oneBedMin;
    const region = String(fd.get("region"));
    const isSVP = region.includes("Santa Clara");

    const newApt = buildLinksForApt({
      id: "custom-" + Date.now(),
      name: String(fd.get("name")),
      subarea: region,
      region,
      address: String(fd.get("address")),
      city: isSVP ? "Santa Clara" : "San Jose",
      zip: isSVP ? "95054" : "95134",
      lat: Number(fd.get("lat")) || 37.4045,
      lng: Number(fd.get("lng")) || -121.9328,
      distanceMiles: Number(fd.get("distanceMiles")) || 2.0,
      driveMins: Number(fd.get("driveMins")) || 7,
      transitMode: `${fd.get("driveMins") || 7} min drive to 3625 Cisco Way`,
      studioMin,
      studioMax: studioMin,
      studioSqFt: studioMin ? "550" : "N/A",
      oneBedMin,
      oneBedMax: oneBedMin + 150,
      oneBedSqFt: "740",
      bestStartingRent: bestBase,
      recommendedUnit: `1BR ($${oneBedMin})`,
      parkingFee,
      parkingNote: parkingFee === 0 ? "1 assigned garage space included" : `Garage ($${parkingFee}/mo)`,
      utilityProvider: isSVP ? "Silicon Valley Power (~$0.18/kWh — 60% cheaper!)" : "PG&E (~$0.44/kWh)",
      estUtilitiesAndFees: estUtils,
      trueMonthlyMin: bestBase + parkingFee + estUtils,
      trueMonthly1BR: oneBedMin + parkingFee + estUtils,
      inUnitLaundry: fd.get("inUnitLaundry") === "on",
      centralAC: fd.get("centralAC") === "on",
      poolAndGym: fd.get("poolAndGym") === "on",
      meetsAllCriteria: (fd.get("inUnitLaundry") === "on") && (fd.get("centralAC") === "on") && (fd.get("poolAndGym") === "on") && bestBase <= 3500,
      under3000Option: bestBase <= 3000,
      tier: bestBase <= 3000 ? "Top Pick" : "Strong Contender",
      management: "User Added",
      legitimacy: "User Verified Listing",
      rating: Number(fd.get("rating")) || 4.1,
      reviewSource: "User Entry",
      highlightTag: String(fd.get("highlightTag") || "Custom Added Residence"),
      amenitiesHighlight: "Custom listing added to workbench",
      praise: String(fd.get("praise") || "Added via web workbench."),
      complaints: String(fd.get("complaints") || "Verify lease details on tour."),
      website: String(fd.get("website") || "https://www.apartments.com"),
      userNotes: ""
    });

    state.apartments.unshift(newApt);
    state.favorites.add(newApt.id);
    state.selectedId = newApt.id;
    saveAllToStorage(`Added ${newApt.name}`);
    runFilterAndRender();
    document.getElementById("add-dialog")?.close();
    e.target.reset();
  });

  // Compare Buttons
  document.getElementById("open-compare-btn")?.addEventListener("click", openCompareModal);
  document.getElementById("clear-compare-btn")?.addEventListener("click", () => {
    state.compareIds.clear();
    renderCompareBar();
    renderCards();
  });

  // Export & Reset Storage
  document.getElementById("export-csv-btn")?.addEventListener("click", exportCSV);
  document.getElementById("reset-storage-btn")?.addEventListener("click", () => {
    localStorage.removeItem(STORAGE_KEY_DATA);
    localStorage.removeItem(STORAGE_KEY_PREFS);
    state.apartments = JSON.parse(JSON.stringify(DEFAULT_APARTMENTS)).map(buildLinksForApt);
    showSavedNotice("Restored original defaults");
    runFilterAndRender();
  });
});
