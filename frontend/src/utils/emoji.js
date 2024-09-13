export const funEmojis= [
    "😀", // Grinning Face
    "🎉", // Party Popper
    "❤️", // Red Heart
    "🔥", // Fire
    "👍", // Thumbs Up
    "😂", // Face with Tears of Joy
    "🥳", // Partying Face
    "🚀", // Rocket
    "🌟", // Glowing Star
    "🍕", // Pizza
    "💡", // Light Bulb
    "📚", // Books
    "🌈", // Rainbow
    "💻", // Laptop
    "☕️", // Coffee
    "🎵", // Musical Note
    "🛠️", // Hammer and Wrench
    "🏆", // Trophy
    "🌍", // Earth Globe Europe-Africa
    "😎"  // Smiling Face with Sunglasses
  ];

  export const getRandomEmoji = ()=>{
    return funEmojis[Math.floor(Math.random()*funEmojis.length)];
  }
  