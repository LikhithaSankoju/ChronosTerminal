# 🌀 CHRONOS - Time Travel Adventure 🌀

Welcome to the ultimate time travel experience! Embark on an epic journey through time-warped locations where reality bends and time flows differently.

## 🌟 Features

- **⏰ Time Distortion**: Experience accelerated, decelerated, and even reversed time flows in different locations!
- **🗝 Key Collection**: Gather mystical keys from Bermuda Triangle, Stonehenge, and the Crooked Forest!
- **🧩 Puzzle Solving**: Answer challenging questions to unlock the secrets of each time-warped location!
- **💰 Treasure Hunt**: Unlock the legendary Treasure Vault with all three keys and claim your reward!
- **👤 User Authentication**: Create accounts and save your progress!

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Chronos-The-Dawn-master
   ```

2. **Install dependencies**
   ```bash
   # Install frontend dependencies
   cd frontend
   npm install
   
   # Install backend dependencies (if using backend)
   cd ../backend
   npm install
   ```

3. **Start the development server**
   ```bash
   # Start frontend
   cd frontend
   npm start
   
   # Start backend (if using backend)
   cd ../backend
   npm start
   ```

4. **Open your browser**
   - Navigate to `http://localhost:3000`
   - You'll be redirected to the home page

## 🎮 How to Play

### Navigation Flow
1. **Home Page** (`home.html`) - Welcome screen with game features
2. **Login Page** (`login.html`) - Create account or log in
3. **Game Page** (`game.html`) - The main time travel adventure

### Game Commands
- `north/south/east/west` - Move between locations
- `treasure` - Go to treasure vault (requires ALL 3 keys!)
- `collect` - Pick up keys
- `answer <response>` - Answer questions
- `help` - Show all available commands
- `logout` - Log out and return to login

### Time Effects
- **ACCELERATED**: Game time moves 1.5x faster (3min in 2min)
- **DECELERATED**: Game time moves 0.5x slower (1min in 2min)
- **REVERSE**: Game time flows backward!

### Objectives
1. Visit Bermuda Triangle, Stonehenge, and Crooked Forest
2. Answer questions correctly to progress
3. Collect all 3 keys (Triangle Key, Stone Key, Forest Key)
4. Unlock the Treasure Vault and become the Master of Time!

## 🏗️ Project Structure

```
Chronos-The-Dawn-master/
├── frontend/
│   ├── public/
│   │   ├── home.html          # Landing page
│   │   ├── login.html         # Authentication page
│   │   ├── game.html          # Game entry point
│   │   └── index.html         # Main entry point
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.js       # Login component
│   │   │   └── Login.css      # Login styles
│   │   ├── App.js             # Main game component
│   │   └── styles.css         # Game styles
│   └── package.json
├── backend/                   # Optional backend
└── README.md
```

## 🔐 Authentication

The game uses localStorage-based authentication:
- Users can create accounts with username/password
- Login state persists across browser sessions
- Game progress is saved per user
- Logout clears all game data

## 🎯 Game Mechanics

### Time System
- **Constant Game Time**: Real-time counter that always increases
- **Game Time**: Affected by location time effects
- **Location Timer**: 2-minute limit per special location

### Scoring
- **Keys Collected**: 1,000 points each
- **Questions Answered**: 500 points each
- **Treasure Vault Bonus**: 10,000 points

### Ranks
- **Master of Time**: Perfect completion (10,000+ points)
- **Time Collector**: All keys found
- **Time Seeker**: Good progress (2+ keys)
- **Time Novice**: Some progress (1+ key)
- **Time Student**: Beginner

## 🛠️ Development

### Adding New Features
1. Modify `App.js` for game logic changes
2. Update `styles.css` for visual changes
3. Edit HTML files for static page changes

### Customization
- **Locations**: Modify `initialLocations` in `App.js`
- **Time Effects**: Adjust `timeModifier` values
- **Questions**: Update question/answer pairs
- **Styling**: Modify CSS files for visual changes

## 🐛 Troubleshooting

### Common Issues
1. **Game not loading**: Check if all dependencies are installed
2. **Login issues**: Clear browser localStorage
3. **Time effects not working**: Refresh the page
4. **Progress lost**: Check if user is logged in

### Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**🌟 Ready to become the Master of Time? Start your adventure now! 🌟** 