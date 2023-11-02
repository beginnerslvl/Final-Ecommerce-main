const config = {

  // Navigation Bar
  navbarItems: [
    { label: 'cloth', href: '/video-games' },
    { label: 'Consoles', href: '/consoles' },
    { label: 'Accessories', href: '/accessories' },
    { label: 'All Products', href: '/products' },
  ],
  //<-- Navigation Bar End -->
 
  // Hero Section
  heroItems: [
    { label: 'Big Savings - Up to 70% Off' },
    { label: 'Elevate Your Gaming Experience' },
    { label: 'Explore the World of Gaming' },
  ],
  //<-- Hero Section End -->

  // Promotion Section
  eventtext: [
    // Heading of New Section
    { label: 'Game Promotions' },
    { label: 'Discover the Latest Game Deals' },
    // Block One
    { label: 'Get Up to' },
    { label: '50% Off' },
    { label: 'On Select Game Products' },

    // Block Two
    { label: 'Limited Time Offer' },
    { label: 'Use Promo Code' },
    { label: 'GAMEDEALS2023' },

    // Block Three
    { label: 'Featured Games' },
    { label: '$60.00' },
    { label: 'Starting at $30.00' },

    //block four
    { label: 'Featured Games' },
    { label: '$60.00' },
    { label: 'Starting at $30.00' },
  ],

  // Features Section
  fearturestext: [
    // Heading of New Section
    { label: 'Discover the Gaming Advantage' },
    { label: 'Why Choose Our Gaming Products?' },
    // Block One
    { label: 'Premium Quality Consoles' },
    { label: 'Designed for Ultimate Gaming Experience' },
    
    { label: 'Wide Variety of Games' },
    { label: 'Endless Entertainment Options' },
    
    { label: 'Sleek and Modern Design' },
    { label: 'Elevate Your Gaming Setup' },

    // Block Three
    { label: 'Trade-In Options Available' },
    { label: 'Perfect for Gamers' },

    { label: 'Experience the thrill of gaming with our cutting-edge consoles and a wide range of games. Designed to provide the best gaming experience for enthusiasts.'},
  ],

  // Footer
  footertext: [
    { label: 'Explore our collection of gaming products that bring excitement and joy to gamers of all ages. Upgrade your gaming journey today.' },
    { label: 'Copyright © 2023 GameZone' },
  ],

  design: [
    { label: 'black' },
    { label: 'red' },
    { label: 'white' },
  ],
};
//

// Now the config object's navbarItems have been updated with new values
// console.log(config.navbarItems);

// // Now the config object's navbarItems have been updated
// console.log(config.navbarItems);

async  function ai(prompt) {
  const url = 'https://mention.com/wp-json/openai-proxy/v1/generate';
  const headers = new Headers({
    'Host': 'mention.com',
    'Sec-Ch-Ua': '"Chromium";v="113", "Not-A.Brand";v="24"',
    'Accept': 'application/json, text/plain, */*',
    'Sec-Ch-Ua-Mobile': '?0',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.5672.127 Safari/537.36',
    'Sec-Ch-Ua-Platform': '"Windows"',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Dest': 'empty',
    'Referer': 'https://mention.com/en/tweet-generator/',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'en-US,en;q=0.9'
  });

  const init = {
    method: 'GET',
    headers: headers,
  };

  try {
    const response1 = await fetch(url, init);
    const data1 = await response1.json();
    const new_cookie = data1.cookies;

    const params = {
      'model': 'text-davinci-003',
      'prompt': prompt,
      'temperature': '0.7',
      'max_tokens': '200',
      'top_p': '1',
      'frequency_penalty': '0',
      'presence_penalty': '0'
    };

    const urlWithParams = new URL(url);
    urlWithParams.search = new URLSearchParams(params).toString();

    const response2 = await fetch(urlWithParams, { method: 'GET', headers: headers, credentials: 'same-origin' });
    const data2 = await response2.json();
    const text_value = data2.choices[0].text;

    console.log(text_value); // This is the console log
    // Now you can render the page or perform any other actions after the API query is complete.
  } catch (error) {
    console.error(error);
  }
}

const hello = ai("hello world");
console.log(hello)
function ai2(value) {
  // Replace this with your logic to generate new values
  return "New " + value; // Modify this logic as needed
}
for (let i = 0; i < config.navbarItems.length; i++) {
  const item = config.navbarItems[i];
  
  // Change the label and href properties for each item
  item.label = hello; // Change the label using the ai() function
  item.href = '/new';  // Change the href to your desired value
}
for (let i = 0; i < config.heroItems.length; i++) {
  const item = config.heroItems[i];
  
  // Change the label and href properties for each item
  item.label = ai2("hello world"); // Change the label using the ai() function
  item.href = '/new';  // Change the href to your desired value
}
for (let i = 0; i < config.eventtext.length; i++) {
  const item = config.eventtext[i];
  
  // Change the label and href properties for each item
  item.label = ai2("hello world"); // Change the label using the ai() function
  item.href = '/new';  // Change the href to your desired value
}
for (let i = 0; i < config.fearturestext.length; i++) {
  const item = config.fearturestext[i];
  
  // Change the label and href properties for each item
  item.label = ai2("hello world"); // Change the label using the ai() function
  item.href = '/new';  // Change the href to your desired value
}
for (let i = 0; i < config.footertext.length; i++) {
  const item = config.footertext[i];
  
  // Change the label and href properties for each item
  item.label = ai2("hello world"); // Change the label using the ai() function
  item.href = '/new';  // Change the href to your desired value
}
for (let i = 0; i < config.design.length; i++) {
  const item = config.design[i];
  
  // Change the label and href properties for each item
  item.label = ai2("hello world"); // Change the label using the ai() function
  item.href = '/new';  // Change the href to your desired value
}


export default config;
