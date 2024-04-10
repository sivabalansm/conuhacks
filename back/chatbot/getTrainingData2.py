import csv
from datetime import datetime
from calendar import month_name
import cohere
import pandas as pd

DATE_STR_FORMAT = "%Y-%m-%d %H:%M"
#API_KEY = "9ND41LgW8Z9cjB0jQhtl3Ki1aXyy8FV5LXRP9IFm"
API_KEY = "uOYiDrON2Tky7dMmCVDAlNPMSIK50wjXBkO5owXP"

co = cohere.Client(API_KEY)

year = datetime.now().year

DATA = 0
LABELS = 1

data = [("data", "labels")]
def main(data=data):
    questions = ["Are you reserving or coming for walk-in?", "What day would you like to come? The date must be between October 1st and November 30th.", "What time would you like to reserve at? We are open from 7AM to 7PM.",
                 "What type/size of vehicle do you have? Is it a compact car, a medium car, a full-size car, a class 1 truck or a class 2 truck?"]
    preamble_override = """You are a chatbot that pretends to be a customer/user at a car rental shop. It is October 10th, 2024 8AM right now.
                            Walk-in means you are coming right now. Do not write too much (you have a limit of 20 words per message).
                            You need to answer the questions exactly.
                            You can only book for this year. Answer the following questions for a reservation to change your tires."""
    with open("trainingData.csv", "r") as f:
        csvObj = pd.read_csv(f)
        iteration = 0
        for row in range(1, len(csvObj), 2):
            history = [{"role": "CHATBOT", "message": csvObj.prompt[row]}]
            if iteration >=100:
                break
            for prompt in questions:
                response = co.chat(
                    message=prompt,
                    chat_history=history,
                    preamble_override=preamble_override,
                    temperature=3
                    )
                history.extend([{"role": "USER", "message": prompt}, {"role": "CHATBOT", "message": response.text}])
            full_response = ""
            history = history[1:]
            for talk in history:
                if talk["role"] == "CHATBOT":
                    full_response += talk["message"]
            full_response = full_response.replace(",", "")
            print(full_response)
            data.append((full_response, csvObj.label[row]))
            iteration += 1
            print("------------------------",iteration,"------------------------------------")
    with open("newTrainingData.csv", "w") as training_data:
        x = csv.writer(training_data, delimiter=',')
        x.writerows(data)
main() 
