import React from "react";
import ReactDOM from "react-dom/client";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
          alt=""
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const styleCard = {
  backgroundColor: "#f0f0f0",
};
//props is jS object


const ReastaurantCard = (props) => {
  const { resData } = props;//resData is the key
  const {imageId,name,price,category} = resData?.card.card.info;

  return(
    <div className="res-Card" style={styleCard}>
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/" +
          imageId
        }
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4> Rs{price / 100}</h4>
      <h4>{category}</h4>
    </div>
  );
};
//config driver UI-when UI can be changed according to data coming from the backend
const resList = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
        info: {
          id: "25432001",
          name: "Chicken Biryani",
          category: "Rice & Biryani",
          description:
            "Chicken marinated in house ,blend of Indian spices and layered between aromatic rice and chutney.",
          imageId: "pfjjq4zfabesa6uxaj20",
          inStock: 1,
          price: 16500,
          variants: {
            variantGroups: [
              {
                groupId: "2322603",
                name: "Quantity",
                variations: [
                  {
                    name: "Half",
                    default: 1,
                    id: "7932176",
                    inStock: 1,
                    isEnabled: 1,
                  },
                  {
                    name: "Full",
                    price: 9900,
                    id: "7932177",
                    inStock: 1,
                    isEnabled: 1,
                  },
                ],
              },
            ],
          },
          variantsV2: {},
          maxAddons: -1,
          maxFreeAddons: -1,
          addons: [
            {
              groupId: "192785009",
              groupName: "Beverages",
              choices: [
                {
                  id: "131291719",
                  name: "Pepsi(250ml)",
                  price: 4400,
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
              ],
              maxAddons: -1,
              maxFreeAddons: -1,
            },
          ],
          ribbon: {
            text: "BESTSELLER",
            textColor: "#ffffff",
            topBackgroundColor: "#d53d4c",
            bottomBackgroundColor: "#b02331",
          },
          itemBadge: {},
          badgesV2: {},
          ratings: {
            aggregatedRating: {
              rating: "4.1",
              ratingCount: "2043 ratings",
              ratingCountV2: "2043",
            },
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"ab712771-6c76-d5bd-dd7b-f6435e4d131d","grid":"9f5a1d3b-a9da-4fb0-b82b-85538456316a","queryUniqueId":"c8c1f062-bea0-6ba5-933d-68b9706e93a1","query":"Biryani"}',
          objectValue: "25432001",
          clickObjectName: "click-item",
        },
        restaurant: {
          info: {
            id: "90079",
            name: "Sidhu Non-Veg Point",
            city: "39",
            slugs: {
              restaurant: "sidhu-non-veg-point-govind-nagar-chawla-market",
              city: "kanpur",
            },
            cloudinaryImageId: "521be2273183dcbf8eb3a62596a7d31d",
            address: "Shop No. 8,9,10",
            locality: "Govind Nagar",
            areaName: "Nandlal Chawraha",
            costForTwo: "25000",
            costForTwoMessage: "₹250 FOR TWO",
            cuisines: ["Afghani", "Mughlai", "Kebabs", "Seafood", "Biryani"],
            avgRating: 4.3,
            feeDetails: {},
            avgRatingString: "4.3",
            totalRatingsString: "9.8K+",
            sla: {
              deliveryTime: 37,
              minDeliveryTime: 35,
              maxDeliveryTime: 40,
              lastMileTravel: 3,
              serviceability: "SERVICEABLE",
              rainMode: "RAIN_MODE_NONE",
              slaString: "35-40 MINS",
              lastMileTravelString: "3.0 km",
              iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
              opened: true,
              restaurantClosedMeta: {},
            },
            badges: {},
            aggregatedDiscountInfoV3: {
              header: "₹125 OFF",
              subHeader: "ABOVE ₹249",
              discountTag: "FLAT DEAL",
              logoCtx: {
                text: "BENEFITS",
              },
            },
            loyaltyDiscoverPresentationInfo: {
              logoCtx: {
                logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
              },
              freedelMessage: "FREE DELIVERY",
              badgeType: "BADGE_TYPE_ONE_LITE",
            },
            ratingSlab: "RATING_SLAB_5",
            orderabilityCommunication: {
              title: {},
              subTitle: {},
              message: {},
              customIcon: {},
              commsStyling: {},
            },
            cartOrderabilityNudgeBanner: {
              parameters: {},
              presentation: {},
            },
            externalRatings: {
              aggregatedRating: {
                rating: "4.0",
                ratingCount: "503",
              },
              source: "GOOGLE",
              sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            featuredSectionInfo: {},
          },
          analytics: {
            screenName: "explore",
            context:
              '{"tid":"ab712771-6c76-d5bd-dd7b-f6435e4d131d","grid":"9f5a1d3b-a9da-4fb0-b82b-85538456316a","queryUniqueId":"c8c1f062-bea0-6ba5-933d-68b9706e93a1","query":"Biryani"}',
            objectValue: "90079~25432001",
            impressionObjectName: "impression-restaurant",
            clickObjectName: "click-dish-search-full-menu",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
        info: {
          id: "115389180",
          name: "Lazeez Bhuna Murgh Biryani (Dum Chicken Biryani - Serves 1)",
          category: "Shahi Biryani (serves 1)",
          description:
            "(Boneless, Served with 1 Gulab Jamun & Mint Raita) In this culinary jewel from Behrouz, Tender chicken pieces are marinated with exuberant bhuna spices that are freshly ground and dum pukht with aromatic rice.",
          imageId: "htra1ceo32gospqkqalp",
          inStock: 1,
          price: 39900,
          variants: {},
          variantsV2: {
            variantGroups: [
              {
                groupId: "32348018",
                name: "Type Of Biryani",
                variations: [
                  {
                    name: "Classic Recipe (Mild Spicy)",
                    default: 1,
                    id: "100401439",
                    inStock: 1,
                    isEnabled: 1,
                  },
                  {
                    name: "Hyderabadi Recipe (Spicy)",
                    price: 2000,
                    id: "100401441",
                    inStock: 1,
                    isEnabled: 1,
                  },
                ],
              },
            ],
            pricingModels: [
              {
                variations: [
                  {
                    groupId: "32348018",
                    variationId: "100401439",
                  },
                ],
                price: 39900,
                addonCombinations: [
                  {
                    groupId: "141740509",
                    addonId: "115128505",
                  },
                  {
                    groupId: "141740509",
                    addonId: "115128506",
                  },
                  {
                    groupId: "199384354",
                    addonId: "133371971",
                  },
                  {
                    groupId: "199384354",
                    addonId: "133371972",
                  },
                  {
                    groupId: "111068843",
                    addonId: "100081477",
                  },
                  {
                    groupId: "111068843",
                    addonId: "100081476",
                  },
                  {
                    groupId: "111068843",
                    addonId: "100081478",
                  },
                  {
                    groupId: "111068830",
                    addonId: "110552896",
                  },
                  {
                    groupId: "111068830",
                    addonId: "103630313",
                  },
                  {
                    groupId: "111068830",
                    addonId: "103630314",
                  },
                  {
                    groupId: "111068830",
                    addonId: "103630315",
                  },
                  {
                    groupId: "111068830",
                    addonId: "103630316",
                  },
                  {
                    groupId: "111068830",
                    addonId: "100081479",
                  },
                  {
                    groupId: "111068830",
                    addonId: "100081480",
                  },
                  {
                    groupId: "111068830",
                    addonId: "100081481",
                  },
                  {
                    groupId: "111068830",
                    addonId: "100081482",
                  },
                  {
                    groupId: "183268397",
                    addonId: "128258154",
                  },
                  {
                    groupId: "198724098",
                    addonId: "133228592",
                  },
                  {
                    groupId: "198724098",
                    addonId: "133228578",
                  },
                  {
                    groupId: "198724098",
                    addonId: "133228584",
                  },
                  {
                    groupId: "198724098",
                    addonId: "133228579",
                  },
                  {
                    groupId: "198724099",
                    addonId: "133228586",
                  },
                  {
                    groupId: "198724099",
                    addonId: "133228580",
                  },
                  {
                    groupId: "198724099",
                    addonId: "133228583",
                  },
                  {
                    groupId: "198724099",
                    addonId: "133228582",
                  },
                  {
                    groupId: "141754611",
                    addonId: "115130462",
                  },
                  {
                    groupId: "141754611",
                    addonId: "126356969",
                  },
                  {
                    groupId: "141754611",
                    addonId: "115130463",
                  },
                  {
                    groupId: "141754611",
                    addonId: "117469780",
                  },
                  {
                    groupId: "141754611",
                    addonId: "115130458",
                  },
                  {
                    groupId: "141754611",
                    addonId: "115130460",
                  },
                  {
                    groupId: "141754611",
                    addonId: "115130465",
                  },
                  {
                    groupId: "141754611",
                    addonId: "115130467",
                  },
                  {
                    groupId: "141754611",
                    addonId: "115130464",
                  },
                  {
                    groupId: "141754611",
                    addonId: "115130468",
                  },
                  {
                    groupId: "141754611",
                    addonId: "117102487",
                  },
                  {
                    groupId: "141754611",
                    addonId: "117102486",
                  },
                  {
                    groupId: "141754611",
                    addonId: "117102480",
                  },
                  {
                    groupId: "141754611",
                    addonId: "115130461",
                  },
                ],
              },
              {
                variations: [
                  {
                    groupId: "32348018",
                    variationId: "100401441",
                  },
                ],
                price: 41900,
                addonCombinations: [
                  {
                    groupId: "141740509",
                    addonId: "115128505",
                  },
                  {
                    groupId: "141740509",
                    addonId: "115128506",
                  },
                  {
                    groupId: "199384354",
                    addonId: "133371971",
                  },
                  {
                    groupId: "199384354",
                    addonId: "133371972",
                  },
                  {
                    groupId: "111068843",
                    addonId: "100081477",
                  },
                  {
                    groupId: "111068843",
                    addonId: "100081476",
                  },
                  {
                    groupId: "111068843",
                    addonId: "100081478",
                  },
                  {
                    groupId: "111068830",
                    addonId: "110552896",
                  },
                  {
                    groupId: "111068830",
                    addonId: "103630313",
                  },
                  {
                    groupId: "111068830",
                    addonId: "103630314",
                  },
                  {
                    groupId: "111068830",
                    addonId: "103630315",
                  },
                  {
                    groupId: "111068830",
                    addonId: "103630316",
                  },
                  {
                    groupId: "111068830",
                    addonId: "100081479",
                  },
                  {
                    groupId: "111068830",
                    addonId: "100081480",
                  },
                  {
                    groupId: "111068830",
                    addonId: "100081481",
                  },
                  {
                    groupId: "111068830",
                    addonId: "100081482",
                  },
                  {
                    groupId: "183268397",
                    addonId: "128258154",
                  },
                  {
                    groupId: "198724098",
                    addonId: "133228592",
                  },
                  {
                    groupId: "198724098",
                    addonId: "133228578",
                  },
                  {
                    groupId: "198724098",
                    addonId: "133228584",
                  },
                  {
                    groupId: "198724098",
                    addonId: "133228579",
                  },
                  {
                    groupId: "198724099",
                    addonId: "133228586",
                  },
                  {
                    groupId: "198724099",
                    addonId: "133228580",
                  },
                  {
                    groupId: "198724099",
                    addonId: "133228583",
                  },
                  {
                    groupId: "198724099",
                    addonId: "133228582",
                  },
                  {
                    groupId: "141754611",
                    addonId: "115130462",
                  },
                  {
                    groupId: "141754611",
                    addonId: "126356969",
                  },
                  {
                    groupId: "141754611",
                    addonId: "115130463",
                  },
                  {
                    groupId: "141754611",
                    addonId: "117469780",
                  },
                  {
                    groupId: "141754611",
                    addonId: "115130458",
                  },
                  {
                    groupId: "141754611",
                    addonId: "115130460",
                  },
                  {
                    groupId: "141754611",
                    addonId: "115130465",
                  },
                  {
                    groupId: "141754611",
                    addonId: "115130467",
                  },
                  {
                    groupId: "141754611",
                    addonId: "115130464",
                  },
                  {
                    groupId: "141754611",
                    addonId: "115130468",
                  },
                  {
                    groupId: "141754611",
                    addonId: "117102487",
                  },
                  {
                    groupId: "141754611",
                    addonId: "117102486",
                  },
                  {
                    groupId: "141754611",
                    addonId: "117102480",
                  },
                  {
                    groupId: "141754611",
                    addonId: "115130461",
                  },
                ],
              },
            ],
          },
          maxAddons: -1,
          maxFreeAddons: -1,
          addons: [
            {
              groupId: "199384354",
              groupName: "Choose your Kathi roll",
              choices: [
                {
                  id: "133371971",
                  name: "Chicken Tikka Kathi Roll",
                  price: 25900,
                  inStock: 1,
                  isEnabled: 1,
                },
                {
                  id: "133371972",
                  name: "Murgh Seekh Kebab Kathi Roll",
                  price: 29900,
                  inStock: 1,
                  isEnabled: 1,
                },
              ],
              maxAddons: 2,
              maxFreeAddons: -1,
            },
            {
              groupId: "183268397",
              groupName: "Add an Egg",
              choices: [
                {
                  id: "128258154",
                  name: "Extra Egg (1 Piece)",
                  price: 2900,
                  inStock: 1,
                  isEnabled: 1,
                },
              ],
              maxAddons: 1,
              maxFreeAddons: -1,
            },
            {
              groupId: "141740509",
              groupName: "Add Haleem",
              choices: [
                {
                  id: "115128505",
                  name: "Murgh-e-Haleem (Chicken Haleem) 300gm",
                  price: 29900,
                  inStock: 1,
                  isEnabled: 1,
                },
                {
                  id: "115128506",
                  name: "Gosht-e-Haleem (Mutton Haleem) 300gm",
                  price: 35900,
                  inStock: 1,
                  isEnabled: 1,
                },
              ],
              maxAddons: 2,
              maxFreeAddons: -1,
            },
            {
              groupId: "111068830",
              groupName: "Add- a Kebab.",
              choices: [
                {
                  id: "110552896",
                  name: "Murgh Koobideh (Chicken Tikki Kebab) Mini-3 Pcs",
                  price: 13500,
                  inStock: 1,
                  isEnabled: 1,
                },
                {
                  id: "103630313",
                  name: "Dahi Kebab Mini-3 Pcs",
                  price: 14900,
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  id: "103630314",
                  name: "Murgh Kefta Mini-6 Pcs",
                  price: 15900,
                  inStock: 1,
                  isEnabled: 1,
                },
                {
                  id: "103630316",
                  name: "Gosht-E-Galouti Kebab (Mutton Galauti Kebab) Mini-3 Pcs",
                  price: 27900,
                  inStock: 1,
                  isEnabled: 1,
                },
                {
                  id: "100081479",
                  name: "Hara Bhara Kebab (6 Pcs)",
                  price: 27900,
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  id: "100081481",
                  name: "Murgh Seekh Kebab (6 Pcs)",
                  price: 39900,
                  inStock: 1,
                  isEnabled: 1,
                },
                {
                  id: "100081482",
                  name: "Murgh Malai Kebab (6 Pcs)",
                  price: 39900,
                  inStock: 1,
                  isEnabled: 1,
                },
                {
                  id: "103630315",
                  name: "Murgh Haleem Kebab Mini-3 Pcs",
                  price: 19900,
                  isEnabled: 1,
                },
                {
                  id: "100081480",
                  name: "Murgh Haleem Kebab (6 Pcs)",
                  price: 36500,
                  isEnabled: 1,
                },
              ],
              maxAddons: 9,
              maxFreeAddons: -1,
            },
            {
              groupId: "111068843",
              groupName: "Choose-Your Extras.",
              choices: [
                {
                  id: "100081478",
                  name: "Mughlai Gravy (100 gm)",
                  price: 4900,
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  id: "100081477",
                  name: "Extra Mint Raita (100 gm)",
                  price: 3900,
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  id: "100081476",
                  name: "Salan (100 gm)",
                  price: 4500,
                  isVeg: 1,
                  isEnabled: 1,
                },
              ],
              maxAddons: 3,
              maxFreeAddons: -1,
            },
            {
              groupId: "141754611",
              groupName: "Add- Dessert & Beverage",
              choices: [
                {
                  id: "115130465",
                  name: "Thums Up Can (330 ml)",
                  price: 6650,
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  id: "126356969",
                  name: "Lemon Soda (250 mL)",
                  price: 3900,
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  id: "115130463",
                  name: "Masala Lemonade (180 ml)",
                  price: 3900,
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  id: "115130458",
                  name: "Ayran (Buttermilk)",
                  price: 6500,
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  id: "115130467",
                  name: "Coca-Cola Bottle (475 ml)",
                  price: 6650,
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  id: "115130468",
                  name: "Gajar Halwa (100 gm)",
                  price: 10900,
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  id: "115130460",
                  name: "Gulab Jamun (Pack Of 2)",
                  price: 6500,
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  id: "115130464",
                  name: "Moong Dal Halwa (100 gm)",
                  price: 9900,
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  id: "117102487",
                  name: "Dry Fruit Kulfi Ice Cream",
                  price: 11682,
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  id: "117102486",
                  name: "Alphonso Mango Ice Cream",
                  price: 11682,
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  id: "115130462",
                  name: "Noorani Khajur (Dates, 3Pcs)",
                  price: 3300,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  id: "115130461",
                  name: "Royal Baklava (3 Pcs)",
                  price: 19900,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  id: "117469780",
                  name: "Aamras Drink (200 mL)",
                  price: 5900,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  id: "117102480",
                  name: "Belgian Chocolate Ice Cream",
                  price: 11682,
                  isVeg: 1,
                  isEnabled: 1,
                },
              ],
              maxAddons: 10,
              maxFreeAddons: -1,
            },
            {
              groupId: "198724098",
              groupName: "Choose Your Gravy",
              choices: [
                {
                  id: "133228584",
                  name: "Mughlai Murgh Lababdar (Half)",
                  price: 29900,
                  inStock: 1,
                  isEnabled: 1,
                },
                {
                  id: "133228579",
                  name: "Tandoori Murgh Tikka Masala (Half)",
                  price: 29900,
                  inStock: 1,
                  isEnabled: 1,
                },
                {
                  id: "133228592",
                  name: "Paneer Lababdar (300 gm)",
                  price: 27900,
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  id: "133228578",
                  name: "Tandoori Paneer Tikka Masala (Half)",
                  price: 27900,
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
              ],
              maxAddons: 4,
              maxFreeAddons: -1,
            },
            {
              groupId: "198724099",
              groupName: "Choose Your Bread",
              choices: [
                {
                  id: "133228586",
                  name: "Dilkhush Narm Kulcha (Pack of 2)",
                  price: 8900,
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  id: "133228580",
                  name: "Nafees Laccha Paratha (Pack of 2)",
                  price: 8900,
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  id: "133228583",
                  name: "Rumali Roti Pack of 2",
                  price: 8900,
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
                {
                  id: "133228582",
                  name: "Durbari Tawa Paratha (Pack of 3)",
                  price: 8900,
                  inStock: 1,
                  isVeg: 1,
                  isEnabled: 1,
                },
              ],
              maxAddons: 4,
              maxFreeAddons: -1,
            },
          ],
          defaultPrice: 39900,
          ribbon: {
            text: "BESTSELLER",
            textColor: "#ffffff",
            topBackgroundColor: "#d53d4c",
            bottomBackgroundColor: "#b02331",
          },
          itemBadge: {},
          badgesV2: {},
          ratings: {
            aggregatedRating: {
              rating: "4.6",
              ratingCount: "247 ratings",
              ratingCountV2: "247",
            },
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"ab712771-6c76-d5bd-dd7b-f6435e4d131d","grid":"9f5a1d3b-a9da-4fb0-b82b-85538456316a","queryUniqueId":"c8c1f062-bea0-6ba5-933d-68b9706e93a1","query":"Biryani","adTrackingId":"cid=24558652~p=1~adgrpid=24558652#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=361082~st=biryani~eid=b7f2499f-6f0f-4213-8a71-0fd20ee1cc95~srvts=1738220302705"}',
          objectValue: "361082~115389180",
          impressionObjectName: "impression-high-priority-item-card",
          clickObjectName: "click-high-priority-item",
        },
        restaurant: {
          info: {
            id: "361082",
            name: "Behrouz Biryani",
            city: "39",
            slugs: {
              restaurant: "behrouz-biryani-harsh-nagar-naveen-market",
              city: "kanpur",
            },
            cloudinaryImageId: "1a8dfa8b2a73ddf7c6193465ab24c898",
            address:
              "TSP Tower, 9/46 A- First floor, Benajhabar Road Harsh Nagar , Kanpur, Uttar Pradesh- 208012",
            locality: "Permat",
            areaName: "Harsh Nagar",
            costForTwo: "50000",
            costForTwoMessage: "₹500 FOR TWO",
            cuisines: [
              "Biryani",
              "North Indian",
              "Kebabs",
              "Mughlai",
              "Beverages",
              "Desserts",
            ],
            avgRating: 4.5,
            feeDetails: {},
            avgRatingString: "4.5",
            totalRatingsString: "3.6K+",
            promoted: true,
            adTrackingId:
              "cid=24558652~p=1~adgrpid=24558652#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=361082~st=biryani~eid=b7f2499f-6f0f-4213-8a71-0fd20ee1cc95~srvts=1738220302705",
            sla: {
              deliveryTime: 35,
              minDeliveryTime: 35,
              maxDeliveryTime: 40,
              lastMileTravel: 4.1,
              serviceability: "SERVICEABLE",
              rainMode: "RAIN_MODE_NONE",
              slaString: "35-40 MINS",
              lastMileTravelString: "4.1 km",
              iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
              opened: true,
              restaurantClosedMeta: {},
            },
            badges: {
              imageBadges: [
                {
                  imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Biryani.png",
                  description: "Delivery!",
                },
              ],
            },
            aggregatedDiscountInfoV3: {
              header: "₹125 OFF",
              subHeader: "ABOVE ₹599",
              discountTag: "FLAT DEAL",
              logoCtx: {
                text: "BENEFITS",
              },
            },
            loyaltyDiscoverPresentationInfo: {
              logoCtx: {
                logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
              },
              freedelMessage: "FREE DELIVERY",
              badgeType: "BADGE_TYPE_ONE_LITE",
            },
            ratingSlab: "RATING_SLAB_5",
            orderabilityCommunication: {
              title: {},
              subTitle: {},
              message: {},
              customIcon: {},
              commsStyling: {},
            },
            cartOrderabilityNudgeBanner: {
              parameters: {},
              presentation: {},
            },
            externalRatings: {
              aggregatedRating: {
                rating: "--",
              },
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            featuredSectionInfo: {},
            campaignId: "24558652",
          },
          analytics: {
            screenName: "explore",
            context:
              '{"tid":"ab712771-6c76-d5bd-dd7b-f6435e4d131d","grid":"9f5a1d3b-a9da-4fb0-b82b-85538456316a","queryUniqueId":"c8c1f062-bea0-6ba5-933d-68b9706e93a1","query":"Biryani","adTrackingId":"cid=24558652~p=1~adgrpid=24558652#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=361082~st=biryani~eid=b7f2499f-6f0f-4213-8a71-0fd20ee1cc95~srvts=1738220302705"}',
            objectValue: "361082",
            impressionObjectName: "impression-dish-search-full-menu-ad",
            clickObjectName: "click-dish-search-full-menu-ad",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
        info: {
          id: "89239175",
          name: "Chicken Biryani",
          category: "Rice And Biryani",
          description:
            "Dum Biryani with three pcs of chicken with Raita ,chutney & onion complimentry",
          imageId: "nuouyhq8vkpcrjet3vab",
          inStock: 1,
          price: 25000,
          variants: {},
          variantsV2: {},
          maxAddons: -1,
          maxFreeAddons: -1,
          ribbon: {
            text: "BESTSELLER",
            textColor: "#ffffff",
            topBackgroundColor: "#d53d4c",
            bottomBackgroundColor: "#b02331",
          },
          itemBadge: {},
          badgesV2: {},
          ratings: {
            aggregatedRating: {
              rating: "4.0",
              ratingCount: "335 ratings",
              ratingCountV2: "335",
            },
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"ab712771-6c76-d5bd-dd7b-f6435e4d131d","grid":"9f5a1d3b-a9da-4fb0-b82b-85538456316a","queryUniqueId":"c8c1f062-bea0-6ba5-933d-68b9706e93a1","query":"Biryani"}',
          objectValue: "89239175",
          clickObjectName: "click-item",
        },
        restaurant: {
          info: {
            id: "109373",
            name: "Baba Biryani",
            city: "39",
            slugs: {
              restaurant: "baba-biryani-south-x-mall-site-no-1",
              city: "kanpur",
            },
            cloudinaryImageId: "iofc0wyftgb6thlu1uay",
            address:
              "South X Mall, plot no.9,kidwai nagar bypass road,o block,marbel market,kidwai nagar,kanpur",
            locality: "SOUTH X MALL",
            areaName: "Kidwai Nagar",
            costForTwo: "20000",
            costForTwoMessage: "₹200 FOR TWO",
            cuisines: ["Mughlai", "Biryani", "Hyderabadi"],
            avgRating: 4.2,
            feeDetails: {},
            avgRatingString: "4.2",
            totalRatingsString: "7.5K+",
            sla: {
              deliveryTime: 28,
              minDeliveryTime: 25,
              maxDeliveryTime: 30,
              lastMileTravel: 1.9,
              serviceability: "SERVICEABLE",
              rainMode: "RAIN_MODE_NONE",
              slaString: "25-30 MINS",
              lastMileTravelString: "1.9 km",
              iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
              opened: true,
              restaurantClosedMeta: {},
            },
            badges: {
              imageBadges: [
                {
                  imageId: "Rxawards/_CATEGORY-Biryani.png",
                  description: "Delivery!",
                },
              ],
            },
            aggregatedDiscountInfoV3: {
              header: "20% OFF",
              subHeader: "UPTO ₹50",
              logoCtx: {
                text: "BENEFITS",
              },
            },
            loyaltyDiscoverPresentationInfo: {
              logoCtx: {
                logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
              },
              freedelMessage: "FREE DELIVERY",
              badgeType: "BADGE_TYPE_ONE_LITE",
            },
            ratingSlab: "RATING_SLAB_5",
            orderabilityCommunication: {
              title: {},
              subTitle: {},
              message: {},
              customIcon: {},
              commsStyling: {},
            },
            cartOrderabilityNudgeBanner: {
              parameters: {},
              presentation: {},
            },
            externalRatings: {
              aggregatedRating: {
                rating: "--",
              },
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            featuredSectionInfo: {},
          },
          analytics: {
            screenName: "explore",
            context:
              '{"tid":"ab712771-6c76-d5bd-dd7b-f6435e4d131d","grid":"9f5a1d3b-a9da-4fb0-b82b-85538456316a","queryUniqueId":"c8c1f062-bea0-6ba5-933d-68b9706e93a1","query":"Biryani"}',
            objectValue: "109373~89239175",
            impressionObjectName: "impression-restaurant",
            clickObjectName: "click-dish-search-full-menu",
          },
        },
      },
    },
  },
];
//not using keys(not acceptable) <<index as key<< unique key(best practice)
const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container">
       {resList.map((restaurant)=>( // you have to always give a key during mapping so that it will not render every restaurant card
        <ReastaurantCard  key={restaurant.card.card.info.id} resData={restaurant}/>
       ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
