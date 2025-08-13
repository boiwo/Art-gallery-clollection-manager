
# Art Gallery Collection Manager

A modern web application for managing and exploring an art gallery's collection. Built with React and Vite, styled with Tailwind CSS.

## Features

- **Artwork Listing:** View all artworks in a responsive grid, including title, artist, and image.
- **Artwork Details by Artist:** Click an artist's name to see all their artworks.
- **Add New Artwork:** Fill out a form to add new pieces to the collection.
- **User Authentication:**
	- **Signup:** Create a new account.
	- **Login:** Access the app with your credentials.
	- **Signout:** Log out from the app (icon in the top right).
- **Navigation:**
	- Navbar with links to Home, Add New Artwork, and Signout.
- **404 Page:** Friendly message for unknown routes.
- **Loading/Error States:** User feedback while fetching data or on error.

## Getting Started

### Prerequisites
- Node.js (v18 or newer recommended)
- npm

### Installation
1. Clone the repository:
	 ```bash
	 git clone https://github.com/boiwo/Art-gallery-clollection-manager.git
	 cd Art-gallery-clollection-manager
	 ```
2. Install dependencies:
	 ```bash
	 npm install
	 ```
3. Start the development server:
	 ```bash
	 npm run dev
	 ```
4. Open your browser and go to `http://localhost:5173` (or the port shown in your terminal).

### Project Structure
```
src/
	App.jsx            # Main app component and routes
	assets/
		components/      # All React components (Navbar, Login, Signup, etc.)
		Images/          # Artwork images (if any)
	main.jsx           # React entry point
	App.css, index.css # Styles
public/
	vite.svg           # Vite logo
	...
db.json              # Sample data for artworks
```

## Functionalities

- **Home Page:**
	- Displays all artworks in a grid.
	- Each card shows image, title, and artist (clickable).
- **Artist Page:**
	- Shows all artworks by a selected artist.
- **Add Artwork:**
	- Form to add new artwork (title, artist, image, etc.).
- **Login/Signup:**
	- Forms for user authentication.
	- Redirects to homepage on success.
- **Signout:**
	- Signout icon in navbar logs out and redirects to login.
- **Navigation:**
	- Navbar links for Home, Add New Artwork, and Signout.
- **404 Handling:**
	- User-friendly message for invalid routes.

## Customization
- Update `db.json` for your own artwork data.
- Style with Tailwind CSS or add your own styles in `App.css`/`index.css`.

## License
MIT
