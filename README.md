---

# 🎨 React Color Picker

This project is a simple and interactive **Color Picker** component built with React. It allows users to pick a color using a color input and displays the selected color. Additionally, users can click on the color display box to **copy the color code** to their clipboard.

---

## 🚀 Features

- 🎨 **Real-time color selection** via an HTML color input.
- 🖱️ **Click to copy** selected color code to clipboard.
- 💻 **Responsive and styled UI** using modular CSS.
- 🌈 Smooth hover effects and visual feedback.

---

## 🧱 Technologies Used

- React (Functional Components + Hooks)
- CSS Modules for scoped styling
- Clipboard API (optional enhancement for copying functionality)

---

## 📁 Project Structure

```
ColorPicker/
├── ColorPicker.js        // React component
├── ColorPicker.module.css // CSS module for styling
```

---

## 📦 Installation and Usage

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/color-picker.git
   cd color-picker
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start the Development Server:**
   ```bash
   npm start
   ```

4. **Usage:**
   Import and use the component in your React application:
   ```jsx
   import ColorPicker from './ColorPicker';

   function App() {
       return (
           <div>
               <ColorPicker />
           </div>
       );
   }

   export default App;
   ```

---

## 🧩 Component Overview

### JSX Overview
```jsx
<div className={styles.ComponentDiv}>
    <h1>ColorPicker Component</h1>
    <div className={styles.ColorDiv} style={{ backgroundColor: color }}>
        <label>Selected Color: {color}</label>
    </div>
    <p>Select a Color</p>
    <input type="color" value={color} onChange={handleColorChange} />
</div>
```

### CSS Styling Highlights
- Dark theme background using HSL.
- Smooth border transitions and hover effects.
- Large color display box for better visual experience.
- Responsive layout centered using Flexbox.

---

## 📋 Optional Enhancements

- Add copy-to-clipboard functionality on clicking the color display box:
  ```js
  function handleCopyToClipboard() {
      navigator.clipboard.writeText(color);
      alert("Color code copied: " + color);
  }
  ```

- Display "Copied!" message for user feedback (with `useState`).

---
