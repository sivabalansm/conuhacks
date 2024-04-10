import csv
from datetime import datetime
from calendar import month_name
import cohere

DATE_STR_FORMAT = "%Y-%m-%d %H:%M"

API_KEY = "9ND41LgW8Z9cjB0jQhtl3Ki1aXyy8FV5LXRP9IFm"
co = cohere.Client(API_KEY)

year = datetime.now().year

history = []
preamble_override = """You are a chatbot that takes reservation information that only takes month, day, hour, minute and car type information.
                    It is currently year {}. Do not ask for any other information.Customers can only book for this year. If no year is given, assume that the customers are booking for the correct year.
                    The date has to be between October 1st and November 30th, and the time has to be between 7AM to 7PM.
                    Compact, medium and full-size cars need 30 min appointments. Class 1 Trucks need 1 hour. Class 2 Trucks need 2 hours.""".format(year)


REGISTRATION_TIME = 0
PARK_TIME         = 1
CAR_TYPE          = 2


data = [("date", "time", "car", "answerDate")]
month = {1:"January", 2: "February", 3: "March", 4: "April", 5: "May", 6:"Juin", 7:"July", 8:"August",9:"September", 10:"October", 11:"November", 12:"December"}

def getDate(date, training=True):
    dateObj = datetime.strptime(date, DATE_STR_FORMAT)
    if training:
        return (str(dateObj.day).zfill(2)+ " " + month[dateObj.month])
    else:
        return (month[dateObj.month]+ "-" + str(dateObj.day).zfill(2))

def getTime(date):
    dateObj = datetime.strptime(date, DATE_STR_FORMAT)
    return (str(dateObj.hour).zfill(2) + ":" + str(dateObj.minute).zfill(2))

def main():
    with open("datafile.csv", "r") as f:
        csvObj = csv.reader(f, delimiter=",")
        for row in csvObj:
            x_park_date    = getDate(row[PARK_TIME])
            x_park_time    = getTime(row[PARK_TIME])
            x_car_type     = row[CAR_TYPE]
            
            y_park_date    = getDate(row[PARK_TIME], training=False)
            data.append((str(x_park_date), str(x_park_time), str(x_car_type), str(y_park_date)))
    with open("newTrainingData.csv", "a") as training_data:
        x = csv.writer(training_data, delimiter=',')
        for loop in data:
            prompts = "I am reserving for {} at {} with a {}.".format(loop[0], loop[1], loop[2])
            response = co.chat(
                message = prompts,
                preamble_override = preamble_override,
                temperature = 0
            )
            print(response.text)
            history.append("User: " + prompts + " Chatbot"+ response.text)
            print("\n ----------------------------------- \n")
        
        for loop in history:
            x.writerow([history[loop], "{}--{}-{}".format(loop[3], loop[1], loop[2])])
main() 
