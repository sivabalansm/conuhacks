import cohere
import datetime
import csv
import json

API_KEY = "9ND41LgW8Z9cjB0jQhtl3Ki1aXyy8FV5LXRP9IFm"
co = cohere.Client(API_KEY)

"""prompts = input("You: ")
while prompts:
    response = co.generate(
        prompt = prompts
    )
    print("Cohere bot:", response.generations[0].text)
    prompts = input("You: ")"""

year = datetime.date.today().year

history = [{"role":"System", "message":"""Customers can only book for this year. If no year is given, assume that the customers are booking for the correct year.
                    The date has to be between October 1st and November 30th, and the time has to be between 7AM to 7PM.
                    Compact, medium and full-size cars need 30 min appointments. Class 1 Trucks need 1 hour. Class 2 Trucks need 2 hours."""}]
preamble_override = """You are a chatbot that takes reservation information that only takes month, day, hour, minute and car type information.
                    It is currently year {}. Do not ask for any other information.""".format(year)

def evaluate(chat_history):
    information = co.summarize(
        text=chat_history,
        length='short',
        extractiveness='auto',
        temperature=0,
        additional_command="""Generate a summary of the appointment with exactly this format (month in numbers, and hour in 24 hour clock system): Month-Day--Hour:Minute--Car type."""
    )
    return information.summary

while True:
    
    prompts = input("You: ")
    if not prompts:
        print("\nEnding chat.")
        break
    
    response = co.chat(
        chat_history = history,
        message = prompts,
        preamble_override = preamble_override,
        stream = True,
        temperature = 0
    )
    botResponse = ""
    print("Cohere bot: ", end="")
    for event in response:
        if event.event_type == "text-generation":   
            print(event.text, end='')
            botResponse += event.text
    print('\n')

    history.extend([{"role": "USER", "message": prompts},
                    {"role": "CHATBOT", "message": botResponse}])
    #print("Chatbot:", response.text)

chat_history = ""
for loop in history:
    chat_history += "{}: {}; ".format(loop["role"], loop["message"])
while len(chat_history) <= 250:
    chat_history = " " + chat_history
print(evaluate(chat_history))
    