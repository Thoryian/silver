document.addEventListener('click', function () {
    const audio = document.getElementById('music');
    audio.play();
  });
  
  document.getElementById('name').textContent = 'Silver';
  document.getElementById('about').textContent = 'Hallo Im a silly wittle furry called Silver, I love music and I love cats, I have three cats Loki, Lucy, and Cleo I love them very much. ❤️taken by Silicon❤️ 2006 Dodge Grand Caravan my beloved ♥️';
  document.getElementById('stuff').textContent = 'He/Him, 18-, Pansexual, Furry'

  const socialLinks = [
    {name: 'Youtube', url: 'https://www.youtube.com/@SilverThePanFurry'},
    {name: 'Scratch', url: 'https://scratch.mit.edu/users/StigmusJR/'},
    {name: 'Roblox', url: 'https://www.roblox.com/users/864893479/profile'},
    {name: 'Spotify Playlist', url: 'https://open.spotify.com/playlist/7bWX96xOecc5qbaOVPQzJT?si=bf23a89d4ffa4c23'},
    {name: 'Steam', url: 'https://steamcommunity.com/profiles/76561199060745984/'},
  ];
  
  const socialList = document.getElementById('social-links');
  socialLinks.forEach(link => {
    const listItem = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.textContent = link.name;
    anchor.href = link.url;
    listItem.appendChild(anchor);
    socialList.appendChild(listItem);
  });
  
  const audio = document.getElementById('music');
  let context = null;
  
  function initAudioContext() {
    if (context === null) {
      context = new AudioContext();
    }
  }
  
  audio.addEventListener('play', function () {
    initAudioContext();
  
    if (context.state === 'suspended') {
      context.resume();
    }
  
    const source = context.createMediaElementSource(audio);
    const gainNode = context.createGain();
  
    const filter = context.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 1000;
  
    source.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(context.destination);
  
    gainNode.gain.setValueAtTime(0.01, context.currentTime);
  
    const fadeInDuration = 10;
    const endTime = context.currentTime + fadeInDuration;
    gainNode.gain.linearRampToValueAtTime(1, endTime);
  });
  
