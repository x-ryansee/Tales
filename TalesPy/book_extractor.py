import requests
from bs4 import BeautifulSoup

def extract_book_text(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    # Extract the content of the book
    # Add your code here to extract the relevant data

    # Example: Returning the book content
    book_content = soup.find("div", class_="book-content")
    if book_content:
        return book_content.get_text()
    
    return ""

def extract_alices_adventures_in_wonderland():
    url = "https://www.gutenberg.org/cache/epub/11/pg11-images.html"
    return extract_book_text(url)

def extract_the_great_gatsby():
    url = "https://www.gutenberg.org/cache/epub/64317/pg64317-images.html"
    return extract_book_text(url)

def extract_the_adventures_of_roderick_random():
    url = "https://www.gutenberg.org/cache/epub/4085/pg4085-images.html"
    return extract_book_text(url)

def extract_the_adventures_of_sherlock_holmes():
    url = "https://www.gutenberg.org/cache/epub/1661/pg1661-images.html"
    return extract_book_text(url)

# Call the functions to extract the respective books
alice_text = extract_alices_adventures_in_wonderland()
gatsby_text = extract_the_great_gatsby()
roderick_random_text = extract_the_adventures_of_roderick_random()
sherlock_holmes_text = extract_the_adventures_of_sherlock_holmes()
