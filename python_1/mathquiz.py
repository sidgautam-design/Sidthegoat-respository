import random

def generate_problem():
    """Generate a challenging math problem with integers only."""
    operators = ['+', '-', '*', '/']
    operator = random.choice(operators)
    num1 = random.randint(10, 50)  # Larger integers for difficulty
    num2 = random.randint(2, 10)   # Manageable numbers for division

    # Ensure division results in an integer
    if operator == '/':
        num1 = num1 * num2  # Make num1 divisible by num2

    problem = f"{num1} {operator} {num2}"
    answer = eval(problem)  # Calculate the correct answer
    return problem, int(answer)  # Ensure answer is an integer for division

def math_quiz():
    print("Welcome to the Math Quiz Game!")
    print("RULES:")
    print("- NO CALCULATORS ALLOWED!")
    print("- You may use scrap paper to solve the problems.")
    print("\nPress 'Enter' to start the quiz.")
    input()  # Wait for the user to start
    
    score = 0
    total_questions = 10

    for question_number in range(1, total_questions + 1):
        problem, correct_answer = generate_problem()
        print(f"\nQuestion {question_number}: Solve {problem}")
        
        attempts = 2  # Allow one retake
        while attempts > 0:
            try:
                user_answer = int(input("Your answer: "))
                if user_answer == correct_answer:
                    print("Correct! Moving to the next question.")
                    score += 1
                    break
                else:
                    attempts -= 1
                    if attempts > 0:
                        print("Incorrect. Try again.")
                    else:
                        print("Incorrect. The quiz will restart.")
                        return math_quiz()  # Restart the quiz
            except ValueError:
                print("Invalid input. Please enter an integer.")
    
    # Final Results
    print("\nQuiz complete!")
    if score == total_questions:
        print("Congratulations! You scored 10/10!")
    else:
        print(f"Good Effort! You scored {score}/10.")

# Run the quiz
if __name__ == "__main__":
    math_quiz()
