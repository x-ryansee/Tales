from flask import Flask, jsonify, request
from story_generation import generate_story
from book_extractor import (
    extract_alices_adventures_in_wonderland,
    extract_the_great_gatsby,
    extract_the_adventures_of_roderick_random,
    extract_the_adventures_of_sherlock_holmes
)

app = Flask(__name__)

# Initial values for themes, characters, and locations
themes = ['Sci-Fi', 'Fairy Tale', 'Poetry', 'Fable', 'Adventure', 'Mystery']
characters = ['Character 1', 'Character 2', 'Character 3']
locations = ['Location 1', 'Location 2', 'Location 3']

# Empty lists to store the selected theme, character, and location
selected_theme = []
selected_characters = []
selected_location = []

# Route for the root URL
@app.route('/')
def home():
    return "Welcome to the TalesPy API!"

# Route to retrieve the selected theme
@app.route('/themes', methods=['GET'])
def get_themes():
    return jsonify(themes)

# Route to retrieve the selected characters
@app.route('/characters', methods=['GET'])
def get_characters():
    return jsonify(characters)

# Route to retrieve the selected location
@app.route('/locations', methods=['GET'])
def get_locations():
    return jsonify(locations)

# Route to save the selected theme, characters, and location and generate a story
@app.route('/stories', methods=['POST'])
def create_story():
    # Get the story details from the request body
    story = request.json
    theme = story.get('theme')
    characters = story.get('characters')
    location = story.get('location')

    # Save the story details
    selected_theme.append(theme)
    selected_characters.extend(characters)
    selected_location.append(location)

    # Generate the story based on the selected theme, characters, and location
    generated_story = generate_story(theme, characters, location)

    # Return the generated story as the response
    return jsonify({'story': generated_story})

if __name__ == '__main__':
    app.run()
