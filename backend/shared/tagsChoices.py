from django.db import models

# Enum for predefined tags
class TagChoices(models.TextChoices):
    # Technology & Development
    AI = 'AI', 'Artificial Intelligence'
    ML = 'ML', 'Machine Learning'
    DEEP_LEARNING = 'Deep Learning', 'Deep Learning'
    DATA_SCIENCE = 'Data Science', 'Data Science'
    BIG_DATA = 'Big Data', 'Big Data'
    CYBERSECURITY = 'Cybersecurity', 'Cybersecurity'
    BLOCKCHAIN = 'Blockchain', 'Blockchain'
    CLOUD_COMPUTING = 'Cloud Computing', 'Cloud Computing'
    DEVOPS = 'DevOps', 'DevOps'
    IOT = 'IoT', 'Internet of Things'
    AR_VR = 'AR/VR', 'Augmented & Virtual Reality'
    WEB_DEV = 'Web Development', 'Web Development'
    MOBILE_DEV = 'Mobile Development', 'Mobile Development'
    GAME_DEV = 'Game Development', 'Game Development'
    NETWORKING = 'Networking', 'Networking'
    EMBEDDED_SYSTEMS = 'Embedded Systems', 'Embedded Systems'
    SOFTWARE_ENGINEERING = 'Software Engineering', 'Software Engineering'
    DATABASES = 'Databases', 'Databases'
    CRYPTOGRAPHY = 'Cryptography', 'Cryptography'
    COMPUTER_VISION = 'Computer Vision', 'Computer Vision'
    NLP = 'NLP', 'Natural Language Processing'
    UI_UX = 'UI/UX', 'User Experience & Design'
    OPEN_SOURCE = 'Open Source', 'Open Source'
    
    # Science & Engineering
    PHYSICS = 'Physics', 'Physics'
    CHEMISTRY = 'Chemistry', 'Chemistry'
    BIOLOGY = 'Biology', 'Biology'
    MATHEMATICS = 'Mathematics', 'Mathematics'
    AEROSPACE = 'Aerospace', 'Aerospace Engineering'
    ROBOTICS = 'Robotics', 'Robotics'
    ELECTRONICS = 'Electronics', 'Electronics'
    MECHANICAL_ENGINEERING = 'Mechanical Engineering', 'Mechanical Engineering'
    CIVIL_ENGINEERING = 'Civil Engineering', 'Civil Engineering'
    BIOTECHNOLOGY = 'Biotechnology', 'Biotechnology'
    ENVIRONMENTAL_SCIENCE = 'Environmental Science', 'Environmental Science'
    ASTRONOMY = 'Astronomy', 'Astronomy'
    GEOLOGY = 'Geology', 'Geology'
    
    # Business & Economics
    BUSINESS = 'Business', 'Business'
    ENTREPRENEURSHIP = 'Entrepreneurship', 'Entrepreneurship'
    STARTUPS = 'Startups', 'Startups'
    FINANCE = 'Finance', 'Finance'
    ECONOMICS = 'Economics', 'Economics'
    MARKETING = 'Marketing', 'Marketing'
    INVESTING = 'Investing', 'Investing'
    CRYPTOCURRENCY = 'Cryptocurrency', 'Cryptocurrency'
    ECOMMERCE = 'E-Commerce', 'E-Commerce'
    STOCK_MARKET = 'Stock Market', 'Stock Market'
    PRODUCT_MANAGEMENT = 'Product Management', 'Product Management'
    SALES = 'Sales', 'Sales'
    LEADERSHIP = 'Leadership', 'Leadership'
    HUMAN_RESOURCES = 'HR', 'Human Resources'
    
    # Arts & Humanities
    PHILOSOPHY = 'Philosophy', 'Philosophy'
    HISTORY = 'History', 'History'
    LITERATURE = 'Literature', 'Literature'
    MUSIC = 'Music', 'Music'
    VISUAL_ARTS = 'Visual Arts', 'Visual Arts'
    PHOTOGRAPHY = 'Photography', 'Photography'
    FILM = 'Film', 'Film'
    THEATER = 'Theater', 'Theater'
    ARCHITECTURE = 'Architecture', 'Architecture'
    DESIGN = 'Design', 'Design'
    WRITING = 'Writing', 'Writing'
    POETRY = 'Poetry', 'Poetry'
    PSYCHOLOGY = 'Psychology', 'Psychology'
    
    # Health & Lifestyle
    HEALTHCARE = 'Healthcare', 'Healthcare'
    MEDICINE = 'Medicine', 'Medicine'
    MENTAL_HEALTH = 'Mental Health', 'Mental Health'
    FITNESS = 'Fitness', 'Fitness'
    NUTRITION = 'Nutrition', 'Nutrition'
    SPORTS = 'Sports', 'Sports'
    YOGA = 'Yoga', 'Yoga'
    SELF_IMPROVEMENT = 'Self Improvement', 'Self Improvement'
    TRAVEL = 'Travel', 'Travel'
    CULINARY_ARTS = 'Culinary Arts', 'Culinary Arts'
    
    # Social & Political Topics
    POLITICS = 'Politics', 'Politics'
    SOCIAL_JUSTICE = 'Social Justice', 'Social Justice'
    ENVIRONMENTALISM = 'Environmentalism', 'Environmentalism'
    CLIMATE_CHANGE = 'Climate Change', 'Climate Change'
    EDUCATION = 'Education', 'Education'
    LAW = 'Law', 'Law'
    ETHICS = 'Ethics', 'Ethics'
    
    # Miscellaneous
    MEMES = 'Memes', 'Memes'
    CARS = 'Cars', 'Cars'
    ANIME = 'Anime', 'Anime'
    GAMING = 'Gaming', 'Gaming'
    ESPORTS = 'Esports', 'Esports'
    DIY = 'DIY', 'DIY & Crafts'
    HACKING = 'Hacking', 'Hacking'
    SPACE = 'Space', 'Space Exploration'
    SCIENCE_FICTION = 'Science Fiction', 'Science Fiction'
    FUTURE_TECH = 'Future Tech', 'Future Technologies'
