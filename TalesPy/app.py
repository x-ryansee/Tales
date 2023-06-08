from flask import Flask, jsonify, request

app = Flask(__name__)

# Empty lists to store the selected theme, character, and location
selected_theme = []
selected_characters = []
selected_location = []

# Route to retrieve the data
@app.route('/themes', methods=['GET'])
def get_themes():
    return jsonify(selected_theme)

@app.route('/characters', methods=['GET'])
def get_characters():
    return jsonify(selected_characters)

@app.route('/locations', methods=['GET'])
def get_locations():
    return jsonify(selected_location)

# Route to save the selected theme, character, and location
@app.route('/stories', methods=['POST'])
def save_story():
    # Get the story details from the request body
    story = request.json
    theme = story.get('theme')
    character = story.get('character')
    location = story.get('location')

    # Save the selected theme, character, and location to the respective lists
    selected_theme.append(theme)
    selected_characters.append(character)
    selected_location.append(location)

    # Return a response indicating successful saving of the story details
    return jsonify({'message': 'Story details saved successfully'})

if __name__ == '__main__':
    app.run()
