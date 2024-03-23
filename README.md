# A React + Tailwind Club Website
### Just clone the repo, make some edits and there you go, you have a good looking responsive club website

<br> 

# How to run
### Use <code>npm i</code> to install dependencies
### Use <code>npm run dev</code> to run in [LocalHost:5173 Port](localhost:5173)

<br>


# Adding new Components
## 📁 src 
###  📂 App.jsx
Add your component here after importing using <code>import exportedComponent from 'path' </code>

<br>

# Easily Editable Components (Inside src folder)
## 📁 OBs - (Office Bearers)
###  📂 Pictures.jsx

#### Use <code>{id:---,imgURL: '---',dept: "---",text: "---",},</code> to add a new photo card element to the <code>const pictures</code> array. 
        
 

<table border>
    <tr>
        <td>imgURL</td>
        <td>Path of Image stored in assets folder.</td>
    </tr>
    <tr>
        <td>dept</td>
        <td>Text to be shown when hovered.</td>
    </tr>
    <tr>
        <td>text</td>
        <td>Text for filtering using Photo Gallery Menu</td>
    </tr>
</table>

#### Use <code>"Text",</code> to add a new filter for photo cards to the <code>const MenuItems</code> array.  
<br>

## 📁 Section-1 - Landing Page
###  📂 LandingContent.jsx

Edit text and image to be shown on landing page here and the image is set to jump up and down (A cute Robot in this case!)

<br>


## 📁 Section-2 - About Section
###  📂 About.jsx

Just add whatever text you want in each section and an image too!

<br>


## 📁 Section-3 - Image Carousel
###  📂 picturesImageCarousel.jsx


#### Use <code>{id:---,src: '---',text: "---",},</code> to add a new photo to the <code>const pictures</code> array. 
        

<table border>
    <tr>
        <td>src</td>
        <td>Path of Image stored in assets folder.</td>
    </tr>
    <tr>
        <td>text</td>
        <td>Text shown under the image</td>
    </tr>
</table>

<br>

## 📁 Section-4 - New Event Banner Section
###  📂 EventBanner.jsx

Create new components for each new event and add that here

<br>

## 📁 Components
###  📂 Footer.jsx 
Your normal footer(responsive too!)
###  📂 NavBar.jsx 
Navbar with buttons to scroll to specific components
###  📂 MusicPlayer.jsx 
Music Player button and text to play music with specified file path
###  📂 sectionHeading.jsx 
Use <code> SectionHeading text1="white-text" text2="custom-color-text" ptext="sub-text"
</code> to create a heading for every section.