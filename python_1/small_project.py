
APP_NAME = "Food Pantry Hub"

print("Welcome to the", APP_NAME + "!")
print("You can find food pantries near you and across the US.")

location = input("What is your city and/or zip code?: ")

while location.strip() == "":
    print("Please enter a valid zip code and/or city name in CT.")
    print("Example: Stamford, CT or 06905")
    location = input("What is your city and/or zip code?: ")


if location.strip() != "":
    print("You entered:", location)
else:
    print("No location entered.")

food_pantries = [
    "Person to Person",
    "The Food Bank of Lower Fairfield County",
    "New Covenant Center"
]

def show_pantries(pantries):
    print("\nYour options are the following food pantries:")
    for pantry in pantries:
        print("-", pantry)


def get_pantry_count(pantries):
    return len(pantries)


food_pantries.append("Community Food Pantry")

show_pantries(food_pantries)

print("Total food pantries:", get_pantry_count(food_pantries))

try:
    with open("food_pantries.txt", "w") as file:
        for pantry in food_pantries:
            file.write(pantry + "\n")

    with open("food_pantries.txt", "r") as file:
        saved_pantries = file.readlines()

except OSError:
    print("There was a problem saving or reading the file.")

else:
    print("\nFood pantry information saved successfully.")
    print("Reading pantry information from the file:")
    for pantry in saved_pantries:
        print(pantry.strip())

finally:
    print("\nThank you for using the Food Pantry Hub!")
