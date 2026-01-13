
```markdow
# Code Editor with PDF Export

A minimalist React application that allows users to paste code, view it with syntax highlighting, and export it as a PDF while preserving formatting.

## Features

- **Code Editing**: Paste and edit code in a clean text area
- **Syntax Highlighting**: Real-time highlighting for multiple languages
- **Language Support**: JavaScript, Python, HTML, CSS, and Java
- **PDF Export**: Download formatted code as PDF with preserved syntax colors
- **Responsive Design**: Works on desktop and tablet devices
- **Accessible UI**: Proper labels, focus states, and semantic HTML

## Demo

![Application Screenshot](https://via.placeholder.com/800x500?text=Code+Editor+Screenshot)


2. Install dependencies:
   ```bash
   npm install
   

3. Start the development server:
   ```bash
   npm start
   ```

## Usage

1. **Paste your code** into the editor area
2. **Select the programming language** from the dropdown
3. **View the syntax-highlighted preview** in real-time
4. **Click "Download as PDF"** to generate a formatted PDF

## Technical Details

### Built With

- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Create React App](https://create-react-app.dev/) - React project bootstrapping
- [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter) - Syntax highlighting component
- [html2pdf.js](https://github.com/eKoopmans/html2pdf.js) - PDF generation from HTML

### Project Structure

```
src/
├── components/
│   ├── CodeEditor.js
│   ├── CodePreview.js
│   ├── DownloadButton.js
│   └── LanguageSelector.js
├── App.js
├── App.css
├── index.js
└── index.css
```

### Key Components

- **CodeEditor**: Text area for code input with language selector
- **CodePreview**: Displays syntax-highlighted code
- **DownloadButton**: Triggers PDF generation
- **LanguageSelector**: Dropdown for language selection

## Color Palette

The application uses a neutral color scheme:
- Backgrounds: `#f8f9fa`, `#ffffff`
- Text: `#212529`, `#495057`
- Borders: `#dee2e6`
- Buttons: `#e9ecef` (normal), `#adb5bd` (hover)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Limitations

- No TypeScript support
- No routing or backend integration
- PDF generation may vary slightly between browsers
- Limited to the specified programming languages

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
